import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import Hello from './components/Hello';
import App from "./components/App"; 
import registerServiceWorker from './registerServiceWorker';


let root = document.getElementById('root'); 

ReactDOM.render(
<React.Fragment>
    <Hello message={`InvisionCore Community Example`} />
    <App />
</React.Fragment>
, root);
registerServiceWorker();
