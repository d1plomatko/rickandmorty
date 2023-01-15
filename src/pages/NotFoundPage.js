import {Container, Typography} from "@mui/material";

const NotFoundPage = () => {

    return (
        <Container sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '90vh'
        }}>
            <Typography fontFamily={'Rowdies, sans-serif'} variant={'h2'}>Not Found</Typography>
        </Container>
    )

}

export {NotFoundPage}