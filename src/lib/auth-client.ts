import { createAuthClient } from "better-auth/react"
import { usernameClient,passkeyClient } from "better-auth/client/plugins"
export const authClient = createAuthClient({
    baseURL: process.env.BETTER_AUTH_URL, // the base url of your auth server
    plugins: [
        usernameClient(),
        passkeyClient()
    ]
})

