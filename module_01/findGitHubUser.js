import axios from "axios";

const findGitHubUser = async (username) => {
    try {
        const { data } = await axios.get(`https://api.github.com/search/users?q=${username}`);
        return data;
    } catch (error) {
        console.log(error.response?.status);
    }
}

export default findGitHubUser;