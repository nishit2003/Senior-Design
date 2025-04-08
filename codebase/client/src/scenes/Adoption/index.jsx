// client/src/scenes/Adoption/index.jsx
// import React from "react";

// export default function Adoption() {
//   return (
//     <div style={{ padding: "2rem" }}>
//       <h1>Adoption Page</h1>
//       <p>Welcome to the Adoption page!</p>
//     </div>
//   );
// }
import { useState } from "react";
import Navbar from "scenes/navbar";
import { Box, Grid, Card, CardContent, CardMedia, Typography, Button, Container, TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PetsIcon from "@mui/icons-material/Pets";
import { styled } from "@mui/material/styles";

// Create a styled Box component for the navbar container
const NavbarContainer = styled(Box)({
  width: '100%',
  position: 'sticky',
  top: 0,
  zIndex: 100
});
  

const pets = [
  {
    id: 1,
    name: "Luna",
    age: "2 years",
    breed: "Golden Retriever",
    location: "San Francisco, CA",
    image:
      "https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3",
    description:
      "Friendly and energetic Golden Retriever looking for an active family",
  },
  {
    id: 2,
    name: "Oliver",
    age: "1 year",
    breed: "British Shorthair",
    location: "Los Angeles, CA",
    image:
      "https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-4.0.3",
    description: "Calm and affectionate cat who loves to cuddle",
  },
  {
    id: 3,
    name: "Max",
    age: "3 years",
    breed: "German Shepherd",
    location: "New York, NY",
    image:
      "https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?ixlib=rb-4.0.3",
    description:
      "Well-trained and protective German Shepherd seeking loving home",
  },
  {
    id: 4,
    name: "Bella",
    age: "4 years",
    breed: "Siamese",
    location: "Chicago, IL",
    image:
      "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?ixlib=rb-4.0.3",
    description:
      "Elegant Siamese cat with striking blue eyes and gentle personality",
  },
  {
    id: 5,
    name: "Charlie",
    age: "6 months",
    breed: "Labrador Retriever",
    location: "Seattle, WA",
    image:
      "https://images.unsplash.com/photo-1591160690555-5debfba289f0?ixlib=rb-4.0.3",
    description: "Playful Labrador puppy who loves water and fetch",
  },
  {
    id: 6,
    name: "Lucy",
    age: "5 years",
    breed: "Persian",
    location: "Miami, FL",
    image:
      "https://images.unsplash.com/photo-1577023311546-cdc07a8454d9?ixlib=rb-4.0.3",
    description: "Luxurious Persian cat seeking a quiet home to relax in",
  },
  {
    id: 7,
    name: "Rocky",
    age: "2 years",
    breed: "Rottweiler",
    location: "Houston, TX",
    image:
      "https://images.unsplash.com/photo-1567752881298-894bb81f9379?ixlib=rb-4.0.3",
    description: "Loyal and protective Rottweiler with a heart of gold",
  },
  {
    id: 8,
    name: "Milo",
    age: "1 year",
    breed: "Maine Coon",
    location: "Boston, MA",
    image:
      "https://images.unsplash.com/photo-1615789591457-74a63395c990?ixlib=rb-4.0.3",
    description: "Majestic Maine Coon with a friendly and social personality",
  },
  {
    id: 9,
    name: "Daisy",
    age: "3 years",
    breed: "Beagle",
    location: "Denver, CO",
    image:
      "https://images.unsplash.com/photo-1505628346881-b72b27e84530?ixlib=rb-4.0.3",
    description:
      "Sweet Beagle who loves going on adventures and sniffing trails",
  },
  {
    id: 10,
    name: "Leo",
    age: "4 years",
    breed: "Bengal",
    location: "Portland, OR",
    image:
      "https://images.unsplash.com/photo-1603098111348-c1c71578883c?ixlib=rb-4.0.3",
    description: "Energetic Bengal cat with stunning spotted coat patterns",
  },
  {
    id: 11,
    name: "Sophie",
    age: "5 years",
    breed: "Poodle",
    location: "Austin, TX",
    image:
      "https://images.unsplash.com/photo-1616567214738-22fc0c6332b3?ixlib=rb-4.0.3",
    description:
      "Intelligent Poodle with hypoallergenic coat and graceful demeanor",
  },
  {
    id: 12,
    name: "Jack",
    age: "2 years",
    breed: "Australian Shepherd",
    location: "Nashville, TN",
    image:
      "https://images.unsplash.com/photo-1598133894008-61f7fdb8cc3a?ixlib=rb-4.0.3",
    description:
      "High-energy Australian Shepherd perfect for an active lifestyle",
  },
  {
    id: 13,
    name: "Coco",
    age: "1 year",
    breed: "Ragdoll",
    location: "Phoenix, AZ",
    image:
      "https://images.unsplash.com/photo-1626602411112-10742f9a3ab8?ixlib=rb-4.0.3",
    description: "Gentle Ragdoll cat known for being affectionate and relaxed",
  },
];

export default function Adoption() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <Box sx={{ width: '100%' }}>
      <Navbar />
      <Container maxWidth={false} sx={{ py: 4 }}>
        <Box sx={{ mb: 4 }}>
          <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: "bold" }}>
            Find Your Perfect Companion
          </Typography>
          <Typography variant="h6" color="text.secondary" gutterBottom>
            Give a loving home to these adorable pets
          </Typography>
          
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search by breed, age, or location..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            sx={{ mt: 3 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Box>

        <Grid container spacing={3}>
          {pets.map((pet) => (
            <Grid item xs={12} sm={6} md={4} key={pet.id}>
              <Card sx={{ 
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column',
                transition: '0.3s',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: 3
                }
              }}>
                <CardMedia
                  component="img"
                  height="240"
                  image={pet.image}
                  alt={pet.name}
                  sx={{ objectFit: "cover" }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {pet.name}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <PetsIcon sx={{ mr: 1, fontSize: 20 }} />
                    <Typography variant="body2" color="text.secondary">
                      {pet.breed} • {pet.age}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <LocationOnIcon sx={{ mr: 1, fontSize: 20 }} />
                    <Typography variant="body2" color="text.secondary">
                      {pet.location}
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {pet.description}
                  </Typography>
                  <Button 
                    variant="contained" 
                    fullWidth
                    sx={{
                      mt: 'auto',
                      backgroundColor: '#2196f3',
                      '&:hover': {
                        backgroundColor: '#1976d2'
                      }
                    }}
                  >
                    Meet {pet.name}
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
