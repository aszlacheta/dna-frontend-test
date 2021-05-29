# dna-frontend-test
This project was prepared to verify candidate's experience regarding frontend development.
It is built using: 
* React
* Redux
* Axios (asynchronous calls)
* i18next (internationalization)
* Babel (transpiling)
* Webpack (development environment, build environments)

Regarding testing, it takes into consideration:
* unit tests (Jest)
* e2e tests (Cypress)

## How to run application?
To be able to run the application:
1. Clone repository
1. Make sure you checked out latest `master` branch
1. Create `.env` file with all the fields mentioned in `.env.example`
1. Run `npm i`
1. Run `npm start`
1. Application should start on `http://localhost:3000`

Attention! Remember to make sure backend runs on the url and port set in `.env` config file.

## How to run unit tests?
To run unit tests simply run NPM script: `npm run test`.

## How to generate code documentation? 
To generate documentation from the code simply run NPM script: `npm run jsdoc`.

## How to run static code analysis (via ESlint)?
To run static code analysis run NPM script `npm run eslint`

What should be further developed?
TBD

What should be added?
TBD