import * as moment from "moment";
import {lastRelease} from "../model/data";

export const getDifference: () => string = () => {
    const now = moment();
    const duration = moment.duration(now.diff(lastRelease));
    const years = duration.years();
    const months = duration.months();
    const days = duration.days();
    const hours = duration.hours();
    const minutes = duration.minutes();
    const seconds = duration.seconds();
    return `${years}y ${months}m ${days}d ${hours}h ${minutes}m ${seconds}s`
};