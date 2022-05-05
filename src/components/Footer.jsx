import {Box, Container, Grid, Link} from "@mui/material";

function Footer() {
    return (
        <Box mt={{xs: 3, md: 5}} px={{xs: 1, md: 3}} py={{xs: 5, md: 8}} bgcolor={"text.main"} color={"primary.main"}>
            <Container maxWidth={"lg"}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={4}>
                        <Box borderBottom={1}>
                            Help
                        </Box>
                        <Box>
                            <Link href={"/"} color={"inherit"}>
                                Contact
                            </Link>
                        </Box>
                        <Box>
                            <Link href={"/"} color={"inherit"}>
                                Privacy
                            </Link>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={4}>
                        <Box borderBottom={1}>
                            Account
                        </Box>
                        <Box>
                            <Link href={"/"} color={"inherit"}>
                                Login
                            </Link>
                        </Box>
                        <Box>
                            <Link href={"/"} color={"inherit"}>
                                Register
                            </Link>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={4}>
                        <Box borderBottom={1}>
                            Other
                        </Box>
                        <Box>
                            <Link href={"/"} color={"inherit"}>
                                Careers
                            </Link>
                        </Box>
                        <Box>
                            <Link href={"/"} color={"inherit"}>
                                Advertise
                            </Link>
                        </Box>
                        <Box>
                            <Link href={"/"} color={"inherit"}>
                                About Us
                            </Link>
                        </Box>
                    </Grid>
                </Grid>
                <Box textAlign={"center"} pt={{xs: 2, sm: 3}} pb={{xs: 2, sm: 3}}>
                    Example Shop &reg;{new Date().getFullYear()}

                </Box>
            </Container>
        </Box>
    )
}

export default Footer