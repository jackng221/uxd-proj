import styled from '@emotion/styled'
import { IconButton, Button, List, ListItemButton, Stack, Tooltip, Modal, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { theme } from '../theme'
import banner1 from '../pics/banner_AB.jpg'
import banner2 from '../pics/banner_SK2.jpg'
import product1 from '../pics/product1.jpg'
import product2 from '../pics/product2.jpg'
import product3 from '../pics/product3.jpg'
import product4 from '../pics/product4.jpg'
import product5 from '../pics/product5.jpg'
import product6 from '../pics/product6.jpg'
import product7 from '../pics/product7.jpg'
import product8 from '../pics/product8.jpg'
import product9 from '../pics/product9.jpg'
import { Link } from 'react-router-dom'

const StyledNewsButton = styled(ListItemButton)({
    backgroundColor: "white",
    display: "flex",
    borderRadius: 8,
    marginBottom: 16,
})
const StyledBannerButton = styled(IconButton)({
    margin: 8,
    borderRadius: 8,
    width: "50px",
    height: "50px",
    backgroundColor: theme.palette.primary.main,
})
const StyledProductButton = styled(Button)({
    color: theme.palette.text.main,
    minWidth: "200px",
    height: "200px",
    lineHeight: "200px",
    padding: 0,
})
const StyledProductList = styled("div")({
    dislay: "flex",
    maxHeight: "200px",
    overflowX: "scroll",
    overflowY: "hidden",
    whiteSpace: "nowrap",
    paddingBottom: "20px",
})
const newsDialogStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: theme.palette.primary.main,
    border: 1,
    borderRadius: 8,
    boxShadow: 24,
    p: 4,
}
function Home() {
    const [bannerState, setBannerState] = React.useState(banner1);
    const [openNews, setOpenNews] = React.useState(false);
    const HandleClick = (x) => {
        switch (x) {
            case "banner1":
                setBannerState(banner1);
                break;
            case "banner2":
                setBannerState(banner2);
                break;
            case "news":
                setOpenNews(!openNews);
                break;
            default:
                break;
        }
    }
    return (
        <div className="Home">
            <Stack direction="row" sx={{ padding: 2, backgroundColor: theme.palette.primary.main, border: 1 }}>
                <Box sx={{ display: "flex", justifyContents: "center", alignItems: "center", fontSize: 48, padding: 4, paddingRight: 6, }}>News</Box>
                <List sx={{ flexGrow: 1, paddingRight: 10 }}>
                    <StyledNewsButton onClick={() => HandleClick("news")}>Website regeneration</StyledNewsButton>
                    <StyledNewsButton onClick={() => HandleClick("news")}>Free shipping brands</StyledNewsButton>
                    <StyledNewsButton onClick={() => HandleClick("news")}>Free samples by liking us on Facebook</StyledNewsButton>
                    <StyledNewsButton onClick={() => HandleClick("news")}>Warning to malicious customers</StyledNewsButton>
                    <Modal
                        open={openNews}
                        onClose={() => HandleClick("news")}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={newsDialogStyle}>
                            <Typography id="modal-modal-description" align="center">
                                As our webpage is regenerating, ERROR page may appear. Please RELOAD the page and it will be ok.
                                In the meanwhile, the latest products and offers will be uploaded on IG and FACEBOOK.
                                Please have a look on our IG/FB and products are as low as 40% off<br />
                                Facebook (fb.me/bobodaveonlineshop)<br />
                                IG https://www.instagram.com/bobodaveshop/<br />
                                Thank you
                            </Typography>
                        </Box>
                    </Modal>
                </List>
            </Stack>
            <Box sx={{ display: "flex", justifyContent: "space-between", paddingX: 4, paddingY: 2, height: "550px" }}>
                <img src={bannerState} alt="" />
                <Box sx={{ display: "flex", flexDirection: "column-reverse", padding: 1 }}>
                    <StyledBannerButton onClick={() => HandleClick("banner1")}>1</StyledBannerButton>
                    <StyledBannerButton onClick={() => HandleClick("banner2")}>2</StyledBannerButton>
                </Box>
            </Box>
            <Stack direction="row" marginY="20px">
                <Typography align="center" display={"flex"} justifyContent={"center"} alignItems={"center"} variant="h3" width="300px">Featured<br />products</Typography>
                <StyledProductList>
                    <Tooltip disableInteractive title="Sk II Facial Treatment Essence 160ml"><Link to="/product">
                        <StyledProductButton><img src={product1} alt="1" width={"160px"} height={"160px"} /></StyledProductButton></Link></Tooltip>
                    <Tooltip disableInteractive title="SK-II Whitening Source Derm-Renewal Essence 50g"><Link to="/product">
                        <StyledProductButton><img src={product2} alt="2" width={"160px"} height={"160px"} /></StyledProductButton></Link></Tooltip>
                    <Tooltip disableInteractive title="SKII Facial Treatment Mask 6 pcs"><Link to="/product">
                        <StyledProductButton><img src={product3} alt="3" width={"160px"} height={"160px"} /></StyledProductButton></Link></Tooltip>
                    <Tooltip disableInteractive title="SK II Auractivator CC Cream 30ml"><Link to="/product">
                        <StyledProductButton><img src={product4} alt="4" width={"160px"} height={"160px"} /></StyledProductButton></Link></Tooltip>
                    <Tooltip disableInteractive title="Sk II R.N.A Poweer Eye Cream 15g"><Link to="/product">
                        <StyledProductButton><img src={product5} alt="5" width={"160px"} height={"160px"} /></StyledProductButton></Link></Tooltip>
                    <Tooltip disableInteractive title="Fancl HTC Collagen DX"><Link to="/product">
                        <StyledProductButton><img src={product6} alt="6" width={"160px"} height={"160px"} /></StyledProductButton></Link></Tooltip>
                    <Tooltip disableInteractive title="St Clare Sebum Treatment Set"><Link to="/product">
                        <StyledProductButton><img src={product7} alt="7" width={"160px"} height={"160px"} /></StyledProductButton></Link></Tooltip>
                    <Tooltip disableInteractive title="Kanebo Suisai Beauty Clear Powder"><Link to="/product">
                        <StyledProductButton><img src={product8} alt="8" width={"160px"} height={"160px"} /></StyledProductButton></Link></Tooltip>
                    <Tooltip disableInteractive title="Biore UV Perfect Face Milk Spf 50x3"><Link to="/product">
                        <StyledProductButton><img src={product9} alt="9" width={"160px"} height={"160px"} /></StyledProductButton></Link></Tooltip>
                </StyledProductList>
            </Stack>
            <Stack direction="row" marginY="20px">
                <Typography align="center" display={"flex"} justifyContent={"center"} alignItems={"center"} variant="h3" width="300px">Best<br />sellers</Typography>
                <StyledProductList>
                    <Tooltip disableInteractive title="Sk II Facial Treatment Essence 160ml"><Link to="/product">
                        <StyledProductButton><img src={product1} alt="1" width={"160px"} height={"160px"} /></StyledProductButton></Link></Tooltip>
                    <Tooltip disableInteractive title="SK-II Whitening Source Derm-Renewal Essence 50g"><Link to="/product">
                        <StyledProductButton><img src={product2} alt="2" width={"160px"} height={"160px"} /></StyledProductButton></Link></Tooltip>
                    <Tooltip disableInteractive title="SKII Facial Treatment Mask 6 pcs"><Link to="/product">
                        <StyledProductButton><img src={product3} alt="3" width={"160px"} height={"160px"} /></StyledProductButton></Link></Tooltip>
                    <Tooltip disableInteractive title="SK II Auractivator CC Cream 30ml"><Link to="/product">
                        <StyledProductButton><img src={product4} alt="4" width={"160px"} height={"160px"} /></StyledProductButton></Link></Tooltip>
                    <Tooltip disableInteractive title="Sk II R.N.A Poweer Eye Cream 15g"><Link to="/product">
                        <StyledProductButton><img src={product5} alt="5" width={"160px"} height={"160px"} /></StyledProductButton></Link></Tooltip>
                    <Tooltip disableInteractive title="Fancl HTC Collagen DX"><Link to="/product">
                        <StyledProductButton><img src={product6} alt="6" width={"160px"} height={"160px"} /></StyledProductButton></Link></Tooltip>
                    <Tooltip disableInteractive title="St Clare Sebum Treatment Set"><Link to="/product">
                        <StyledProductButton><img src={product7} alt="7" width={"160px"} height={"160px"} /></StyledProductButton></Link></Tooltip>
                    <Tooltip disableInteractive title="Kanebo Suisai Beauty Clear Powder"><Link to="/product">
                        <StyledProductButton><img src={product8} alt="8" width={"160px"} height={"160px"} /></StyledProductButton></Link></Tooltip>
                    <Tooltip disableInteractive title="Biore UV Perfect Face Milk Spf 50x3"><Link to="/product">
                        <StyledProductButton><img src={product9} alt="9" width={"160px"} height={"160px"} /></StyledProductButton></Link></Tooltip>
                </StyledProductList>
            </Stack>
        </div>
    )
}

export default Home