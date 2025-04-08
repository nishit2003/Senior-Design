// client/src/scenes/Vet/index.jsx
import React, { useState } from "react";
import Navbar from "scenes/navbar"; // Adjust the import path based on your folder structure
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";

export default function Vet() {
  const [location, setLocation] = useState("");
  const [petType, setPetType] = useState("");
  const [date, setDate] = useState(new Date());
  const [results, setResults] = useState([]);

  // Dummy data representing available vets.
  const dummyVets = [
    {
      id: 1,
      name: "Happy Pets Veterinary Clinic",
      address: "123 Pet Street",
      available: ["10:00 AM", "2:00 PM", "4:30 PM"],
    },
    {
      id: 2,
      name: "Animal Care & Health Center",
      address: "456 Animal Ave",
      available: ["11:00 AM", "3:30 PM", "6:00 PM"],
    },
  ];

  // Simulate a search by setting dummy results.
  const handleSearch = () => {
    // In a real-world app, you might fetch data from an API based on the search filters.
    setResults(dummyVets);
  };

  return (
    <div>
      {/* Import and display the Navbar */}
      <Navbar />
      <Box sx={{ padding: "2rem", maxWidth: "1200px", margin: "0 auto" }}>
        <Typography variant="h4" sx={{ marginBottom: "1.5rem" }}>
          Find a Vet
        </Typography>
        {/* Search Form */}
        <Box
          component="form"
          sx={{
            display: "flex",
            gap: "1rem",
            flexWrap: "wrap",
            alignItems: "center",
            marginBottom: "2rem",
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            label="Location"
            variant="outlined"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <TextField
            label="Pet Type"
            variant="outlined"
            value={petType}
            onChange={(e) => setPetType(e.target.value)}
          />
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Appointment Date"
              value={date}
              onChange={(newDate) => setDate(newDate)}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
          <Button variant="contained" onClick={handleSearch}>
            Search
          </Button>
        </Box>

        {/* Display search results */}
        <Grid container spacing={2}>
          {results.length > 0 ? (
            results.map((vet) => (
              <Grid item xs={12} md={6} key={vet.id}>
                <Card>
                  <CardContent>
                    <Typography variant="h6">{vet.name}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {vet.address}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      sx={{ marginTop: "0.5rem", marginBottom: "0.5rem" }}
                    >
                      Available Appointment Slots:
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        gap: "0.5rem",
                        flexWrap: "wrap",
                      }}
                    >
                      {vet.available.map((slot, index) => (
                        <Button key={index} size="small" variant="outlined">
                          {slot}
                        </Button>
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))
          ) : (
            <Grid item xs={12}>
              <Typography variant="body1" color="text.secondary">
                No vets found. Please try a different search.
              </Typography>
            </Grid>
          )}
        </Grid>
      </Box>
    </div>
  );
}
