import Axios from 'axios'

export const hello = () => {
    console.log('hello entered');
    Axios.get("http://localhost:8080/api/1").then((response) => {
        console.log(response);
    })
};