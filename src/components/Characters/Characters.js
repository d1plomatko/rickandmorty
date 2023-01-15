import {Box, Container,} from "@mui/material";
import {useEffect} from "react";
import {useSearchParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {Character} from "./Character/Character";
import {CharacterFilters} from "./CharacterFilters/CharacterFilters";
import {charactersActions} from "../../redux";
import {CustomPagination, Heading} from "../UI";


const Characters = () => {

    const {characters, totalPages, error, loading} = useSelector(state => state.charactersReducer);
    const dispatch = useDispatch();

    const [query, setQuery] = useSearchParams({page: '1', species: '', status: '', gender: ''});

    const handlePagination = (value) => {
        if (query.get('species')) {
            setQuery({species: query.get('species'), page: value.toString()})
        } else if (query.get('status')) {
            setQuery({status: query.get('status'), page: value.toString()})
        } else if (query.get('gender')) {
            setQuery({gender: query.get('gender'), page: value.toString()})
        } else {
            setQuery({page: value.toString()})
        }

        window.scrollTo(0, 0)
    }


    useEffect(() => {
        dispatch(charactersActions.getAll({
            page: query.get('page'),
            species: query.get('species'),
            status: query.get('status'),
            gender: query.get('gender')
        }))
    }, [query])


    return (
        <>
            <Heading>Characters</Heading>
            {error && <h1>error</h1>}
            <Container
                fixed={true}
                maxWidth={'lg'}
                disableGutters={true}
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    gap: '30px'
                }}>

                <CharacterFilters/>

                {
                    loading ? <Container sx={{minHeight: '100vh'}}></Container> :
                        <Box sx={{
                            maxWidth: '800px',
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: '25px'
                        }}>
                            {
                                characters.map(character => <Character key={character.id}
                                                                       character={character}/>)
                            }
                        </Box>
                }
            </Container>

            <CustomPagination handlePagination={handlePagination} totalPages={totalPages}/>

        </>
    )

}

export {Characters}