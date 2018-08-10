import * as React from 'react';
import Logo from '../images/tool.png'
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
            <img src={Logo}/>
            <br/>
            <h3>{this.state.message}</h3>
            <h4>Since last album</h4>
        </div>;
    }


}