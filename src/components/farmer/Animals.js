import React from "react";
import { Link } from "react-router-dom";
import { Container, Typography, Box, Button, Grid, Card, CardMedia, CardContent, CardHeader } from "@mui/material";


const Animals = () => {
    return (
        <Container >
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardHeader title="Animal 1" />
                        <CardMedia
                            component="img"
                            height="194"
                            image="https://source.unsplash.com/random"
                            alt="Animal 1"
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                Animal 1 description
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardHeader title="Animal 2" />
                        <CardMedia
                            component="img"
                            height="194"
                            image="https://source.unsplash.com/random"
                            alt="Animal 2"
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                Animal 2 description
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardHeader title="Animal 3" />
                        <CardMedia
                            component="img"
                            height="194"
                            image="https://source.unsplash.com/random"
                            alt="Animal 3"
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                Animal 3 description
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardHeader title="Animal 4" />
                        <CardMedia
                            component="img"
                            height="194"
                            image="https://source.unsplash.com/random"
                            alt="Animal 4"
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                Animal 4 description
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardHeader title="Animal 5" />
                        <CardMedia
                            component="img"
                            height="194"
                            image="https://source.unsplash.com/random"
                            alt="Animal 5"
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                Animal 5 description
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
}


export default Animals;