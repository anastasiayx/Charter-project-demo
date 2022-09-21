# Transactions rewards app demo

This is a [Next.js](https://nextjs.org/) project

## Getting Started

use Node version 16+

1. `npm install`
2. `npm run start`

## Unit testing

All the unit testing files are in the `__test__` folder

`npm run test:unit`

## E2E testing

All the e2e testing files are in the `cypress/e2e` folder

1. `npm run start`
2. create a new terminal to run: `npm run test:e2e`

## APIs

All APPs files are in the `pages/api` folder and mockData is in the `db` folder

## TODO

I am assuming `calculateRewards` function should to hanlde by the backend services with each transaction create,
Since it is not clear from the requirement documentation, I have put it in the `db/db.mock.js`.
