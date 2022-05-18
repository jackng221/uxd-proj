import { Box, Collapse, IconButton, MenuItem, Select, Stack, Typography } from '@mui/material'
import React from 'react'
import ViewListOutlinedIcon from '@mui/icons-material/ViewListOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import { theme } from '../theme';
import styled from '@emotion/styled';

const StyledSelect = styled(Select)({
    backgroundColor: "white",
    '&.Mui-focused .MuiOutlinedInput-notchedOutline':{borderColor: "black"},
})

function Catalogue() {
    const viewStyleState = localStorage.getItem("viewStyle") || "List";

    const [count, setCount] = React.useState(1);
    const [viewStyle, setViewStyle] = React.useState(viewStyleState);

    const HandleSelect = (event) => {
        setCount(event.target.value);
    }
    const HandleClick = (x) => {
        switch (x) {
            case "List":
                setViewStyle("List");
                window.localStorage.setItem("viewStyle", "List");
                break;
            case "Grid":
                setViewStyle("Grid");
                window.localStorage.setItem("viewStyle", "Grid");
                break;
            default: 
                break;
        }
    }

    return (
        <Box display="flex" flexDirection="column">
            <Box display="flex" justifyContent={"space-between"} paddingX={"25px"} paddingY={"10px"} bgcolor={theme.palette.primary.main}>
                <Stack direction={"row"} spacing={2} alignItems="center">
                    <Typography variant="h6">Page:</Typography>
                    <StyledSelect value={count} onChange={(e) => HandleSelect(e)}>
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
                    <Typography variant="h6" marginRight={"20px"}>100 results</Typography>
                </Stack>
                <Box display="flex" flexDirection="row" alignItems="center">
                    <IconButton onClick={()=>HandleClick("List")}><ViewListOutlinedIcon fontSize="large" /></IconButton>
                    <IconButton onClick={()=>HandleClick("Grid")}><GridViewOutlinedIcon fontSize="large" /></IconButton>
                </Box>
            </Box>
            <Collapse in={viewStyle === "List"}  timeout={0}>
A
            </Collapse>
            <Collapse in={viewStyle === "Grid"}  timeout={0}>
B
            </Collapse>
        </Box>
    )
}

export default Catalogue