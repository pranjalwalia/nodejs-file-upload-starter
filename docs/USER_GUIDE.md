# Introduction

A barebones hackathon starter to easily integrate Scalable file upload capabilities into your favourite nodejs applications wihtout any refactoring.

# Installation Guide

This project requires the following tools:

- [Node.js](https://nodejs.org/en/) - The JavaScript environment for server-side code.
- [YARN](https://yarnpkg.com/) or [NPM](https://www.npmjs.com/) - Your favourite Node.js package manager to install dependencies.
- [MongoDB](https://www.mongodb.com/) - A NoSQL database.

# Getting Started

**Step 1. Clone the code into a fresh folder**

```
$ git clone git@github.com:masterchief01/nodejs-file-upload-starter.git
$ cd nodejs-file-upload-starter
```

**Step 2. Install Dependencies.**

Next, we need to install the project dependencies, which are listed in `package.json`, by default the lock file for dependencies is the `yarn.lock`, but you can always use your favourite package manager for the installation

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
# .env
MONGO_URL=[INSERT_DATABASE_URL]
PORT=[PORT_TO_RUN_SERVER]
```

Now we're ready to start our server in development mode with:

```
$ npm run dev
```

or if you're using `yarn`

```
$ yarn dev
```

Open http://localhost:5000 to see the server in action in your browser.

The app will automatically reload if you make changes to the code.
You will see the build errors and warnings in the console.

**Step 4: File Uploads**

- The server accepts uploads at the route `/files` as POST requests
- The `Content-Type` must be set to `multipart/form-data`
- The form must have a key named "file" that should contain the payload file

# What's Included ?

- [multer](https://github.com/expressjs/multer): Out of the box suppport for file uploads
- [Express](https://github.com/expressjs/express): A minimalistic web framework
- [mongoose](https://mongoosejs.com/): An ODM for integrating MongoDB in JavaScript Applications

# License

This Starter is open source software [licensed as MIT][license].

[user-guide]: https://github.com/masterchief01/nodejs-file-upload-starter/blob/master/docs/CONDUCT.md
[license]: https://github.com/masterchief01/nodejs-file-upload-starter/blob/master/LICENSE
