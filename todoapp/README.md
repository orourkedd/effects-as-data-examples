# Todo App Example

## Overview

This application is a simple todo app demonstrating how to use effects-as-data in a front-end application.  There are a few points to note:

1. All React components in the application are stateless.
1. Redux is only used for state, not as a message bus for the application.

## Live Demo

[Open Live Demo](http://effects-as-data-todo-app.s3-website-us-west-2.amazonaws.com/)

## Data flow

1. Redux passes state to React using react-redux.
1. React handles UI events and calls effects-as-data functions that have been passed in as props.
1. Effect-as-data dispatches Redux actions.

## Project structure

```
src
└── effects - where effects-as-data code lives
|   ├── cmds/ - aggregate the effects-as-data commands.
|   ├── functions/ - business logic functions.
|   ├── functions/*.spec.js - tests for the business logic.
|   ├── handlers/ - effects-as-data handlers.
|   └── index.js - wire up all the effects-as-data stuff.
└── state/ - Redux actions, reducers, etc.
└── view/ - React components
└── helpers.js - Pure functions helpers
```

## Running Locally

```
npm install
npm start
```

## Running Tests

```
npm test
```
