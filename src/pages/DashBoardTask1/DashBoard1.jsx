import { Box, Container, Flex } from '@chakra-ui/react'
import React, { Children } from 'react'
import SideNav from '../../components/SideNav'
import TopNav from '../../components/TopNav'
import UploadCoverImage from '../../components/UploadCoverImage'
import Profile from '../../components/Profile'
import PersonalInfo from '../../components/PersonalInfo'
import AdditionalQuestions from '../../components/AdditionalQuestions'
import AddaQuestion from '../../components/AddaQuestion/AddaQuestion'

const DashBoard1 = ({children}) => {
    return (
        <Flex>
            <Box>

                <SideNav />
            </Box>
            <Box flexGrow={1}>
                <TopNav />
                <Container>

                {children}
                </Container>
               

            </Box>
        </Flex>
    )
}

export default DashBoard1