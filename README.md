# Dealer Evaluation Microservices Deployment

<p align="center">
   <img src="../assets/Screenshot%202026-03-23%20213335.png" alt="Dealer Evaluation Platform Overview" width="900"/>
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
   <img src="../assets/Screenshot%202026-03-23%20211412.png" alt="Product Details API" width="49%"/>
   <img src="../assets/Screenshot%202026-03-23%20212240.png" alt="Dealer Evaluation Frontend" width="49%"/>
</p>

### Real-Time Pricing and Service Flow

<p align="center">
   <img src="../assets/Screenshot%202026-03-23%20211828.png" alt="Dealer Pricing Service" width="49%"/>
   <img src="../assets/Screenshot%202026-03-23%20213131.png" alt="End-to-End Integration" width="49%"/>
</p>

### Cloud Deployment on IBM Code Engine

<p align="center">
   <img src="../assets/Screenshot%202026-03-23%20214936.png" alt="IBM Code Engine Deployment" width="900"/>
</p>

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
