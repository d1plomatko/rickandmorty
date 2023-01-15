import {fetchService} from "./fetch.service";
import {urls} from "../configs";

const locationsService = {
    getLocations: (page, name, type, dimension) => fetchService(`${urls.locations}?page=${page}&name=${name}&type=${type}&dimension=${dimension}`)
};

export {
    locationsService
};