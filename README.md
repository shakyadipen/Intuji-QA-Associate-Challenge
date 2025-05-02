# Intuji-QA-Associate-Challenge
This is a cypress test automation project designed for ecommerce application.
#Setup and Installation Guidelines
To run the tests from this repo on your local machine, first make sure your machine meets the Cypress System Requirements, including the installation of Node.js according to the version specified in the file .node-version.
Executing the following instructions will clone the repository, install dependencies and run Cypress:
git clone https://github.com/cypress-io/Cypress\Intuji-QA-Associate-Challenge.git
cd Cypress\Intuji-QA-Associate-Challenge

npm run local:run # run Cypress headlessly
local:run is a package.json script that starts a local webserver and then uses cypress run to run Cypress headlessly. If you would like to run Cypress tests interactively, then run the following command which uses cypress open to run Cypress in headed mode. You can pick individual tests to run.
npm run local:open
As an alternative to using the local:open and local:run scripts, you can also start the server in one step and then run Cypress in a second step.
npm start # start server on port 8080
You can check that the server is running if you open a web browser and navigate to http://localhost:8080.
Then in a separate terminal window execute either
npx cypress run # for headless mode
or
npx cypress open # for headed interactive mode

