"use client";

import React from "react";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "@portfolio/theme";
import Layout from "./Layout";

interface IProviders {
  children: React.ReactNode;
}

const Providers: React.FC<IProviders> = ({ children }) => {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>
        <Layout>{children}</Layout>
      </ChakraProvider>
    </CacheProvider>
  );
};

export default Providers;
