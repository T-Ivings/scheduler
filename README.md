# Interview Scheduler

## Overview
Schduler is a single page application that can create, edit, and delete interviews between a variety of preset interviewers. 
Scheduler was built with react and used Storybook to set up the components, and jest + cypress
for tests.


## Setup

Install dependencies with `npm install`.

If you want to use cypress, the test server must be appointed. To set the node_env to the test server on windows, please enter "set NODE_ENV=test".
To switch back, enter "set NODE_ENV=development"

## Dependencies

"axios": "^0.21.1"
"classnames": "^2.2.6"
"normalize.css": "^8.0.1"
"react": "^16.9.0"
"react-dom": "^16.9.0"
"react-scripts": "3.0.0"
"prop-types": "^15.7.2"

## Pictures
![Base look](https://github.com/T-Ivings/scheduler/blob/master/docs/interview_example_show_page.png?raw=true)
![Delete warning](https://github.com/T-Ivings/scheduler/blob/master/docs/interview_example_delete.png?raw=true)
![Delete in progress](https://github.com/T-Ivings/scheduler/blob/master/docs/interview_example_deleting.png?raw=true)
## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```
## Running Cypress Test Framework

```sh
npm run cypress
```