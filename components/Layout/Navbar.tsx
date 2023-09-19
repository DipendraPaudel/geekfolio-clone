import Image from "next/image";
import {
  Box,
  HStack,
  StackItem,
  Text,
  VStack,
  Image as ChakraImage,
} from "@chakra-ui/react";

const Navbar = () => {
  return (
    <HStack
      position={"sticky"}
      top={0}
      justifyContent={"space-between"}
      mx={"auto"}
      width={"full"}
      maxWidth={"7xl"}
      py={10}
      px={10}
    >
      <Image src={"/logo.png"} alt="" width={120} height={23.52} />
      <StackItem
        display={"flex"}
        alignItems={"center"}
        cursor={"pointer"}
        gap={2}
      >
        <HStack gap={"15px"}>
          <VStack gap={1}>
            <Box width={5} height={0.5} background={"white"}></Box>
            <Box width={5} height={0.5} background={"white"}></Box>
          </VStack>
          <Text fontSize={13} fontWeight={500}>
            Menu
          </Text>
        </HStack>
      </StackItem>
    </HStack>
  );
};

export default Navbar;
