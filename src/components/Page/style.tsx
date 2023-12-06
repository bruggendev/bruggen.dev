import styled, { createGlobalStyle } from "styled-components";

export const Body = createGlobalStyle`

    /* Variable fonts usage:

    } */
    @font-face {
        font-family: InterVariable;
        font-style: normal;
        font-weight: 100 900;
        font-display: swap;
        src: url("/fonts/inter/InterVariable.woff2") format("woff2");
    }
    @font-face {
        font-family: InterVariable;
        font-style: italic;
        font-weight: 100 900;
        font-display: swap;
        src: url("/fonts/inter/InterVariable-Italic.woff2") format("woff2");
    }

    /* static fonts */
    @font-face { font-family: "Inter"; font-style: normal; font-weight: 100; font-display: swap; src: url("Inter-Thin.w/fonts/inter/off2") format("woff2"); }
    @font-face { font-family: "Inter"; font-style: italic; font-weight: 100; font-display: swap; src: url("Inter-ThinItalic.w/fonts/inter/off2") format("woff2"); }
    @font-face { font-family: "Inter"; font-style: normal; font-weight: 200; font-display: swap; src: url("Inter-ExtraLight.w/fonts/inter/off2") format("woff2"); }
    @font-face { font-family: "Inter"; font-style: italic; font-weight: 200; font-display: swap; src: url("Inter-ExtraLightItalic.w/fonts/inter/off2") format("woff2"); }
    @font-face { font-family: "Inter"; font-style: normal; font-weight: 300; font-display: swap; src: url("Inter-Light.w/fonts/inter/off2") format("woff2"); }
    @font-face { font-family: "Inter"; font-style: italic; font-weight: 300; font-display: swap; src: url("Inter-LightItalic.w/fonts/inter/off2") format("woff2"); }
    @font-face { font-family: "Inter"; font-style: normal; font-weight: 400; font-display: swap; src: url("Inter-Regular.w/fonts/inter/off2") format("woff2"); }
    @font-face { font-family: "Inter"; font-style: italic; font-weight: 400; font-display: swap; src: url("Inter-Italic.w/fonts/inter/off2") format("woff2"); }
    @font-face { font-family: "Inter"; font-style: normal; font-weight: 500; font-display: swap; src: url("Inter-Medium.w/fonts/inter/off2") format("woff2"); }
    @font-face { font-family: "Inter"; font-style: italic; font-weight: 500; font-display: swap; src: url("Inter-MediumItalic.w/fonts/inter/off2") format("woff2"); }
    @font-face { font-family: "Inter"; font-style: normal; font-weight: 600; font-display: swap; src: url("Inter-SemiBold.w/fonts/inter/off2") format("woff2"); }
    @font-face { font-family: "Inter"; font-style: italic; font-weight: 600; font-display: swap; src: url("Inter-SemiBoldItalic.w/fonts/inter/off2") format("woff2"); }
    @font-face { font-family: "Inter"; font-style: normal; font-weight: 700; font-display: swap; src: url("Inter-Bold.w/fonts/inter/off2") format("woff2"); }
    @font-face { font-family: "Inter"; font-style: italic; font-weight: 700; font-display: swap; src: url("Inter-BoldItalic.w/fonts/inter/off2") format("woff2"); }
    @font-face { font-family: "Inter"; font-style: normal; font-weight: 800; font-display: swap; src: url("Inter-ExtraBold.w/fonts/inter/off2") format("woff2"); }
    @font-face { font-family: "Inter"; font-style: italic; font-weight: 800; font-display: swap; src: url("Inter-ExtraBoldItalic.w/fonts/inter/off2") format("woff2"); }
    @font-face { font-family: "Inter"; font-style: normal; font-weight: 900; font-display: swap; src: url("Inter-Black.w/fonts/inter/off2") format("woff2"); }
    @font-face { font-family: "Inter"; font-style: italic; font-weight: 900; font-display: swap; src: url("Inter-BlackItalic.w/fonts/inter/off2") format("woff2"); }
    @font-face { font-family: "InterDisplay"; font-style: normal; font-weight: 100; font-display: swap; src: url("InterDisplay-Thin.w/fonts/inter/off2") format("woff2"); }
    @font-face { font-family: "InterDisplay"; font-style: italic; font-weight: 100; font-display: swap; src: url("InterDisplay-ThinItalic.w/fonts/inter/off2") format("woff2"); }
    @font-face { font-family: "InterDisplay"; font-style: normal; font-weight: 200; font-display: swap; src: url("InterDisplay-ExtraLight.w/fonts/inter/off2") format("woff2"); }
    @font-face { font-family: "InterDisplay"; font-style: italic; font-weight: 200; font-display: swap; src: url("InterDisplay-ExtraLightItalic.w/fonts/inter/off2") format("woff2"); }
    @font-face { font-family: "InterDisplay"; font-style: normal; font-weight: 300; font-display: swap; src: url("InterDisplay-Light.w/fonts/inter/off2") format("woff2"); }
    @font-face { font-family: "InterDisplay"; font-style: italic; font-weight: 300; font-display: swap; src: url("InterDisplay-LightItalic.w/fonts/inter/off2") format("woff2"); }
    @font-face { font-family: "InterDisplay"; font-style: normal; font-weight: 400; font-display: swap; src: url("InterDisplay-Regular.w/fonts/inter/off2") format("woff2"); }
    @font-face { font-family: "InterDisplay"; font-style: italic; font-weight: 400; font-display: swap; src: url("InterDisplay-Italic.w/fonts/inter/off2") format("woff2"); }
    @font-face { font-family: "InterDisplay"; font-style: normal; font-weight: 500; font-display: swap; src: url("InterDisplay-Medium.w/fonts/inter/off2") format("woff2"); }
    @font-face { font-family: "InterDisplay"; font-style: italic; font-weight: 500; font-display: swap; src: url("InterDisplay-MediumItalic.w/fonts/inter/off2") format("woff2"); }
    @font-face { font-family: "InterDisplay"; font-style: normal; font-weight: 600; font-display: swap; src: url("InterDisplay-SemiBold.w/fonts/inter/off2") format("woff2"); }
    @font-face { font-family: "InterDisplay"; font-style: italic; font-weight: 600; font-display: swap; src: url("InterDisplay-SemiBoldItalic.w/fonts/inter/off2") format("woff2"); }
    @font-face { font-family: "InterDisplay"; font-style: normal; font-weight: 700; font-display: swap; src: url("InterDisplay-Bold.w/fonts/inter/off2") format("woff2"); }
    @font-face { font-family: "InterDisplay"; font-style: italic; font-weight: 700; font-display: swap; src: url("InterDisplay-BoldItalic.w/fonts/inter/off2") format("woff2"); }
    @font-face { font-family: "InterDisplay"; font-style: normal; font-weight: 800; font-display: swap; src: url("InterDisplay-ExtraBold.w/fonts/inter/off2") format("woff2"); }
    @font-face { font-family: "InterDisplay"; font-style: italic; font-weight: 800; font-display: swap; src: url("InterDisplay-ExtraBoldItalic.w/fonts/inter/off2") format("woff2"); }
    @font-face { font-family: "InterDisplay"; font-style: normal; font-weight: 900; font-display: swap; src: url("InterDisplay-Black.w/fonts/inter/off2") format("woff2"); }
    @font-face { font-family: "InterDisplay"; font-style: italic; font-weight: 900; font-display: swap; src: url("InterDisplay-BlackItalic.woff2") format("woff2"); }

    :root { 
        font-family: "Inter", sans-serif; 
    }
    @supports (font-variation-settings: normal) {
        :root { font-family: "InterVariable", sans-serif; font-optical-sizing: auto; }
    }

    body {
        margin: 0;
        padding: 0;
        
        --text-color: #222222;
        --yellow: #e6c320;
        --content-width: 780px;
    }

    * {
        box-sizing: border-box;
    }

    a { 
        color: #d80032
    }

`;

export const Main = styled.main``;
