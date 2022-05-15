import React from 'react'
import { Button } from '@mui/material';
import { TextField } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

function SearchBar() {
  return (
    <div>
        <TextField >
        </TextField>
        <Button Button variant="contained" size="large">
            <SearchOutlinedIcon/>
        </Button>
    </div>
  )
}

export default SearchBar