import { Box, Button, Container, Divider, Flex, HStack, Heading, Icon, Menu, MenuButton, MenuItem, MenuList, Table, TableContainer, Text, Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react'

import { Link, useNavigate } from 'react-router-dom'

const TopNav = ({ title, onOpen }) => {
    const navigate = useNavigate();
   function handleLink(link){
        navigate(`/${link}`)

   }

    return (

        <Box boxShadow={"xl"} bg={'white'} mt={"123px"}>
         
         

            <TableContainer>
                <Table variant='unstyled' my={2}>
                    <Thead>
                        <Tr>
                            <Th borderRight={"1px solid #C4C4C4"} textAlign={'center'} p={"52px"} _hover={{ bg: "green" }} onClick={() => { handleLink("")}} cursor={'pointer'}>
                               
                                    Program Details
                            </Th>
                            <Th borderRight={"1px solid #C4C4C4"} textAlign={'center'} p={"52px"} _hover={{ bg: "green" }} onClick={() => { handleLink("applicationform")}} cursor={'pointer'}>
                               
                                Application Form
                            </Th>
                            <Th borderRight={"1px solid #C4C4C4"} textAlign={'center'} p={"52px"} _hover={{ bg: "green" }} onClick={() => { handleLink("")}} cursor={'pointer'}>
                               
                                    Workflow
                            </Th>
                            <Th p={"52px"} textAlign={'center'} _hover={{ bg: "green" }} onClick={() => { handleLink("")}} cursor={'pointer'}>
                                
                                    Preview
                            </Th>
                        </Tr>
                    </Thead>
                </Table>
            </TableContainer>



        </Box>


    )
}

export default TopNav