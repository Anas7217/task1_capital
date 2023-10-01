import { Box, Checkbox, Divider, Flex, FormControl, FormErrorMessage, FormHelperText, FormLabel, HStack, Heading, Img, Input, Stack, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const PersonalInfo = () => {
  return (
    <Box w={'595px'} h={'fit-content'} pb={5}  mt={3} boxShadow={'xl'} >
    <Flex flexDir={'column'} gap={8} borderRadius={'lg'} >
       <Box bg={'#D0F7FA'} py={'4'} pl={'4'}  >

       <Heading>Personal information</Heading>
       </Box>

       <Box>

       <FormControl variant="floating" id="first-name" isInvalid px={5}>
           <Stack spacing={0}> 
               <FormLabel>First name</FormLabel>
               <Input placeholder=" " variant={"unstyled"} />
               <Divider orientation='horizontal' />
           </Stack >
          <Stack spacing={0} mt={3}>
               <FormLabel>Last name</FormLabel>
               <Input placeholder=" " variant={"unstyled"} />
               <Divider orientation='horizontal' />
           </Stack>
          <Stack spacing={0} mt={3}>
               <FormLabel>Email</FormLabel>
               <Input type="email" placeholder=" " variant={"unstyled"} />
               <Divider orientation='horizontal' />
           </Stack>
          <Stack spacing={0} mt={3}>
               <HStack justify={'space-between'}>
                   <FormLabel>Phone</FormLabel>
                   <Checkbox colorScheme='#D4D9E4'>Internal</Checkbox>


               </HStack>
               <Input type="tel" placeholder=" " variant={"unstyled"} />
               <Divider orientation='horizontal' />
           </Stack>
          <Stack spacing={0} mt={3}>
               <HStack justify={'space-between'}>
                   <FormLabel>Nationality</FormLabel>
                   <Checkbox colorScheme='#D4D9E4'>Internal</Checkbox>


               </HStack>
               <Input type="text" placeholder=" " variant={"unstyled"} />
               <Divider orientation='horizontal' />
           </Stack>
          <Stack spacing={0} mt={3}>
               <HStack justify={'space-between'}>
                   <FormLabel>Current Residence</FormLabel>
                   <Checkbox colorScheme='#D4D9E4'>Internal</Checkbox>


               </HStack>
               <Input type="text" placeholder=" " variant={"unstyled"} />
               <Divider orientation='horizontal' />
           </Stack>
          <Stack spacing={0} mt={3}>
               <HStack justify={'space-between'}>
                   <FormLabel>ID Number</FormLabel>
                   <Checkbox colorScheme='#D4D9E4'>Internal</Checkbox>


               </HStack>
               <Input type="text" placeholder=" " variant={"unstyled"} />
               <Divider orientation='horizontal' />
           </Stack>
          <Stack spacing={0} mt={3}>
               <HStack justify={'space-between'}>
                   <FormLabel>Date of Birth</FormLabel>
                   <Checkbox colorScheme='#D4D9E4'>Internal</Checkbox>


               </HStack>
               <Input type="date" placeholder=" " variant={"unstyled"} />
               <Divider orientation='horizontal' />
           </Stack>
          <Stack spacing={0} mt={3}>
               <HStack justify={'space-between'}>
                   <FormLabel>Gender</FormLabel>
                   <Checkbox colorScheme='#D4D9E4'>Internal</Checkbox>


               </HStack>
               <Input type="text" placeholder=" " variant={"unstyled"} />
               <Divider orientation='horizontal' />
           </Stack>
           {/* <Img w="23px" h="24px" as={Link} to="" src="plus.svg"/> */}

           <HStack mt={3}>

           <Link to="https://example.com">
               <Img w="23px" h="24px" src="plus.svg" alt="Plus Icon" />
           </Link>
           <Text>Add q question</Text>
           </HStack>

       </FormControl>
       </Box>







   </Flex>
  </Box>
  )
}

export default PersonalInfo