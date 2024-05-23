````markdown
# IP Address Tracker

This is a simple web application developed using HTML, SCSS, and Vanilla JavaScript to track IP addresses. The application utilizes the Geolocation API provided by IPify, the Leaflet JavaScript library for mapping, and OpenStreetMap for the map tiles. The purpose of the app is to display the current location of the user's IP address upon initial page load, as well as to retrieve and display location information for manually entered IP addresses or domains.

## Key Features

- Displays the current location of the user's IP address on initial page load.
- Allows users to search for the location of specific IP addresses or domains.
- Shows information such as timezone, location, and ISP (Internet Service Provider).
- Utilizes asynchronous code and DOM manipulation for seamless user experience.

## How It Works

The core logic of the application involves sending a request to the IPify API to retrieve geolocation data based on the provided IP address or domain. Once the data is received, it is processed to extract latitude and longitude coordinates. These coordinates are then used to render the location on the map using the Leaflet JavaScript library.

## Getting Started

To run the code, follow these simple steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Open the `index.html` file in your web browser.

That's it! There are no additional dependencies associated with this code, making it easy to set up and run.

## Acknowledgements

This project was completed as a challenge by Frontend Mentor, helping to improve understanding of asynchronous code, DOM manipulation, and integration with third-party APIs.

## Author

Oluwalolope Adeleye

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use and modify the code as needed.
````
