import {
    AppBar,
    Box,
    Tab, Tabs,
    Toolbar,
    Typography
} from "@mui/material";
import {useNavigate, useSearchParams} from "react-router-dom";
import {useState} from "react";


const Header = () => {

    const navItems = ['characters', 'episodes', 'locations', 'my watch list']
    const navigate = useNavigate();

    const [value, setValue] = useState('characters');
    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    const redirect = (where) => {
        navigate(`/${where.split(' ').join('-')}`)
        window.scroll(0, 0)
    }

    const [query, setQuery] = useSearchParams();
    console.log(query);

    return (
        <AppBar>
            <Toolbar>
                <Typography
                    variant="h6"
                    component="div"
                    sx={{flexGrow: 1, display: {xs: 'none', sm: 'block'}}}>
                    RickAndMorty
                </Typography>
                <Box sx={{marginLeft: 'auto'}}>
                    <Tabs value={value} onChange={handleChange} textColor={'inherit'}>


                        {
                            navItems.map((item, index) => <Tab value={item} label={item}
                                                               key={index}
                                                               onClick={() => redirect(item)}
                                                               sx={{color: '#fff'}}/>)
                        }


                    </Tabs>
                </Box>
            </Toolbar>
        </AppBar>
    )

}

export {Header}