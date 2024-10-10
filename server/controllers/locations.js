import {pool} from '../config/database.js'

 const getLocationById = async (req, res) => {
    try {
        //make sure to refine that attriutes that the locations table has the correct attributes

        const selectQuery = `
            SELECT name, address, city, state, zip, image
            FROM locations
            WHERE id=$1
        `
        const locationId = req.params.locationId
        const results = await pool.query(selectQuery,[locationId])
        res.status(200).json(results.rows[0])
    } catch (error){
        res.status(409).json({error: error.message})
    }
} 

const getLocations = async (req, res) => {

    console.log("reached /locations")

    try {
        const results = await pool.query('SELECT * FROM locations ORDER BY id ASC')
        res.status(200).json(results.rows)
    } catch (error){
        res.status(409).json({error:error.message})
    }
}

const getEventsByLocation = async (req, res) => {
    const {locationId} = req.params
    try{
        const results = await pool.query(`
                SELECT *
                FROM events
                WHERE location_id=$1  
            
            `, [locationId])
        res.status(200).json(results.rows)
    }
    catch (error){
        res.status(409).json({error:error.message})
    }
}

export default {getLocations, getLocationById, getEventsByLocation}