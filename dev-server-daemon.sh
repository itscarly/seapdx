#!/bin/bash
# Persistent dev server daemon — restarts automatically if killed

REPO_DIR="/Users/kicker/Projects/codexproject"
PID_FILE="$REPO_DIR/.dev-server.pid"
LOG_FILE="$REPO_DIR/logs/dev-server.log"

# Create logs directory if needed
mkdir -p "$REPO_DIR/logs"

# Function to start the server
start_server() {
  cd "$REPO_DIR"
  echo "[$(date)] Starting dev server on port 4173..." >> "$LOG_FILE"
  /usr/bin/python3 -m http.server 4173 --directory "$REPO_DIR" >> "$LOG_FILE" 2>&1 &
  echo $! > "$PID_FILE"
  echo "[$(date)] Dev server started with PID $(cat $PID_FILE)" >> "$LOG_FILE"
}

# Function to check and restart if needed
check_and_restart() {
  if [ ! -f "$PID_FILE" ]; then
    start_server
    return
  fi

  PID=$(cat "$PID_FILE")
  if ! kill -0 "$PID" 2>/dev/null; then
    echo "[$(date)] Dev server (PID $PID) not running, restarting..." >> "$LOG_FILE"
    start_server
  fi
}

# Trap signals for graceful shutdown
trap 'echo "[$(date)] Stopping daemon..." >> "$LOG_FILE"; exit 0' SIGTERM SIGINT

# Start initially
start_server

# Keep checking every 5 seconds
while true; do
  sleep 5
  check_and_restart
done
