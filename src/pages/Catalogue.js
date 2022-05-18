import { Box, Button, Collapse, Grid, IconButton, MenuItem, Select, Stack, Typography } from '@mui/material'
import React from 'react'
import ViewListOutlinedIcon from '@mui/icons-material/ViewListOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { theme } from '../theme';
import styled from '@emotion/styled';

import product1 from '../pics/product1.jpg'
import product2 from '../pics/product2.jpg'
import product3 from '../pics/product3.jpg'
import product4 from '../pics/product4.jpg'
import product5 from '../pics/product5.jpg'
import product6 from '../pics/product6.jpg'
import product7 from '../pics/product7.jpg'
import product8 from '../pics/product8.jpg'
import product9 from '../pics/product9.jpg'
import { Link } from 'react-router-dom';

const StyledSelect = styled(Select)({
    backgroundColor: "white",
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: "black" },
})
const ListButton = styled(Button)({
    borderRadius: 12,
    fontSize: "16px",
    width: "160px",
    margin: "6px",
    padding: "6px",
    color: theme.palette.text.main,
    backgroundColor: theme.palette.primary.main,
    "&:hover": {
        backgroundColor: theme.palette.primary.dark,
    }
})
const GridButton = styled(Button)({
    borderRadius: 12,
    fontSize: "12px",
    width: "120px",
    margin: "6px",
    padding: "6px",
    color: theme.palette.text.main,
    backgroundColor: theme.palette.primary.main,
    "&:hover": {
        backgroundColor: theme.palette.primary.dark,
    }
})

function Catalogue() {
    const viewStyleState = localStorage.getItem("viewStyle") || "List";

    const [countPage, setCountPage] = React.useState(1);
    const [count1, setCount1] = React.useState(1);
    const [count2, setCount2] = React.useState(1);
    const [count3, setCount3] = React.useState(1);
    const [count4, setCount4] = React.useState(1);
    const [count5, setCount5] = React.useState(1);
    const [count6, setCount6] = React.useState(1);
    const [count7, setCount7] = React.useState(1);
    const [count8, setCount8] = React.useState(1);
    const [count9, setCount9] = React.useState(1);
    const [count10, setCount10] = React.useState(1);

    const [viewStyle, setViewStyle] = React.useState(viewStyleState);

    const HandleSelect = (event, x) => {
        switch (x) {
            case "page":
                setCountPage(event.target.value)
                break;
            case 1:
                setCount1(event.target.value);
                break;
            case 2:
                setCount2(event.target.value);
                break;
            case 3:
                setCount3(event.target.value);
                break;
            case 4:
                setCount4(event.target.value);
                break;
            case 5:
                setCount5(event.target.value);
                break;
            case 6:
                setCount6(event.target.value);
                break;
            case 7:
                setCount7(event.target.value);
                break;
            case 8:
                setCount8(event.target.value);
                break;
            case 9:
                setCount9(event.target.value);
                break;
            case 10:
                setCount10(event.target.value);
                break;
            default: break;
        }
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
                    <StyledSelect value={countPage} onChange={(e) => HandleSelect(e, "page")}>
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                    </StyledSelect>
                    <Typography variant="h6" marginRight={"20px"}>30 results</Typography>
                </Stack>
                <Box display="flex" flexDirection="row" alignItems="center">
                    <IconButton onClick={() => HandleClick("List")}><ViewListOutlinedIcon fontSize="large" /></IconButton>
                    <IconButton onClick={() => HandleClick("Grid")}><GridViewOutlinedIcon fontSize="large" /></IconButton>
                </Box>
            </Box>
            <Collapse in={viewStyle === "List"} timeout={0}>
                <Stack display="flex" direction="row" paddingX={"50px"} paddingY={"20px"} spacing={4}>
                    <Box display="flex" justifyContent="center" width={"150px"} >
                        <Box display={"inline-flex"} justifyContent="center" height={"100px"} padding={"10px"} border={1}>
                            <img src={product1} alt="product" />
                        </Box>
                    </Box>

                    <Typography variant="h6" sx={{ flexGrow: 1 }} component={Link} to="/product">Sk II Facial Treatment Essence 160ml <br /> HKD $700</Typography>
                    <Box display="flex" alignItems={"flex-end"}>
                        <Stack direction="row" alignItems={"center"} spacing={1}>
                            <Typography>Qty.</Typography>
                            <StyledSelect value={count1} onChange={(e) => HandleSelect(e, 1)}>
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
                        </Stack>
                    </Box>
                    <Box display="flex" flexDirection={"column"} alignItems={"center"} justifyContent={"flex-end"}>
                        <ListButton><FavoriteBorderOutlinedIcon />Favourite</ListButton>
                        <ListButton><ShoppingCartOutlinedIcon />Add to cart</ListButton>
                    </Box>
                </Stack>
                <Stack display="flex" direction="row" paddingX={"50px"} paddingY={"20px"} spacing={4}>
                    <Box display="flex" justifyContent="center" width={"150px"} >
                        <Box display={"inline-flex"} justifyContent="center" height={"100px"} padding={"10px"} border={1}>
                            <img src={product2} alt="product" />
                        </Box>
                    </Box>
                    <Typography variant="h6" sx={{ flexGrow: 1 }} component={Link} to="/product">Sk II Facial Treatment Essence 160ml <br /> HKD $700</Typography>
                    <Box display="flex" alignItems={"flex-end"}>
                        <Stack direction="row" alignItems={"center"} spacing={1}>
                            <Typography>Qty.</Typography>
                            <StyledSelect value={count2} onChange={(e) => HandleSelect(e, 2)}>
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
                        </Stack>
                    </Box>
                    <Box display="flex" flexDirection={"column"} alignItems={"center"} justifyContent={"flex-end"}>
                        <ListButton><FavoriteBorderOutlinedIcon />Favourite</ListButton>
                        <ListButton><ShoppingCartOutlinedIcon />Add to cart</ListButton>
                    </Box>
                </Stack>
                <Stack display="flex" direction="row" paddingX={"50px"} paddingY={"20px"} spacing={4}>
                    <Box display="flex" justifyContent="center" width={"150px"} >
                        <Box display={"inline-flex"} justifyContent="center" height={"100px"} padding={"10px"} border={1}>
                            <img src={product3} alt="product" />
                        </Box>
                    </Box>
                    <Typography variant="h6" sx={{ flexGrow: 1 }} component={Link} to="/product">Sk II Facial Treatment Essence 160ml <br /> HKD $700</Typography>
                    <Box display="flex" alignItems={"flex-end"}>
                        <Stack direction="row" alignItems={"center"} spacing={1}>
                            <Typography>Qty.</Typography>
                            <StyledSelect value={count3} onChange={(e) => HandleSelect(e, 3)}>
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
                        </Stack>
                    </Box>
                    <Box display="flex" flexDirection={"column"} alignItems={"center"} justifyContent={"flex-end"}>
                        <ListButton><FavoriteBorderOutlinedIcon />Favourite</ListButton>
                        <ListButton><ShoppingCartOutlinedIcon />Add to cart</ListButton>
                    </Box>
                </Stack>
                <Stack display="flex" direction="row" paddingX={"50px"} paddingY={"20px"} spacing={4}>
                    <Box display="flex" justifyContent="center" width={"150px"} >
                        <Box display={"inline-flex"} justifyContent="center" height={"100px"} padding={"10px"} border={1}>
                            <img src={product4} alt="product" />
                        </Box>
                    </Box>
                    <Typography variant="h6" sx={{ flexGrow: 1 }} component={Link} to="/product">Sk II Facial Treatment Essence 160ml <br /> HKD $700</Typography>
                    <Box display="flex" alignItems={"flex-end"}>
                        <Stack direction="row" alignItems={"center"} spacing={1}>
                            <Typography>Qty.</Typography>
                            <StyledSelect value={count4} onChange={(e) => HandleSelect(e, 4)}>
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
                        </Stack>
                    </Box>
                    <Box display="flex" flexDirection={"column"} alignItems={"center"} justifyContent={"flex-end"}>
                        <ListButton><FavoriteBorderOutlinedIcon />Favourite</ListButton>
                        <ListButton><ShoppingCartOutlinedIcon />Add to cart</ListButton>
                    </Box>
                </Stack>
                <Stack display="flex" direction="row" paddingX={"50px"} paddingY={"20px"} spacing={4}>
                    <Box display="flex" justifyContent="center" width={"150px"} >
                        <Box display={"inline-flex"} justifyContent="center" height={"100px"} padding={"10px"} border={1}>
                            <img src={product5} alt="product" />
                        </Box>
                    </Box>
                    <Typography variant="h6" sx={{ flexGrow: 1 }} component={Link} to="/product">Sk II Facial Treatment Essence 160ml <br /> HKD $700</Typography>
                    <Box display="flex" alignItems={"flex-end"}>
                        <Stack direction="row" alignItems={"center"} spacing={1}>
                            <Typography>Qty.</Typography>
                            <StyledSelect value={count5} onChange={(e) => HandleSelect(e, 5)}>
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
                        </Stack>
                    </Box>
                    <Box display="flex" flexDirection={"column"} alignItems={"center"} justifyContent={"flex-end"}>
                        <ListButton><FavoriteBorderOutlinedIcon />Favourite</ListButton>
                        <ListButton><ShoppingCartOutlinedIcon />Add to cart</ListButton>
                    </Box>
                </Stack>
            </Collapse>
            <Collapse in={viewStyle === "Grid"} timeout={0}>
                <Grid container columns={5}>
                    <Grid item xs={1} paddingX="30px" paddingY="20px">
                        <Stack height={"300px"} alignItems={"center"} spacing={1}>
                            <Box display="flex" justifyContent="center" width={"150px"} >
                                <Box display={"inline-flex"} justifyContent="center" height={"100px"} padding={"10px"} border={1}>
                                    <img src={product1} alt="product" />
                                </Box>
                            </Box>
                            <Typography sx={{ flexGrow: 1 }}>Sk II Facial Treatment Essence 160ml</Typography>
                            <Box display="flex" flexDirection="row" justifyContent={"space-between"} width="100%">
                                <Stack>
                                    <Typography>HKD $700</Typography>
                                    <Stack direction="row" alignItems="center">
                                        <Typography>Qty.</Typography>
                                        <StyledSelect value={count1} onChange={(e) => HandleSelect(e, 1)}>
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
                                    </Stack>
                                </Stack>
                                <Stack>
                                    <GridButton><FavoriteBorderOutlinedIcon />Favourite</GridButton>
                                    <GridButton><ShoppingCartOutlinedIcon />Add to cart</GridButton>
                                </Stack>
                            </Box>
                        </Stack>
                    </Grid>
                    <Grid item xs={1} paddingX="30px" paddingY="20px">
                        <Stack height={"300px"} alignItems={"center"} spacing={1}>
                            <Box display="flex" justifyContent="center" width={"150px"} >
                                <Box display={"inline-flex"} justifyContent="center" height={"100px"} padding={"10px"} border={1}>
                                    <img src={product2} alt="product" />
                                </Box>
                            </Box>
                            <Typography sx={{ flexGrow: 1 }}>SK-II Whitening Source Derm-Renewal Essence 50g</Typography>
                            <Box display="flex" flexDirection="row" justifyContent={"space-between"} width="100%">
                                <Stack>
                                    <Typography>HKD $550</Typography>
                                    <Stack direction="row" alignItems="center">
                                        <Typography>Qty.</Typography>
                                        <StyledSelect value={count2} onChange={(e) => HandleSelect(e, 2)}>
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
                                    </Stack>
                                </Stack>
                                <Stack>
                                    <GridButton><FavoriteBorderOutlinedIcon />Favourite</GridButton>
                                    <GridButton><ShoppingCartOutlinedIcon />Add to cart</GridButton>
                                </Stack>
                            </Box>
                        </Stack>
                    </Grid>
                    <Grid item xs={1} paddingX="30px" paddingY="20px">
                        <Stack height={"300px"} alignItems={"center"} spacing={1}>
                            <Box display="flex" justifyContent="center" width={"150px"} >
                                <Box display={"inline-flex"} justifyContent="center" height={"100px"} padding={"10px"} border={1}>
                                    <img src={product3} alt="product" />
                                </Box>
                            </Box>
                            <Typography sx={{ flexGrow: 1 }}>SKII Facial Treatment Mask 6 pcs</Typography>
                            <Box display="flex" flexDirection="row" justifyContent={"space-between"} width="100%">
                                <Stack>
                                    <Typography>HKD $490</Typography>
                                    <Stack direction="row" alignItems="center">
                                        <Typography>Qty.</Typography>
                                        <StyledSelect value={count3} onChange={(e) => HandleSelect(e, 3)}>
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
                                    </Stack>
                                </Stack>
                                <Stack>
                                    <GridButton><FavoriteBorderOutlinedIcon />Favourite</GridButton>
                                    <GridButton><ShoppingCartOutlinedIcon />Add to cart</GridButton>
                                </Stack>
                            </Box>
                        </Stack>
                    </Grid>
                    <Grid item xs={1} paddingX="30px" paddingY="20px">
                        <Stack height={"300px"} alignItems={"center"} spacing={1}>
                            <Box display="flex" justifyContent="center" width={"150px"} >
                                <Box display={"inline-flex"} justifyContent="center" height={"100px"} padding={"10px"} border={1}>
                                    <img src={product4} alt="product" />
                                </Box>
                            </Box>
                            <Typography sx={{ flexGrow: 1 }}>SK II Auractivator CC Cream 30ml</Typography>
                            <Box display="flex" flexDirection="row" justifyContent={"space-between"} width="100%">
                                <Stack>
                                    <Typography>HKD $650</Typography>
                                    <Stack direction="row" alignItems="center">
                                        <Typography>Qty.</Typography>
                                        <StyledSelect value={count4} onChange={(e) => HandleSelect(e, 4)}>
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
                                    </Stack>
                                </Stack>
                                <Stack>
                                    <GridButton><FavoriteBorderOutlinedIcon />Favourite</GridButton>
                                    <GridButton><ShoppingCartOutlinedIcon />Add to cart</GridButton>
                                </Stack>
                            </Box>
                        </Stack>
                    </Grid>
                    <Grid item xs={1} paddingX="30px" paddingY="20px">
                        <Stack height={"300px"} alignItems={"center"} spacing={1}>
                            <Box display="flex" justifyContent="center" width={"150px"} >
                                <Box display={"inline-flex"} justifyContent="center" height={"100px"} padding={"10px"} border={1}>
                                    <img src={product5} alt="product" />
                                </Box>
                            </Box>
                            <Typography sx={{ flexGrow: 1 }}>Sk II R.N.A Poweer Eye Cream 15g</Typography>
                            <Box display="flex" flexDirection="row" justifyContent={"space-between"} width="100%">
                                <Stack>
                                    <Typography>HKD $600</Typography>
                                    <Stack direction="row" alignItems="center">
                                        <Typography>Qty.</Typography>
                                        <StyledSelect value={count5} onChange={(e) => HandleSelect(e, 5)}>
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
                                    </Stack>
                                </Stack>
                                <Stack>
                                    <GridButton><FavoriteBorderOutlinedIcon />Favourite</GridButton>
                                    <GridButton><ShoppingCartOutlinedIcon />Add to cart</GridButton>
                                </Stack>
                            </Box>
                        </Stack>
                    </Grid>
                    <Grid item xs={1} paddingX="30px" paddingY="20px">
                        <Stack height={"300px"} alignItems={"center"} spacing={1}>
                            <Box display="flex" justifyContent="center" width={"150px"} >
                                <Box display={"inline-flex"} justifyContent="center" height={"100px"} padding={"10px"} border={1}>
                                    <img src={product6} alt="product" />
                                </Box>
                            </Box>
                            <Typography sx={{ flexGrow: 1 }}>Fancl HTC Collagen DX</Typography>
                            <Box display="flex" flexDirection="row" justifyContent={"space-between"} width="100%">
                                <Stack>
                                    <Typography>HKD $160</Typography>
                                    <Stack direction="row" alignItems="center">
                                        <Typography>Qty.</Typography>
                                        <StyledSelect value={count6} onChange={(e) => HandleSelect(e, 6)}>
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
                                    </Stack>
                                </Stack>
                                <Stack>
                                    <GridButton><FavoriteBorderOutlinedIcon />Favourite</GridButton>
                                    <GridButton><ShoppingCartOutlinedIcon />Add to cart</GridButton>
                                </Stack>
                            </Box>
                        </Stack>
                    </Grid>
                    <Grid item xs={1} paddingX="30px" paddingY="20px">
                        <Stack height={"300px"} alignItems={"center"} spacing={1}>
                            <Box display="flex" justifyContent="center" width={"150px"} >
                                <Box display={"inline-flex"} justifyContent="center" height={"100px"} padding={"10px"} border={1}>
                                    <img src={product7} alt="product" />
                                </Box>
                            </Box>
                            <Typography sx={{ flexGrow: 1 }}>St Clare Sebum Treatment Set</Typography>
                            <Box display="flex" flexDirection="row" justifyContent={"space-between"} width="100%">
                                <Stack>
                                    <Typography>HKD $150</Typography>
                                    <Stack direction="row" alignItems="center">
                                        <Typography>Qty.</Typography>
                                        <StyledSelect value={count7} onChange={(e) => HandleSelect(e, 7)}>
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
                                    </Stack>
                                </Stack>
                                <Stack>
                                    <GridButton><FavoriteBorderOutlinedIcon />Favourite</GridButton>
                                    <GridButton><ShoppingCartOutlinedIcon />Add to cart</GridButton>
                                </Stack>
                            </Box>
                        </Stack>
                    </Grid>
                    <Grid item xs={1} paddingX="30px" paddingY="20px">
                        <Stack height={"300px"} alignItems={"center"} spacing={1}>
                            <Box display="flex" justifyContent="center" width={"150px"} >
                                <Box display={"inline-flex"} justifyContent="center" height={"100px"} padding={"10px"} border={1}>
                                    <img src={product8} alt="product" />
                                </Box>
                            </Box>
                            <Typography sx={{ flexGrow: 1 }}>Kanebo Suisai Beauty Clear Powder</Typography>
                            <Box display="flex" flexDirection="row" justifyContent={"space-between"} width="100%">
                                <Stack>
                                    <Typography>HKD $150</Typography>
                                    <Stack direction="row" alignItems="center">
                                        <Typography>Qty.</Typography>
                                        <StyledSelect value={count8} onChange={(e) => HandleSelect(e, 8)}>
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
                                    </Stack>
                                </Stack>
                                <Stack>
                                    <GridButton><FavoriteBorderOutlinedIcon />Favourite</GridButton>
                                    <GridButton><ShoppingCartOutlinedIcon />Add to cart</GridButton>
                                </Stack>
                            </Box>
                        </Stack>
                    </Grid>
                    <Grid item xs={1} paddingX="30px" paddingY="20px">
                        <Stack height={"300px"} alignItems={"center"} spacing={1}>
                            <Box display="flex" justifyContent="center" width={"150px"} >
                                <Box display={"inline-flex"} justifyContent="center" height={"100px"} padding={"10px"} border={1}>
                                    <img src={product9} alt="product" />
                                </Box>
                            </Box>
                            <Typography sx={{ flexGrow: 1 }}>Biore UV Perfect Face Milk Spf 50x3</Typography>
                            <Box display="flex" flexDirection="row" justifyContent={"space-between"} width="100%">
                                <Stack>
                                    <Typography>HKD $250</Typography>
                                    <Stack direction="row" alignItems="center">
                                        <Typography>Qty.</Typography>
                                        <StyledSelect value={count9} onChange={(e) => HandleSelect(e, 9)}>
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
                                    </Stack>
                                </Stack>
                                <Stack>
                                    <GridButton><FavoriteBorderOutlinedIcon />Favourite</GridButton>
                                    <GridButton><ShoppingCartOutlinedIcon />Add to cart</GridButton>
                                </Stack>
                            </Box>
                        </Stack>
                    </Grid>
                    <Grid item xs={1} paddingX="30px" paddingY="20px">
                        <Stack height={"300px"} alignItems={"center"} spacing={1}>
                            <Box display="flex" justifyContent="center" width={"150px"} >
                                <Box display={"inline-flex"} justifyContent="center" height={"100px"} padding={"10px"} border={1}>
                                    <img src={product1} alt="product" />
                                </Box>
                            </Box>
                            <Typography sx={{ flexGrow: 1 }}>Sk II Facial Treatment Essence 160ml</Typography>
                            <Box display="flex" flexDirection="row" justifyContent={"space-between"} width="100%">
                                <Stack>
                                    <Typography>HKD $700</Typography>
                                    <Stack direction="row" alignItems="center">
                                        <Typography>Qty.</Typography>
                                        <StyledSelect value={count10} onChange={(e) => HandleSelect(e, 10)}>
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
                                    </Stack>
                                </Stack>
                                <Stack>
                                    <GridButton><FavoriteBorderOutlinedIcon />Favourite</GridButton>
                                    <GridButton><ShoppingCartOutlinedIcon />Add to cart</GridButton>
                                </Stack>
                            </Box>
                        </Stack>
                    </Grid>
                </Grid>
            </Collapse>
        </Box>
    )
}

export default Catalogue