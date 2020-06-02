import express from 'express'

import PointsController from './controllers/PointController'
import ItemsController from './controllers/itemsController'

const routes = express.Router()
const pointsController = new PointsController()
const itemsController = new ItemsController()

routes.get('/items', itemsController.index)

routes.post('/points', pointsController.create)
routes.get('/points/:id', pointsController.show)

export default routes