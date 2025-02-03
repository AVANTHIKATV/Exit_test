import React, { useEffect, useState } from "react";
import { Card, CardContent, Typography, Grid, Container, CardMedia, Button, Box } from "@mui/material";
import axios from "axios";

const Home = () => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/get")
      .then((res) => {
        setCards(res.data);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  }, []);

  return (
    <Container>
      <Grid container spacing={3} justifyContent="center">
        {cards.map((card) => (
          <Grid item key={card.id} xs={12} sm={6} md={4} marginTop={5}>
            <Card sx={{ minWidth: 275, textAlign: "center", padding: 2 }}>
              <CardMedia component="img" height="200" image={card.img_url} alt={card.title} />
              <CardContent>
                <Typography variant="h5">{card.title}</Typography>
                <Typography color="text.secondary">{card.content}</Typography>
                <Box mt={2}>
                  <Button variant="contained" color="secondary" sx={{ marginRight: 1 }}>
                    Update
                  </Button>
                  <Button variant="contained" color="secondary" >
                    Delete
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;
