import type { AstroIntegration } from "astro";
import type { SnippetFunction } from "./tool-types";
import { tools as toolsDefinitions } from "./tools";
import type { ToolsParams } from "./types";
import { entriesFromObject } from "./utils";

interface AnalyticsOptions {
	enabled?: boolean;
	tools: ToolsParams;
}

const analytics = ({
	enabled = true,
	tools,
}: AnalyticsOptions): AstroIntegration => {
	return {
		name: "@khalypso/astro-analytics",
		hooks: {
			"astro:config:setup": async (ctx) => {
				if (!enabled) return;
				for (const [toolKey, toolOptions] of entriesFromObject(tools)) {
					const toolDefinition = toolsDefinitions[toolKey] as SnippetFunction<
						typeof toolOptions
					>;
					const generated = toolDefinition(toolOptions);
					const snippets =
						typeof generated === "string" ? [generated] : generated;
					for (const snippet of snippets) {
						ctx.injectScript("head-inline", snippet);
						ctx.logger.info(`Injected snippet for tool: ${toolKey}`);
					}
				}
			},
		},
	};
};

export default analytics;
