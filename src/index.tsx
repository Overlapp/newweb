import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css/animate.min.css";

import './index.css';

import App from './App';

ReactDOM.render(
    <React.StrictMode>
        <Suspense fallback="loading...">
            <App/>
        </Suspense>
    </React.StrictMode>,
    document.getElementById( 'root' )
);


