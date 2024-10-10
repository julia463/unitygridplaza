import express from 'express'
import path from 'path'
import EventsController from '../controllers/events.js'


import {fileURLToPath} from 'url'

console.log("reached the route for events")

//const __filename = fileURLToPath(import.meta.url)
//const __dirname = path.dirname(__filename)

const router = express.Router()

//router.use(express.static(path.join(__dirname, '../public')));

router.get('/', EventsController.getEvents)
router.get('/:eventId', EventsController.getEventById)

/*router.get('/:eventId', (req, res) => {
    //Need to edit to be the react pages
   res.status(200).sendFile(path.resolve(__dirname, '../../client/public/pet.html'))
   console.log('hii')

})*/

export default router