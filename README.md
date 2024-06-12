# LiteraryHub - SWE Frontend README

This repository contains the frontend code for the LiteraryHub platform. It is built with Next.js, TypeScript, and Tailwind CSS. The application provides functionalities such as user authentication, book ratings, and managing book information. The backend code can be found in the [swe-backend](https://github.com/LiteraryHub/swe-backend) repository.

## Overview

The LiteraryHub is a platform for book lovers. It allows users to rate books, add books to their reading list, and discover new books based on their preferences. The platform also provides a community feature where users can connect with other book lovers, share book recommendations, and discuss their favorite books. The platform is built using modern web technologies such as Next.js, TypeScript, and Tailwind CSS. It also uses a PostgreSQL database to store user and book information. The platform is designed to be user-friendly, responsive, and accessible to all users. The LiteraryHub is a place where book lovers can come together, share their love for books, and discover new books to read. 

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js
- NPM

### Installing

1. Clone the repository to your local machine using the following command:

```sh
git clone https://github.com/literaryhub/swe-frontend.git
```

2. Navigate to the project directory:

```sh
cd swe-frontend
```

3. Run the following command to install all the dependencies:

```sh
npm install
```

### Environment Setup

Create a `.env` file in the root directory of the project and add your environment variables as needed.

### Running the Application

To start the server, run the following command:

```sh
npm run dev
```

The server will start on port 3000 or the port specified in your environment variables.

### Building the Application

To build the application, run the following command:

```sh
npm run build
```

This will create a production-ready build of your application.

### Creating the docker image
Use the docker engine to build the image from current code:

This command will list details such as the image ID, repository, tag, and size for each image. It's useful for managing your Docker images, including removing old or unused ones to free up disk space.


Use the docker engine to create a docker container and run a particular image with image name:
```
docker build -t literaryhub_ai_frontend_image:latest .
```

## Pushing the docker image to Docker Hub
After creating the image locally, you'll want to push it to Docker Hub as follows:

```bash
docker tag literaryhub_swe_frontend_image:latest literaryhub/swe-frontend:latest
docker push literaryhub/swe-frontend:latest
```

### Running the docker image locally

Disclaimer: The host 0.0.0.0 specified in the Dockerfile does not accept connections locally.
In order to run the docker image locally, a local modification to the host specified in the Dockerfile
is necessary, to 127.0.0.1, but please do not submit this change because it is likely to break our
deployment process.

Use the docker engine to create a docker container and run a particular image:
```
sudo docker run -d -p 3000:3000 literaryhub_swe_frontend_image:latest
```

To see all the containers that you have locally, run:

```
docker ps -a
```

To see what containers are current running, remove the `-a` parameter.

Notes: 
- In order to see the logs on the container, use its Container ID, e.g.,
```
docker logs <container_id>
```

After a container has been created with the previous command, you can stop/start it using the commands:
```
docker start <container_id>
sudo docker end <container_id>
```
Note: you can't reuse the same container name multiple times, even if you're running the same image.
