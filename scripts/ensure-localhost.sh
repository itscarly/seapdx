#!/bin/zsh
set -u

PROJECT_DIR="/Users/kicker/Downloads/codexproject"
PORT="4173"
HEALTH_URL="http://127.0.0.1:${PORT}/"
DASHBOARD_URL="http://127.0.0.1:${PORT}/dashboards/html/index.html"
LOG_DIR="${PROJECT_DIR}/logs"
HEALTH_LOG="${LOG_DIR}/localhost-health.log"
SERVER_LOG="${LOG_DIR}/localhost-server.log"
LOCK_DIR="${LOG_DIR}/localhost-health.lock"

PATH="/usr/local/bin:/opt/homebrew/bin:/usr/bin:/bin:/usr/sbin:/sbin:${PATH:-}"
FOREGROUND="false"

if [ "${1:-}" = "--foreground" ]; then
  FOREGROUND="true"
fi

timestamp() {
  date "+%Y-%m-%d %H:%M:%S"
}

log() {
  mkdir -p "$LOG_DIR"
  printf "[%s] %s\n" "$(timestamp)" "$1" >> "$HEALTH_LOG"
}

is_healthy() {
  /usr/bin/curl --silent --show-error --fail --max-time 5 "$DASHBOARD_URL" >/dev/null 2>&1
}

if is_healthy; then
  log "Local preview is healthy at ${DASHBOARD_URL}."
  exit 0
fi

mkdir -p "$LOG_DIR"

if ! mkdir "$LOCK_DIR" 2>/dev/null; then
  log "Another health check is already running. Skipping this check."
  exit 0
fi

trap 'rmdir "$LOCK_DIR" 2>/dev/null || true' EXIT

if is_healthy; then
  log "Local preview became healthy while waiting for the health-check lock."
  exit 0
fi

if ! command -v npm >/dev/null 2>&1; then
  log "Cannot start local preview because npm was not found on PATH."
  exit 1
fi

if ! command -v python3 >/dev/null 2>&1; then
  log "Cannot start local preview because python3 was not found on PATH."
  exit 1
fi

if /usr/sbin/lsof -nP -iTCP:"$PORT" -sTCP:LISTEN >/dev/null 2>&1; then
  log "Port ${PORT} is in use, but ${DASHBOARD_URL} did not respond. Leaving the existing process in place for manual review."
  exit 1
fi

log "Local preview is down. Starting npm run serve from ${PROJECT_DIR}."

cd "$PROJECT_DIR" || {
  log "Cannot start local preview because project directory is missing: ${PROJECT_DIR}."
  exit 1
}

if [ "$FOREGROUND" = "true" ]; then
  log "Starting local preview in foreground for LaunchAgent ownership with python3 -m http.server ${PORT} --directory ${PROJECT_DIR}."
  rmdir "$LOCK_DIR" 2>/dev/null || true
  trap - EXIT
  exec python3 -m http.server "$PORT" --directory "$PROJECT_DIR" >> "$SERVER_LOG" 2>&1
fi

/usr/bin/nohup npm run serve >> "$SERVER_LOG" 2>&1 &
SERVER_PID="$!"

sleep 3

if is_healthy; then
  log "Started local preview successfully with process id ${SERVER_PID}."
  exit 0
fi

log "Tried to start local preview with process id ${SERVER_PID}, but health check still failed."
exit 1
