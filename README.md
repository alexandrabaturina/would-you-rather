# React ND: Would You Rather?

## Overview
**Would You Rather?** is a frontend for web app that allows a user play the "Would You Rather?" game. The game goes like this: A user is asked a question in the form: "Would you rather [option A] or [option B] ?". Answering "neither" or "both" is against the rules.

**Would You Rather** app is the capstone for [Udacity React Nanodegree](https://www.udacity.com/course/react-nanodegree--nd019?gclid=Cj0KCQjwrJOMBhCZARIsAGEd4VH6s1AtGuH3NE8TL2ScAp7Q_bEcZmYN70OLRFebZjCVR3Zmr4xCT3waAmMZEALw_wcB&utm_campaign=12712700850_c&utm_keyword=react%20udacity_e&utm_medium=ads_r&utm_source=gsem_brand&utm_term=124530973630) program.

The project has the following goals:
* Use [React](https://reactjs.org/) to build the application
* Practice using [hooks](https://reactjs.org/docs/hooks-overview.html)
* Manage state using [Redux](https://redux.js.org/usage/configuring-your-store)
* Leverage [React Router](https://reactrouter.com/web/guides/quick-start)
## Features
Users are able to:
* Answer questions
* See which questions they haven’t answered
* See how other people have voted
* Post questions
* See the ranking of users on the leaderboard
## Architecture
In terms of architecture, the project meets the following requirements:
1. Components read the necessary state from the store; they do not have their own versions of the same state.
2. There are no direct API calls in the components' lifecycle methods.
3. Most application state is managed by the Redux store (form inputs and controlled components have some state handled by the component).
4. Updates are triggered by dispatching action creators to reducers.
5. Components are modular and reusable.
## Getting Started
To run **Would You Rather** in dev mode:
1. Clone this repo.
2. ```cd``` into project directory.There are no direct API calls in the components' lifecycle methods.
3. Install dependencies by running the following command:
```sh
npm install
```
4. Start the server by running the following command:
```sh
npm start
```
The ```http:localhost:3000``` page will be automatically opened in your browser.
## Author
Alexandra Baturina
