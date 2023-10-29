# Graphql MongoDB
This project is an Apollo server GraphQL API which connects to a MongoDB Atlas database and provides CRUD functionality to manage recipe data.

# Get started
Clone this repository, install dependencies, and start server:
```
git clone
cd graphql-mongodb
npm i
npm start
```

You must have a valid [MongoDB Atlas](https://www.mongodb.com/atlas) connection url to run this project. To add your MongoDB url, you can either create a '.env' file in  this project's root directory containing a "URL" string, or hardcore it into 'mongoose.connect' at index.js file.

A simple way to test the api is by heading over to (localhost:5000), which runs an Apollo GraphQl sandbox.

# screenshots
<img src="./screenshots/graphql-mongodb-screenshot1.png">