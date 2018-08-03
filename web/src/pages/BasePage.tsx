import {lastRelease} from "../model/data";
import * as moment from 'moment';
import * as React from 'react';
import {getRightSuffixForNounWithNumber, getRightWordForNounWithNumber} from "../stringUtils";


export default class BasePage extends React.Component {
    public state = {message: ''}

    public constructor(props: any) {
        super(props);
        this.setState({message: this.getDifference()});
    }

    public componentDidMount() {
        setInterval(() => {
            this.setState({message: this.getDifference()});
        }, 1000);
    }

    public render() {
        return <div>
            <h1>Tool new album</h1>
            <h3>{this.state.message}</h3>
        </div>;
    }

    private getDifference: () => void = () => {
        const now = moment();
        const duration = moment.duration(now.diff(lastRelease));
        const years = duration.years();
        const months = duration.months();
        const days = duration.days();
        const hours = duration.hours();
        const minutes = duration.minutes();
        const seconds = duration.seconds();
        return `${years} ${getRightWordForNounWithNumber(years, 'год', 'года', 'лет')} ${months} месяц${getRightSuffixForNounWithNumber(months, '','а','ев')} ${days} ${getRightWordForNounWithNumber(days, 'день', 'дня', 'дней')} ${hours} час${getRightSuffixForNounWithNumber(hours, '','а','ов')} ${minutes} ${getRightWordForNounWithNumber(minutes, 'минута','минуты','минут')} ${seconds} секунд${getRightSuffixForNounWithNumber(seconds, 'а','ы','')}`
    };
}