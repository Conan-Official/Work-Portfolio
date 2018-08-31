import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Home from "./components/home";
let root = document.querySelector("#root"); 

ReactDOM.render(<React.Fragment>
<Home />
</React.Fragment>, root);