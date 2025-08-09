// const express = require('express');
// const {
//     httpGetAllLaunches,
// } = require('./planets.controller');
// const planetsRouter = express.Router();

//  planetsRouter.get('/', httpGetAllLaunches);
//  module.exports = planetsRouter;
const express = require('express');

const {
  httpGetAllPlanets,
} = require('./planets.controller');

const planetsRouter = express.Router();

planetsRouter.get('/', httpGetAllPlanets);

module.exports = planetsRouter;