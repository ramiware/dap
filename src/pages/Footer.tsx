import { Box, Text, Image, Center, VStack, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Flex, Link, Spacer, HStack, Button, IconButton, MenuIcon, useDisclosure, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, StackDivider } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

import { useTheme } from "../hooks/useTheme";

import logo400 from "../assets/images/dap-logo-415x415.png"
import canadaFlag from "../assets/images/canada-flag.png"


/***********************************************************************************************************
 * CLASS
 ***********************************************************************************************************/
const Footer = () => {


  const { colors, fonts } = useTheme();


  /***********************************************************************************************************
   * UI
   ***********************************************************************************************************/
  return (

    <Center bgColor='white' pt='50px' pb='20px'>
      <VStack width='100%'>

        <Box height='1px' bgColor={colors.BG_LOC} width='100%' mb='20px'></Box>

        <Text fontSize={[fonts.FOOTER_SIZE_S, fonts.FOOTER_SIZE_S, fonts.FOOTER_SIZE_L, fonts.FOOTER_SIZE_L]}>
          © Copyright 2023. Danforth Auto Parts Inc. All Rights Reserved
        </Text>

      </VStack>
    </Center>



  );
};
export default Footer;


