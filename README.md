# React ND Capstone: Would You Rather?

## Overview
**Would You Rather?** is a frontend web app that allows a user to play the "Would You Rather?" game. The game goes like this: a user is asked a question in the form: "Would you rather ```[option A]``` or ```[option B]```?". Answering *"neither"* or *"both"* is against the rules.

**Would You Rather** app is the capstone for [Udacity React Nanodegree](https://www.udacity.com/course/react-nanodegree--nd019?gclid=Cj0KCQjwrJOMBhCZARIsAGEd4VH6s1AtGuH3NE8TL2ScAp7Q_bEcZmYN70OLRFebZjCVR3Zmr4xCT3waAmMZEALw_wcB&utm_campaign=12712700850_c&utm_keyword=react%20udacity_e&utm_medium=ads_r&utm_source=gsem_brand&utm_term=124530973630) program.

The project has the following goals:
* Use [React](https://reactjs.org/) to build an application.
* Practice using [hooks](https://reactjs.org/docs/hooks-overview.html).
* Manage state using [Redux](https://redux.js.org/usage/configuring-your-store).
* Leverage [React Router](https://reactrouter.com/web/guides/quick-start).
* Deploy React application using [Amazon Web Services](aws.amazon.com).

Verify AWS deployment [here](http://would-you-rather-app.s3-website-us-west-2.amazonaws.com).
## Features
### Login Flow
* There is a way for the user to ***log in*** as an existing user:
  * A **login box** appears at the root of the application, and the user can select a name from the list of existing users.
* The application allows the user to ***log out*** and ***log back in***. 
* The user should be ***logged in*** to:
  * submit new polling questions;
  * vote; and
  * view the leaderboard.
  
![image](https://user-images.githubusercontent.com/53233637/143966467-bf8d67df-c20b-49f6-a769-e4a5bbf6a44e.png)

### Home Page
* The ***answered*** and ***unanswered*** polls are both available at the root. The user can alternate between viewing them.
* The polls in both categories are arranged from the most recently created (top) to the least recently created (bottom).
* The ***unanswered*** questions are shown by default. 
* The name of the ***logged in user*** is visible on the page.
* A **View** button links to details of the corresponding poll.

![image](https://user-images.githubusercontent.com/53233637/143966708-4a26f56d-e1e3-4bf2-ba50-f9527946396e.png)

### Poll Details
* The details of the poll are available at ```questions/question_id```.
* When the user is ***logged in***, the details of the poll are shown. If the user is ***logged out***, they are asked to log in before before being able to access the poll.
* When a poll is clicked on the home page, the following is shown:
  * The text ***Would You Rather***.
  * The picture of the user who posted the polling question.
  * The two options.
  
![image](https://user-images.githubusercontent.com/53233637/143966758-9c7d7a38-2032-45c5-a780-6f80a7c55aac.png)

* For ***answered polls***, each of the two options contains:
  * The text of the option.
  * The *number* of people who voted for that option.
  * The *percentage* of people who voted for that option.
  * The option selected by the logged in user is clearly marked.

![image](https://user-images.githubusercontent.com/53233637/143966881-9e8e28ed-62a4-4ce9-aa0f-f050db4586ec.png)

* The application asks the user to sign in and shows a ```404 page``` if that poll does not exist.

![image](https://user-images.githubusercontent.com/53233637/143966919-e735a493-b234-466d-8f02-e5874aefed58.png)

### Voting Mechanism
* Upon voting in a poll, all of the information of the answered poll is displayed.
* The user’s response is recorded and is clearly visible on the poll details page.
* When the user comes back to the home page, the polling question appears in the **Answered** column.
* The data on the **Leaderboard** changes appropriately.
### Add New Question
* The form is available at ```/add```.
* The application shows the text *Would You Rather* and has a form for creating two options.
* Upon submitting the form, a new poll is created and the user is taken to the home page.
* The new polling question appears in the correct category on the home page.

![image](https://user-images.githubusercontent.com/53233637/143967150-a4e8fb58-e60a-4ffc-a3fc-aa562ac4463a.png)

### Leaderboard
* The **Leaderboard** is available at ```/leaderboard```.
* Each entry on the **Leaderboard** contains:
  * The user’s name.
  * The user’s picture.
  * The number of questions the user asked.
  * The number of questions the user answered.
* Users are ordered in descending order based on the sum of the number of questions they’ve answered and the number of questions they’ve asked.

![image](https://user-images.githubusercontent.com/53233637/143967031-e16379e0-3c6a-475e-9331-ed28bf3dedd1.png)

### Navigation
* The app contains a **Navigation Bar** that is visible on all of the pages.
* The user can navigate between the **New Question**, the **Leaderboard**, and the **Home** pages without typing the address into the address bar.

![image](https://user-images.githubusercontent.com/53233637/143967206-f68fca65-964b-4b36-9724-10b08358cf1f.png)

## Architecture
In terms of architecture, the project meets the following requirements:
1. Components read the necessary state from the store; they do not have their own versions of the same state.
2. There are no direct API calls in the components' lifecycle methods.
3. Most application state is managed by the ***Redux store*** (form inputs and controlled components have some state handled by the component).
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
