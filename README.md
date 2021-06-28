# Introduction

A barebones hackathon starter to easily integrate file upload capabilities into your favourite nodejs applications

# Installation Guide

This project requires the following tools:

- [Node.js](https://nodejs.org/en/) - The JavaScript environment for server-side code.
- [NPM](https://www.npmjs.com/) - A Node.js package manager used to install dependencies.
- [MongoDB](https://www.mongodb.com/) - A NoSQL database system.

# Getting Started

**Step 1. Clone the code into a fresh folder**

```
$ git clone https://github.com/MLH/mlh-hackathon-nodejs-starter.git
$ cd nodejs-file-upload-starter
```

**Step 2. Install Dependencies.**

Next, we need to install the project dependencies, which are listed in `package.json`.

```
$ npm install
```

or if you're using `yarn`

```
$ yarn
```

**Step 4: Update environment variables and run the Server.**

Create a new file named `.env` by duplicating `.env.example`. Update the new file with the GitHub credentials. It should look similar to this:

```
# .env file
MONGO_URL="[INSERT_DATABASE_URL]"
PORT="[PORT_TO_RUN_SERVER]"
```

Now we're ready to start our server in development mode with:

```
$ npm run dev
```

or if you're using `yarn`

```
$ yarn dev
```

Open http://localhost:5000 to view it in your browser.

The app will automatically reload if you make changes to the code.
You will see the build errors and warnings in the console.

# What's Included ?

# Code of Conduct

# License

This Starter is open source software [licensed as MIT][license].

[mlh-conduct]: https://github.com/MLH/mlh-hackathon-nodejs-starter/blob/master/docs/CONDUCT.md
[license]: https://github.com/MLH/mlh-hackathon-nodejs-starter/blob/master/LICENSE
