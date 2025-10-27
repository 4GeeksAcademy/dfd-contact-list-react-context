import React from 'react'
import ReactDOM from 'react-dom/client'

import './styles/index.css'; // Global styles for your application

import { ContactProvider } from './context/contactContext.jsx';
import { StoreProvider }   from './hooks/useGlobalReducer';    // Import the StoreProvider for global state management

import { router }         from "./routes.jsx";      // Import the router configuration
import { RouterProvider } from "react-router-dom";  // Import the StoreProvider for global state management


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>  
        <ContactProvider>
            <RouterProvider router={router} />
        </ContactProvider>            
    </React.StrictMode>
);
