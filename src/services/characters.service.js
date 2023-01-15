import {fetchService} from "./fetch.service";
import {urls} from "../configs";

const charactersService = {
    getAll: (page, species, status, gender) => fetchService(`${urls.characters}?page=${page}&species=${species}&status=${status}&gender=${gender}`)
}

export {
    charactersService
}