#!/bin/bash

# ANSI colors
CYAN='\033[1;36m'; MAGENTA='\033[1;35m'; YELLOW='\033[1;33m'
BOLD='\033[1m'; RESET='\033[0m'

# Clear
clear

# 🎉 Banner
echo -e "${MAGENTA}┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓${RESET}"
echo -e "${MAGENTA}┃${RESET}  ${BOLD}${CYAN}Hello from${RESET} ${YELLOW}Mrityunjay Srivastava 👨‍💻${RESET}  ${MAGENTA}┃${RESET}"
echo -e "${MAGENTA}┃${RESET}    ${CYAN}✨ Welcome to my world 🌍 ✨${RESET}     ${MAGENTA}┃${RESET}"
echo -e "${MAGENTA}┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛${RESET}"
echo ""

# 📜 Quote of the Day
QUOTE_RAW=$(curl -s https://zenquotes.io/api/today)
QUOTE=$(echo "$QUOTE_RAW" | sed -En 's/.*"q":"([^"]+)".*/\1/p')
AUTHOR=$(echo "$QUOTE_RAW" | sed -En 's/.*"a":"([^"]+)".*/\1/p')
echo -e "${CYAN}“${QUOTE}”${RESET}"
echo -e "${YELLOW}— ${AUTHOR}${RESET}"
echo ""

# 🌠 NASA APOD title + clickable link
APOD=$(curl -s "https://api.nasa.gov/planetary/apod?api_key=ldFpfnT4OXFQ8xtRHsiZXfWdF5k5NQhBsDVCtMC4")
APOD_TITLE=$(echo "$APOD" | sed -En 's/.*"title":"([^"]+)".*/\1/p')
APOD_URL=$(echo "$APOD" | sed -En 's/.*"url":"([^"]+)".*/\1/p')
echo -e "${CYAN}Today's Astronomy Picture title:${RESET}"
echo -e "${YELLOW}${APOD_TITLE}${RESET}"
echo -e "${CYAN}🖼️ View it here: ${APOD_URL}${RESET}"
echo ""

# 🚀 Upcoming ISRO launches (next 3)
ISRO=$(curl -s https://isro.vercel.app/api/launches)
echo -e "${CYAN}Next ISRO Launches:${RESET}"
echo "$ISRO" | sed -En 's/\},\{/\n/g' | head -n 3 | while read -r i; do
  NAME=$(echo "$i" | sed -En 's/.*"name":"([^"]+)".*/\1/p')
  DATE=$(echo "$i" | sed -En 's/.*"date":"([^"]+)".*/\1/p')
  # convert to local time
  LOCAL_DATE=$(date -d "$DATE" +"%b %d, %Y at %I:%M %p")
  echo -e "${YELLOW}- ${NAME} → ${LOCAL_DATE}${RESET}"
done
echo ""


# 📍 Get user location from IP
LOC_JSON=$(curl -s https://ipapi.co/json/)
CITY=$(echo "$LOC_JSON" | sed -En 's/.*"city":"([^"]+)".*/\1/p')
LAT=$(echo "$LOC_JSON" | sed -En 's/.*"latitude":([0-9.]+).*/\1/p')
LON=$(echo "$LOC_JSON" | sed -En 's/.*"longitude":([0-9.-]+).*/\1/p')
TZ=$(echo "$LOC_JSON" | sed -En 's/.*"timezone":"([^"]+)".*/\1/p')

# 🌤️ Fetch current weather via Open-Meteo
WEATHER_JSON=$(curl -s "https://api.open-meteo.com/v1/forecast?latitude=$LAT&longitude=$LON&current_weather=true&timezone=$TZ")
TEMP=$(echo "$WEATHER_JSON" | sed -En 's/.*"temperature":([0-9.]+).*/\1/p')
CODE=$(echo "$WEATHER_JSON" | sed -En 's/.*"weathercode":([0-9]+).*/\1/p')

echo -e "${CYAN}📍 Location: ${CITY}${RESET}"
echo -e "${CYAN}🌡️ Temperature: ${YELLOW}${TEMP}°C${RESET} • Code: ${YELLOW}${CODE}${RESET}"
echo ""

# 🎶 Background music note
echo -e "${MAGENTA}🎵 Tip: play “S.T.A.Y.” by Hans Zimmer:"
echo -e "     afplay <url-to-local-file>/STAY.mp3   or   mpg123 STAY.mp3${RESET}"
echo ""

# 🔗 Link & footer
echo -e "${YELLOW}🔗 Visit: https://tesseractush.in${RESET}"
echo -e "${CYAN}🚀 Explore projects, code & thoughts.${RESET}"
echo ""
