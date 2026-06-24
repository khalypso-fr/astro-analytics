# @khalypso/astro-analytics

Lightweight Astro integration to inject analytics snippets (Google Analytics, Matomo). Configure only the tools you need — the integration accepts a partial map of available tools.

## Quick start

### Install dependencies:

```bash
bun astro add @khalypso/astro-analytics
```

## Usage (Astro)

In your `astro.config.*`:

```ts
import analytics from "@khalypso/astro-analytics";

export default {
	integrations: [
		analytics({
			enabled: true, // True by default
			tools: {
				google: { tagId: "G-XXXXXXX" },
				// you can omit tools you don't use
			}
		})
	]
}
```

## API

- **enabled**: boolean — enable/disable injection at runtime.
- **tools**: partial map of tool options. Only the tools you define will be injected.

## Development

Build the package:

```bash
bun run build
```

License MIT
