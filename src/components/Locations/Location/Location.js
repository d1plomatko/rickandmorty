import {TableCell, TableRow} from "@mui/material";

const Location = ({location}) => {

    return(
        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell>{location.name}</TableCell>
            <TableCell>{location.type}</TableCell>
            <TableCell>{location.dimension}</TableCell>
        </TableRow>
    )

}

export {Location}