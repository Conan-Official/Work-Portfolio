import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import { Provider } from 'react-redux'; 
import {createStore} from 'redux'; 
import Header from './components/Header';
import ArchApp from './classComponents/ArchApp'; 
import registerServiceWorker from './registerServiceWorker';
import { searchModule } from './reducers';


const store = createStore(searchModule); 

let root = document.getElementById('root'); 



ReactDOM.render(
<React.Fragment>
    <Header title={`InvisionCore Architecture Study Guide`}/> 
    <Provider store={store}>
        <ArchApp />
    </Provider>
    
</React.Fragment>, root);

registerServiceWorker();
