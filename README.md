# 17_Workout_Tracker

## Link to trying out the app and Screenshots:
[Try out the Workout Tracker](https://rocky-temple-45102.herokuapp.com/)

![Summary](https://github.com/MarioThompson0010/17_Workout_Tracker/blob/main/assets/Summary.PNG)
![Enter Data](https://github.com/MarioThompson0010/17_Workout_Tracker/blob/main/assets/EnterData.PNG)

List of technologies and methodologies used: Nodejs, HTML, CSS, npm, Express, Javascript, Heroku, Github, RESTful API, routes, mongo, mongoose, Atlas

## Description: Workout Tracker

This application tracks your workout.  Time to burn some of that blubber you've got on you. Click the button to create a new workout. Then, make your selection as to which type of workout you're going to do: cardio or weight lifting.  Then, fill out the fields on the screen.  Finally save your changes by selecting either "Complete" or "Add Exercise".  Both options save your changes.  In the upper left hand corner, select "Dashboard" to view a graphical view of statistical compilation. Select "Fitness Tracker" to view a summary of your last workout's statistics.

Mongoose and mongo were used to implement the back end.  $Sum was used to calculate the sum of the total duration for each workout, respectively.

## How to run the program:

You can go to Heroku (see the link, above) and run it that way, or follow the following steps to run it on your local machine:

1) Open an integrated terminal in the root directory of your project, but it should be the same directory where the
    server.js file lies
2) Type "npm i" to install the dependencies
3) Type "node server.js"
4) Click on the "New Workout" button
5) Select the exercise type from the "Excercise Type" drop down menu
6) Fill out the fields according to what your workout was
7) Click "Add Exercise" to immediately save changes, then add more data
8) Click Complete to save changes, then be taken to the "Fitness Tracker" page, which shows you a summary of your last workout
9) View a graphical depiction of your workout by clicking the Dashboard button.

## How to test this app

Follow the steps above to run the program.  Check Robo 3T to verify that the data is being saved.

