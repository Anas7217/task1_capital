import { Box, Button, Checkbox, Divider, Flex, FormControl, FormErrorMessage, FormHelperText, FormLabel, HStack, Heading, Img, Input, Stack, Switch, Text } from '@chakra-ui/react'

import React from 'react'
import { Link } from 'react-router-dom'

const AdditionalQuestions = () => {
    return (
        <Box w={'595px'} h={'fit-content'} pb={5} mt={3} boxShadow={'xl'} borderRadius={'xl'}>
            <Flex flexDir={'column'} >

                <Box bg={'#D0F7FA'} p={4} >

                    <Heading>
                        Additional Question
                    </Heading>
                </Box>
                <Box p={4} >
                    <Stack gap={"4"}>
                        <Stack>
                            <Text as={"p"} fontSize={'xs'} color={"#979797"}>paragraph</Text>
                            <HStack justifyContent={'space-between'}>
                                <FormLabel>Please tell me about yourself in less than 500 words</FormLabel>
                                <Img src='edit.svg' alt='edit-image' />


                            </HStack>
                            <Input placeholder=" " variant={"unstyled"} />
                            <Divider orientation='horizontal' />
                        </Stack>
                        <Stack>
                            <Text as={"p"} fontSize={'xs'} color={"#979797"}>Dropdown</Text>
                            <HStack justifyContent={'space-between'}>
                                <FormLabel>Please select the year of graduation from the list below</FormLabel>
                                <Img src='edit.svg' alt='edit-image' />


                            </HStack>
                            <FormLabel>Question</FormLabel>
                            <Input placeholder=" " colorScheme='black' />

                        </Stack>
                        <Stack>

                            <FormLabel>Choice</FormLabel>
                            <HStack>
                                <Img src='bars.svg' />
                                <Input placeholder='Type here' />
                                <Img src='plus.svg' />
                            </HStack>



                        </Stack>
                        <Stack>
                            <HStack justifyContent={'space-between'}>
                                <HStack>
                                    <Img src='wrong.svg' />
                                    <Link to="">

                                        <Text color={"#A80000"} >Delete question</Text>
                                    </Link>
                                </HStack>
                                <Button bg={"#087B2F"} _hover={{ bg: "green.600" }} color={"white"} >Save</Button>

                            </HStack>
                        </Stack>
                        <Stack>
                            <Text as={"p"} fontSize={'xs'} color={"#979797"}>Yes/No questions</Text>
                            <HStack justifyContent={'space-between'}>
                                <FormLabel>Have you ever been rejected by the UK embassy?</FormLabel>
                                <Img src='edit.svg' alt='edit-image' />


                            </HStack>

                        </Stack>


                    </Stack>

                </Box>
                <Box>
                    <HStack mt={3} p={4}>
                        <Link to="/addaquestion">
                            <Img w="23px" h="24px" src="plus.svg" alt="Plus Icon" />
                        </Link>
                        <Text>Add q question</Text>

                        {/* <Link to="https://example.com">
                            <Img w="23px" h="24px" src="plus.svg" alt="Plus Icon" />
                        </Link>
                        <Text>Add q question</Text> */}
                    </HStack>
                </Box>



            </Flex>
        </Box>
    )
}

export default AdditionalQuestions