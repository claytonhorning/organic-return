import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Text,
  Container,
  Link,
  LinkBox,
} from "@chakra-ui/react";
import { PhoneIcon, EmailIcon } from "@chakra-ui/icons";
import Image from "next/image";
import { useEffect, useState } from "react";

const NavLink = ({ children, href }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "underline",
      bg: 'useColorModeValue("gray.200", "gray.700")',
    }}
    href={href}
    color={"white"}
  >
    {children}
  </Link>
);

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavbarColor);
  }, []);

  return (
    <Box
      position={"sticky"}
      top={0}
      zIndex={10}
      bg={colorChange ? "rgba(0,0,0,.9)" : "transparent"}
    >
      <Box px={4} marginX={{ md: 15, lg: 20 }}>
        <Flex
          h={16}
          alignItems={"center"}
          justifyContent={"space-between"}
          color={"white"}
        >
          <IconButton
            size={"md"}
            color={"white"}
            _hover={{ color: "black", bgColor: "white" }}
            icon={<PhoneIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
            bg={"transparent"}
            border={"1.5px solid white"}
          />

          <Stack direction={"row"} alignItems={"center"}>
            <Image src={"/logo.jpg"} height={40} width={40} />
            <Text fontSize={"lg"} pl={2} fontWeight={500}>
              ORGANIC RETURN
            </Text>
          </Stack>

          <Flex alignItems={"center"}>
            <Stack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
              direction={"row"}
            >
              <Stack direction={"row"} alignItems={"center"} spacing={1}>
                <EmailIcon />
                <NavLink href={"mailto:info@organicreturn.com"}>
                  info@organicreturn.com
                </NavLink>
              </Stack>
              <Stack direction={"row"} alignItems={"center"} spacing={1}>
                <PhoneIcon />
                <NavLink href={"tel:9704581659"}>970-458-1659</NavLink>
              </Stack>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}
