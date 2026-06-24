import type { CommonToolOptions, SnippetFunction } from "../tool-types";
import { generateTypeForScript } from "../utils";

export interface MatomoToolOptions extends CommonToolOptions {
    siteUrl?: string;
    siteId: string;
}

export const matomoSnippet: SnippetFunction<MatomoToolOptions> = ({siteUrl, siteId, partytown}) => {
    return `
<!-- Matomo -->
<script type=${generateTypeForScript(partytown)}>
  var _paq = window._paq = window._paq || [];
  _paq.push(['trackPageView']);
  _paq.push(['enableLinkTracking']);
  (function() {
    var u="${siteUrl}";
    _paq.push(['setTrackerUrl', u+'matomo.php']);
    _paq.push(['setSiteId', '${siteId}']);
    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
    g.type='text/javascript'; g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
  })();
</script>
<!-- End Matomo Code -->
`
}


