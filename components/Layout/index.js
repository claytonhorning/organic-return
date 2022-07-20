import { Box, Container } from "@chakra-ui/react";
import Head from "../Head";
import Navbar from "../Navbar";
import Footer from "../Footer";

export default function Layout({ title, children }) {
  return (
    <>
      <Head title={title} />
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
