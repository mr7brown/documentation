import { Head, Html, Main, NextScript } from "next/document";

/**
 * 1) Default `class="dark"` on <html> so SSR matches Tailwind `dark:` (Nextra + next-themes).
 *    Without it, first paint can use light-branch utilities on a dark shell → invisible UI / “white screen”.
 * 2) `suppressHydrationWarning` on <html> + <body> so next-themes can swap classes without hydration errors.
 * 3) Critical inline <style> below: if bundled CSS fails to parse/load, you still get a non-white viewport
 *    and a non-white nav blur strip (historical failure mode for this project).
 */
const criticalShellCss = `
html{background-color:#000;color:#f5f5f7}
html.light{background-color:#f5f5f7;color:#1d1d1f}
/* next-themes can remove both classes for one frame; treat non-light as dark shell */
html:not(.light) body,html:not(.light) #__next{background-color:#000!important;color:#f5f5f7!important}
html.light body,html.light #__next{background-color:#f5f5f7!important;color:#1d1d1f!important}
body{min-height:100vh;margin:0;background-color:inherit;color:inherit}
#__next{min-height:100vh;background-color:inherit}
.nextra-nav-container-blur{background-color:rgba(29,29,31,.92)!important;box-shadow:none!important}
html.light .nextra-nav-container-blur{background-color:rgba(251,251,253,.9)!important}
html:not(.light) .nextra-nav-container-blur{background-color:rgba(29,29,31,.92)!important}
`.replace(/\s+/g, " ");

export default function Document() {
  return (
    <Html lang="en" className="dark" suppressHydrationWarning>
      <Head>
        <style id="shell-fallback" dangerouslySetInnerHTML={{ __html: criticalShellCss }} />
      </Head>
      <body suppressHydrationWarning>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
