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
    const handleDelete = (id) => {
      axios
        .delete(`http://localhost:3001/delete/${id}`)
        .then((res) => {
          setCards(cards.filter((card) => card.id !== id));
        })
        .catch((err) => {
          console.error("Error deleting card:", err);
        });
    };
    const handleUpdate = (id) => {
      const updatedCards = cards.map((card) =>
        card.id === id ? { ...card, title: card.title + " (Updated)" } : card
      );
      setCards(updatedCards); 
    };
  
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
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => handleUpdate(card.id)}
                      sx={{ marginRight: 1 }}
                    >
                      Update
                    </Button>
                    <Button variant="contained" color="secondary" onClick={() => handleDelete(card.id)}>
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
  
