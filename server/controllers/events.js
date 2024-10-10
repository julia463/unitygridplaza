import {pool} from '../config/database.js'

const getEventById = async (req, res) => {
    try {
        const selectQuery = `
            SELECT title, date, time, image, location_id
            FROM events
            WHERE id=$1
        `
        const eventId = req.params.eventId
        const results = await pool.query(selectQuery,[eventId])
        res.status(200).json(results.rows[0])
    } catch (error){
        res.status(409).json({error: error.message})
    }
} 

const getEvents = async (req, res) => {
    console.log("reached /events")

    try {
        const results = await pool.query('SELECT * FROM events ORDER BY id ASC')
        res.status(200).json(results.rows)
    } catch (error){
        res.status(409).json({error:error.message})
    }
}

export default {getEvents, getEventById}