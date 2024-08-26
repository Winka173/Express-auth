# My Express.js Application

This project is a simple Express.js application with user registration and JWT authentication, running in Docker containers. It uses PostgreSQL as the database.

## Table of Contents

- [My Express.js Application](#my-expressjs-application)
  - [Table of Contents](#table-of-contents)
  - [Prerequisites](#prerequisites)
  - [Getting Started](#getting-started)

## Prerequisites

Before you begin, ensure you have the following installed:

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)
- [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

## Getting Started

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/your-repository.git
   cd your-repository

   ```

2. **Create a .env File**

   Copy the sample .env.example to .env:

   cp .env.example .env

   Update the .env file with your PostgreSQL credentials and other environment variables. For example:

   PORT=5000
   PG_USER=your_username
   PG_PASSWORD=your_password
   PG_DB=authdb
   PG_HOST=db
   PG_PORT=5432

   Running the Application
   Build and Start Containers

   Use Docker Compose to build and start the application and PostgreSQL containers:

   **docker-compose up --build**
   This command will:

   Build the Docker images for the application.
   Start the PostgreSQL and Express.js containers.

   Access the Application

   The Express.js application will be available at http://localhost:5000.
   The PostgreSQL database will be accessible on localhost:5432.

   Stopping the Containers
   To stop and remove the containers, run:
   **docker-compose down**

   API Endpoints

   POST /register

   Register a new user.

   Request Body:

   {
   "username": "newuser",
   "password": "password123"
   }
