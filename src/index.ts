import type { AstroIntegration } from "astro";
import { tools as toolsDefinitions } from "./tools";
import { entriesFromObject } from "./utils";
import type { CommonToolOptions, PartiallyRequired } from "./types";

interface AnalyticsOptions {
    partytown?: boolean;
    enabled?: boolean;
    tools: PartiallyRequired<{ [K in keyof typeof toolsDefinitions]: Omit<Parameters<typeof toolsDefinitions[K]>[0], keyof CommonToolOptions> }, keyof typeof toolsDefinitions>
};

export default function analytics({enabled = true, partytown = false, tools}: AnalyticsOptions): AstroIntegration {
  return {
    name: "@khalypso/astro-analytics",
    hooks: {
      "astro:config:setup": async ({ injectScript }) => {
        if(!enabled) return;
        for(const [toolKey, toolOptions] of entriesFromObject(tools)) {
            const snippet = toolsDefinitions[toolKey]({ partytown, ...toolOptions});
            injectScript("head-inline", snippet);
        }
      },
    },
  };
}