import styled from '@emotion/styled'
import { Box, Button, Checkbox, Divider, Grid, IconButton, MenuItem, Modal, Select, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';
import { theme } from '../theme'
import ClearIcon from '@mui/icons-material/Clear';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';

const TableColumn = styled(Grid)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "24px",
    padding: "4px",
    backgroundColor: theme.palette.primary.main,
})
const TableEntry = styled(Grid)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "24px",
    padding: "4px",
})
const StyledCheckbox = styled(Checkbox)({
    '& .MuiSvgIcon-root': { fontSize: 32 },
    '&.Mui-checked': { color: theme.palette.secondary.dark },
})
const StyledButton = styled(Button)({
    color: theme.palette.text.main,
    backgroundColor: "White",
    borderRadius: 8,
    '&:hover': {
        backgroundColor: theme.palette.secondary.dark,
    },
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

function Cart() {
    const [count1, setCount1] = React.useState(1);
    const [count2, setCount2] = React.useState(1);
    const [count3, setCount3] = React.useState(1);
    const [openDelete, setOpenDelete] = React.useState(false);

    const HandleChange = (event, x) => {
        switch (x) {
            case 1:
                setCount1(event.target.value);
                break;
            case 2:
                setCount2(event.target.value);
                break;
            case 3:
                setCount3(event.target.value);
                break;
            default:
                break;
        }
    }
    const HandleClick = (x) => {
        switch (x) {
            case "delete":
                setOpenDelete(!openDelete);
                break;
            default: break;
        }
    }
    return (
        <Box>
            <Box display="flex" flexDirection="row" alignItems="center" padding="20px">
                <ShoppingCartOutlinedIcon fontSize="large"/><Typography variant="h4" sx={{paddingX:"20px"}}>Your shopping cart contains</Typography><ArrowDownwardOutlinedIcon fontSize="large"/>
            </Box>
            <Grid container columns={12}>
                <TableColumn item xs={4}>Item name</TableColumn>
                <TableColumn item xs={2}>Unit price</TableColumn>
                <TableColumn item xs={2}>Sub total</TableColumn>
                <TableColumn item xs={2}>Quantity</TableColumn>
                <TableColumn item xs={1}>Include?</TableColumn>
                <TableColumn item xs={1}>Remove</TableColumn>

                {/* #1 */}
                <TableEntry item xs={4} component={Link} to="/product">Sk II Facial Treatment Essence 160ml</TableEntry>
                <TableEntry item xs={2}>HKD $700</TableEntry>
                <TableEntry item xs={2}>HKD $700</TableEntry>
                <TableEntry item xs={2}>
                    <Select value={count1} onChange={(e) => HandleChange(e, 1)}>
                        <MenuItem value={0}>0</MenuItem>
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
                    </Select>
                </TableEntry>
                <TableEntry item xs={1}><StyledCheckbox defaultChecked={true}/></TableEntry>
                <TableEntry item xs={1}><IconButton onClick={() => HandleClick("delete")}><ClearIcon fontSize="large" /></IconButton></TableEntry>
                <Divider style={{width:'100%'}}/>
                {/* #2 */}
                <TableEntry item xs={4} component={Link} to="/product">Fancl HTC Collagen DX</TableEntry>
                <TableEntry item xs={2}>HKD $160</TableEntry>
                <TableEntry item xs={2}>HKD $160</TableEntry>
                <TableEntry item xs={2}>
                    <Select value={count2} onChange={(e) => HandleChange(e, 2)}>
                        <MenuItem value={0}>0</MenuItem>
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
                    </Select>
                </TableEntry>
                <TableEntry item xs={1}><StyledCheckbox defaultChecked={true}/></TableEntry>
                <TableEntry item xs={1}><IconButton onClick={() => HandleClick("delete")}><ClearIcon fontSize="large" /></IconButton></TableEntry>
                <Divider style={{width:'100%'}}/>
                {/* #3 */}
                <TableEntry item xs={4} component={Link} to="/product">St Clare Sebum Treatment Set</TableEntry>
                <TableEntry item xs={2}>HKD $150</TableEntry>
                <TableEntry item xs={2}>HKD $150</TableEntry>
                <TableEntry item xs={2}>
                    <Select value={count3} onChange={(e) => HandleChange(e, 3)}>
                        <MenuItem value={0}>0</MenuItem>
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
                    </Select>
                </TableEntry>
                <TableEntry item xs={1}><StyledCheckbox defaultChecked={true}/></TableEntry>
                <TableEntry item xs={1}><IconButton onClick={() => HandleClick("delete")}><ClearIcon fontSize="large" /></IconButton></TableEntry>
                <Divider style={{width:'100%'}}/>
            </Grid>
            <Modal
                open={openDelete}
                onClose={() => HandleClick("delete")}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={newsDialogStyle}>
                    <Typography variant={"h5"} id="modal-modal-description" align="center">
                        Remove item from shopping cart?
                    </Typography>
                    <Box display={"flex"} justifyContent={"space-evenly"} marginTop={"20px"}>
                        <StyledButton onClick={() => HandleClick("delete")}>Yes<DoneIcon/></StyledButton>
                        <StyledButton onClick={() => HandleClick("delete")}>No<CloseIcon/></StyledButton>
                    </Box>
                </Box>
            </Modal>
            <Box display={"flex"} justifyContent={"flex-end"} padding={"10px"}>
                <Box display={"inline-flex"} flexDirection={"column"} padding={"15px"} border={1}>
                    <Typography align='left' fontSize={"24px"} style={{ lineHeight: "40px" }}>Item count: 3 <br /> Weight: 45g <br /> Price: HKD $1010</Typography>
                    <Button sx={{
                        width: "100%",
                        height: "50px",
                        fontSize: "20px",
                        color: theme.palette.text.main,
                        backgroundColor: theme.palette.secondary.main,
                        "&:hover": {
                            backgroundColor: theme.palette.secondary.dark,
                        }
                    }}><ShoppingCartCheckoutIcon fontSize='large' />Checkout</Button>
                </Box>
            </Box>
        </Box>
    )
}

export default Cart