import axios from "axios";

const baseService = (mapping) => axios.create({
    baseURL: `https://api.themoviedb.org/3/${mapping}`
})

export default baseService;