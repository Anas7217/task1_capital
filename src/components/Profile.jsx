import { Box, Checkbox, Divider, Flex, FormControl, FormErrorMessage, FormHelperText, FormLabel, HStack, Heading, Img, Input, Stack, Switch, Text } from '@chakra-ui/react'

import React from 'react'
import { Link } from 'react-router-dom'
import ApplicationForm from '../pages/ApplicationForm'

const Profile = () => {
  return (
    <Box w={'595px'} h={'fit-content'} pb={5} mt={3} boxShadow={'xl'} borderRadius={'xl'}>
      <Flex flexDir={'column'} >

        <Box bg={'#D0F7FA'} p={4} >

          <Heading>
            Profile
          </Heading>
        </Box>
        <Box p={4} >
          <Stack>
            <Stack>
              <HStack justifyContent={'space-between'}>
                <FormLabel>Education</FormLabel>
                <HStack gap={'5'}>
                  <Checkbox>Mandatory</Checkbox>
                  <HStack>
                    <Switch id='isDisabled' isDisabled defaultChecked />
                    <FormLabel htmlFor='isDisabled'>Hide:</FormLabel>
                  </HStack>
                </HStack>


              </HStack>
              <Input placeholder=" " variant={"unstyled"} />
              <Divider orientation='horizontal' />
            </Stack>
            <Stack>
              <HStack justifyContent={'space-between'}>
                <FormLabel>Experience</FormLabel>
                <HStack gap={'5'}>
                  <Checkbox isChecked>Mandatory</Checkbox>
                  <HStack>
                    <Switch id='isChecked' isChecked />
                    <FormLabel htmlFor='isChecked'>Show</FormLabel>
                  </HStack>
                </HStack>


              </HStack>
              <Input placeholder=" " variant={"unstyled"} />
              <Divider orientation='horizontal' />
            </Stack>
            <Stack>
              <HStack justifyContent={'space-between'}>
                <FormLabel>Resume</FormLabel>
                <HStack gap={'5'}>
                  <Checkbox>Mandatory</Checkbox>
                  <HStack>
                    <Switch id='isDisabled' isDisabled defaultChecked />
                    <FormLabel htmlFor='isDisabled'>Hide:</FormLabel>
                  </HStack>
                </HStack>


              </HStack>
              <Input placeholder=" " variant={"unstyled"} />
              <Divider orientation='horizontal' />
            </Stack>

          </Stack>

        </Box>
        <Box>
          <HStack mt={3} p={4}>

              <Link to="/addaquestion">
                <Img w="23px" h="24px" src="plus.svg" alt="Plus Icon" />
              </Link>
              <Text>Add q question</Text>
            
          </HStack>
        </Box>



      </Flex>
    </Box>
  )
}

export default Profile