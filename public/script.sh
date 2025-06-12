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
QUOTE_JSON=$(curl -s https://zenquotes.io/api/today)
QUOTE=$(echo "$QUOTE_JSON" | jq -r '.[0].q')
AUTHOR=$(echo "$QUOTE_JSON" | jq -r '.[0].a')
echo -e "${CYAN}“${QUOTE}”${RESET}"
echo -e "${YELLOW}— ${AUTHOR}${RESET}"
echo ""

# 🌠 NASA APOD
APOD=$(curl -s "https://api.nasa.gov/planetary/apod?api_key=ldFpfnT4OXFQ8xtRHsiZXfWdF5k5NQhBsDVCtMC4")
APOD_TITLE=$(echo "$APOD" | jq -r '.title')
APOD_URL=$(echo "$APOD" | jq -r '.url')
echo -e "${CYAN}Today's Astronomy Picture title:${RESET}"
echo -e "${YELLOW}${APOD_TITLE}${RESET}"
echo -e "${CYAN}🖼️ View it here: ${APOD_URL}${RESET}"
echo ""

# 🚀 ISRO Launches
ISRO=$(curl -s https://isro.vercel.app/api/launches)
echo -e "${CYAN}Next ISRO Launches:${RESET}"
echo "$ISRO" | jq -c '.[]' | head -n 3 | while read -r launch; do
  NAME=$(echo "$launch" | jq -r '.name')
  DATE=$(echo "$launch" | jq -r '.date')
  LOCAL_DATE=$(date -d "$DATE" +"%b %d, %Y at %I:%M %p" 2>/dev/null || echo "$DATE")
  echo -e "${YELLOW}- ${NAME} → ${LOCAL_DATE}${RESET}"
done
echo ""

# 📍 Get user location
LOC_JSON=$(curl -s https://ipapi.co/json/)
CITY=$(echo "$LOC_JSON" | jq -r '.city')
LAT=$(echo "$LOC_JSON" | jq -r '.latitude')
LON=$(echo "$LOC_JSON" | jq -r '.longitude')
TZ=$(echo "$LOC_JSON" | jq -r '.timezone')

# 🌤️ Weather
WEATHER=$(curl -s "https://api.open-meteo.com/v1/forecast?latitude=${LAT}&longitude=${LON}&current_weather=true&timezone=${TZ}")
TEMP=$(echo "$WEATHER" | jq -r '.current_weather.temperature')
CODE=$(echo "$WEATHER" | jq -r '.current_weather.weathercode')

echo -e "${CYAN}📍 Location: ${CITY}${RESET}"
echo -e "${CYAN}🌡️ Temperature: ${YELLOW}${TEMP}°C${RESET} • Code: ${YELLOW}${CODE}${RESET}"
echo ""

# 🎶 Background Music Tip
MUSIC_PATH="https://soundcloud.com/gordonstar/hans-zimmer-stay-interstellar-main-theme-gordon-star-rework"
echo -e "${MAGENTA}🎵 Tip: play “S.T.A.Y.” by Hans Zimmer:${RESET}"
if command -v afplay &>/dev/null; then
  echo -e "     afplay \"${MUSIC_PATH}\""
elif command -v mpg123 &>/dev/null; then
  echo -e "     mpg123 \"${MUSIC_PATH}\""
else
  echo -e "${YELLOW}     Install afplay (Mac) or mpg123 (Linux) to play music.${RESET}"
fi
echo ""

# 🔗 Footer
echo -e "${YELLOW}🔗 Visit: https://tesseractush.in${RESET}"
echo -e "${CYAN}🚀 Explore projects, code & thoughts.${RESET}"
echo ""
