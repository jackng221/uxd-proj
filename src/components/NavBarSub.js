import { AppBar, Button, ButtonGroup, MenuItem, Popper, Toolbar } from '@mui/material'
import React from 'react'
import styled from '@emotion/styled';
import { theme } from '../theme';

const StyledToolbar = styled(Toolbar)({
    justifyContent: "space-between",
})
const StyledButton = styled(Button)({
    color: theme.palette.text.main,
    fontSize: 20,
    padding: 0,
    width: "200px",
    height: "50px",
    backgroundColor: theme.palette.secondary.main,
    '&:hover': {
        backgroundColor: theme.palette.secondary.dark,
    },
})
const StyledCurrentPos = styled("div")({
    backgroundColor: "white",
    borderRadius: 8,
    padding: 8,
    fontSize: 20,
})

function NavBarSub() {
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);
    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const HandleParentClick = () => {
        //onClick = {}
    };
    const HandleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    }
    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };
    return (
        <React.Fragment>
            <AppBar position="static" sx={{
                backgroundColor: theme.palette.secondary.main,
            }}>
                <StyledToolbar variant="dense">
                    <div>
                        <ButtonGroup>
                            <StyledButton>Categories</StyledButton>
                        </ButtonGroup>
                        <StyledButton>FAQ</StyledButton>
                    </div>
                    <StyledCurrentPos>
                        You are at:
                    </StyledCurrentPos>
                </StyledToolbar>
            </AppBar>
            <ButtonGroup orientation='vertical' style={{paddingLeft: "24px"}}>
                <StyledButton>A</StyledButton>
                <StyledButton>B</StyledButton>
            </ButtonGroup>
        </React.Fragment>
    )
}

export default NavBarSub