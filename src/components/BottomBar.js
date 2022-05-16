import { Box, Button } from '@mui/material'
import React from 'react'
import { theme } from '../theme';

function BottomBar() {
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
  return (
    <Box sx={{width: "100%", height: "50px", display: "flex", justifyContent: "center", bgcolor: theme.palette.primary.main}}>
        <Button variant="text" onClick={goToTop} sx={{color: theme.palette.text.main}}>Return to top</Button>
    </Box>
  )
}

export default BottomBar