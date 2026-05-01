# 🚀 Dealer Evaluation Microservices Deployment

<p align="center">
   <img src="assets/Screenshot%202026-03-23%20224929.png" width="32%"/>
   <img src="assets/Screenshot%202026-03-23%20225055.png" width="32%"/>
   <img src="assets/Screenshot%202026-03-23%20225200.png" width="32%"/>
</p>

<p align="center">
   <b>Cloud-Native Microservices System deployed on IBM Code Engine</b>
</p>

<p align="center">
   <a href="https://github.com/arshchouhan/devops-capstone-project/actions/workflows/ci-build.yaml">
      <img src="https://github.com/arshchouhan/devops-capstone-project/actions/workflows/ci-build.yaml/badge.svg" alt="CI"/>
   </a>
</p>

---

## 🧠 Overview

A **production-ready distributed microservices application** that integrates:

- 🐍 Python-based Product Details Service  
- ⚡ Node.js Dealer Pricing Service  
- 🌐 JavaScript Frontend (Dealer Evaluation UI)  
- ☁️ Fully deployed on **IBM Code Engine**

This system demonstrates **real-world service communication, cloud deployment, and scalable architecture design**.

---

## ✨ Key Highlights

- 🔹 Multi-service architecture with clear separation of concerns  
- 🔹 Real-time API integration between frontend and backend services  
- 🔹 Fully cloud-deployed using IBM Code Engine  
- 🔹 Production-style system with independent deployability  
- 🔹 Clean UI with dynamic product + dealer interaction  

---

## 🏗️ Architecture

```mermaid
flowchart LR
      U[User Browser] --> F[Frontend]
      F --> P1[Product Service - Python]
      F --> P2[Pricing Service - Node.js]
      P1 --> D1[(Product Data)]
      P2 --> D2[(Pricing Data)]
