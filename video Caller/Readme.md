# 📹 WebRTC Video Calling Application

> A browser-based peer-to-peer video calling application built to explore real-time communication, WebRTC, signaling, network traversal and browser media APIs.

![Status](https://img.shields.io/badge/Status-Planning-yellow?style=for-the-badge)
![Project Type](https://img.shields.io/badge/Project-Real--Time%20Web%20Application-blue?style=for-the-badge)
![Focus](https://img.shields.io/badge/Focus-WebRTC%20%26%20Networking-purple?style=for-the-badge)

---

# 📌 About The Project

This project is a browser-based video calling application that allows users to establish real-time audio and video communication.

The project is designed to explore how modern web applications establish real-time peer-to-peer connections using WebRTC.

Unlike a traditional video streaming application, the goal is to allow browsers to communicate directly whenever network conditions permit.

The application will explore:

- Webcam access
- Microphone access
- Peer-to-peer communication
- WebRTC
- Signaling
- WebSockets
- STUN
- TURN
- NAT traversal
- Real-time networking
- Browser APIs
- Connection management
- Security and permissions

---

# 🎯 Project Goals

The main goals are to:

- Build a working browser-to-browser video call
- Understand how WebRTC works
- Learn how signaling works
- Understand NAT traversal
- Work with STUN and TURN servers
- Learn WebSocket communication
- Work with browser media permissions
- Handle connection failures
- Understand peer-to-peer networking
- Build a real-time web application

---

# 🧠 How It Works

The basic architecture is:

```text
                    USER A
                      │
                      ▼
              ┌───────────────┐
              │   Browser A   │
              │               │
              │ WebRTC        │
              │ getUserMedia  │
              └───────┬───────┘
                      │
                      │ Signaling
                      ▼
              ┌───────────────┐
              │   Signaling   │
              │     Server    │
              └───────┬───────┘
                      │
                      │ Signaling
                      ▼
              ┌───────────────┐
              │   Browser B   │
              │               │
              │ WebRTC        │
              │ getUserMedia  │
              └───────┬───────┘
                      │
                      │
               Peer-to-Peer
                Media Path
                      │
                      ▼
              Audio + Video
