import sqlite3 from "sqlite3";
import { Database, open } from "sqlite";
import { homedir } from "os";
import { resolve } from "path";

// Resolve the path to the database file in the user's home directory
const dbPath = resolve(homedir(), 'sqlite', 'users.db');

// Open the database connection
export const dbPromise = open({
    filename: dbPath,
    driver: sqlite3.Database
});

// Function to initialize the database
export const initializeDatabase = async () => {
    const db = await dbPromise;
    await db.exec(`
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            email TEXT NOT NULL UNIQUE,
            username TEXT NOT NULL UNIQUE
        )
    `);
}

// Export the database type for use in other parts of the application
export type DB = Database<sqlite3.Database, sqlite3.Statement>;
