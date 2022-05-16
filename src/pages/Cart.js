import styled from '@emotion/styled'
import { Box, Checkbox, Grid, IconButton, MenuItem, Select, Typography } from '@mui/material'
import React from 'react'
import { theme } from '../theme'
import ClearIcon from '@mui/icons-material/Clear';

const TableColumn = styled(Grid)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "24px",
    padding: "4px",
    backgroundColor: theme.palette.primary.main,
})
const TableEntry = styled(Grid)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "24px",
    padding: "4px",
})
const StyledCheckbox = styled(Checkbox)({
    '& .MuiSvgIcon-root': { fontSize: 32 },
    '&.Mui-checked':{color: theme.palette.secondary.dark},
})
const ClearButton = styled(IconButton)({

})

function Cart() {
    const [count1, setCount1] = React.useState(0);
    const [count2, setCount2] = React.useState(0);
    const [count3, setCount3] = React.useState(0);

    const HandleChange = (event, x) => {
        switch (x) {
            case 1:
                setCount1(event.target.value);
                break;
            case 2:
                setCount2(event.target.value);
                break;
            case 3:
                setCount3(event.target.value);
                break;
            default:
                break;
        }
    }
    return (
        <Box>
            <Box>
                <Typography variant="h5" padding={"20px"} style={{ lineHeight: "40px" }}>
                    Your shopping cart contains <br />
                    Total items: 3 Weight: 0g
                </Typography>
            </Box>
            <Grid container columns={12}>
                <TableColumn item xs={2}>Qty.</TableColumn>
                <TableColumn item xs={4}>Item name</TableColumn>
                <TableColumn item xs={2}>Unit price</TableColumn>
                <TableColumn item xs={2}>Sub total</TableColumn>
                <TableColumn item xs={1}></TableColumn>
                <TableColumn item xs={1}></TableColumn>

                <TableEntry item xs={2}>
                    <Select value={count1} onChange={(e)=>HandleChange(e, 1)}>
                        <MenuItem value={0}>0</MenuItem>
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                        <MenuItem value={6}>6</MenuItem>
                        <MenuItem value={7}>7</MenuItem>
                        <MenuItem value={8}>8</MenuItem>
                        <MenuItem value={9}>9</MenuItem>
                        <MenuItem value={10}>10</MenuItem>
                    </Select>
                </TableEntry>
                <TableEntry item xs={4}>Sk II Facial Treatment Essence 160ml</TableEntry>
                <TableEntry item xs={2}>USD $50</TableEntry>
                <TableEntry item xs={2}>USD $0</TableEntry>
                <TableEntry item xs={1}><StyledCheckbox/></TableEntry>
                <TableEntry item xs={1}><ClearButton><ClearIcon fontSize="large"/></ClearButton></TableEntry>
            </Grid>
        </Box>
    )
}

export default Cart