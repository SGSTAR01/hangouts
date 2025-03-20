import { betterAuth } from "better-auth";
import { nextCookies } from "better-auth/next-js";
import { username } from "better-auth/plugins";
import { passkey } from "better-auth/plugins/passkey";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "../drizzle/database"
import  {schema}  from "../drizzle/schema"
 
export const auth = betterAuth({

    user: {
        additionalFields: {
            bio: {
                type: "string",
                required: false,
                defaultValue: "Hi, I'm new here!",
            },
            location: {
                type: "string",
                required: false,
                defaultValue: "Earth",
            },
            dateOfBirth: {
                type: "date",
                required: false,
            },
        }
    },

    database: drizzleAdapter(db,{
        provider: "sqlite",
        schema: schema,
        
    }),

    emailAndPassword: {
        enabled: true,
    },

    socialProviders:{
        facebook: {
            clientId: process.env.FACEBOOK_CLIENT_ID as string,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET as string,
            mapProfileToUser: (profile) => {
                return {
                    name: profile.name,
                    email: profile.email,
                    image: profile.picture.data.url,
                    username: profile.email.split("@")[0]
                }
            }
        },
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
            display:"popup",
            mapProfileToUser: (profile) => {
                return {
                    name: profile.name,
                    email: profile.email,
                    image: profile.picture,
                    username: profile.email.split("@")[0]
                }
            }
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