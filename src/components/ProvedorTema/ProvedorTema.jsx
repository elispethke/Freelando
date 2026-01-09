import { ThemeProvider } from "@emotion/react";

const theme = {
    colors:{

        white: '#FFFFFF',
        warning: '#FF0E0E',
        focus: '#B009FF',

         primary: {
            a: '#5754ED',
            b: '#D93114',
            c: '#168070',
         },
         secondary:{
            a: '#EBEAF9',
            b: '#FDF8F8',
            c: '#EBFCF9',
         },
         neutral:{
            a: '#373737',
            b: '#E8E8E8',
            c: '#F5F5F5',
            d: '#FFFFFF',

         },
         dark:{
            a: '',
            b: '',
         },

    },
    // Os espaçamentos dos componentes 
    spacing:{
        s: '16px',
        l: '32px',
    },
    fontFamily: "'Montserrat', sans-serif",
}

export const ProvedorTema = ({ children }) => {

    return (
      <ThemeProvider theme={theme}>
         {children}
      </ThemeProvider>
    );
};