import { betterAuth } from "better-auth";
import { nextCookies } from "better-auth/next-js";
import { username } from "better-auth/plugins";
import { passkey } from "better-auth/plugins/passkey";
import Database from "better-sqlite3";
 
export const auth = betterAuth({
    database: new Database("./sqlite.db"),

    emailAndPassword: {
        enabled: true,
    },

    socialProviders:{
        facebook: {
            clientId: process.env.FACEBOOK_CLIENT_ID as string,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET as string,
        },
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }
    },

    account:{
        accountLinking: {
            enabled: true,
            trustedProviders: ["facebook","google"]
        },
    },

    session: {
        expiresIn: 60 * 60 * 24 * 7, // 7 days
        updateAge: 60 * 60 * 24 // 1 day (every 1 day the session expiration is updated)
    },

    plugins: [
        username(),
        passkey(),
        nextCookies()
    ]
})