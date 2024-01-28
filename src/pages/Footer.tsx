import { Box, Text, Center, VStack, Link } from "@chakra-ui/react";

import { useTheme } from "../hooks/useTheme";



/***********************************************************************************************************
 * CLASS
 ***********************************************************************************************************/
const Footer = () => {


  const { colors, fonts } = useTheme();

  let currentYear = new Date().getFullYear()

  /***********************************************************************************************************
   * UI
   ***********************************************************************************************************/
  return (

    <Center bgColor='white' pt='50px' pb='20px'>
      <VStack width='100%'>

        <Box height='1px' bgColor={colors.BG_LOC} width='100%' mb='20px'></Box>

        <Text fontSize={[fonts.FOOTER_SIZE_S, fonts.FOOTER_SIZE_S, fonts.FOOTER_SIZE_L, fonts.FOOTER_SIZE_L]}>
          Copyright © {currentYear}. Danforth Auto Parts Inc. All Rights Reserved | Designed by  <Link href={"https://www.ramiware.com"} target="_blank">Ramiware</Link>
        </Text>

      </VStack>
    </Center>



  );
};
export default Footer;


