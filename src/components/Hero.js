import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import HeroImage from "../assets/images/HeroImage.jpg";

const Hero = () => {
  return (
    <Stack
      direction={{ lg: "row", sm: "column" }}
      justifyContent="center"
      width="100%"
      height="100vh"
      backgroundColor="#fbfbfb"
      alignItems="center"
      spacing={2}
    >
      <Stack p="30px" maxWidth="420px">
        <Typography
          fontWeight={700}
          fontSize="2.375rem"
          mb="5px"
          color="#3f3d56"
        >
          New Season{" "}
          <Typography
            component="span"
            fontWeight="inherit"
            fontSize="inherit"
            color="#6c63ff"
          >
            Arrivals
          </Typography>
        </Typography>
        <Typography variant="subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Typography>
      </Stack>
      <Box p="30px" maxWidth="500px">
        <img src={HeroImage} alt="banner" width="100%" height="400px" />
      </Box>
    </Stack>
  );
};

export default Hero;
