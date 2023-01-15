import {
    Box, Paper,
    Typography
} from "@mui/material";

const FiltersBox = ({children}) => {

    return (
        <Box component={Paper} sx={{
            width: '300px',
            maxHeight: '400px',
            height: '100%'
        }}>
            <Typography fontFamily={'Rowdies, sans-serif'} variant={'h6'} sx={{
                display: 'flex',
                justifyContent: 'center',
                margin: '20px 0'
            }}>Filters</Typography>
            {children}
        </Box>
    )

}

export {FiltersBox}