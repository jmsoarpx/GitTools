const axios = require("axios");
const GetRepos = async (user) => axios.get(`https://api.github.com/users/${user}/repos`).then((resp) => resp.data);

export default GetRepos;
