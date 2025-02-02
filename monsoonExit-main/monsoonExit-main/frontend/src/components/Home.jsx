import React from "react";
import { Typography, Button, Card, CardContent, CardMedia, Grid } from "@mui/material";

const posts = [
  {
    id: 1,
    category: "Travel",
    title: "Travel the world!!!!!",
    image: "https://static.wixstatic.com/media/ce5921_addb1f7234c04128ac6fabbf4883c7b3~mv2.webp/v1/fill/w_320,h_180,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/ce5921_addb1f7234c04128ac6fabbf4883c7b3~mv2.webp",
  },
  {
    id: 2,
    category: "Art",
    title: "Art!!!!!!!!!!!!",
    image: "https://img.freepik.com/premium-photo/colorful-eye-art-style-david-walker-abstract-closeup-painting_899449-130008.jpg",
  },
  {
    id: 3,
    category: "Food",
    title: "Food is Art!!!!",
    image: "https://img.freepik.com/premium-photo/table-food-including-variety-dishes-including-food_1316263-19870.jpg",
  },
];

const Home = () => {
  return (
    <div>

      <Grid container spacing={3} sx={{ padding: 3 }}>
        {posts.map((post) => (
          <Grid item key={post.id} xs={12} sm={6} md={4}>
            <Card>
              <CardMedia component="img" height="200" image={post.image} alt={post.title} />
              <CardContent>
                <Typography variant="subtitle2" color="textSecondary">
                  {post.category}
                </Typography>
                <Typography variant="h6">{post.title}</Typography>
                <Button variant="contained" color="secondary" sx={{ marginRight: 1 }}>
                  DELETE
                </Button>
                <Button variant="contained" color="secondary">
                  UPDATE
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Home;
