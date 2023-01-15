import {Container} from "@mui/material";
import {useRef} from "react";
import useLocalStorage from "use-local-storage";

import {MyWatchListItem} from "./MyWatchListItem/MyWatchListItem";
import {CustomForm, CustomTable, Heading} from "../UI";


const MyWatchList = () => {

    const [todos, setTodos] = useLocalStorage('todos', []);

    const name = useRef();

    const createEpisode = () => {
        const newEpisode = {
            id: Date.now(),
            name: name.current.value,
            watched: false
        }
        name.current.value = ''
        setTodos(todos => [...todos, newEpisode])
    }

    const deleteTodo = (id) => {
        const index = todos.findIndex(todo => todo.id === id);
        todos.splice(index, 1)
        setTodos([...todos])
    }

    const updateTodo = (id) => {
        const find = todos.find(todo => todo.id === id);
        find.watched = !find.watched
        setTodos([...todos])
    }

    const headings = ['Watched', 'Name', 'Delete']

    return (
        <Container maxWidth={'lg'} fixed={true} sx={{margin: '0 auto', minHeight: '90vh'}}>
            <Heading>My Watch List</Heading>
            <CustomForm buttonName={'Add'} action={createEpisode} reference={name}/>

            {
                todos.length ? <CustomTable headings={headings}>
                    {
                        todos.map(todo => <MyWatchListItem key={todo.id} todo={todo}
                                                           deleteTodo={deleteTodo}
                                                           updateTodo={updateTodo}/>)
                    }
                </CustomTable> : <></>
            }

        </Container>
    )

}

export {MyWatchList}