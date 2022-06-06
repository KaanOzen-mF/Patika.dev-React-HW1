import axios from "axios";

const getData = async (userID) => {
    const {data : User} = await axios("https://jsonplaceholder.typicode.com/users/" + userID);
    const {data : Posts} = await axios("https://jsonplaceholder.typicode.com/posts?userId=" + userID)

    return {User , Posts};
}

export default getData;