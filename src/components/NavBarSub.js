import { AppBar, Button, Collapse, Divider, List, ListItemButton, Toolbar } from '@mui/material'
import React from 'react'
import styled from '@emotion/styled';
import { theme } from '../theme';
import { Box } from '@mui/system';

const StyledToolbar = styled(Toolbar)({
    justifyContent: "space-between",
})
// const StyledButton = styled(Button)({
//     color: theme.palette.text.main,
//     fontSize: 20,
//     padding: 0,
//     width: "200px",
//     height: "50px",
//     backgroundColor: theme.palette.secondary.main,
//     '&:hover': {
//         backgroundColor: theme.palette.secondary.dark,
//     },
// })
const StyledListButton = styled(ListItemButton)({
    fontSize: 20,
    padding: 0,
    width: "180px",
    height: "50px",
    justifyContent: "center",
})
const StyledCurrentPos = styled("div")({
    backgroundColor: "white",
    borderRadius: 8,
    padding: 8,
    fontSize: 20,
})

function NavBarSub() {
    const [open, setOpen] = React.useState("");

    const handleClickCategories = () => {
        switch(open){
            case "cat": setOpen(""); break;
            default: setOpen("cat"); break;
        }
    };
    const handleClickFAQ = () => {
        switch(open){
            case "faq": setOpen(""); break;
            default: setOpen("faq"); break;
        }
    };

    return (
        <React.Fragment>
            <AppBar position="static" sx={{
                backgroundColor: theme.palette.secondary.main,
            }}>
                <StyledToolbar variant="dense">
                    <Box sx={{
                        display: "flex",
                        flexDirection: "row",
                    }}>
                        <List sx={{
                            padding:0
                        }}>
                            <StyledListButton onClick={handleClickCategories}>Item Categories</StyledListButton>
                            <Collapse in={open=="cat"} timeout="auto" unmountOnExit>
                                <List>
                                    <StyledListButton>Types</StyledListButton><Divider/>
                                    <StyledListButton>Brand</StyledListButton><Divider/>
                                    <StyledListButton>Region</StyledListButton><Divider/>
                                    <StyledListButton>Free shipping</StyledListButton><Divider/>
                                    <StyledListButton>Samples</StyledListButton><Divider/>
                                    <StyledListButton>Clearance</StyledListButton>
                                </List>
                            </Collapse>
                        </List>
                        <List sx={{
                            padding:0
                        }}>
                            <StyledListButton onClick={handleClickFAQ}>FAQ</StyledListButton>
                            <Collapse in={open=="faq"} timeout="auto" unmountOnExit>
                                <List>
                                    <StyledListButton>Shipping</StyledListButton><Divider/>
                                    <StyledListButton>Payment</StyledListButton><Divider/>
                                    <StyledListButton>Privacy notice</StyledListButton><Divider/>
                                    <StyledListButton>Gift certificate</StyledListButton><Divider/>
                                    <StyledListButton>Site map</StyledListButton><Divider/>
                                    <StyledListButton>Contact us</StyledListButton>
                                </List>
                            </Collapse>
                        </List>
                    </Box>
                    <StyledCurrentPos>
                        You are at:
                    </StyledCurrentPos>
                </StyledToolbar>
            </AppBar>
        </React.Fragment>
    )
}

export default NavBarSub