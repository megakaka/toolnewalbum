import {http} from "../App";

export const hello = () => {
    console.log(process.env);
    http.get("/1").then((response) => {
        console.log(response);
    })
};