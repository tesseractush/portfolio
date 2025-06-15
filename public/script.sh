#!/bin/bash

# ANSI colors
CYAN='\033[1;36m'; MAGENTA='\033[1;35m'; YELLOW='\033[1;33m'; Green='\e[42m\e[38;5;32m]';
BOLD='\033[1m'; RESET='\033[0m'

# Clear
clear
color1="\e[49m\e[38;5;52m"
color2="\e[49m\e[38;5;88m"
color3="\e[49m\e[38;5;124m"
color4="\e[49m\e[38;5;160m"
color5="\e[49m\e[38;5;196m"
color6="\e[49m\e[38;5;203m"
color7="\e[49m\e[38;5;210m"
color8="\e[49m\e[38;5;217m"
color9="\e[49m\e[38;5;224m"
color0="\e[49m\e[38;5;255m"

                                                  
printf "${color0}                                  ████████████████████████████████▒     ${reset}\n"
printf "${color0}                                █████                               █     ${reset}\n"
printf "${color0}                             ████████                               █     ${reset}\n"
printf "${color0}                             ████████     ████                      █     ${reset}\n"
printf "${color0}                             ████████   █████████                   █     ${reset}\n"
printf "${color0}                             ████████    ██▒██                      █     ${reset}\n"
printf "${color0}                             ████████    █████                      █     ${reset}\n"
printf "${color0}                             ████████    ██▓██                      █     ${reset}\n"
printf "${color0}                             ████████    ██  █ ██                   █     ${reset}\n"
printf "${color0}                             ████████    ██   ████                  █     ${reset}\n"
printf "${color0}                             ████████     ███████  █████████████    █     ${reset}\n"
printf "${color0}                             ████████                               █     ${reset}\n"
printf "${color0}                             ████████                               █     ${reset}\n"
printf "${color0}                             ████████                               █     ${reset}\n"
printf "${color0}                             ███████████████████████████████████████      ${reset}\n"
printf "${color0}                             ██████████████████████████████████           ${reset}\n"
                                                  
                                                  
                                                  
printf "\n\n\n"                                            


printf "${color2}▄▄▄█████▓ ▓█████  ██████   ██████  ▓█████ ██▀███   ▄▄▄       ▄████▄ ▄▄▄█████▓ █    ██   ██████   ██░ ██ ${reset}\n"
printf "${color2}▓  ██▒ ▓▒ ▓█   ▀▒██    ▒ ▒██    ▒  ▓█   ▀▓██ ▒ ██▒▒████▄    ▒██▀ ▀█ ▓  ██▒ ▓▒ ██  ▓██▒▒██    ▒ ▒▓██░ ██ ${reset}\n"
printf "${color3}▒ ▓██░ ▒░ ▒███  ░ ▓██▄   ░ ▓██▄    ▒███  ▓██ ░▄█ ▒▒██  ▀█▄  ▒▓█    ▄▒ ▓██░ ▒░▓██  ▒██░░ ▓██▄   ░▒██▀▀██ ${reset}\n"
printf "${color4}░ ▓██▓ ░  ▒▓█  ▄  ▒   ██▒  ▒   ██▒ ▒▓█  ▄▒██▀▀█▄  ░██▄▄▄▄██▒▒▓▓▄ ▄██░ ▓██▓ ░ ▓▓█  ░██░  ▒   ██▒ ░▓█ ░██ ${reset}\n"
printf "${color5}  ▒██▒ ░ ▒░▒████▒██████▒▒▒██████▒▒▒░▒████░██▓ ▒██▒▒▓█   ▓██░▒ ▓███▀   ▒██▒ ░ ▒▒█████▓ ▒██████▒▒ ░▓█▒░██▓${reset}\n"
printf "${color6}  ▒ ░░   ░░░ ▒░ ▒ ▒▓▒ ▒ ░▒ ▒▓▒ ▒ ░░░░ ▒░ ░ ▒▓ ░▒▓░░▒▒   ▓▒█░░ ░▒ ▒    ▒ ░░   ░▒▓▒ ▒ ▒ ▒ ▒▓▒ ▒ ░  ▒ ░░▒░▒${reset}\n"
printf "${color7}    ░    ░ ░ ░  ░ ░▒  ░ ░░ ░▒  ░ ░░ ░ ░    ░▒ ░ ▒ ░ ░   ▒▒    ░  ▒      ░    ░░▒░ ░ ░ ░ ░▒  ░ ░  ▒ ░▒░ ░${reset}\n"
printf "${color8}  ░ ░        ░  ░  ░  ░  ░  ░  ░      ░    ░░   ░   ░   ▒   ░         ░       ░░░ ░ ░ ░  ░  ░    ░  ░░ ░${reset}\n"
printf "${color9}         ░   ░        ░        ░  ░   ░     ░           ░   ░ ░                 ░           ░    ░  ░  ░${reset}\n"

                                                                          



# 🎉 Banner
echo -e "${MAGENTA}┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓${RESET}"
echo -e "${MAGENTA}┃${RESET}  ${BOLD}${CYAN}Hello from${RESET} ${YELLOW}Mrityunjay Srivastava 👨‍💻${RESET}  ${MAGENTA}┃${RESET}"
echo -e "${MAGENTA}┃${RESET}    ${CYAN}✨ Welcome to my world 🌍 ✨${RESET}     ${MAGENTA}┃${RESET}"
echo -e "${MAGENTA}┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛${RESET}"
echo ""


# 📜 Quote of the Day
QUOTE_JSON=$(curl -s https://zenquotes.io/api/today)
QUOTE=$(echo "$QUOTE_JSON" | jq -r '.[0].q')
AUTHOR=$(echo "$QUOTE_JSON" | jq -r '.[0].a')
echo -e "${CYAN}“${QUOTE}”${RESET}"
echo -e "${YELLOW}— ${AUTHOR}${RESET}"
echo ""



# 🔗 Footer
echo -e "${YELLOW}🔗 Visit: https://tesseractush.in${RESET}"

echo -e "${CYAN}🚀 Explore projects, code & thoughts.${RESET}"
echo ""

echo -e "${MAGENTA}Legend!${RESET}"
echo -e "${GREEN}curl${RESET}" "${YELLOW} tesseractush.in/projects.sh💻✨${RESET}"
