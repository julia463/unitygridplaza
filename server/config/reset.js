import { pool } from './database.js'


const createEventsTable = async () => {
    const createTableQuery = `
        DROP TABLE IF EXISTS events;


        CREATE TABLE IF NOT EXISTS events (

            id SERIAL PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            date DATE NOT NULL,
            time TIME NOT NULL
            image VARCHAR (255) NOT NULL
        )
    `
}

const createLocationsTable = async () => {
    const createTableQuery = `
        DROP TABLE IF EXISTS locations;


        CREATE TABLE IF NOT EXISTS locations (
        )
    `
}
export default {createEventsTable, createLocationsTable}