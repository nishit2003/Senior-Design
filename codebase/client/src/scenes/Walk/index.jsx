// client/src/scenes/Walk/index.jsx
// import React from "react";

// export default function Walk() {
//   return (
//     <div style={{ padding: "2rem" }}>
//       <h1>Walk Page</h1>
//       <p>Welcome to the Walk page!</p>
//     </div>
//   );
// }
import { useState } from "react";
import Navbar from "scenes/navbar";
import {
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Chip,
  Avatar,
} from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";

export default function Walk() {
  const [petType, setPetType] = useState("");
  const [date, setDate] = useState(new Date());
  const [duration, setDuration] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [listings, setListings] = useState([
    {
      id: 1,
      petName: "Max",
      petType: "Dog",
      breed: "Golden Retriever",
      ownerName: "John Smith",
      date: "2023-05-20",
      duration: "1 hour",
      location: "Central Park Area",
      rate: "$20/hour",
      description: "Friendly dog who loves long walks and playing fetch.",
      ownerAvatar: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
      id: 2,
      petName: "Luna",
      petType: "Cat",
      breed: "Siamese",
      ownerName: "Sarah Johnson",
      date: "2023-05-21",
      duration: "3 hours",
      location: "Downtown Area",
      rate: "$25/hour",
      description: "Indoor cat needing company while I'm at work. Loves attention.",
      ownerAvatar: "https://randomuser.me/api/portraits/women/1.jpg"
    }
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div>
      <Navbar />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" gutterBottom>
            Pet Walking & Daycare Services
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Connect with pet lovers in your area for walking and daycare services
          </Typography>
        </Box>

        {/* Post New Request Form */}
        <Card sx={{ mb: 4 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Post a New Request
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <InputLabel>Pet Type</InputLabel>
                    <Select
                      value={petType}
                      onChange={(e) => setPetType(e.target.value)}
                      label="Pet Type"
                    >
                      <MenuItem value="Dog">Dog</MenuItem>
                      <MenuItem value="Cat">Cat</MenuItem>
                      <MenuItem value="Other">Other</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                      label="Date"
                      value={date}
                      onChange={(newValue) => setDate(newValue)}
                      renderInput={(params) => <TextField {...params} fullWidth />}
                    />
                  </LocalizationProvider>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <InputLabel>Duration</InputLabel>
                    <Select
                      value={duration}
                      onChange={(e) => setDuration(e.target.value)}
                      label="Duration"
                    >
                      <MenuItem value="30min">30 minutes</MenuItem>
                      <MenuItem value="1hour">1 hour</MenuItem>
                      <MenuItem value="2hours">2 hours</MenuItem>
                      <MenuItem value="halfday">Half day</MenuItem>
                      <MenuItem value="fullday">Full day</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    multiline
                    rows={4}
                    label="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button variant="contained" color="primary" type="submit">
                    Post Request
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>

        {/* Listings */}
        <Typography variant="h6" gutterBottom>
          Available Requests
        </Typography>
        <Grid container spacing={3}>
          {listings.map((listing) => (
            <Grid item xs={12} md={6} key={listing.id}>
              <Card>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Avatar src={listing.ownerAvatar} sx={{ mr: 2 }} />
                    <Typography variant="subtitle1">{listing.ownerName}</Typography>
                  </Box>
                  <Typography variant="h6" gutterBottom>
                    {listing.petName} - {listing.breed}
                  </Typography>
                  <Box sx={{ mb: 2 }}>
                    <Chip label={listing.petType} color="primary" size="small" sx={{ mr: 1 }} />
                    <Chip label={listing.rate} color="secondary" size="small" />
                  </Box>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {listing.description}
                  </Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box>
                      <Typography variant="body2">📅 {listing.date}</Typography>
                      <Typography variant="body2">⏱️ {listing.duration}</Typography>
                      <Typography variant="body2">📍 {listing.location}</Typography>
                    </Box>
                    <Button variant="contained" color="primary">
                      Contact Owner
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
