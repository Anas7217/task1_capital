import { Avatar, Box, Flex, HStack, Heading, Icon, Img, Stack, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
// import { RiDashboardLine } from "react-icons/ri"  // Assuming you have the correct icon component
// import { BsArrowDownUp } from "react-icons/bs"
// import { BiSupport } from "react-icons/bi"
// import {FaBars} from "react-icons/fa"
// import bars from "bars.svg"






const SideNav = () => {
    const navLinks = [
        // {
        //     img:"bars.svg",
        //     text:"anas",
        //     link:"/"
        // },
        {
            img: "home.jpg",
            text: "anas",
            link: "/"
        },
        {
            img: "tick_bars.jpg",
            text: "anas",
            link: "/"
        },
       


    ];
    return (
        <Box boxShadow={{ base: "none", lg: "lg" }} w={"113px"}  justifyContent={'space-between'}  bg={"white"}  px={'40px'} h='3100px'>

        <Stack >
           

                <Box  pt={"50px"}> 
                    <Img src='bars.svg' />
                </Box>
                <Box display={'flex'} flexDirection={"column"} gap={10} pt={"90"}  >
                   
                     {navLinks.map((nav, index) => (
                            <Link to={nav.link} key={index}>


                              <Box>
                                 <Img src={nav.img} w={9} h={9}></Img>
                              </Box>  
                                
                            </Link>
                        ))}
                </Box>
            
            {/* <Box display={'flex'} flexDir={'column'} gap={6} >
                 <Img src='/assests/setting.svg' w={12} h={12} />
                 <Avatar size="sm" name="Asif Shiekh" bg='#D7E5FD'  />      
            </Box> */}


          
        </Stack>
        </Box>
    )
}

export default SideNav