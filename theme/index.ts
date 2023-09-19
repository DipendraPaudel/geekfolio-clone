import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    body: `'Sora Variable', sans-serif`,
  },
  styles: {
    global: {
      body: {
        background: "lightgray",
        color: "white",
      },
    },
  },
});

export default theme;
