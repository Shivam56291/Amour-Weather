# 🌤️ Amour Weather App

A responsive and dynamic weather app that displays real-time weather data for any city using the **AccuWeather API**. Built using **HTML**, **CSS**, **JavaScript**, and **Bootstrap 5** for a clean, modern UI.

---

## 🚀 Live Demo

👉 [View Live App](#) *(replace with your GitHub Pages or Netlify link)*

---

## ✨ Features

- 🔍 Search for any city worldwide  
- 🌞 Dynamic day/night backgrounds  
- 🌦️ Real-time weather data using AccuWeather API  
- 🧭 Weather icon updates based on live conditions  
- 📱 Fully responsive layout with Bootstrap  
- 🧊 Frosted-glass style input and card UI

---

## 🛠️ Tech Stack

- **Frontend**: `HTML`, `CSS`, `JavaScript`, `Bootstrap`
- **API**: `AccuWeather API`

---

## 📁 Project Structure

amour-weather/
│
├── index.html
├── style.css
├── scripts/
│ ├── app.js
│ └── forecast.js
├── images/
│ ├── day.svg
│ └── night.svg
├── icons/
│ └── [weather icons].svg
└── README.md

---

## 🔑 API Key Setup

1. Go to [AccuWeather Developer Portal](https://developer.accuweather.com/)  
2. Create an account and generate an API key  
3. Replace your API key in `forecast.js`:

```javascript
const key = "YOUR_API_KEY_HERE";

