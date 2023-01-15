import {Button,} from "@mui/material";
import {useState} from "react";
import {useSearchParams} from "react-router-dom";

import {CustomAccordion, FiltersBox} from "../../UI";


const CharacterFilters = () => {

    const [expanded, setExpanded] = useState('');
    const [query, setQuery] = useSearchParams({species: '', gender: '', status: '', page: '1'});

    const speciesItems = ['human', 'alien', 'humanoid', 'unknown']
    const statusItems = ['alive', 'dead', 'unknown']
    const genderItems = ['male', 'female', 'genderless', 'unknown']


    const handleChange = (isExpanded, panel) => {
        setExpanded(isExpanded ? panel : '')
    }

    return (

        <FiltersBox>
            <CustomAccordion name={'Species'} expanded={expanded} handleChange={handleChange}>
                <>
                    {
                        speciesItems.map((species, index) => <Button
                            onClick={() => setQuery({species: species, page: '1'})}
                            key={index}>{species}</Button>)
                    }
                </>
            </CustomAccordion>

            <CustomAccordion name={'Status'} expanded={expanded} handleChange={handleChange}>
                <>
                    {
                        statusItems.map((status, index) => <Button
                            onClick={() => setQuery({status: status, page: '1'})}
                            key={index}>{status}</Button>)
                    }
                </>
            </CustomAccordion>

            <CustomAccordion name={'Gender'} expanded={expanded} handleChange={handleChange}>
                <>
                    {
                        genderItems.map((gender, index) => <Button
                            onClick={() => setQuery({gender: gender, page: '1'})}
                            key={index}>{gender}</Button>)
                    }
                </>
            </CustomAccordion>
        </FiltersBox>


    )

}

export {CharacterFilters}