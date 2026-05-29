# 📚 Odin Library

**Live Demo:** [Odin Library App](https://andrasszentgyorgyi.github.io/odin-library/)

A minimalist, browser-based book tracking application built as part of [The Odin Project's](https://www.theodinproject.com/) JavaScript curriculum. This project demonstrates core proficiency with JavaScript object orientation, array manipulation, dynamic DOM rendering, and client-side storage.

## 🛠️ Tech Stack
* **Frontend:** HTML5, CSS3, Vanilla JavaScript (ES6+)
* **Data Storage:** `Window.localStorage` API

## ✨ Features
* **Library Management:** Users can add new books by entering the title, author, page count, and current reading status into a form.
* **Dynamic DOM Rendering:** The application maps over a JavaScript array and dynamically generates HTML elements (book cards) to display the library.
* **State Toggling:** Users can easily toggle the "Read/Not Read" status of individual books directly from the UI, which updates the underlying data object.
* **Delete Functionality:** Books can be permanently removed from the library. The code links DOM elements to array indices using HTML `data-attributes` for precise deletion.
* **Data Persistence:** The library leverages the browser's `localStorage` to save the user's collection, ensuring no data is lost when the page is refreshed or closed.

## 🧠 Core Concepts Applied
* **Object-Oriented Programming:** Structuring application data using Object Constructors (or ES6 Classes) to cleanly instantiate new Book objects.
* **Array Methods:** Utilizing array looping, mapping, and splicing to manage the application's core state.
* **Event Handling:** Capturing form submissions, preventing default page reloads, and attaching event listeners to dynamically generated UI buttons.
* **JSON Serialization:** Converting JavaScript arrays into JSON strings to interface with `localStorage`, and parsing them back into usable objects on page load.

---