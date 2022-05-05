import React from 'react';
import {Button, Card, CardActions, CardContent, CardMedia, Grid, Typography} from "@mui/material";

const GoodsItem = (props) => {
    const {name, price, poster, setOrder} = props;

    return (
        <Grid item xs={12} md={4}>
            <Card
                sx={{height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between"
                }}
            >
                <CardMedia
                    component={"img"}
                    image={poster}
                    alt={name}
                    title={name}
                    sx={{height: 140}}
                />
                <CardContent>
                    <Typography
                        gutterBottom
                        variant={"h6"}
                        component={"h5"}
                    >{name}
                    </Typography>

                </CardContent>
                <CardActions
                    sx={{justifyContent: "space-between"
                    }}
                >
                    <Button
                        variant={"text"}
                        onClick={() =>
                            setOrder({
                                id: props.id,
                                name: props.name,
                                price: props.price,
                            })
                        }
                    >
                        Купить
                    </Button>
                    <Typography variant={"body1"}>Цена: {price} руб.</Typography>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default GoodsItem;