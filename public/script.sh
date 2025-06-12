#!/bin/bash

# ANSI colors
CYAN='\033[1;36m'
MAGENTA='\033[1;35m'
YELLOW='\033[1;33m'
BOLD='\033[1m'
RESET='\033[0m'

# Clear terminal
clear

# Fancy Header
echo -e "${MAGENTA}┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓${RESET}"
echo -e "${MAGENTA}┃${RESET}  ${BOLD}${CYAN}Hello from${RESET} ${YELLOW}Mrityunjay Srivastava 👨‍💻${RESET}  ${MAGENTA}┃${RESET}"
echo -e "${MAGENTA}┃${RESET}    ${CYAN}✨ Welcome to my world 🌍 ✨${RESET}     ${MAGENTA}┃${RESET}"
echo -e "${MAGENTA}┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛${RESET}"

echo ""

# Fetch "Quote of the Day"
QUOTE_JSON=$(curl -s https://zenquotes.io/api/today)

# Parse JSON using shell parameter expansion
QUOTE=$(echo "$QUOTE_JSON" | sed -E 's/.*"q":"([^"]+)".*/\1/')
AUTHOR=$(echo "$QUOTE_JSON" | sed -E 's/.*"a":"([^"]+)".*/\1/')

# Quote Display
echo -e "${CYAN}“${QUOTE}”${RESET}"
echo -e "${YELLOW}— ${AUTHOR}${RESET}"

echo ""
echo -e "${YELLOW}🔗  Visit: https://tesseractush.in${RESET}"
echo -e "${CYAN}🚀  Explore projects, code & thoughts.${RESET}"
echo ""
