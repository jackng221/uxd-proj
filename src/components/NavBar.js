import * as React from 'react';
import { AppBar, Toolbar, Button, IconButton, InputBase, Popper, List, ListItemButton } from '@mui/material';
import { Link } from 'react-router-dom';
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
const StyledListButton = styled(ListItemButton)({
  backgroundColor: "white",
  borderRadius: 12,
  margin: 8,
  justifyContent: "center",
  fontSize: 20,
})

function NavBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [inputText, setInputText] = React.useState("");

  const HandleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };
  const open = Boolean(anchorEl);

  const HandleInput = (event) => {
    setInputText(event.target.value);
  }
  const HandleSearch = () => {
    setInputText("");
  }

  return (
    <div className="navBar">
      <AppBar position="static">
        <StyledToolbar>

          <StyledHomeButton component={Link} to="/">
            BOBODAVE
          </StyledHomeButton>

          <Search>
            <div style={{
              backgroundColor: "white",
              borderRadius: "10px",
              width: "100%"
            }} >
              <InputBase fullWidth value={inputText} onChange={HandleInput} sx={{
                margin: 1
              }} />
            </div>
            <StyledSearchButton component={Link} to="/catalogue" variant="contained" onClick={HandleSearch}>
              <SearchOutlinedIcon fontSize="large" />
            </StyledSearchButton>
          </Search>

          <div>
            <StyledButton variant="contained" onClick={HandleClick}>
              <PersonOutlineOutlinedIcon fontSize="large" />
            </StyledButton>

            <Popper open={open} anchorEl={anchorEl}>
              <List sx={{ borderRadius: 4, backgroundColor: theme.palette.primary.main }}>
                <StyledListButton>Login/Register</StyledListButton>
                <StyledListButton>Favourites</StyledListButton>
                <StyledListButton>Forum</StyledListButton>
                <StyledListButton>Language</StyledListButton>
                <StyledListButton>Log out</StyledListButton>
              </List>
            </Popper>

            <StyledButton component={Link} to="/shoppingcart" variant="contained">
              <ShoppingCartOutlinedIcon fontSize="large" />
            </StyledButton>
          </div>
        </StyledToolbar>
      </AppBar>
    </div>
  )
}

export default NavBar