# 🖱️ Pointer Pointer

> An interactive web application that uses the user's cursor or touch position to identify the closest matching coordinate and display the corresponding image.

![Status](https://img.shields.io/badge/Status-Planning-yellow?style=for-the-badge)
![Project Type](https://img.shields.io/badge/Project-Full%20Stack-blue?style=for-the-badge)
![Focus](https://img.shields.io/badge/Focus-Interactive%20Web%20Application-purple?style=for-the-badge)

---

## 📌 About The Project

Pointer Pointer is an experimental interactive web application built around a simple idea:

> **Where is the user pointing?**

The application tracks the position of a user's mouse cursor or touch input and compares that position against stored coordinates associated with images.

The system then identifies the closest matching coordinate and displays the corresponding image.

The project is designed to explore the relationship between:

- Frontend interaction
- Coordinate systems
- Responsive design
- APIs
- Databases
- Image processing
- Object storage
- Backend algorithms
- Content management systems

---

# 🎯 Project Goal

The goal is to create a responsive website where users can move their cursor or tap their screen and receive an image associated with the closest matching coordinate.

The system should work across different screen sizes without losing the relationship between the user's position and the stored coordinates.

---

# 🧠 How It Works

At a high level:

```text
User moves cursor / taps screen
              │
              ▼
       Frontend captures
          x / y position
              │
              ▼
      Coordinates normalized
          to percentages
              │
              ▼
         Backend API
              │
              ▼
     Matching algorithm
              │
              ▼
       Search database
              │
              ▼
     Find closest coordinate
              │
              ▼
       Return image data
              │
              ▼
       Display image
