import { createAuthClient } from "better-auth/react"
import { usernameClient,passkeyClient, inferAdditionalFields } from "better-auth/client/plugins"
import type { auth } from "./auth"

export const authClient = createAuthClient({
    baseURL: process.env.BETTER_AUTH_URL, // the base url of your auth server
    plugins: [
        usernameClient(),
        passkeyClient(),
        inferAdditionalFields<typeof auth>()
    ]
})

