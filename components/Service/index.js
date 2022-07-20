import { Box, Text, Stack } from "@chakra-ui/react";
import Image from "next/image";

export default function Service({ flare, header, img, content, left }) {
  return (
    <Stack
      direction={{ base: "column", lg: left ? "row-reverse" : "row" }}
      justifyContent={"space-between"}
      alignItems={"center"}
      pt={10}
    >
      <Stack width={{ base: "100%", lg: "50%" }}>
        <Text fontWeight={700} fontSize={"lg"} color={"#E77525"}>
          {flare}
        </Text>
        <Text fontWeight={600} fontSize={{ base: "3xl", lg: "4xl" }}>
          {header}
        </Text>
        <Text pt={3} fontSize={"md"}>
          {content}
        </Text>
      </Stack>
      <Box
        height={{ base: 300, lg: 400, xl: 500 }}
        width={{ base: "90%", lg: "46%" }}
        position={"relative"}
        mt={5}
      >
        <Image src={img} layout={"fill"} objectFit={"contain"} />
      </Box>
    </Stack>
  );
}
