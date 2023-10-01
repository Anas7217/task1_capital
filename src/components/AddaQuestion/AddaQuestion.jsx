import { Box, Button, Checkbox, Flex, FormLabel, HStack, Heading, Img, Input, Select, Stack, Switch, Text } from '@chakra-ui/react'

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import VideoBasedQuestion from './components/VideoBasedQuestion';
import MulPara from './components/MulPara';
import DashBoard1 from '../../pages/DashBoardTask1/DashBoard1';

const AddaQuestion = ({ title = "yesorno" }) => {
  
    return (
        <DashBoard1>


        <Box w={'595px'} h={'fit-content'} pb={5} mt={3} boxShadow={'xl'} borderRadius={'xl'}>
            {
              title==="videobasedquestion"?<VideoBasedQuestion title={"videobasedquestion"} />:<MulPara title={"mutiplechoice"} />
            }
            
        </Box>
        </DashBoard1>
        

    )
}

export default AddaQuestion