import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    :root {
        /* HAND COLORS */
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
        --white: #EEEEEE;
        --gray: rgb(221, 221, 221);

        /* BACKGROUND  */
        --radialgradient-1: hsl(214, 47%, 23%);
        --radialgradient-2: hsl(237, 49%, 15%);
        --backdrop: rgba(0,0,0, .5);

        /* WINNER BACKGROUND */
        --winner-bg: rgba(255, 255, 255, 0.03);

        /* #1f3756 */
        /* #141539 */
        

     
    }

    html {
        overflow-x: hidden;
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

    html, 
    body {
        height: 100%;
    }


    .rock-bg {
        background-image: linear-gradient(
                120deg,
                var(--rock-gradient-1),
                var(--rock-gradient-2)
            );
        }

    .paper-bg {
        background-image: linear-gradient(
                120deg,
                var(--paper-gradient-1),
                var(--paper-gradient-2)
            );
    }

    .scissors-bg {
        background-image: linear-gradient(
                120deg,
                var(--scissors-gradient-1),
                var(--scissors-gradient-2)
            );
    }

    .spock-bg {
        background-image: linear-gradient(
                120deg,
                var(--cyan-1),
                var(--cyan-2)
            );
    }

    .lizard-bg {
        background-image: linear-gradient(
                120deg,
                var(--lizard-gradient-1),
                var(--lizard-gradient-2)
            );
    }
`;
