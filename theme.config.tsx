import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
const config: DocsThemeConfig = {
  /* Apple-style link / accent (matches apple.com blues in hsl() theme tokens) */
  primaryHue: { light: 211, dark: 211 },
  primarySaturation: { light: 100, dark: 88 },

  /* Default to dark so Nextra + OS agree with the black product-page shell */
  nextThemes: {
    defaultTheme: "dark",
  },

  search: {
    placeholder: "Search portfolio...",
  },

// darkMode: false,
  
  project: {
    link: 'https://github.com/mr7brown',
  },
  chat: {
    link: 'https://www.linkedin.com/in/ashton-brown-mba-6000238a/',
    icon: (
       <img src="/static/linkedin.svg" color="red" alt="Ashton Brown logo" width="25em" />
    )
  },
  // docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  
footer: {
    text: (
      <span className="apple-footer-text">
        Ashton G. Brown | {new Date().getFullYear()} ©{" "}
      </span>
    ),
  },

  logo: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="apple-nav-home-icon"
      role="img"
      aria-label="Home"
    >
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  ),

  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Ashton Brown Portfolio" />
      <meta property="og:description" content="DOCS" />
      <link rel="shortcut icon" href="/static/favicon.ico" />
      <title>Ashton Brown Portfolio</title>
    </>
  ),

  editLink: {
    text:""

  },

feedback: {
  content: null
},
  
  sidebar:
{
  defaultMenuCollapseLevel: 1,
  
  titleComponent: ({ title, type }) => {
    if (type === "separator") {
      return <div className="apple-sidebar-separator">{title}</div>;
    }
    if (title === 'Developer') {
      return <> ⌘ DOCS-AS-CODE</>;
    }
    if (title === 'TechnicalSpecifications') {
      return <> ⛭ SPECIFICATIONS</>;
    }
    if (title === 'Audioconfig') {
      return <> Raspberry Pi Audio Config</>;
    }
    if (title === 'Raspberrypi') {
      return <> Raspberry Pi Hardware Config</>;
    }
    
    if (title === 'VisualAssets') {
      return <> ⛶ DESIGN</>;
    }
    if (title === 'Storytelling') {
      return <> ⛁ STORYTELLING W/ DATA</>;
    }
     if (title === 'Release') {
      return <> HBO Release Notes</>;
    }
    if (title === 'Googlesdk') {
      return <> Embedding The Google Assistant</>;
    }
   
    if (title === 'Gitlabconfig') {
      return <> HBO GitLab Config</>;
    }
    if (title === 'Primeday') {
      return <> Prime Day Research</>;
    }
    if (title === 'Multichannelinvestment') {
      return <> Multichannel Investment Research</>;
    }
    if (title === 'Sdr') {
      return <> HBO SDR Specification</>;
    }
    if (title === 'Mmc') {
      return <> Media Manifest Core</>;
    }
    if (title === 'dev') {
      return <> ⌨ DEVELOPMENT</>;
    }
    if (title === 'presentations') {
      return <> ✩ PRESENTATIONS</>;
    }
    if (title === 'Maximages') {
      return <> HBO Max Image Specifications Site</>;
    }
    if (title === 'Assetsecurity') {
      return <> Sumo Logic Asset Security</>;
    }
    if (title === 'Fbdeck') {
      return <> Facebook One-pager</>;
    }
    if (title === 'Encodingprofile') {
      return <> HBO Max Encoding Profile</>;
    }
    if (title === 'Next') {
      return <> NextJS Portfolio</>;
    }
    if (title === 'Filename') {
      return <> HBO Max Filename</>;
    }
    if (title === 'Allresearch') {
      return <> Published Research</>;
    }
    if (title === 'Siem') {
      return <> Security Information and Event Management</>;
    }
   
    return <> {title}</>;

    

  }
},
  

// banner: {
//   text: "test",
// }
  
}
export default config



