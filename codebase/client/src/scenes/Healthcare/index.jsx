// client/src/scenes/Healthcare/index.jsx
// import React from "react";

// export default function Healthcare() {
//   return (
//     <div style={{ padding: "2rem" }}>
//       <h1>Healthcare Page</h1>
//       <p>Welcome to the Healthcare page!</p>
//     </div>
//   );
// }
import { Box, Container, Grid, Card, CardContent, CardMedia, Typography, Button } from "@mui/material";
import Navbar from "scenes/navbar";

const healthcareArticles = [
  {
    id: 1,
    title: "Essential Vaccinations for Your Pet",
    image:
      "data:image/jpeg;base64,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",
    summary:
      "Learn about the core vaccines that every pet needs and when they should receive them.",
    readTime: "5 min read",
    category: "Preventive Care",
  },
  {
    id: 2,
    title: "Nutrition Guidelines for Dogs and Cats",
    image:
      "https://www.centralpetaz.com/hubfs/Guide%20To%20Nutrition%20For%20Dogs%20And%20Cats-central-pet.jpg",
    summary:
      "A comprehensive guide to feeding your pets the right diet for optimal health.",
    readTime: "7 min read",
    category: "Nutrition",
  },
  {
    id: 3,
    title: "Signs Your Pet Needs Emergency Care",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYGLg7DERl_34ekETiEiCzKdRdCsxgh67BBA&s",
    summary:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYGLg7DERl_34ekETiEiCzKdRdCsxgh67BBA&s",
    readTime: "6 min read",
    category: "Emergency Care",
  },
  {
    id: 4,
    title: "Dental Health for Pets",
    image:
      "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?ixlib=rb-4.0.3",
    summary: "Tips and best practices for maintaining your pet's oral hygiene.",
    readTime: "4 min read",
    category: "Dental Care",
  },
  {
    id: 5,
    title: "Parasite Prevention Guide",
    image:
      "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3",
    summary:
      "Protect your pet from common parasites with these prevention strategies.",
    readTime: "8 min read",
    category: "Preventive Care",
  },
  {
    id: 6,
    title: "Exercise Needs by Breed",
    image:
      "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?ixlib=rb-4.0.3",
    summary:
      "Understanding how much exercise different pet breeds require for optimal health.",
    readTime: "6 min read",
    category: "Fitness",
  },
];

export default function Healthcare() {
  return (
    <Box>
      <Navbar />
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Box sx={{ mb: 6, textAlign: 'center' }}>
          <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold', mb: 2 }}>
            Pet Healthcare Guide
          </Typography>
          <Typography variant="h5" color="text.secondary" sx={{ mb: 4 }}>
            Expert advice and tips for keeping your pets healthy and happy
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {healthcareArticles.map((article) => (
            <Grid item xs={12} sm={6} md={4} key={article.id}>
              <Card sx={{ 
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: '0.3s',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: 6
                }
              }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={article.image}
                  alt={article.title}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography 
                    variant="overline" 
                    color="primary"
                    sx={{ fontWeight: 'bold' }}
                  >
                    {article.category}
                  </Typography>
                  <Typography variant="h6" component="h2" sx={{ mb: 1, fontWeight: 'bold' }}>
                    {article.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {article.summary}
                  </Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="caption" color="text.secondary">
                      {article.readTime}
                    </Typography>
                    <Button size="small" color="primary">
                      Read More
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
