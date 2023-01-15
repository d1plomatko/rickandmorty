import {Button, Container, Paper, TextField} from "@mui/material";

const CustomForm = ({action, buttonName = 'Search', placeholder='Enter an episode name', reference}) => {


    return (
        <Container
            component={Paper}
            maxWidth={'lg'}
            sx={{
                margin: '40px auto 40px',
                display: 'flex',
                justifyContent: 'space-between',
                padding: '24px 0'
            }}>
            <TextField inputRef={reference} placeholder={placeholder} sx={{width: '80%'}}/>
            <Button variant={'contained'} onClick={action} sx={{width: '15%'}}>{buttonName}</Button>
        </Container>
    )

}

export {CustomForm}