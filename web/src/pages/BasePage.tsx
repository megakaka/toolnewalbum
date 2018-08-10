import * as React from 'react';
import {getDifference} from "../utils/timeUtils";


export default class BasePage extends React.Component {
    public state = {message: getDifference()}

    public componentDidMount() {
        setInterval(() => {
            this.setState({message: getDifference()});
        }, 1000);
    }

    public render() {
        return <div>
            <h1>Tool new album</h1>
            <br/>
            <h3>{this.state.message}</h3>
            <h4>Since last album</h4>
        </div>;
    }


}