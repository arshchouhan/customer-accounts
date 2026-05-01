# Dealer Evaluation Microservices Deployment

<p align="center">
   <img src="assets/Screenshot%202026-03-23%20213335.png" alt="Dealer Evaluation Platform Overview" width="900"/>
</p>

<p align="center">
   <a href="https://github.com/arshchouhan/devops-capstone-project/actions/workflows/ci-build.yaml">
      <img src="https://github.com/arshchouhan/devops-capstone-project/actions/workflows/ci-build.yaml/badge.svg" alt="CI"/>
   </a>
</p>

Production-ready, cloud-deployed microservices system that combines a Python Product Details API, a Node.js Dealer Pricing API, and a responsive JavaScript frontend on IBM Code Engine.

## Project Snapshot

Dealer Evaluation Microservices Deployment | GitHub | Mar 2026

- Engineered and deployed a full-stack microservices application by integrating Product Details (Python), Dealer Pricing (Node.js), and Dealer Evaluation Frontend on IBM Code Engine.
- Configured frontend-to-backend API communication by replacing placeholder endpoints with deployed service URLs, enabling dynamic product loading, dealer listing, and real-time pricing.
- Delivered a production-ready distributed system with seamless multi-service interaction, automated cloud deployment, and responsive UI behavior.

## Why This Project Stands Out

- Multi-language microservices architecture with clean service boundaries.
- Real API wiring between frontend and independent backend services.
- Cloud-native deployment workflow on IBM Code Engine.
- Strong distributed-systems behavior with responsive end-user experience.

## Architecture

```mermaid
flowchart LR
      U[User Browser] --> F[Dealer Evaluation Frontend]
      F --> P1[Product Details Service - Python]
      F --> P2[Dealer Pricing Service - Node.js]
      P1 --> R1[(Product Data)]
      P2 --> R2[(Pricing Data)]
```

Each service is independently deployable and communicates over REST APIs, allowing modular scaling and faster iteration.

## Technology Stack

| Layer | Technologies |
|---|---|
| Backend Services | Python, Node.js |
| Frontend | HTML, JavaScript |
| Platform | IBM Code Engine |
| Integration | Microservices, REST APIs |

## Visual Walkthrough

### Core Experience

<p align="center">
   <img src="assets/Screenshot%202026-03-23%20211412.png" alt="Product Details API" width="49%"/>
   <img src="assets/Screenshot%202026-03-23%20212240.png" alt="Dealer Evaluation Frontend" width="49%"/>
</p>

### Real-Time Pricing and Service Flow

<p align="center">
   <img src="assets/Screenshot%202026-03-23%20211828.png" alt="Dealer Pricing Service" width="49%"/>
   <img src="assets/Screenshot%202026-03-23%20213131.png" alt="End-to-End Integration" width="49%"/>
</p>

### Cloud Deployment on IBM Code Engine

<p align="center">
   <img src="assets/Screenshot%202026-03-23%20224929.png" alt="IBM Code Engine Deployment Step 1" width="32%"/>
   <img src="assets/Screenshot%202026-03-23%20225055.png" alt="IBM Code Engine Deployment Step 2" width="32%"/>
   <img src="assets/Screenshot%202026-03-23%20225200.png" alt="IBM Code Engine Deployment Step 3" width="32%"/>
</p>

### Complete Screenshot Gallery

<details>
  <summary>View all 34 screenshots</summary>

<p align="center">
   <img src="assets/Screenshot%202026-03-23%20211412.png" alt="Gallery 1" width="24%"/>
   <img src="assets/Screenshot%202026-03-23%20211447.png" alt="Gallery 2" width="24%"/>
   <img src="assets/Screenshot%202026-03-23%20211659.png" alt="Gallery 3" width="24%"/>
   <img src="assets/Screenshot%202026-03-23%20211754.png" alt="Gallery 4" width="24%"/>
</p>

<p align="center">
   <img src="assets/Screenshot%202026-03-23%20211828.png" alt="Gallery 5" width="24%"/>
   <img src="assets/Screenshot%202026-03-23%20211951.png" alt="Gallery 6" width="24%"/>
   <img src="assets/Screenshot%202026-03-23%20212155.png" alt="Gallery 7" width="24%"/>
   <img src="assets/Screenshot%202026-03-23%20212240.png" alt="Gallery 8" width="24%"/>
</p>

<p align="center">
   <img src="assets/Screenshot%202026-03-23%20212332.png" alt="Gallery 9" width="24%"/>
   <img src="assets/Screenshot%202026-03-23%20212914.png" alt="Gallery 10" width="24%"/>
   <img src="assets/Screenshot%202026-03-23%20212953.png" alt="Gallery 11" width="24%"/>
   <img src="assets/Screenshot%202026-03-23%20213131.png" alt="Gallery 12" width="24%"/>
</p>

<p align="center">
   <img src="assets/Screenshot%202026-03-23%20213227.png" alt="Gallery 13" width="24%"/>
   <img src="assets/Screenshot%202026-03-23%20213307.png" alt="Gallery 14" width="24%"/>
   <img src="assets/Screenshot%202026-03-23%20213335.png" alt="Gallery 15" width="24%"/>
   <img src="assets/Screenshot%202026-03-23%20213408.png" alt="Gallery 16" width="24%"/>
</p>

<p align="center">
   <img src="assets/Screenshot%202026-03-23%20213535.png" alt="Gallery 17" width="24%"/>
   <img src="assets/Screenshot%202026-03-23%20213708.png" alt="Gallery 18" width="24%"/>
   <img src="assets/Screenshot%202026-03-23%20213729.png" alt="Gallery 19" width="24%"/>
   <img src="assets/Screenshot%202026-03-23%20213841.png" alt="Gallery 20" width="24%"/>
</p>

<p align="center">
   <img src="assets/Screenshot%202026-03-23%20213846.png" alt="Gallery 21" width="24%"/>
   <img src="assets/Screenshot%202026-03-23%20213857.png" alt="Gallery 22" width="24%"/>
   <img src="assets/Screenshot%202026-03-23%20213912.png" alt="Gallery 23" width="24%"/>
   <img src="assets/Screenshot%202026-03-23%20213946.png" alt="Gallery 24" width="24%"/>
</p>

<p align="center">
   <img src="assets/Screenshot%202026-03-23%20214141.png" alt="Gallery 25" width="24%"/>
   <img src="assets/Screenshot%202026-03-23%20214552.png" alt="Gallery 26" width="24%"/>
   <img src="assets/Screenshot%202026-03-23%20214731.png" alt="Gallery 27" width="24%"/>
   <img src="assets/Screenshot%202026-03-23%20214810.png" alt="Gallery 28" width="24%"/>
</p>

<p align="center">
   <img src="assets/Screenshot%202026-03-23%20214857.png" alt="Gallery 29" width="24%"/>
   <img src="assets/Screenshot%202026-03-23%20214936.png" alt="Gallery 30" width="24%"/>
   <img src="assets/Screenshot%202026-03-23%20224908.png" alt="Gallery 31" width="24%"/>
   <img src="assets/Screenshot%202026-03-23%20224929.png" alt="Gallery 32" width="24%"/>
</p>

<p align="center">
   <img src="assets/Screenshot%202026-03-23%20225055.png" alt="Gallery 33" width="24%"/>
   <img src="assets/Screenshot%202026-03-23%20225200.png" alt="Gallery 34" width="24%"/>
</p>

</details>

## Quick Start

```bash
git clone https://github.com/arshchouhan/devops-capstone-project.git
cd devops-capstone-project
```

Build and deploy each service using the Docker and pipeline assets available in this repository.

## Repository Highlights

- `service/` contains the core accounts service implementation.
- `service/tests/` includes API and behavior tests.
- `Dockerfile` provides container build support.
- `requirements.txt` defines Python dependencies.

## License

This project is licensed under the MIT License.
