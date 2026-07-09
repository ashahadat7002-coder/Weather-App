# 🌤️ Weather App

A simple and responsive weather application built using **HTML5, CSS3, and JavaScript** that provides real-time weather information for any city around the world.

The application fetches live weather data using the **WeatherAPI** and dynamically updates the interface with current temperature, weather conditions, and weather icons.

---

# ✨ Features

## 🌎 City Weather Search

* Search weather information by entering a city name
* Fetch real-time weather data from an external API
* Display weather details dynamically without refreshing the page

---

## 🌡️ Weather Information Display

The application displays:

* 📍 City name
* 🌡️ Current temperature in Celsius
* ☁️ Weather condition
* 🌤️ Weather icon

Example:

```
City: London

Temperature: 18°C

Condition: Cloudy
```

---

# 🛠️ Technologies Used

## Frontend

* HTML5
* CSS3
* JavaScript (ES6)

## API

* WeatherAPI

## Concepts Implemented

* DOM Manipulation
* Fetch API
* Asynchronous JavaScript
* Promises
* JSON Data Handling
* Event Handling
* Responsive Web Design

---

# ⚙️ How It Works

The application follows this workflow:

```
User enters city name

        ↓

JavaScript captures user input

        ↓

Fetch API sends request to WeatherAPI

        ↓

API returns weather data in JSON format

        ↓

JavaScript processes the response

        ↓

Weather information is displayed dynamically
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
```

---

# 🚀 Installation & Usage

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/weather-app.git
```

---

### 2. Navigate into the project folder

```bash
cd weather-app
```

---

### 3. Run the application

Open:

```
index.html
```

in your preferred browser.

---

# 🔑 API Configuration

This project uses WeatherAPI for retrieving live weather information.

To use your own API key:

1. Create an account on WeatherAPI.
2. Generate an API key.
3. Replace the API key inside `script.js`.

Example:

```javascript
fetch(
"https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=" + city
)
```

---

# 🧠 Learning Outcomes

Through this project, I learned:

* How to integrate third-party APIs into frontend applications
* How asynchronous JavaScript works with real-world data
* How to handle JSON responses
* How to update webpage content dynamically
* How to build interactive user interfaces using JavaScript

---

# 🔮 Future Improvements

Possible future enhancements:

* 🌦️ 5-day weather forecast
* 📍 Weather based on user location using Geolocation API
* 🌙 Dark/light theme
* 🌡️ Celsius and Fahrenheit conversion
* 🌅 Dynamic backgrounds based on weather conditions
* 📱 Improved mobile-first UI design

---

# 👨‍💻 Author

**Shahadat Ali**

Computer Science Engineer

Interested in:

* Web Development
* JavaScript
* AI/ML
* Creative Technology

---

# 📄 License

This project is open-source and created for learning and development purposes.
