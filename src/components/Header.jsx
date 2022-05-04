import {Badge, AppBar, IconButton, Toolbar, Typography} from '@mui/material';
import {ShoppingBasket} from '@mui/icons-material';

function Header({handleCart, orderLen}) {
    return (
        <AppBar position={"static"}>
            <Toolbar>
                <Typography variant={'h6'}
                            component={"span"}
                            sx={{flexGrow: 1}}
                >
                    ExampleShop
                </Typography>
                <IconButton
                    color={"inherit"}
                    onClick={handleCart}
                >
                    <Badge
                        badgeContent={orderLen}
                        color={'secondary'}
                    >
                        <ShoppingBasket/>
                    </Badge>
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

export default Header;