/* eslint-disable import/no-anonymous-default-export */
const axios = require("axios");
const GetUser = async (user) => axios.get(`https://api.github.com/users/${user}`).then((resp) => resp.data);

export default GetUser;
