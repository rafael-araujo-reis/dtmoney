import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

    :root{
    --background: #F0F2F5;    
    --shape: #FFFFFF;    

    --green: #33CC95;
    --red: #E62E4D;    
    --blue: #5429CC;    
    --white: #FFFFFF;

    --blue-light: #6933FF;    

    --text-title: #363F5F;
    --text-body: #969CB3;
    }

    *{
        margin:0;
        padding: 0;
        box-sizing: border-box;
    }

    html{
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }
        @media (max-width: 720px) {
            font-size: 83.5%;
        }
    }

    body{
        background: var(--background);
        --webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button{
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }
    
    h1, h2, h3, h4, h5, h6{
        font-weight: 600;
    }

    button{
        cursor: pointer;
    }

    [disabled]{
        opacity: 0.6;
        cursor: not-allowed;
    }

    .react-modal-overlay{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
     
        background: rgba(0,0,0,0.6);

        

        display: flex;
        justify-content:center;
        align-items: center;
    }
    .react-modal-content{
        width: 100%;
        max-width: 576px;
        padding: 3rem;

        position: relative;
        display: flex;

        border-radius: 0.25rem;

        justify-content: center;
        align-items: center;

        background-color: #F0F2F5;
    }
    .react-modal-close{
        position: absolute;
        right: 0;
        top: 0;

        margin: 1rem;

        background-color: transparent;
        border: none;

        transactions: filter 0.3s;

        &:hover{
            filter: brightness(0.8);
        }
    }
`