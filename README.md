# 🚀 Dealer Evaluation Microservices Platform

<p align="center">
   <img src="assets/Screenshot%202026-03-23%20212240.png" alt="Dealer Evaluation Platform Header" width="100%"/>
</p>

<p align="center">
   <a href="https://github.com/arshchouhan/devops-capstone-project/actions/workflows/ci-build.yaml">
      <img src="https://github.com/arshchouhan/devops-capstone-project/actions/workflows/ci-build.yaml/badge.svg" alt="CI Status" height="25"/>
   </a>
   <img src="https://img.shields.io/badge/Platform-IBM%20Code%20Engine-blue?style=flat-square&logo=ibm" alt="IBM Code Engine"/>
   <img src="https://img.shields.io/badge/Tech-Python%20|%20Node.js%20|%20JS-success?style=flat-square" alt="Tech Stack"/>
   <img src="https://img.shields.io/badge/Status-Production%20Ready-brightgreen?style=flat-square" alt="Status"/>
</p>

---

## 📖 Overview

This repository hosts a **production-grade microservices ecosystem** deployed on **IBM Code Engine**. It demonstrates a modern cloud-native architecture, integrating multiple backend languages with a responsive frontend to deliver a seamless dealer evaluation and pricing experience.

### 🏗️ Architecture at a Glance

```mermaid
flowchart TD
      U[User Browser] -- REST --> F[Frontend Service - JS/HTML]
      F -- API Calls --> P1[Product Details API - Python]
      F -- API Calls --> P2[Dealer Pricing API - Node.js]
      P1 --> DB1[(Product Data)]
      P2 --> DB2[(Pricing Data)]
      
      subgraph "IBM Code Engine Cloud Platform"
         F
         P1
         P2
      end
```

---

## ✨ Key Achievements

- **Full-Stack Microservices Integration**: Successfully wired independent Python (Product Details) and Node.js (Dealer Pricing) services with a JavaScript frontend.
- **Cloud-Native Deployment**: Leveraged IBM Code Engine for serverless container orchestration, ensuring scalability and high availability.
- **Dynamic API Communication**: Transitioned from static placeholders to live, cross-service REST communication.
- **Production DevOps Lifecycle**: Implemented a complete flow from local development to containerized build and cloud deployment.

---

## 🛠️ Technology Stack

| Layer | Technologies |
|---|---|
| **Frontend** | HTML5, CSS3, Vanilla JavaScript |
| **Backend (API 1)** | Python, Flask/FastAPI |
| **Backend (API 2)** | Node.js, Express |
| **Infrastructure** | IBM Cloud, IBM Code Engine |
| **Containers** | Docker, IBM Container Registry |
| **Integration** | RESTful APIs, Microservices Architecture |

---

## 📸 Visual Journey: From Setup to Production

The following walkthrough illustrates the complete lifecycle of the project, categorized by functional phases.

### 🔹 Phase 1: Infrastructure & Environment Setup
Initial configuration of the IBM Cloud environment and Code Engine serverless projects.

<p align="center">
   <img src="assets/Screenshot%202026-03-23%20211659.png" alt="Serverless Project Creation" width="32%"/>
   <img src="assets/Screenshot%202026-03-23%20211412.png" alt="Cloud Console Overview" width="32%"/>
   <img src="assets/Screenshot%202026-03-23%20211447.png" alt="Resource Management" width="32%"/>
</p>

### 🔹 Phase 2: Registry & Secret Configuration
Configuring secure access to the IBM Container Registry and managing application secrets.

<p align="center">
   <img src="assets/Screenshot%202026-03-23%20212953.png" alt="Registry Secret Setup" width="32%"/>
   <img src="assets/Screenshot%202026-03-23%20213335.png" alt="Managed Secret Configuration" width="32%"/>
   <img src="assets/Screenshot%202026-03-23%20213307.png" alt="Environment Variables" width="32%"/>
</p>

### 🔹 Phase 3: Microservices Deployment
Deploying the independent backend services and the unified frontend application.

<p align="center">
   <img src="assets/Screenshot%202026-03-23%20213708.png" alt="Deploying Pricing Service" width="32%"/>
   <img src="assets/Screenshot%202026-03-23%20213841.png" alt="Image Build Details" width="32%"/>
   <img src="assets/Screenshot%202026-03-23%20213846.png" alt="Public Visibility Config" width="32%"/>
</p>

### 🔹 Phase 4: Scaling & Monitoring
Managing application revisions, traffic splitting, and real-time instance monitoring.

<p align="center">
   <img src="assets/Screenshot%202026-03-23%20213535.png" alt="Active Instances" width="32%"/>
   <img src="assets/Screenshot%202026-03-23%20213227.png" alt="Revision History" width="32%"/>
   <img src="assets/Screenshot%202026-03-23%20213131.png" alt="Application List" width="32%"/>
</p>

### 🔹 Phase 5: The Final Integrated Platform
The successfully integrated dealer evaluation platform, featuring the real-time product price comparison engine.

<p align="center">
   <img src="assets/Screenshot%202026-03-23%20224929.png" alt="Product Selection" width="32%"/>
   <img src="assets/Screenshot%202026-03-23%20225055.png" alt="Dealer Selection" width="32%"/>
   <img src="assets/Screenshot%202026-03-23%20225200.png" alt="Final Price Comparison Output" width="32%"/>
</p>

---

## 📂 Full Asset Gallery

<details>
<summary><b>Click to view all 34 project screenshots</b></summary>

<p align="center">
   <img src="assets/Screenshot%202026-03-23%20211412.png" width="24%"/>
   <img src="assets/Screenshot%202026-03-23%20211447.png" width="24%"/>
   <img src="assets/Screenshot%202026-03-23%20211659.png" width="24%"/>
   <img src="assets/Screenshot%202026-03-23%20211754.png" width="24%"/>
</p>

<p align="center">
   <img src="assets/Screenshot%202026-03-23%20211828.png" width="24%"/>
   <img src="assets/Screenshot%202026-03-23%20211951.png" width="24%"/>
   <img src="assets/Screenshot%202026-03-23%20212155.png" width="24%"/>
   <img src="assets/Screenshot%202026-03-23%20212240.png" width="24%"/>
</p>

<p align="center">
   <img src="assets/Screenshot%202026-03-23%20212332.png" width="24%"/>
   <img src="assets/Screenshot%202026-03-23%20212914.png" width="24%"/>
   <img src="assets/Screenshot%202026-03-23%20212953.png" width="24%"/>
   <img src="assets/Screenshot%202026-03-23%20213131.png" width="24%"/>
</p>

<p align="center">
   <img src="assets/Screenshot%202026-03-23%20213227.png" width="24%"/>
   <img src="assets/Screenshot%202026-03-23%20213307.png" width="24%"/>
   <img src="assets/Screenshot%202026-03-23%20213335.png" width="24%"/>
   <img src="assets/Screenshot%202026-03-23%20213408.png" width="24%"/>
</p>

<p align="center">
   <img src="assets/Screenshot%202026-03-23%20213535.png" width="24%"/>
   <img src="assets/Screenshot%202026-03-23%20213708.png" width="24%"/>
   <img src="assets/Screenshot%202026-03-23%20213729.png" width="24%"/>
   <img src="assets/Screenshot%202026-03-23%20213841.png" width="24%"/>
</p>

<p align="center">
   <img src="assets/Screenshot%202026-03-23%20213846.png" width="24%"/>
   <img src="assets/Screenshot%202026-03-23%20213857.png" width="24%"/>
   <img src="assets/Screenshot%202026-03-23%20213912.png" width="24%"/>
   <img src="assets/Screenshot%202026-03-23%20213946.png" width="24%"/>
</p>

<p align="center">
   <img src="assets/Screenshot%202026-03-23%20214141.png" width="24%"/>
   <img src="assets/Screenshot%202026-03-23%20214552.png" width="24%"/>
   <img src="assets/Screenshot%202026-03-23%20214731.png" width="24%"/>
   <img src="assets/Screenshot%202026-03-23%20214810.png" width="24%"/>
</p>

<p align="center">
   <img src="assets/Screenshot%202026-03-23%20214857.png" width="24%"/>
   <img src="assets/Screenshot%202026-03-23%20214936.png" width="24%"/>
   <img src="assets/Screenshot%202026-03-23%20224908.png" width="24%"/>
   <img src="assets/Screenshot%202026-03-23%20224929.png" width="24%"/>
</p>

<p align="center">
   <img src="assets/Screenshot%202026-03-23%20225055.png" width="24%"/>
   <img src="assets/Screenshot%202026-03-23%20225200.png" width="24%"/>
</p>

</details>

---

## 🚀 Getting Started

### Prerequisites

- [Docker](https://www.docker.com/) installed.
- [IBM Cloud CLI](https://cloud.ibm.com/docs/cli?topic=cli-install-ibmcloud-cli) with Code Engine plugin.
- Python 3.9+ and Node.js 16+.

### Quick Run

```bash
# Clone the repository
git clone https://github.com/arshchouhan/devops-capstone-project.git
cd devops-capstone-project

# Deploy services (refer to individual service directories for specific build instructions)
```

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
<p align="center">Developed as part of the IBM DevOps Capstone Project</p>
