import React from "react";
import {
  Flex,
  Stack,
  Text,
  Spacer,
  Box,
  RadioGroup,
  Radio,
  Input,
  Select,
  Button,
  Link,
} from "@chakra-ui/react";
import Image from "next/image";

export default function Hero() {
  return (
    <Stack
      direction={{ base: "column", lg: "row" }}
      height={{ base: "85vh", md: "85vh", lg: "75vh" }}
      alignItems={{ lg: "center" }}
      marginX={{ base: 0, sm: 10, md: 15, lg: 20 }}
      color={"white"}
      spacing={{ base: 5, md: 2 }}
    >
      <Stack width={{ lg: "50%" }} spacing={8} mt={{ base: 5, md: 10, lg: 0 }}>
        <Text
          fontWeight={500}
          fontSize={{ base: "4xl", md: "5xl", xl: "6xl" }}
          lineHeight={1.3}
          align={{ base: "center", lg: "left" }}
          mt={{ base: 10, md: 0 }}
        >
          Marketing Solutions For Luxury Real Estate Brokerages
        </Text>
        <Text align={{ base: "center", lg: "left" }} fontSize={"lg"}>
          Custom Website Design and Development, Showing Management, CRM,
          Marketing Tools and Lead Generation.
        </Text>
        <Stack
          direction={"row"}
          spacing={4}
          alignSelf={{ base: "center", lg: "flex-start" }}
        >
          <Button
            _hover={{
              bg: "white",
              color: "black",
              transition: "all 0.5s cubic-bezier(.08,.52,.52,1)",
            }}
            w={36}
            bg={"transparent"}
            border={"2px solid white"}
            href={"#contact"}
          >
            <Link href="#contact" _hover={{ textDecoration: "none" }}>
              Book a demo
            </Link>
          </Button>
          <Button
            _hover={{
              bg: "#5E6A7F",
              transition: "all 0.5s cubic-bezier(.08,.52,.52,1)",
            }}
            w={32}
            bg={"#899EC3"}
          >
            <Link href="#services" _hover={{ textDecoration: "none" }}>
              Learn more
            </Link>
          </Button>
        </Stack>
      </Stack>

      <Flex display={{ base: "none", lg: "flex" }} alignSelf={"flex-end"}>
        <Box
          alignSelf={"flex-end"}
          height={600}
          width={"60%"}
          position={"absolute"}
          right={-320}
        >
          <Image src={"/desktop.png"} layout={"fill"} objectFit={"contain"} />
        </Box>
        <Box
          alignSelf={"flex-end"}
          height={{ base: 300, lg: 440, xl: 480 }}
          width={"50%"}
          position={"absolute"}
          right={{ lg: 70, xl: 130 }}
          top={100}
        >
          <Image src={"/mobile.png"} layout={"fill"} objectFit={"contain"} />
        </Box>
      </Flex>
      <Box display={{ base: "block", lg: "none" }} pt={28}>
        <Box
          height={{ base: 200, md: 275 }}
          width={"100%"}
          position={"absolute"}
        >
          <Image src={"/desktop.png"} layout={"fill"} objectFit={"contain"} />
        </Box>
        <Box
          height={{ base: 200, md: 275 }}
          width={"100%"}
          position={"absolute"}
          right={{ base: 90, md: 130 }}
          top={{ base: 500, md: 450 }}
        >
          <Image src={"/mobile.png"} layout={"fill"} objectFit={"contain"} />
        </Box>
      </Box>
    </Stack>
  );
}
