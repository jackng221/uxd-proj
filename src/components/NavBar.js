import { AppBar, Toolbar, Button, IconButton, InputBase } from '@mui/material';
import * as React from 'react';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import styled from '@emotion/styled';
import { theme } from '../theme';

const StyledToolbar = styled(Toolbar)({
  justifyContent: "space-between"
});
const Search = styled("div")(
  ({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "60%"
  })
);
const StyledButton = styled(IconButton)({
  margin: 5,
  width: "50px",
  height: "50px",
  color: "black",
  backgroundColor: "white",
  borderRadius: 14,
  padding: 0,
  alignItems: "center",
});
const StyledSearchButton = styled(StyledButton)({
    backgroundColor: theme.palette.search.main,
});
const StyledHomeButton = styled(Button)({
  margin: 5,
  padding: 0,
  color: "black",
  fontSize: 30,
})

function NavBar() {
  return (
    <div className="navBar">
      <AppBar position="static">
        <StyledToolbar>
          <StyledHomeButton onClick={() => {

          }}>
            BOBODAVE
          </StyledHomeButton>

          <Search>
            <div style={{
              backgroundColor: "white",
              borderRadius: "10px",
              width: "100%"
            }} >
              <InputBase fullWidth sx={{
                margin: 1
              }} />
            </div>
            <StyledSearchButton variant="contained">
              <SearchOutlinedIcon fontSize="large" />
            </StyledSearchButton>
          </Search>

          <div>
            <StyledButton variant="contained">
              <PersonOutlineOutlinedIcon fontSize="large" />
            </StyledButton>

            <StyledButton variant="contained">
              <ShoppingCartOutlinedIcon fontSize="large" />
            </StyledButton>
          </div>
        </StyledToolbar>
      </AppBar>
    </div>
  )
}

export default NavBar