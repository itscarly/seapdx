#!/bin/zsh
set -eu

PROJECT_DIR="/Users/kicker/Downloads/codexproject"
LABEL="com.kicker.codexproject.localhost"
SOURCE_PLIST="${PROJECT_DIR}/automation/${LABEL}.plist"
SUPPORT_DIR="${HOME}/Library/Application Support/codexproject-localhost"
SUPPORT_SCRIPT="${SUPPORT_DIR}/ensure-localhost.sh"
TARGET_DIR="${HOME}/Library/LaunchAgents"
TARGET_PLIST="${TARGET_DIR}/${LABEL}.plist"

mkdir -p "$SUPPORT_DIR"
mkdir -p "$TARGET_DIR"
cp "${PROJECT_DIR}/scripts/ensure-localhost.sh" "$SUPPORT_SCRIPT"
cp "$SOURCE_PLIST" "$TARGET_PLIST"
chmod 644 "$TARGET_PLIST"
chmod +x "${PROJECT_DIR}/scripts/ensure-localhost.sh"
chmod +x "$SUPPORT_SCRIPT"
xattr -d com.apple.quarantine "$TARGET_PLIST" >/dev/null 2>&1 || true
xattr -d com.apple.provenance "$TARGET_PLIST" >/dev/null 2>&1 || true
xattr -d com.apple.quarantine "${PROJECT_DIR}/scripts/ensure-localhost.sh" >/dev/null 2>&1 || true
xattr -d com.apple.provenance "${PROJECT_DIR}/scripts/ensure-localhost.sh" >/dev/null 2>&1 || true
xattr -d com.apple.quarantine "$SUPPORT_SCRIPT" >/dev/null 2>&1 || true
xattr -d com.apple.provenance "$SUPPORT_SCRIPT" >/dev/null 2>&1 || true

launchctl bootout "gui/$(id -u)" "$TARGET_PLIST" >/dev/null 2>&1 || true
launchctl bootstrap "gui/$(id -u)" "$TARGET_PLIST"
launchctl kickstart -k "gui/$(id -u)/${LABEL}"

echo "Localhost auto-restart is installed."
echo "Open http://localhost:4173/ after a few seconds."
echo "Health log: ${PROJECT_DIR}/logs/localhost-health.log"
