# Misc examples

## Overview
This is an example project with examples of how to do things in effects-as-data.

Some of the examples include:

* A basic `effects-as-data` function. [Open](https://github.com/orourkedd/effects-as-data-examples/blob/master/misc-examples/functions/get-people.js)
* A function with error handling. [Open](https://github.com/orourkedd/effects-as-data-examples/blob/master/misc-examples/functions/get-person-error-handling.js)
* A function that uses another function. [Open](https://github.com/orourkedd/effects-as-data-examples/blob/master/misc-examples/functions/get-people-reuse-fn.js)
* A function that parallelizes commands. [Open](https://github.com/orourkedd/effects-as-data-examples/blob/master/misc-examples/functions/get-people-in-parallel.js)

```
.
├── cmds.js // effects-as-data commands (httpGet, etc)
├── functions // your business logic functions
├── functions/*.spec.js // tests for those functions
├── handlers.js // the functions that handle/perform the commands
└── index.js // wire it all up
```

## Install
```
npm install
```

## Run
```
npm start
```

## Test
```
npm test
```
