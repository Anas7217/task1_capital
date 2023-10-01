import { Container } from "@chakra-ui/react"
import UploadCoverImage from "../components/UploadCoverImage"
import PersonalInfo from "../components/PersonalInfo"
import Profile from "../components/Profile"
import AdditionalQuestions from "../components/AdditionalQuestions"
import AddaQuestion from "../components/AddaQuestion/AddaQuestion"
import DashBoard1 from "./DashBoardTask1/DashBoard1"



const ApplicationForm = ({children}) => {
    return (
        <DashBoard1>
            <UploadCoverImage />
            <PersonalInfo />
            <Profile />
            <AdditionalQuestions /> 
            {/* <AddaQuestion /> */}
            {children}

        </DashBoard1>
    )
}

export default ApplicationForm