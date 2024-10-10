import express from 'express'
import path from 'path'
import LocationsController from '../controllers/locations.js'

console.log("reached the route for locations")
import {fileURLToPath} from 'url'

//const __filename = fileURLToPath(import.meta.url)
//const __dirname = path.dirname(__filename)

const router = express.Router()

//router.use(express.static(path.join(__dirname, '../public')));

router.get('/', LocationsController.getLocations)
router.get('/:locationId', LocationsController.getLocationById)
router.get('/:locationId/events', LocationsController.getEventsByLocation)

/*router.get('/:locationId', (req, res) => {
    //Need to edit to be the react pages
   res.status(200).sendFile(path.resolve(__dirname, '../../client/public/pet.html'))
   console.log('hi queen')

}) */

export default router