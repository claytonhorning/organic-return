import Layout from "../components/Layout";
import { Box, Container } from "@chakra-ui/react";
import Hero from "../components/Home/Hero";
import Companies from "../components/Home/Companies";
import Services from "../components/Home/Services";
import Contact from "../components/Home/Contact";

export default function Home() {
  return (
    <Layout title="Organic Return">
      <Box
        bgGradient="linear(to-l, #041A41, #000000)"
        position={"absolute"}
        top={0}
        zIndex={"-1"}
        width={"100%"}
        height={{ base: "95vh", md: "92vh", lg: "83vh" }}
      ></Box>
      <Container maxW={"1500px"}>
        <Hero />
      </Container>
      <Companies />
      <Container maxW={"1500px"}>
        <Services />
      </Container>
      <Contact />
    </Layout>
  );
}
