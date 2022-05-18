import styled from '@emotion/styled';
import { Box, Button, Grid, MenuItem, Select, Typography } from '@mui/material'
import React from 'react'
import product from '../pics/product1.jpg'
import { theme } from '../theme';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const StyledButton = styled(Button)({
    borderRadius: 12,
    fontSize: "16px",
    width: "160px",
    margin: "10px",
    padding: "10px",
    color: theme.palette.text.main,
    backgroundColor: theme.palette.primary.main,
    "&:hover":{
        backgroundColor: theme.palette.primary.dark,
    }
})
const StyledSelect = styled(Select)({
    backgroundColor: "white",
    '&.Mui-focused .MuiOutlinedInput-notchedOutline':{borderColor: "black"},
})
function Product() {
    const [count, setCount] = React.useState(1);
    const HandleChange = (event) =>{
        setCount(event.target.value);
    }
    return (
        <Box>
            <Box display={"flex"} padding={"20px"}>
                <Box display={"flex"} justifyContent="center" padding={"10px"} border={1} sx={{ flexGrow: 1 }}>
                    <img src={product} alt="product" />
                </Box>
                <Box display={"flex"} flexDirection={"column"} justifyContent="space-between" paddingX={"20px"} sx={{ flexGrow: 1 }}>
                    <Typography variant="h5">Sk II Facial Treatment Essence 160ml <br /> HKD $700</Typography>
                    <Grid container columns={4}>
                        <Grid item xs={3} />
                        <Grid item xs={1} display="flex" justifyContent="center" alignItems="center">
                            <StyledButton><FavoriteBorderOutlinedIcon/>Favourite</StyledButton>
                        </Grid>

                        <Grid item xs={2} />
                        <Grid item xs={1} display="flex" justifyContent="flex-end" alignItems="center">
                            Qty.
                            <StyledSelect value={count} onChange={(e) => HandleChange(e)}>
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
                            </StyledSelect>
                        </Grid>
                        <Grid item xs={1} display="flex" justifyContent="center" alignItems="center">
                            <StyledButton><ShoppingCartOutlinedIcon/>Add to cart</StyledButton>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Box>
    )
}

export default Product