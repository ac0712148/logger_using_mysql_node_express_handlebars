# Burger Logger using MySQL, Node, Express, Handlebars, ORM, and MVC

Burger logger with MySQL, Node, Express, Handlebars and a custom ORM using an MVC design

## Table of Contents
  
  * [Description](#description)
  * [File Structure](#file-structure)
  * [Installation and Dependencies](#installation-and-dependencies)
  * [Purpose](#purpose)

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

To get the application running, we must install the dependencies for this project. The main dependencies are  `express`, `express-handlebars`, and 
`mysql` to properly run the server properly. With the `package.json` in your directore, running `npm install` should take care of the dependencies.

## Purpose

The purpose of this project is to utilize mySQL database to store, view or modify data. The use of express, a framework for Node JS, allows 
us to communicate with the server and with the use of a custom ORM, simplifies and modularizes code. Finally, the use of handlebars allows us to 
dynamically create html for rendering the most up to date information.
