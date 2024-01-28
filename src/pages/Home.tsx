import { Box, Text, Image, Center, VStack, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Flex, Link, Spacer, HStack, IconButton, useDisclosure, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerOverlay, StackDivider, Grid, GridItem } from "@chakra-ui/react";
import { HamburgerIcon, StarIcon } from "@chakra-ui/icons";
import { ImPhone, ImLocation } from "react-icons/im";
import { motion } from "framer-motion"

// hooks
import { useTheme } from "../hooks/useTheme";
import { useProducts } from "../hooks/useProducts";
import { useHours } from "../hooks/useHours";
import { useReviews } from "../hooks/useReviews";

// assets
import logoV1 from "../assets/logo/dap-logo-v1-415x415.png"
import logoV2 from "../assets/logo/dap-logo-v2-500x200.png"
import logoV3w from "../assets/logo/dap-logo-v3-500x160-w.png"
import box64w from "../assets/icons/box-64-w.png"
import truck64w from "../assets/icons/truck-64-w.png"
import sale64w from "../assets/icons/sale-64-w.png"

import bannerL from "../assets/images/banner-1920x1080.png"
import bannerS from "../assets/images/banner-960x540.png"

import googleReview from "../assets/reviews/google-review-icon.png"

import Footer from "./Footer";


/***********************************************************************************************************
 * CLASS
 ***********************************************************************************************************/
const Home = () => {

  const DAP_URL = 'https://danforthautoparts.com';
  const PHONE = '416-690-2533';
  const ADDRESS_LONG = '3306 DANFORTH AVE, SCARBOROUGH, ON';
  const ADDRESS_SHORT = '3306 DANFORTH AVE';
  const ADDRESS_LINE2 = 'SCARBOROUGH, ON';
  const ADDRESS_LINE3 = 'M1L 1C4';

  const OFFSET_HDR_S = '90px'
  const OFFSET_HDR_L = '110px'

  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colors, fonts, products } = useTheme();
  const { dapProducts } = useProducts();
  const { hoursOfOperation } = useHours();
  const { dapReviews } = useReviews();


  /////////////////////////////////////////////////
  // Handles opening menu drawer
  /////////////////////////////////////////////////
  function openMenuDrawer() {

    onOpen();
  }


  /***********************************************************************************************************
   * UI
   ***********************************************************************************************************/
  return (
    <Box bgColor='transparent'>

      {/* HEADER START */}
      <Box
        as="header"
        position="fixed"
        color={colors.TXT_HEADER}
        backgroundColor={colors.BG_HEADER}
        backdropFilter="saturate(5%) blur(5px)"
        width="100%"
        pl={['10px', '10px', '100px', '200px']}
        pr={['10px', '10px', '100px', '200px']}
        pt='10px'
        pb='10px'>

        {/* HDR MAIN */}
        <HStack width={'100%'} spacing='0px'>

          {/* LOGO IMG/TXT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <HStack>
              <Link href={DAP_URL}><Image src={logoV1} boxSize={["70px", "70px", "90px", "90px"]}></Image></Link>
              <Link href={DAP_URL}><Image src={logoV3w} width={["100px", "100px", "164px", "164px"]}></Image></Link>
            </HStack>
          </motion.div>

          <Spacer></Spacer>

          {/* INFO (MOB ONLY) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <HStack display={{ base: "block", md: "none" }}
              fontSize={[fonts.NFO_SIZE_S, fonts.NFO_SIZE_S, fonts.NFO_SIZE_L, fonts.NFO_SIZE_L]}
              spacing='20px'>

              <Spacer></Spacer>

              {/* PHONE */}
              <HStack spacing='2px'>
                <ImPhone />
                <Link href={"Tel:" + PHONE}>{PHONE}</Link>
              </HStack>
              {/* ADDRESS */}
              <HStack spacing='2px'>
                <ImLocation />
                <Text>{ADDRESS_SHORT}</Text>
              </HStack>
            </HStack>
          </motion.div>

          {/* INFO (DESKTOP ONLY) / NAV (BOTH) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <VStack spacing='0px'>

              {/* INFO (DESKTOP ONLY) */}
              <HStack display={{ base: "none", md: "flex" }}
                fontSize={[fonts.NFO_SIZE_S, fonts.NFO_SIZE_S, fonts.NFO_SIZE_L, fonts.NFO_SIZE_L]}
                spacing='20px'
                width='100%'>
                <Spacer></Spacer>
                {/* PHONE */}
                <HStack spacing='2px'>
                  <ImPhone />
                  <Link href={"Tel:" + PHONE}>{PHONE}</Link>
                </HStack>
                {/* ADDRESS */}
                <HStack spacing='2px'>
                  <ImLocation />
                  <Text>{ADDRESS_LONG}</Text>
                </HStack>
              </HStack>

              {/* DESKTOP NAV */}
              <HStack display={{ base: "none", md: "block" }} >
                <Spacer></Spacer>

                <Breadcrumb separator='-' width='100%'
                  fontSize={[fonts.NAV_SIZE_S, fonts.NAV_SIZE_S, fonts.NAV_SIZE_L, fonts.NAV_SIZE_L]}>

                  <BreadcrumbItem>
                    <BreadcrumbLink href='#'>HOME</BreadcrumbLink>
                  </BreadcrumbItem>

                  <BreadcrumbItem>
                    <BreadcrumbLink href='#products'>PRODUCTS</BreadcrumbLink>
                  </BreadcrumbItem>

                  <BreadcrumbItem>
                    <BreadcrumbLink href='#location'>LOCATION</BreadcrumbLink>
                  </BreadcrumbItem>

                  <BreadcrumbItem>
                    <BreadcrumbLink href='#hours'>HOURS</BreadcrumbLink>
                  </BreadcrumbItem>

                </Breadcrumb>
              </HStack>

              {/* MOBILE NAV */}
              <HStack display={{ base: "block", md: "none" }}>
                <Spacer></Spacer>
                <IconButton
                  bgColor={colors.BG_HEADER}
                  color={colors.TXT_HEADER}
                  aria-label='Menu'
                  icon={<HamburgerIcon />}
                  onClick={openMenuDrawer}></IconButton>
              </HStack>

            </VStack>
          </motion.div>

        </HStack>

      </Box>

      {/* MOBILE NAV DRAWER */}
      <Drawer onClose={onClose} isOpen={isOpen} placement='right' size={'xs'}>
        <DrawerOverlay />
        <DrawerContent bgColor={colors.BG_BODY} color={colors.TXT_BODY_R}>
          <DrawerCloseButton />

          {/* DRAWER BODY */}
          <DrawerBody
            fontSize={[fonts.NAV_SIZE_S, fonts.NAV_SIZE_S, fonts.NAV_SIZE_L, fonts.NAV_SIZE_L]}
            fontWeight={"normal"}
            pt='40px' m='0px' mt='0px'>

            <VStack divider={<StackDivider borderColor='gray.200' />}
              spacing={'10px'}
              align='stretch'>
              <Box></Box>
              <Box>
                <Link href='#'>HOME</Link>
              </Box>
              <Box>
                <Link href='#products'>PRODUCTS</Link>
              </Box>
              <Box>
                <Link href='#location'>LOCATION</Link>
              </Box>
              <Box>
                <Link href='#hours'>HOURS</Link>
              </Box>

              <Box></Box>
            </VStack>

          </DrawerBody>
        </DrawerContent>
      </Drawer>
      {/* HEADER END */}



      {/* OPTIONS START */}
      <Center id='home' width='100%'
        mt={[OFFSET_HDR_S, OFFSET_HDR_S, OFFSET_HDR_L, OFFSET_HDR_L]}
        bgColor={colors.BG_RIBBON} color={colors.TXT_RIBBON}>
        <HStack
          height='50px'
          fontSize={[fonts.RIB_SIZE_S, fonts.RIB_SIZE_S, fonts.RIB_SIZE_L, fonts.RIB_SIZE_L]}
          spacing={['50px', '50px', '100px', '100px']}>

          {/* PICK UP */}
          <HStack>
            <Image src={box64w} boxSize={['32px', '32px', '32px', '32px']}></Image>
            <VStack spacing='0px'>
              <Text>PICKUP IN STORE</Text>
              <Text>Same day available</Text>
            </VStack>
          </HStack>

          {/* DELIVERY */}
          <HStack>
            <Image src={truck64w} boxSize={['32px', '32px', '32px', '32px']}></Image>
            <VStack spacing='0px'>
              <Text>FREE DELIVERY</Text>
              <Text>Available on most products</Text>
            </VStack>
          </HStack>

          {/* PRICES */}
          <HStack display={{ base: "none", md: "flex" }}>
            <Image src={sale64w} boxSize={['32px', '32px', '32px', '32px']}></Image>
            <VStack spacing='0px'>
              <Text>UNBEATABLE PRICES</Text>
              <Text>Best prices in Toronto</Text>
            </VStack>
          </HStack>


        </HStack>
      </Center>
      {/* OPTIONS END */}




      {/* BANNER */}
      <Box pt='0px'>

        {/* HOME BANNER (MOB ONLY) */}
        <Box display={{ base: "block", md: "none" }}
          backgroundColor={colors.BG_BODY}>
          <Box color={colors.TXT_HEADER} bgImage={bannerS}
            // width='100%'
            height={['220px', '320px', '420px', '620px']}
            backgroundPosition="center"
            backgroundSize={"cover"}
            backgroundRepeat="no-repeat">
          </Box>
        </Box>



        {/* HOME BANNER (DESKTOP ONLY) */}
        <Center pt='0px' pb='0px'>
          <Box display={{ base: "none", md: "block" }}
            backgroundImage={bannerL} backgroundPosition={'center'} backgroundSize={"cover"}
            height={['300px', '350px', '400px', '600px']}
            width={['600px', '700px', '800px', '1200px']}
            p={0} m={0}>
          </Box>
        </Center>

      </Box>



      {/* BODY */}
      <VStack as="main"
        pl={['10px', '10px', '100px', '200px']}
        pr={['10px', '10px', '100px', '200px']}
        // spacing='100px'
        spacing='0px'
      >


        {/* PRODUCTS */}
        <Box id='products' width='100px' height={[OFFSET_HDR_S, OFFSET_HDR_S, OFFSET_HDR_L, OFFSET_HDR_L]}></Box> {/*OFFSET STICKY HEADER*/}
        <Box backgroundColor={colors.BG_BODY} color={colors.TXT_BODY_B} width='100%'>
          <Text align='left' pl='20px'
            bgColor={colors.BG_RIBBON} color={colors.TXT_RIBBON}
            fontSize={[fonts.H1_SIZE_S, fonts.H1_SIZE_S, fonts.H1_SIZE_L, fonts.H1_SIZE_L]}>
            TOP CATEGORIES
          </Text>

          <Text fontSize={[fonts.H2_SIZE_S, fonts.H2_SIZE_S, fonts.H1_SIZE_L, fonts.H1_SIZE_L]}
            color={colors.TXT_BODY_R}
            pt='10px'>
            Call us today to place your order <Link href={"Tel:" + PHONE}>{PHONE}</Link>
          </Text>

          <Center>
            <Flex fontSize={[fonts.H2_SIZE_S, fonts.H2_SIZE_S, fonts.H2_SIZE_L, fonts.H2_SIZE_L]}
              color={colors.TXT_RIBBON}
              flexWrap='wrap'
              alignContent={'center'}
              width={['360px', '360px', '840px', '1280px']}>

              {dapProducts.map((product, index) => (

                // <Link key={index} href={product.link} target='_blank' pr='10px' pl='10px'>
                // <VStack spacing='0px'>
                <VStack spacing='0px' key={index} pr='10px' pl='10px'>
                  <Image src={product.thumb} boxSize={[products.SM, products.SM, products.MD, products.LG]} objectFit='contain'></Image>
                  <Text width='100%' p='2px' bgColor={colors.BG_RIBBON}>{product.name}</Text>
                </VStack>
                // </Link>

              ))}

            </Flex>
          </Center>

        </Box>



        {/* REVIEWS */}
        <Box id='reviews' width='100px' height={[OFFSET_HDR_S, OFFSET_HDR_S, OFFSET_HDR_L, OFFSET_HDR_L]}></Box> {/*OFFSET STICKY HEADER*/}
        <Box backgroundColor={colors.BG_BODY} color={colors.TXT_BODY_B} width='100%'>
          <Text align='left' pl='20px'
            bgColor={colors.BG_RIBBON} color={colors.TXT_RIBBON}
            fontSize={[fonts.H1_SIZE_S, fonts.H1_SIZE_S, fonts.H1_SIZE_L, fonts.H1_SIZE_L]}>
            WHAT DO OUR CUSTOMERS SAY?
          </Text>

          <Center>
            <Flex fontFamily={'review'} fontSize={[fonts.REV_SIZE_S, fonts.REV_SIZE_S, fonts.REV_SIZE_L, fonts.REV_SIZE_L]}
              color={colors.TXT_BODY_B}
              flexWrap='wrap'
              width={['220px', '220px', '690px', '1150px']}
            >

              {dapReviews.map((review, index) => (

                <VStack key={index} border='1px' borderColor='gray.200' borderRadius={'lg'}
                  width={['210px', '210px', '210px', '210px']}
                  spacing='10px'
                  m={['10px', '10px', '10px', '10px']}
                  p='10px'>
                  {/* Profile Image */}
                  <Image src={review.thumb} boxSize='48px'></Image>
                  {/* Name */}
                  <HStack>
                    <Image src={googleReview} boxSize='24px'></Image>
                    <Text width='100%' fontWeight={'bold'} fontSize={[fonts.H3_SIZE_S, fonts.H3_SIZE_S, fonts.H3_SIZE_L, fonts.H3_SIZE_L]}>{review.name}</Text>
                  </HStack>
                  {/* Rating */}
                  <Box display='flex' mt='2' alignItems='center'>
                    {Array(5)
                      .fill('')
                      .map((_, i) => (
                        <StarIcon
                          key={i}
                          color={i < review.rating ? 'teal.500' : 'gray.300'}
                        />
                      ))}
                    {/* Review Count */}
                    <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                      {review.reviewCount} reviews
                    </Box>
                  </Box>
                  {/* Comment */}
                  <Text align='left'>{review.comment.substring(0, 200)}... <Link href={review.link} target='_blank' fontWeight={'bold'}>More</Link></Text>

                </VStack>

              ))}

            </Flex>
          </Center>

        </Box>



        {/* LOCATION */}
        <Box id='location' width='100px' height={[OFFSET_HDR_S, OFFSET_HDR_S, OFFSET_HDR_L, OFFSET_HDR_L]}></Box> {/*OFFSET STICKY HEADER*/}
        <Box backgroundColor={colors.BG_LOC} color={colors.TXT_LOC} width='100%'>
          <Text align='left' pl='20px'
            bgColor={colors.BG_RIBBON} color={colors.TXT_RIBBON}
            fontSize={[fonts.H1_SIZE_S, fonts.H1_SIZE_S, fonts.H1_SIZE_L, fonts.H1_SIZE_L]}>
            LOCATION
          </Text>

          <Grid
            h={['200px', '200px', '300px', '300px']}
            templateRows='repeat(1, 1fr)'
            templateColumns='repeat(5, 1fr)'
            gap={0}
          >
            <GridItem rowSpan={1} colSpan={2}>
              <VStack fontFamily='review' fontSize={[fonts.H3_SIZE_S, fonts.H3_SIZE_S, fonts.H3_SIZE_L, fonts.H3_SIZE_L]}
                spacing='0px' height='100%' pt={['30px', '30px', '60px', '60px']}>
                <Text fontWeight='bold' pb='10px'>Danforth Auto Parts</Text>
                <Text>{ADDRESS_SHORT}</Text>
                <Text>{ADDRESS_LINE2}</Text>
                <Text>{ADDRESS_LINE3}</Text>

                <Text pt='10px'>{PHONE}</Text>
              </VStack>
            </GridItem>
            <GridItem rowSpan={1} colSpan={3}>
              <iframe title="Danforth Auto Parts Address" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2884.8237434175435!2d-79.28200114854486!3d43.69342757901745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4ce9a6fa267c7%3A0xd3de6c6b0d6433b9!2s3306%20Danforth%20Ave%2C%20Scarborough%2C%20ON%20M1L%201C4!5e0!3m2!1sen!2sca!4v1678388254354!5m2!1sen!2sca" loading="lazy" width='100%' height='100%'></iframe>
            </GridItem>
          </Grid>



        </Box>




        {/* HOURS */}
        <Box id='hours' width='100px' height={[OFFSET_HDR_S, OFFSET_HDR_S, OFFSET_HDR_L, OFFSET_HDR_L]}></Box> {/*OFFSET STICKY HEADER*/}
        <Box backgroundColor={colors.BG_BODY} color={colors.TXT_BODY_B} width='100%'>
          <Text align='left' pl='20px'
            bgColor={colors.BG_RIBBON} color={colors.TXT_RIBBON}
            fontSize={[fonts.H1_SIZE_S, fonts.H1_SIZE_S, fonts.H1_SIZE_L, fonts.H1_SIZE_L]}>
            HOURS
          </Text>


          <Box p='10px'>
            <Text fontSize={[fonts.H2_SIZE_S, fonts.H2_SIZE_S, fonts.H2_SIZE_L, fonts.H2_SIZE_L]}>Hours of Operation</Text>
          </Box>


          <VStack fontSize={[fonts.H3_SIZE_S, fonts.H3_SIZE_S, fonts.H3_SIZE_L, fonts.H3_SIZE_L]}
            spacing='0px'>
            {hoursOfOperation.map((day, index) => (
              <>
                <Box key={index}>
                  <HStack spacing='0px'>
                    <Text align='left' width={['60px', '60px', '80px', '80px']}>{day.day}</Text>

                    <Text align='right' width={['100px', '100px', '120px', '120px']}>{day.open}{day.close}</Text>
                  </HStack>
                </Box>
              </>
            ))}
          </VStack>



        </Box>

      </VStack>
      {/* LOGO */}
      <Center pt='50px'>
        <Image src={logoV2} width={['200px', '200px', '300px', '300px']}></Image>
      </Center>

      <Footer></Footer>
    </Box >


  );
};
export default Home;


