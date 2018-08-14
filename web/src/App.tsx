import * as React from 'react';
import './App.css';
import Axios from 'axios'

import BasePage from "./pages/BasePage";
import {serverUrl} from "./utils/domain";

export const http = Axios.create({
    baseURL: serverUrl
});

class App extends React.Component {

    public constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <div className="App">
                <BasePage/>
            </div>
        );
    }
}

export default App;
