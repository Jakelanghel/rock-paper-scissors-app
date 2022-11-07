import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    :root {
        /* PRIMARY */
        /* --scissors-gradient: hsl(39, 89%, 49%) to hsl(40, 84%, 53%);
        --paper-gradient: hsl(230, 89%, 62%) to hsl(230, 89%, 65%);
        --rock-gradient: hsl(349, 71%, 52%) to hsl(349, 70%, 56%);
        --lizard-gradient: hsl(261, 73%, 60%) to hsl(261, 72%, 63%);
        --cyan: hsl(189, 59%, 53%) to hsl(189, 58%, 57%); */

        --white: #EEEEEE;

        --gray: rgb(221, 221, 221),

        --scissors-gradient-1: hsl(39, 89%, 49%);
        --scissors-gradient-2: hsl(40, 84%, 53%);
        --paper-gradient-1: hsl(230, 89%, 62%);
        --paper-gradient-2: hsl(230, 89%, 65%);
        --rock-gradient-1: hsl(349, 71%, 52%);
        --rock-gradient-2: hsl(349, 70%, 56%);
        --lizard-gradient-1: hsl(261, 73%, 60%);
        --lizard-gradient-2: hsl(261, 72%, 63%);

        --cyan-1: hsl(189, 59%, 53%);
        --cyan-2: hsl(189, 58%, 57%);

        /* NEUTRAL  */
        --dark-text: hsl(229, 25%, 31%);
        --score-text: hsl(229, 64%, 46%);
        --header-outline: hsl(217, 16%, 45%);

        /* BACKGROUND  */
        --radialgradient-1: hsl(214, 47%, 23%);
        --radialgradient-2: hsl(237, 49%, 15%);

        /* #1f3756 */
        /* #141539 */
        

     
    }

    html {
        overflow: hidden;
    }

    * {
        box-sizing: border-box;
        font-family: 'Barlow Semi Condensed', sans-serif;
        margin: 0;
        padding: 0;
    }

    body {
        font-family: 'Barlow Semi Condensed', sans-serif;
    }

    .container-app {
        height: 100vh;
        width: 100vw;
        background: rgb(31,55,86);
        background: radial-gradient(circle at top, rgba(31,55,86,1) 53%, rgba(20,21,57,1) 98%);
        
    }

    .rock-bg {
        background-image: linear-gradient(
                120deg,
                hsl(349, 71%, 52%),
                hsl(349, 70%, 56%)
            );
        }

    .paper-bg {
        background-image: linear-gradient(
                120deg,
                hsl(230, 89%, 62%),
                hsl(230, 89%, 65%)
            );
    }

    .scissors-bg {
        background-image: linear-gradient(
                120deg,
                hsl(39, 89%, 49%),
                hsl(40, 84%, 53%)
            );
    }
`;
