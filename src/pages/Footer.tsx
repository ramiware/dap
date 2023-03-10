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
    <Box bgColor='white' pt='100px' pb='20px'>
      <Text fontSize={[fonts.FOOTER_SIZE_S, fonts.FOOTER_SIZE_S, fonts.FOOTER_SIZE_L, fonts.FOOTER_SIZE_L]}>
        © Copyright 2023. Danforth Auto Parts Inc. All Rights Reserved
      </Text>


    </Box>


  );
};
export default Footer;


