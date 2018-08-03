import * as React from 'react';
import './App.css';

const lastRelease : string = '';

class App extends React.Component {

    public render() {
        return (
            <div className="App">
                <h1>Tool new album</h1>
                <h3>{this.getDifference}</h3>
            </div>
        );
    }


    private getDifference: () => string = () => {
        return lastRelease;
    }

}

export default App;
