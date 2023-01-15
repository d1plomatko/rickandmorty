import {Accordion, AccordionDetails, AccordionSummary} from "@mui/material";
import {useState} from "react";

const CustomAccordion = ({children, name, expanded, handleChange}) => {

    // const [expanded, setExpanded] = useState(false);
    //
    // const handleChange = (isExpanded, panel) => {
    //     setExpanded(isExpanded ? panel : false)
    //     console.log(expanded)
    // }

    return(
        <Accordion expanded={expanded === name}
                   onChange={(_, isExpanded) => handleChange(isExpanded, name)}>
            <AccordionSummary expandIcon={<i
                className="fa-solid fa-chevron-down"></i>}>{name}</AccordionSummary>
            <AccordionDetails>
                <>
                    {children}
                </>
            </AccordionDetails>
        </Accordion>
    )

}

export {CustomAccordion}