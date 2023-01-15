import {useSearchParams} from "react-router-dom";
import {Pagination} from "@mui/material";

const CustomPagination = ({handlePagination, totalPages}) => {

    const [query, _] = useSearchParams();

    return(
        <>
            <Pagination
                onChange={(_, num) => handlePagination(num)}
                page={parseInt(query.get('page')) || 1}
                count={totalPages}
                color={'primary'}
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    margin: '70px 0'
                }}
            />
        </>
    )

}

export {CustomPagination}