import {Button,} from "@mui/material";
import {useState} from "react";
import {useSearchParams} from "react-router-dom";

import {CustomAccordion, FiltersBox} from "../../UI";

const LocationFilters = () => {

    const [expanded, setExpanded] = useState(false);
    const [_, setQuery] = useSearchParams({species: '', gender: '', status: '', page: '1'});

    const typeItems = ['planet', 'tv', 'dream']
    const dimensionItems = ['C-137', 'unknown', 'Post-Apocalyptic']


    const handleChange = (isExpanded, panel) => {
        setExpanded(isExpanded ? panel : false)
    }

    return (
        <FiltersBox>

            <CustomAccordion name={'Type'} expanded={expanded} handleChange={handleChange}>
                <>
                    {
                        typeItems.map((type, index) => <Button
                            onClick={() => setQuery({type: type, page: '1'})}
                            key={index}>{type}</Button>)
                    }
                </>
            </CustomAccordion>

            <CustomAccordion name={'Dimension'} expanded={expanded} handleChange={handleChange}>
                <>
                    {
                        dimensionItems.map((dimension, index) => <Button
                            onClick={() => setQuery({dimension: dimension, page: '1'})}
                            key={index}>{dimension}</Button>)
                    }
                </>
            </CustomAccordion>

        </FiltersBox>
    )

}

export {LocationFilters}