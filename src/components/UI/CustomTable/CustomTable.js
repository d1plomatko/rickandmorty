import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow, Typography
} from "@mui/material";


const CustomTable = ({children, headings, width = '1200px'}) => {

    return (
        <TableContainer component={Paper}
                        sx={{maxWidth: width, minHeight: '50vh'}}>
            <Table>
                <TableHead>
                    <TableRow>
                        {
                            headings.map((heading, index) => <TableCell
                                key={index}><Typography fontFamily={'Rowdies, sans-serif'}
                                                        component={'h1'}
                                                        variant={'h6'}>{heading}</Typography></TableCell>)
                        }
                    </TableRow>
                </TableHead>
                <TableBody>
                    {children}
                </TableBody>
            </Table>
        </TableContainer>
    )

}

export {CustomTable}