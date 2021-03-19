const axios = require("axios");
const GetStarred = async (user) => axios.get(`https://api.github.com/users/${user}/starred`).then((resp) => resp.data);

export default GetStarred;
