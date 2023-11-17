import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import siteLogo from "./static/logo.svg";


const config: DocsThemeConfig = {

darkMode: false,
  
  project: {
    link: 'https://github.com/mr7brown',
  },
  // chat: {
  //   link: 'https://www.linkedin.com/in/ashton-brown-mba-6000238a/',
  //   icon: (
  //     <ImLinkedin2 />
  //   )
  // },
  // docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  
footer: {
    text: (
      <span>
       Ashton G. Brown | {new Date().getFullYear()} ©{' '}
      </span>
    )
  },

  logo: (
    <>
       <img src="/static/logo.png" alt="Ashton Brown logo" width="40em" />
      <span style={{ marginLeft: '.4em', fontWeight: 300, color: "#0284DA", }}>
        DOCS
      </span>
    </>
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
    if (type === 'separator') {
      return (
        <div style={{ background: 'cyan', textAlign: 'center' }}>{title}</div>
      );
    }
    if (title === 'Developer') {
      return <> ⌘ Developer Docs</>;
    }
    if (title === 'TechnicalSpecifications') {
      return <> ⛭ Technical Specifications</>;
    }
    if (title === 'Audio') {
      return <> Raspberry Pi Audio Config</>;
    }
    if (title === 'Rpi') {
      return <> Raspberry Pi Hardware Config</>;
    }
    
    if (title === 'VisualAssets') {
      return <> ⛶ Visualizations</>;
    }
    if (title === 'Storytelling') {
      return <> ⛁ Storytelling with Data</>;
    }
     if (title === 'Release') {
      return <> HBO Release Notes</>;
    }
    if (title === 'Sdk') {
      return <> Embedding The Google Assistant</>;
    }
   
    if (title === 'GitLab') {
      return <> HBO GitLab Config</>;
    }
    if (title === 'Primeday') {
      return <> Prime Day Research</>;
    }
    
   
    return <> {title}</>;

    

  }
},
  

// banner: {
//   text: "test",
// }
  
}
export default config



