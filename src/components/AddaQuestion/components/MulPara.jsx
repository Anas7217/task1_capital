import { Box, Button, Checkbox, Flex, FormLabel, HStack, Heading, Img, Input, Select, Stack, Switch, Text } from '@chakra-ui/react'

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import VideoBasedQuestion from './VideoBasedQuestion';

const formatTitle = (title) => {
   // Replace camelCase with space-separated words and capitalize the first letter of each word
//    return title.replace(/([a-z])([A-Z])/g, '$1 $2 ').replace(/^\w/, (c) => c.toUpperCase());
return title.replace(/-/g, ' ').replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
 }
const MulPara = ({title}) => {
    const [Title, setTitle] = useState(title);
    const handleOptionClick = (value) => {
       console.log(value)
       setTitle(value);

     };
  return (
    <>
    {
        Title==="videobasedquestion"?<VideoBasedQuestion title={Title}/>:
      
        
    
    <Flex flexDir={'column'} gap={"3"} >

            <Box bg={'#D0F7FA'} p={4} > 

                <Heading>
                    {formatTitle(Title)}

                </Heading>
                {/* {console.log(Title)} */}
            </Box>
            <Box p={4} >
                <Stack gap={"4"}>
                    <Stack>
                        <FormLabel>Type</FormLabel>
                        <Select colorScheme='black' value={Title} onChange={(e) => handleOptionClick(e.target.value)} >
                            <option value='multiple-choice'>Multiple Choice</option>
                            <option value='paragraph' >Paragraph</option>
                            <option value='short-answer'>short answer</option>
                            <option value='yes-or-no'>Yes/No</option>
                            <option value='dropdown'>Dropdown</option>
                            <option value='date'>Date</option>
                            <option value='number'>Number</option>
                            <option value='file-uploaded'>File Uploaded</option>
                            <option value='video-question'>Video question</option>
                        </Select>
                    </Stack>
                    <Stack>

                        <FormLabel>Question</FormLabel>
                        <Input placeholder=" " colorScheme='black' />
                        {
                            Title === "yes-or-no" && (
                                <Checkbox isChecked colorScheme='green'>Disqualify candidate if the answer is no</Checkbox>
                            )
                        }

                    </Stack>
                    {
                        (Title !== "paragraph" && Title !== "yes-or-no") && (
                            <>

                                <Stack >

                                    <FormLabel>Choice</FormLabel>
                                    <HStack>
                                        <Img src='bars.svg' />
                                        <Input placeholder='Type here' />
                                        <Img src='plus.svg' />
                                    </HStack>
                                    <Checkbox isChecked colorScheme='green' fontSize={"sm"}>Enable “Other” option </Checkbox>



                                </Stack>
                                {
                                    Title !== "dropdown" && (
                                        <Stack>
                                            <FormLabel fontSize={'md'} fontWeight={'bold'} >Multiple choice allowed</FormLabel>
                                            <Input placeholder='Enter number of choice allowed here' />

                                        </Stack>

                                    )
                                }

                            </>
                        )
                    }
                    {/* <Stack disabled={Title === "paragraph"} >

                <FormLabel>Choice</FormLabel>
                <HStack>
                    <Img src='bars.svg' />
                    <Input placeholder='Type here' />
                    <Img src='plus.svg' />
                </HStack>
                <Checkbox isChecked colorScheme='green' fontSize={"sm"}>Enable “Other” option </Checkbox>



            </Stack> */}
                    {/* <Stack>
                <FormLabel>Have you ever been rejected by the UK embassy?</FormLabel>
                <Input placeholder='Enter number of choice allowed here' />

            </Stack> */}
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



                </Stack>

            </Box>




        </Flex>
        }
        </>
        
  )
}

export default MulPara