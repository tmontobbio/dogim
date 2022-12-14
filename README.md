# README

# Dog IM

Dog IM is a fun, dog themed chat room app. Users can create an account with encrypted credentials, create and join chat rooms, read and write messages from other users. I wrote this app to display my knowledge of rails, forms, relational tables, and React.js. I plan on adding additional features in the near future such as: Viewing other user's profiles via a user list on the home page, and revamping the UI design and CSS.

---

This project was built on:

- Ruby 3.1.2
- React 18.2.0
- React-router-dom 6.4.2
- Node 16.17.1

## Running Locally:

Install dependencies

```
bundle i
```

Start the SQL server

```
// linux
sudo service postgresql start

// mac
brew services start postgresql
```

Create your database

```
rails db:create
```

Rails development server

```
rails s
```

React development server

```
npm start server --prefix client
```
