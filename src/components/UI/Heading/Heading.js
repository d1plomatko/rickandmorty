import {Typography} from "@mui/material";

const Heading = ({children}) => {

    return (
        <Typography component={'h1'} variant={'h3'}
                    sx={{display: 'flex', justifyContent: 'center', margin: '110px auto 40px'}} fontFamily={'Rowdies, sans-serif'}>
            {children}
        </Typography>
    )

}

export {Heading}