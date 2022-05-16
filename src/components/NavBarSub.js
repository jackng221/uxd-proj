import { AppBar, IconButton, Collapse, Divider, Grid, List, ListItemButton, Toolbar } from '@mui/material'
import React from 'react'
import styled from '@emotion/styled';
import { theme } from '../theme';
import { Box } from '@mui/system';

import Albion from '../pics/Albion.jpg';
import AugustinusBader from '../pics/Augustinus Bader.jpg';
import Covermark from '../pics/Covermark.jpg';
import Curel from '../pics/Curel.jpg';
import DrWu from '../pics/Dr Wu.jpg';
import FaceQ from '../pics/Face Q.jpg';
import HACCI from '../pics/HACCI.jpg';
import HadaLabo from '../pics/Hada Labo.jpg';
import JuJuAquamoist from '../pics/Ju Ju Aquamoist.jpg';
import KaoBiore from '../pics/Kao Biore.jpg';
import Kose from '../pics/Kose.jpg';
import Laneige from '../pics/Laneige.png';
import Minon from '../pics/Minon.jpg';
import Mioggi from '../pics/Mioggi.jpg';
import Nivea from '../pics/Nivea.jpg';
import Orbis from '../pics/Orbis.jpg';

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
const StyledGridBox = styled(Box)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "120px",
})
const StyledGridButton = styled(IconButton)({
    color: theme.palette.text.main,
    borderRadius: 0,
    width: "100%",
    height: "100%",
})
const StyledCurrentPos = styled("div")({
    backgroundColor: "white",
    borderRadius: 8,
    padding: 8,
    fontSize: 20,
})

function NavBarSub() {
    const [openCat, setOpenCat] = React.useState(false);
    const [openFAQ, setOpenFAQ] = React.useState(false);
    const [stateCat, setStateCat] = React.useState("");

    const handleClick = (x) => {
        switch(x){
            case "cat":
                setOpenCat(!openCat);
                setOpenFAQ(false);
                if (!openCat){
                    setStateCat("");
                }
                break;
            case "faq":
                setOpenFAQ(!openFAQ);
                setOpenCat(false);
                break;
            case "cat_type":
                setStateCat("cat_type");
                break;
            case "cat_brand":
                setStateCat("cat_brand");
                break;
            default: break;
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
                            <StyledListButton onClick={()=> handleClick("cat")}>Item Categories</StyledListButton>
                            <Collapse in={openCat} timeout="auto" unmountOnExit>
                                <Box sx={{
                                    display: "flex",
                                    flexDirection: "row",
                                }}>
                                    <List>
                                        <StyledListButton onClick={()=> handleClick("cat_type")}>Type</StyledListButton><Divider />
                                        <StyledListButton onClick={()=> handleClick("cat_brand")}>Brand</StyledListButton><Divider />
                                        <StyledListButton>Region</StyledListButton><Divider />
                                        <StyledListButton>Free shipping</StyledListButton><Divider />
                                        <StyledListButton>Samples</StyledListButton><Divider />
                                        <StyledListButton>Clearance</StyledListButton>
                                    </List>

                                    <Collapse in={stateCat === "cat_type"} timeout="auto" unmountOnExit >
                                        <List>
                                            <StyledListButton>Cosmetic</StyledListButton><Divider />
                                            <StyledListButton>Skincare</StyledListButton><Divider />
                                            <StyledListButton>Body care & Nail</StyledListButton><Divider />
                                            <StyledListButton>Baby wear</StyledListButton><Divider />
                                            <StyledListButton>Beauty machine</StyledListButton><Divider />
                                        </List>
                                    </Collapse>
                                    <Collapse in={stateCat === "cat_brand"} timeout="auto" unmountOnExit>
                                        <Grid container width={"500px"} columns={4} spacing={0}>
                                            <Grid item xs={1}><StyledGridBox><StyledGridButton><img src={Albion} alt="Albion"/></StyledGridButton></StyledGridBox></Grid>
                                            <Grid item xs={1}><StyledGridBox><StyledGridButton><img src={AugustinusBader} alt="AugustinusBader"/></StyledGridButton></StyledGridBox></Grid>
                                            <Grid item xs={1}><StyledGridBox><StyledGridButton><img src={Covermark} alt="Covermark"/></StyledGridButton></StyledGridBox></Grid>
                                            <Grid item xs={1}><StyledGridBox><StyledGridButton><img src={Curel} alt="Curel"/></StyledGridButton></StyledGridBox></Grid>
                                            <Grid item xs={1}><StyledGridBox><StyledGridButton><img src={DrWu} alt="DrWu"/></StyledGridButton></StyledGridBox></Grid>
                                            <Grid item xs={1}><StyledGridBox><StyledGridButton><img src={FaceQ} alt="FaceQ"/></StyledGridButton></StyledGridBox></Grid>
                                            <Grid item xs={1}><StyledGridBox><StyledGridButton><img src={HACCI} alt="HACCI"/></StyledGridButton></StyledGridBox></Grid>
                                            <Grid item xs={1}><StyledGridBox><StyledGridButton><img src={HadaLabo} alt="HadaLabo"/></StyledGridButton></StyledGridBox></Grid>
                                            <Grid item xs={1}><StyledGridBox><StyledGridButton><img src={JuJuAquamoist} alt="JuJuAquamoist"/></StyledGridButton></StyledGridBox></Grid>
                                            <Grid item xs={1}><StyledGridBox><StyledGridButton><img src={KaoBiore} alt="KaoBiore"/></StyledGridButton></StyledGridBox></Grid>
                                            <Grid item xs={1}><StyledGridBox><StyledGridButton><img src={Kose} alt="Kose"/></StyledGridButton></StyledGridBox></Grid>
                                            <Grid item xs={1}><StyledGridBox><StyledGridButton><img src={Laneige} alt="Laneige"/></StyledGridButton></StyledGridBox></Grid>
                                            <Grid item xs={1}><StyledGridBox><StyledGridButton><img src={Minon} alt="Minon"/></StyledGridButton></StyledGridBox></Grid>
                                            <Grid item xs={1}><StyledGridBox><StyledGridButton><img src={Mioggi} alt="Mioggi"/></StyledGridButton></StyledGridBox></Grid>
                                            <Grid item xs={1}><StyledGridBox><StyledGridButton><img src={Nivea} alt="Nivea"/></StyledGridButton></StyledGridBox></Grid>
                                            <Grid item xs={1}><StyledGridBox><StyledGridButton><img src={Orbis} alt="Orbis"/></StyledGridButton></StyledGridBox></Grid>
                                        </Grid>
                                    </Collapse>
                                </Box>

                            </Collapse>
                        </List>
                        <List sx={{
                            padding:0
                        }}>
                            <StyledListButton onClick={()=> handleClick("faq")}>FAQ</StyledListButton>
                            <Collapse in={openFAQ} timeout="auto" unmountOnExit>
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