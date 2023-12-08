# TermProjectRecipeCard
#### Final term project for CP4485 Emerging Trends in DB and Web

This project demonstrates Recipe card management in an online MongoDB database. It enables a user to display, edit, delete, and/or add to recipe cards directly from dynamically generated EJS pages. 
Note that the server is hosted on localhost:4000.

## Key Features

- **Displaying Recipe Cards:** EJS pages dynamically render HTML content, showcasing recipe cards.

- **Online MongoDB Database:** Utilizes EJS pages to display information from a MongoDB database, storing each recipe's information individually.

- **Functionality:** Using Node.js and Express, this project can display, edit, delete, and/or add data to a MongoDB database. The EJS pages feature buttons for easy and seamless interaction.

- **Search Feature:** A newly added feature which allows users to search for recipes based on 'category' and/or 'difficulty'.

- **Server Hosted on localhost:4000:** The EJS pages are ran on localhost:4000 while Node.js is active.

## Frameworks and Libraries

### For the Backend:
- **Express.js:** A web application framework for Node.js used in building web applications and APIs.
- **Mongoose:** An Object Data Modeling (ODM) library for MongoDB, simplifying database interaction.
- **fs/promises:** Part of the Node.js File System module used for asynchronous file system operations.

### For Additional Functionality: 
- **Marked:** A markdown parser and compiler.
- **Slugify:** A library used to create URL-friendly slugs.
- **Dompurify:** Used for sanitizing HTML to prevent XSS attacks.
- **JSDOM from jsdom:** A library creating a Document Object Model (DOM) in Node.js.
- **Method-Override:** Middleware for handling HTTP methods where the real HTTP method is not supported.

## Download and Setup
```
git clone https://github.com/Patrick-Rideout/TermProjectRecipeCard.git
```
### Node
```
node server.js
```
### Development
```
npm run devStart
```
