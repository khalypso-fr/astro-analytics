import type { CommonToolOptions } from "../types";

export interface GoogleToolOptions extends CommonToolOptions {
    tagId: string;
}

export const googleSnippet = ({tagId, partytown}: GoogleToolOptions) => {
    return `
    <!-- Google tag (gtag.js) -->
    <script async ${partytown ? `type="text/partytown" ` : ""}src="https://www.googletagmanager.com/gtag/js?id=${tagId}"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', '${tagId}');
    </script>
    `
}
