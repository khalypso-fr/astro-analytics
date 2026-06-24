import type { SnippetFunction } from "../tool-types";
import type { GoogleToolOptions } from "./google";
import { googleSnippet } from "./google";
import { matomoSnippet, type MatomoToolOptions } from "./matomo";

export const tools: { google: SnippetFunction<GoogleToolOptions>; matomo: SnippetFunction<MatomoToolOptions> } = {
    google: googleSnippet,
    matomo: matomoSnippet
} as const