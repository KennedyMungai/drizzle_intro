import { drizzle } from 'drizzle-orm/node-postgres'
import { migrate } from 'drizzle-orm/node-postgres/migrator'
import { Pool } from 'pg'

const pool = new Pool({
	connectionString: process.env.DATABASE_URL
})

const db = drizzle(pool)

const main = async () => {
	console.log('Migrations Started')
	await migrate(db, { migrationsFolder: 'drizzle' })
	console.log('Migrations Ended')
	process.exit(0)
}

main().catch((error) => {
	console.error(error)
	process.exit(0)
})
