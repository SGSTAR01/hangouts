import { defineConfig } from 'drizzle-kit';

export default defineConfig({
    dialect: 'sqlite',
    out: './src/drizzle',
    schema: './src/drizzle/schema.ts',
    dbCredentials: {
        url: process.env.DB_FILE_NAME!,
    },

})