#!/bin/bash

# Check if figlet and lolcat are installed
if ! command -v figlet &> /dev/null || ! command -v lolcat &> /dev/null
then
    echo "Please install figlet and lolcat to run this script:"
    echo "  sudo apt install figlet"
    echo "  gem install lolcat"
    exit
fi

# Show banner
clear
figlet "Hello From" | lolcat
figlet "Mrityunjay" | lolcat
figlet "Srivastava" | lolcat

echo "" | lolcat
echo "✨ Welcome to my world ✨" | lolcat
echo "" | lolcat
