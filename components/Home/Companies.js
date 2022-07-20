import React from "react";
import { Box, Container, Stack } from "@chakra-ui/react";
import Image from "next/image";

export default function Companies() {
  return (
    <Box bg={"#FCFCFC"}>
      <Container maxWidth={"1500px"}>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-evenly"}
          flexWrap={"wrap"}
          spacing={10}
          py={{ base: 5, md: 10, lg: 8 }}
        >
          <Box height={100} width={{ base: 120, lg: 175 }} pos={"relative"}>
            <Image
              src={"/companies/christies.jpg"}
              layout={"fill"}
              objectFit={"contain"}
            />
          </Box>
          <Box height={100} width={{ base: 120, lg: 175 }} pos={"relative"}>
            <Image
              src={"/companies/coastal.jpg"}
              layout={"fill"}
              objectFit={"contain"}
            />
          </Box>
          <Box height={100} width={{ base: 120, lg: 175 }} pos={"relative"}>
            <Image
              src={"/companies/retter.png"}
              layout={"fill"}
              objectFit={"contain"}
            />
          </Box>
          <Box height={100} width={{ base: 120, lg: 175 }} pos={"relative"}>
            <Image
              src={"/companies/wallace.jpg"}
              layout={"fill"}
              objectFit={"contain"}
            />
          </Box>
          <Box height={100} width={{ base: 120, lg: 175 }} pos={"relative"}>
            <Image
              src={"/companies/klug.jpg"}
              layout={"fill"}
              objectFit={"contain"}
            />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
