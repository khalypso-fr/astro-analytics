import type { SnippetFunction } from "../tool-types";

export interface GoogleToolOptions {
	tagId: string;
}

export const googleSnippet: SnippetFunction<GoogleToolOptions> = ({
	tagId,
}) => {
	return [
		`var script = document.createElement("script");
script.setAttribute("src", "https://www.googletagmanager.com/gtag/js?id=${tagId}");
script.setAttribute("async", "");
var head = document.querySelector("head");
head.appendChild(script);
    `,
		`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', '${tagId}');`,
	];
};
