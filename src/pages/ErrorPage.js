import {Container, Typography} from "@mui/material";

const ErrorPage = ({children}) => {

    return(
        <Container sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '90vh'
        }}>
            <Typography fontFamily={'Rowdies, sans-serif'} variant={'h2'}>
                {children}
            </Typography>
        </Container>
    )

}

export {ErrorPage}