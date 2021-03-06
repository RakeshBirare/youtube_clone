import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import 'react-lazy-load-image-component/src/effects/blur.css';

import "bootstrap/dist/css/bootstrap.min.css";
import "./_base.scss";
import { Provider } from "react-redux";
import store from "./redux/store";

ReactDOM.render(
    <Provider store={store}>
        
            <App />
        
    </Provider>
    ,document.getElementById("root"))