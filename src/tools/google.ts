import type { CommonToolOptions, SnippetFunction } from "../tool-types";
import { generateTypeForScript } from "../utils";

export interface GoogleToolOptions extends CommonToolOptions {
    tagId: string;
}

export const googleSnippet: SnippetFunction<GoogleToolOptions> = ({tagId, partytown}) => {
    return `
    <!-- Google tag (gtag.js) -->
    <script async type=${generateTypeForScript(partytown)} src="https://www.googletagmanager.com/gtag/js?id=${tagId}"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', '${tagId}');
    </script>
    `
}
