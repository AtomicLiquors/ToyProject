import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme.ts'

import App from './App.tsx';

const rootNode: HTMLElement = document.getElementById('root')!;

ReactDOM.createRoot(rootNode).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </React.StrictMode>
);

