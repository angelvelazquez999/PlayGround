import React from "react";
import { useState, useEffect } from "react";
import { Box, Typography, Card, CircularProgress } from "@mui/material";

const API_KEY = "AcE3fAWYkluSvF9dQzf7maAUGsOmjCGWVqv0KMXY";

const LazyImage = ({ src, alt }) => {
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const image = new Image();
      image.src = src;
      image.onload = () => setLoading(false);
      image.onerror = () => setLoading(false); 
    }, [src]);
  
    return (
      <Box sx={{ position: "relative", width: "100%", minHeight: "300px" }}>
        {loading && (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
              width: "100%",
              position: "absolute",
              top: 0,
              left: 0,
              backgroundColor: "#f0f0f0", 
            }}
          >
            <CircularProgress />
          </Box>
        )}
        {!loading && (
          <Box
            component="img"
            src={src}
            alt={alt}
            loading="lazy"
            sx={{
              width: "100%",
              display: loading ? "none" : "block",
            }}
          />
        )}
      </Box>
    );
  };

const Apod = () => {
  const [apod, setApod] = useState({});

  useEffect(() => {
    const fetchApod = async () => {
      try {
        const response = await fetch(
          `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`
        );
        const data = await response.json();
        setApod(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchApod();
  }, []);

  return (
    <Card sx={{ maxWidth: 1000, margin: "auto", marginTop: 5 }}>
      <Box sx={{ padding: 2 }}>
        <Typography variant="h5" component="h2" sx={{ marginBottom: 2 }}>
          {apod.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {apod.date}
        </Typography>
      </Box>
      <LazyImage src={apod.url} alt={apod.title} />
      <Box sx={{ padding: 2 }}>
        <Typography variant="body3" color="text.secondary">
          {apod.explanation}
        </Typography>
      </Box>
    </Card>
  );
};

export default Apod;
