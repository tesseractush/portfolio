#!/bin/bash

# Colors
GREEN="\033[1;32m"
CYAN="\033[1;36m"
RED="\033[1;31m"
RESET="\033[0m"

# Function to install figlet and lolcat
install_dependencies() {
  echo -e "${CYAN}Installing missing dependencies...${RESET}"

  # Install figlet
  if ! command -v figlet &>/dev/null; then
    echo -e "${GREEN}Installing figlet...${RESET}"
    sudo apt-get update && sudo apt-get install -y figlet
  fi

  # Install lolcat (via Ruby)
  if ! command -v lolcat &>/dev/null; then
    echo -e "${GREEN}Installing lolcat (requires Ruby)...${RESET}"
    sudo apt-get install -y ruby
    sudo gem install lolcat
  fi
}

# Check for figlet and lolcat
MISSING=0
if ! command -v figlet &>/dev/null; then
  echo -e "${RED}❌ figlet is not installed${RESET}"
  MISSING=1
fi

if ! command -v lolcat &>/dev/null; then
  echo -e "${RED}❌ lolcat is not installed${RESET}"
  MISSING=1
fi

# Prompt to install if missing
if [ "$MISSING" -eq 1 ]; then
  echo ""
  echo -e "${CYAN}Do you want to install missing dependencies? (y/n)${RESET}"
  read -r answer
  if [[ "$answer" =~ ^[Yy]$ ]]; then
    install_dependencies
  else
    echo -e "${RED}Script requires figlet and lolcat. Exiting.${RESET}"
    exit 1
  fi
fi

# Clear screen
clear

# Display banner
figlet "Hello From" | lolcat
figlet "Mrityunjay" | lolcat
figlet "Srivastava" | lolcat

echo "" | lolcat
echo "✨ Welcome to my world ✨" | lolcat
echo "" | lolcat
