import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {Container} from "@mui/material";
import {useSearchParams} from "react-router-dom";
import {useRef} from "react";

import {Episode} from "./Episode/Episode";
import {episodesActions} from "../../redux";
import {CustomForm, CustomPagination, CustomTable, Heading} from "../UI";

const Episodes = () => {

    const {episodes, totalPages} = useSelector(state => state.episodesReducer);
    const dispatch = useDispatch();

    const name = useRef();
    const [query, setQuery] = useSearchParams({page: '1', name: ''});

    const headings = ['Episode', 'Name', 'Air Date']

    useEffect(() => {
        dispatch(episodesActions.getEpisodes({page: query.get('page'), name: query.get('name')}))
    }, [query])

    const searchByName = () => {
        setQuery({name: name.current.value, page: '1'})
        name.current.value = ''
    }

    const handlePagination = (value) => {
        if (query.get('name')) {
            setQuery({name: query.get('name'), page: value.toString()})
        } else {
            setQuery({page: value.toString()})
        }

        window.scroll(0, 0)
    }


    return (
        <Container disableGutters={true}>

            <Heading>Episodes</Heading>

            <CustomForm
                action={searchByName} reference={name}/>

            <CustomTable headings={headings}>
                {
                    episodes.map(episode => <Episode key={episode.id} episode={episode}/>)
                }
            </CustomTable>

            <CustomPagination handlePagination={handlePagination} totalPages={totalPages}/>

        </Container>
    )

}

export {Episodes}