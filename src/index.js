import React from 'react';
import ReactDOM from 'react-dom';
import { red } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import './index.css';
import App from './components/App';

const theme = createTheme({
    palette: {
        primary: {
            main: "#61dafb",
        },
        secondary:{
            main: "#d6da34"
        }
    },
});

ReactDOM.render(
    <React.StrictMode>
       <ThemeProvider theme={theme}>
           <App />
       </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
