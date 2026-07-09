README.md
# 🌤️ Weather App

A simple and responsive weather application built using **HTML, CSS, and JavaScript** that provides real-time weather information for any city around the world.

The application fetches live weather data from the **WeatherAPI** and dynamically displays temperature, weather conditions, and weather icons.

---

# 📸 Preview

(Add your screenshot here)

Example:

![Weather App Screenshot](assets/screenshots/weather-app.png)

---

# ✨ Features

## 🌎 Search Weather

- Search weather information by city name
- Fetch real-time weather data
- Display current weather conditions

---

## 🌡️ Weather Information

Displays:

- City name
- Current temperature
- Weather condition
- Weather icon

Example:

```
City: London

Temperature: 18°C

Condition: Cloudy
```

---

## ⚡ Dynamic Data

The application updates weather information instantly using API requests without refreshing the page.

---

# 🛠️ Technologies Used

## Frontend

- HTML5
- CSS3
- JavaScript (ES6)

## API

- WeatherAPI

## Concepts Implemented

- DOM Manipulation
- Fetch API
- Promises
- JSON Data Handling
- Event Handling
- Responsive Design

---

# ⚙️ How It Works

The application follows this flow:

```
User enters city name

        ↓

JavaScript captures input

        ↓

Fetch API request sent

        ↓

WeatherAPI returns JSON data

        ↓

Data displayed dynamically on webpage
```

---

# 📂 Project Structure

```
Weather-App/

│
├── index.html

├── style.css

├── script.js

├── README.md

└── assets/

    └── screenshots/
```

---

# 🚀 Installation & Usage

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/weather-app.git
```

---

### 2. Open project folder

```bash
cd weather-app
```

---

### 3. Run the application

Open:

```
index.html
```

in your browser.

---

# 🔑 API Configuration

This project uses WeatherAPI.

To use your own API key:

1. Create an account on WeatherAPI.
2. Generate an API key.
3. Replace the existing key in `script.js`.

Example:

```javascript
fetch(
"https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q="+city
)
```

---

# 🧠 Learning Outcomes

Through this project, I learned:

- How to consume external APIs
- Working with asynchronous JavaScript
- Handling JSON responses
- Updating webpage content dynamically
- Creating interactive frontend applications

---

# 🔮 Future Improvements

Planned features:

- 🌦️ 5-day weather forecast
- 📍 Current location weather using Geolocation API
- 🌙 Dark/light mode
- 🌡️ Celsius/Fahrenheit conversion
- 🌅 Dynamic backgrounds based on weather
- 📱 Improved mobile UI

---

# 👨‍💻 Author

**Shahadat Ali**

Computer Science Engineer

Interested in:

- Web Development
- JavaScript
- AI/ML
- Creative Technology

---

# 📄 License

This project is open-source and available for learning purposes.
weather-app
