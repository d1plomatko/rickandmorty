import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {useRef} from "react";
import {Container} from "@mui/material";
import {useSearchParams} from "react-router-dom";

import {locationsActions} from "../../redux";
import {CustomForm, CustomPagination, CustomTable, Heading} from "../UI";
import {LocationFilters} from "./LocationFilters/LocationFilters";
import {Location} from "./Location/Location";

const Locations = () => {

    const {locations, totalPages} = useSelector(state => state.locationsReducer);
    const dispatch = useDispatch();

    const [query, setQuery] = useSearchParams({page: '1', name: '', type: '', dimension: ''});
    const name = useRef();

    useEffect(() => {
        dispatch(locationsActions.getLocations({
            page: query.get('page'),
            name: query.get('name'),
            type: query.get('type'),
            dimension: query.get('dimension')
        }))
    }, [query])

    const searchByName = () => {
        setQuery({name: name.current.value, page: '1'})
        name.current.value = ''
    }

    const handlePagination = (value) => {
        if (query.get('name')) {
            setQuery({name: query.get('name'), page: value.toString()})
        } else if (query.get('type')) {
            setQuery({type: query.get('type'), page: value.toString()})
        } else if (query.get('dimension')) {
            setQuery({dimension: query.get('dimension'), page: value.toString()})
        } else {
            setQuery({page: value.toString()})
        }

        window.scroll(0, 0)
    }

    const headings = ['Name', 'Type', 'Dimension']

    return (
        <>
            <Heading>Locations</Heading>

            <CustomForm placeholder={'Enter a location name'} reference={name}
                        action={searchByName}/>

            <Container disableGutters={true}
                       sx={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap'}}>

                <LocationFilters/>

                <CustomTable headings={headings} width={'800px'}>
                    {
                        locations.map(location => <Location key={location.id}
                                                            location={location}/>)
                    }
                </CustomTable>

            </Container>

            <CustomPagination handlePagination={handlePagination} totalPages={totalPages}/>
        </>
    )

}

export {Locations}