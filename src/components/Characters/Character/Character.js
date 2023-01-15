import {useState} from "react";

import {Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material";
import {PopUp} from "./PopUp/PopUp";


const Character = ({character}) => {

    const [toggle, setToggle] = useState(false);

    return (
        <>
            <PopUp toggle={toggle} setToggle={setToggle} character={character}/>

            <Card sx={{
                width: 250,
                height: 350
            }}
                  onClick={() => setToggle(true)}>

                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="200"
                        image={character.image}
                        alt={character.name}
                    />

                    <CardContent>

                        <Typography gutterBottom variant="h5" component="div" sx={{height: 60}}>
                            {character.name}
                        </Typography>

                        <Typography variant="body2" color="text.secondary">
                            Species - {character.species}
                        </Typography>

                    </CardContent>

                </CardActionArea>

            </Card>
        </>
    )

}

export {Character}