# 17_Workout_Tracker

## Link to trying out the app and Screenshots:
[Try out the Burger Logger](https://rocky-temple-45102.herokuapp.com/)

![Before Burger Being Vomited](https://github.com/MarioThompson0010/13_Burger_Logger/blob/main/screenshots/screenshot1.PNG)
![After Burger Being Vomited](https://github.com/MarioThompson0010/13_Burger_Logger/blob/main/screenshots/afterBeingDevoured.PNG)

List of technologies and methodologies used: Nodejs, npm, inquirer, Mysql, Express, Express-Handlebars, Javascript,    HTML, CSS, Bootstrap, Heroku, Github, MVC, REST

## Description: Burger Logger

This application lets the user enter the names of burgers into a list.  These names represent burgers.  They initially appear on the left hand side of the screen.  The user may "devour" the burger.  The user does this by clicking the "DEVOUR!" button.  After the burger is devoured, the burger appears on the right hand side of the page. If the user wishes to delete the burgers that have been devoured, she need only click the "Vomit all burgers" button.

The MVC way of organizing the code was used.  The view consists of Handlebars, HTML, and CSS.  The controller is the next layer down.  It passes information from the view down, eventually, to the object relational model (ORM). However, below the controller lies the model.  The model is a burger.  The burger updates itself via the ORM, then sends information all the way back up to the controller, then up to the view.

The program uses a SQL database to store persistent information.  The user interface is a web page.  See the list of technologies used, above.

## How to run the program:

You can go to Heroku (see the link, above) and run it that way, or follow the following steps to run it on your local machine:

1) Open an integrated terminal in the root directory of your project, but it should be the same directory where the
    server.js file lies
2) Type "npm i" to install the dependencies
3) Type "node server.js"
4) Enter the name of a burger you want to eat
5) Click the Add Burger button
6) Devour the burger by clicking the DEVOUR! button
7) Vomit the burger by clicking "Vomit all burgers"

## How to test this app

Follow the steps above to run the program.  After you devour a burger, it should appear on the right hand side of the web page.

