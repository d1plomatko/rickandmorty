import {
    Avatar, Box,
    Button,
    Dialog,
    DialogContent,
    DialogTitle,
    Typography
} from "@mui/material";


const PopUp = ({toggle, setToggle, character}) => {


    return (

        <Dialog
            onClose={() => setToggle(false)}
            fullWidth={true}
            maxWidth={'sm'}
            aria-labelledby="customized-dialog-title"
            open={toggle}
        >
            <DialogTitle id="customized-dialog-title" sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <Typography variant={'h5'}>{character.name}</Typography>
                <Button onClick={() => setToggle(false)}>Close</Button>
            </DialogTitle>
            <DialogContent dividers sx={{
                display: 'flex',
                gap: '20px',
                alignItems: 'center'
            }}>
                <Avatar alt={character.name}
                        src={character.image}
                        sx={{
                            width: '100px',
                            height: '100px'
                        }}/>
                <Box>
                    <Typography gutterBottom>
                        Species - {character.species}
                    </Typography>
                    <Typography gutterBottom>
                        Status - {character.status}
                    </Typography>
                    <Typography gutterBottom>
                        Origin - {character.origin.name}
                    </Typography>
                </Box>
            </DialogContent>
        </Dialog>

    )

}

export {PopUp}