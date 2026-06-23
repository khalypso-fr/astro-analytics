import { googleSnippet } from "./google";

export const tools = {
    google: googleSnippet
} satisfies Record<string, (O: never) => string>