import { Box, Container, Stack, Text, Link } from "@chakra-ui/react";
import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import Image from "next/image";

export default function Footer() {
  return (
    <Box bg={"black"}>
      <Container maxW={"1500px"}>
        <Stack
          color={"white"}
          py={10}
          px={4}
          marginX={{ md: 15, lg: 20 }}
          direction={{ base: "column-reverse", md: "row" }}
          justifyContent="space-between"
        >
          <Stack spacing={5}>
            <Stack direction={"row"} alignItems={"center"}>
              <Image src={"/logo.jpg"} height={40} width={40} />
              <Text fontSize={"lg"} pl={2} fontWeight={500}>
                ORGANIC RETURN
              </Text>
            </Stack>
            <Text fontSize={"sm"}>
              © Copyright 2022 Organic Return. All rights reserved.
            </Text>
          </Stack>
          <Stack
            alignSelf={"center"}
            direction={"row"}
            spacing={10}
            pb={{ base: 5, md: 0 }}
          >
            <Stack as={"nav"} spacing={4}>
              <Stack direction={"row"} alignItems={"center"} spacing={2}>
                <EmailIcon />
                <Link href={"mailto:info@organicreturn.com"}>
                  info@organicreturn.com
                </Link>
              </Stack>
              <Stack direction={"row"} alignItems={"center"} spacing={2}>
                <PhoneIcon />
                <Link href={"tel:9704581659"}>970-458-1659</Link>
              </Stack>
            </Stack>
            <Text maxW={150}>
              Organic Return 23286 2 Rivers Rd, Basalt, CO 81621
            </Text>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
