import { QuartzComponentConstructor } from "./types"

export default (() => {
  function HeadingStyles() {
    return null // This component only injects CSS
  }

  HeadingStyles.css = `
    :root {
      --h1-color: #ef5350;
      --h1-gradient: var(--h1-color), #e57373, #f06292;

      --h2-color: #ffa726;
      --h2-gradient: var(--h2-color), #ffb74d, #ffcc80;

      --h3-color: #ffd54f;
      --h3-gradient: var(--h3-color), #ffd54f, #ffe082;

      --h4-color: #a5d6a7;
      --h4-gradient: var(--h4-color), #aed581, #e6ee9c;

      --h5-color: #90caf9;
      --h5-gradient: var(--h5-color), #80deea, #80cbc4;

      --h6-color: #ce93d8;
      --h6-gradient: var(--h6-color), #b39ddb, #f8bbd0;
    }

    h1 {
      background: linear-gradient(to right, var(--h1-gradient));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    h2 {
      background: linear-gradient(to right, var(--h2-gradient));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    h3 {
      background: linear-gradient(to right, var(--h3-gradient));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    h4 {
      background: linear-gradient(to right, var(--h4-gradient));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    h5 {
      background: linear-gradient(to right, var(--h5-gradient));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    h6 {
      background: linear-gradient(to right, var(--h6-gradient));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  `

  return HeadingStyles
}) satisfies QuartzComponentConstructor
