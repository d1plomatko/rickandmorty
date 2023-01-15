import {Button, Checkbox, TableCell, TableRow, Typography} from "@mui/material";

const MyWatchListItem = ({todo, deleteTodo, updateTodo}) => {

    const color = todo.watched === false ? 'red' : 'green'

    return (

        <TableRow sx={{'&:last-child td, &:last-child th': {border: 0}}}>
            <TableCell sx={{maxWidth: '100px'}}>
                <Checkbox onClick={() => updateTodo(todo.id)} checked={todo.watched === true}/>
            </TableCell>
            <TableCell>
                <Typography color={color} sx={{width: '300px'}}>
                    {todo.name}
                </Typography>
            </TableCell>
            <TableCell>
                <Button onClick={() => deleteTodo(todo.id)}>Delete</Button>
            </TableCell>
        </TableRow>

    )
}

export {MyWatchListItem}