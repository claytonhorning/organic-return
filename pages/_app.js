import { ChakraProvider, extendTheme } from "@chakra-ui/react";

function MyApp({ Component, pageProps }) {
  const activeLabelStyles = {
    transform: "scale(0.85) translateY(-24px)",
  };
  const theme = extendTheme({
    styles: {
      global: {
        body: {
          overflowX: "hidden",
        },
      },
    },
    components: {
      Form: {
        variants: {
          floating: {
            container: {
              _focusWithin: {
                label: {
                  ...activeLabelStyles,
                },
              },
              "input:not(:placeholder-shown) + label, .chakra-select__wrapper + label":
                {
                  ...activeLabelStyles,
                },
              label: {
                top: 0,
                left: 0,
                zIndex: 2,
                position: "absolute",
                backgroundColor: "white",
                pointerEvents: "none",
                mx: 3,
                px: 1,
                my: 2,
                transformOrigin: "left top",
              },
            },
          },
        },
      },
    },
  });

  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
