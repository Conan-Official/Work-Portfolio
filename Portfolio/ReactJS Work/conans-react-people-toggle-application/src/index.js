import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './containers/Main'; 
import registerServiceWorker from './registerServiceWorker';


const root = document.getElementById('root'); 
ReactDOM.render(
    
    <React.Fragment>
            <Main />
    </React.Fragment>
    
    , root);
registerServiceWorker();
