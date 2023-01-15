import {fetchService} from "./fetch.service";
import {urls} from "../configs";

const episodesService = {
    getEpisodes: (page, name) => fetchService(`${urls.episodes}?page=${page}&name=${name}`)
}

export {
    episodesService
};