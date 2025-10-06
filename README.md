# Tapmaan Weather App

![React](https://img.shields.io/badge/React-18.x-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)
![TanStack Query](https://img.shields.io/badge/TanStack_Query-5.x-FF4154?logo=reactquery&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-38B2AC?logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?logo=vite&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green.svg)

**Tapmaan** is a full-featured weather forecast application built using **ReactJS**, **TypeScript**, **ShadCN UI**, and **TanStack Query**. It allows users to view current and forecasted weather for their location or any city worldwide, with a modern and responsive interface and advanced features like search history and favorites.

---

## ✨ Features

- 🌍 **Current Location Weather:** View weather data for your current location with geolocation detection.
- 🔍 **Global Weather Search:** Search for weather in any city worldwide using OpenWeather API and city geocoding.
- 📊 **24-Hour Temperature Chart:** Graphical display of temperature changes for the next 24 hours using Recharts.
- 📅 **5-Day Forecast:** Extended weather data including humidity, wind speed, sunrise/sunset time, and pressure.
- ⭐ **Search History & Favorites:** Save searched cities for quick future access and mark favorite locations using TanStack Query mutations.
- 🌓 **Light/Dark Mode:** Toggle between light and dark themes with state persistence and smooth transitions.
- 📱 **Responsive UI:** Fully adapts to mobile, tablet, and desktop devices, styled with ShadCN UI and Tailwind CSS.


---

## 🛠️ Technologies Used

- **ReactJS** (with TypeScript)
- **ShadCN UI** (component library based on Tailwind CSS)
- **TanStack Query** (state management and caching)
- **OpenWeatherMap API** (weather and geolocation data)
- **Recharts** (graphical representation of temperature trends)
- **Vite** (fast build tool and dev server)


---

## 📦 Installation

1. **Clone the repository:**
```bash
git clone https://github.com/Tikesh097/Project--Weather-App
cd Project--Weather-App
```

2. **Install dependencies:**
```bash
npm install
```

3. **Set up environment variables:**
   - Create a `.env` file in the project root.
   - Add your OpenWeatherMap API key:
```bash
VITE_OPEN_WEATHER_API_KEY=your_api_key_here
```

4. **Start the development server:**
```bash
npm run dev
```

5. **Access the app:**
   - Open `http://localhost:5173` in your browser.

---

## 🚀 Usage

- ✅ Allow location access to view local weather.
- 🔎 Use the search bar to find weather information for cities worldwide.
- ⭐ Add cities to your favorites for quick access.
- 🌓 Switch between light and dark modes using the theme toggle.
- 📊 View interactive temperature charts for hourly and daily forecasts.
- 🌐 Deploy to production to share your app (see Deployment section).

---

## 🌐 Deployment

1. **Build the app for production:**
```bash
npm run build
```

2. **Upload the contents of the `dist` folder** to your web hosting provider.

---

## 📁 Folder Structure

```
/src
  /components - Reusable UI components (Header, Footer, Weather Cards, etc.)
  /hooks      - Custom React hooks (geolocation, weather API, etc.)
  /pages      - Main application pages (Weather Dashboard, City Weather)
  /types      - TypeScript interfaces and types
  /api        - API configuration and endpoint wrappers
```

---

## 🤝 Contributing

Contributions are welcome! Open issues or submit pull requests for new features, bug fixes, or documentation improvements.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - feel free to use it for personal or commercial purposes. Attribution is appreciated.

---

## 🙏 Credits

Developed following best practices and inspired by modern React, TypeScript, and UI patterns. Special thanks to [Roadside Coder] for guidance and inspiration.

---

## 📸 Screenshots

![Climate Weather App Dashboard](https://github.com/Tikesh097/Project--Weather-App/blob/main/public/Screenshot1.png)


---

## 🔗 Links

- **Deployment Link :** https://project-weather-app-blond.vercel.app/ 
- **API Documentation:** [OpenWeatherMap API](https://openweathermap.org/api)
- **ShadCN UI:** [https://ui.shadcn.com](https://ui.shadcn.com)

---

**Made with ❤️ and TypeScript**