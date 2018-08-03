import * as React from 'react';
import './App.css';

import BasePage from "./pages/BasePage";

class App extends React.Component {

    public render() {
        return (
            <div className="App">
                <BasePage/>
            </div>
        );
    }
}

export default App;
