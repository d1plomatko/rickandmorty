import {TableCell, TableRow} from "@mui/material";

const Episode = ({episode}) => {


    return (
        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell>{episode.episode}</TableCell>
            <TableCell>{episode.name}</TableCell>
            <TableCell>{episode.air_date}</TableCell>
        </TableRow>
    )

}

export {Episode}