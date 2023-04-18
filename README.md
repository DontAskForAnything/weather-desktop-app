# Desktop Weather App
<img src=".github/images/baner.png" alt="Showcase" />

This is a **desktop weather app** built with [Vite](https://vitejs.dev/), [Vue](https://vuejs.org/), and [Electron](https://www.electronjs.org/) that uses the [OpenWeatherMap API](https://openweathermap.org/api) to display weather data. The app has a feature that **changes the background image** based on the time of day, and it **saves the last searched city** for convenience. It is built to work on all major platforms including **Mac, Linux, and Windows**.


## Installation and Configuration

1. Clone the repository and install dependencies:
```bash
git clone https://github.com/DontAskForAnything/weather-desktop-app.git
cd weather-desktop-app
```
2. Install dependencies using npm
```bask
npm install
```
3. Fill in the `.env.example` file located in the frontend folder with your OpenWeatherAPI key and the unit in which you want your weather data to be displayed. Once you've filled in the necessary information, rename the file to `.env`.

4. Build the app:

```bask
npm build
```


## Contributing

All contributions are welcome to this project! If you have any suggestions or find any issues, please feel free to create a new issue or pull request.

Before submitting a pull request, please make sure your code passes the linting tests by running:

```
npm run lint
```
## Disclaimer

This application uses the OpenWeatherMap API to retrieve weather data. The data provided by this API is the property of OpenWeatherMap, and I do not claim ownership of it. This application is not affiliated with OpenWeatherMap, and please refer to their API documentation for terms of use and attribution requirements.
