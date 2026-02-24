# ThynkTech Static Website Deployment

## Project Overview

The **ThynkTech Static Website Deployment** project demonstrates the deployment of a static web application using cloud infrastructure and automated CI/CD practices.

The project involves hosting a website built with **HTML, CSS, and JavaScript** on an AWS cloud server. The application is deployed on an **Amazon EC2 instance**, where the website files are served using the **NGINX web server**.

The source code is managed through GitHub, and an automated deployment pipeline is implemented using **GitHub Actions**.

Whenever changes are pushed to the **main branch**, the CI/CD workflow is triggered. The workflow securely connects to the EC2 server using **SSH authentication** and updates the server by pulling the latest version of the project files from the repository.

This setup ensures a streamlined deployment process where updates to the application can be delivered quickly and reliably without manual intervention.

---

# Final Stack Summary

- AWS EC2
- AWS VPC
- AWS IAM
- AWS Security Groups
- AWS Elastic IP
- Ubuntu Server
- NGINX
- HTML
- CSS
- JavaScript
- Git
- GitHub
- GitHub Actions
- SSH Authentication

---

# Technology Stack and Tools Used

## 1. Amazon Web Services (AWS)

**What it is:**  
AWS is a cloud computing platform that provides scalable infrastructure services such as servers, networking, storage, and security.

**How it was used:**  
AWS was used as the main cloud platform to deploy and host the website. All infrastructure including the server, networking, and security configurations were created within AWS.

---

# AWS Infrastructure Components

## 2. Amazon EC2

**What it is:**  
Amazon EC2 provides virtual servers in the cloud where applications can run.

**How it was used:**  
An EC2 instance running Ubuntu Linux was created to host the static website files and run the web server.

---

## 3. Amazon VPC

**What it is:**  
Amazon VPC allows users to create an isolated virtual network in the cloud.

**How it was used:**  
A VPC was created to provide a secure networking environment for the EC2 instance, enabling controlled communication with the internet.

---

## 4. AWS Identity and Access Management (IAM)

**What it is:**  
IAM allows users to manage permissions and access to AWS services securely.

**How it was used:**  
An IAM user named **Thynktech** was created to manage AWS resources securely instead of using the root account.

---

## 5. AWS Security Groups

**What it is:**  
Security Groups act as virtual firewalls for EC2 instances, controlling inbound and outbound traffic.

**How it was used:**  
Rules were configured to allow:

- Port **22 (SSH)** → Remote server access  
- Port **80 (HTTP)** → Public website access

---

## 6. AWS Elastic IP

**What it is:**  
Elastic IP provides a static public IP address that can be attached to an EC2 instance.

**How it was used:**  
An Elastic IP was allocated and attached to the EC2 instance so that the website could always be accessed using the same public IP address even if the instance is restarted.

---

# Server Environment

## 7. Ubuntu Server

**What it is:**  
Ubuntu is a Linux-based operating system widely used for cloud servers.

**How it was used:**  
Ubuntu 24.04 was used as the operating system for the EC2 instance where the website files and web server were installed.

---

## 8. NGINX

**What it is:**  
NGINX is a high-performance web server used to serve websites and handle HTTP requests.

**How it was used:**  
NGINX was installed and configured to serve the static website files stored on the server.

---

# Development Technologies

## 9. HTML

**What it is:**  
HTML (HyperText Markup Language) is used to structure the content of web pages.

**How it was used:**  
The **index.html** file defines the structure and layout of the website.

---

## 10. CSS

**What it is:**  
CSS (Cascading Style Sheets) is used to design and style web pages.

**How it was used:**  
The **sample.css** file was used to style the website including layout, colors, fonts, and visual appearance.

---

## 11. JavaScript

**What it is:**  
JavaScript is used to add interactivity and dynamic functionality to web pages.

**How it was used:**  
The **script.js** file was used to add interactive features to the website.

---

# Version Control and Repository

## 12. Git

**What it is:**  
Git is a version control system used to track code changes and manage project versions.

**How it was used:**  
Git was used locally to commit changes and push the code to the remote repository.

Common commands used:

git init
git add .
git commit -m "message"
git push origin main
git pull


---

## 13. GitHub

**What it is:**  
GitHub is a platform used for hosting Git repositories and collaborating on code projects.

**How it was used:**  
The project source code was stored in a GitHub repository and used as the source for deployment to the EC2 server.

---

# CI/CD Automation

## 14. GitHub Actions

**What it is:**  
GitHub Actions is a CI/CD automation tool that runs workflows when changes are pushed to a repository.

**How it was used:**  
A deployment workflow was created so that whenever code is pushed to the **main branch**, the EC2 server automatically pulls the latest code.

---

# Secure Server Access

## 15. SSH Authentication

**What it is:**  
SSH (Secure Shell) is a protocol used to securely access remote servers.

**How it was used:**  
A `.pem` SSH key was used to securely connect to the EC2 instance from the local machine and perform server management tasks.

Example command:

ssh -i key.pem ubuntu@<Elastic-IP>


---

# Deployment Workflow Summary

1. Code is developed locally.
2. Changes are committed using Git.
3. Code is pushed to the GitHub repository.
4. GitHub Actions automatically triggers the deployment workflow.
5. The EC2 server retrieves the latest code from the repository.
6. NGINX serves the updated website.

---

# Architecture Flow

Developer (Local Machine)
│  
│ git push  
▼  
GitHub Repository  
│  
│ triggers  
▼  
GitHub Actions Workflow  
│  
│ SSH connection  
▼  
AWS EC2 Server  
│  
│ git pull  
▼  
Updated Website Files  
│  
▼  
NGINX Web Server  
│  
▼  
Live Website via Elastic IP

---

# Author

**Devesh Tiwari**  
BTech Computer Science Engineering  
MIT ADT University  
deveshtiwari0652@gmail.com
