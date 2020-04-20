# Burger Logger using MySQL, Node, Express, Handlebars, ORM, and MVC

Burger logger with MySQL, Node, Express, Handlebars and a custom ORM using an MVC design

## Table of Contents
  
  * [Description](#description)
  * [File Structure](#file_structure)
  * [Installation and Dependencies](#installation)
  * [Usage](#usage)

## Description

For this project, we design and build a logging application that lets the user input burgers to eat. Using Node JS and mySQL, we are able to log 
burger names that use POST methods to store in a server. We use a custom ORM for a simplified way to communicate with the server instead of using 
sql queries in our main code. We then use GET and UPDATE methods to handle rendering text using handlebars. The project uses an MVC design to keep 
code simplified and independent of each modules.

## File Structure

```
.
├── config
│   ├── connection.js
│   └── orm.js
│ 
├── controllers
│   └── burgers_controller.js
│
├── db
│   ├── schema.sql
│   └── seeds.sql
│
├── models
│   └── burger.js
│ 
├── node_modules
│ 
├── package.json
│
├── public
│   └── assets
│       ├── css
│       │   └── burger_style.css
│       └── img
│           └── burger.png
│   
│
├── server.js
│
└── views
    ├── index.handlebars
    └── layouts
        └── main.handlebars
```


## Installation and Dependencies

To run this script, we must install the dependencies for this project. The main dependencies are  `inquirer` and `mySQL` to properly run the script.
 We also added a `console.table` package to render tables properly to the console. Running `npm install` should take care of the dependencies.

## Usage

The purpose of using this project is to utilize mySQL database to store, view or modify data. 
