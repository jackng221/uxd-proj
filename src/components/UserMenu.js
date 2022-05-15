import React from 'react'
import { Button } from '@mui/material';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

function UserMenu() {
    return (
        <div>
            <Button variant="contained" size="large">
                <PersonOutlineOutlinedIcon />
            </Button>
            <Button variant="contained" size="large">
                <ShoppingCartOutlinedIcon />
            </Button>
        </div>
    )
}

export default UserMenu