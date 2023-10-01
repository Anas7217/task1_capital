// import { Container } from '@chakra-ui/react';
// import './App.css';
import React from 'react';
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";

import { ChakraProvider } from '@chakra-ui/react';
import DashBoard1 from './pages/DashBoardTask1/DashBoard1';
import ApplicationForm from './pages/ApplicationForm';
import AddaQuestion from './components/AddaQuestion/AddaQuestion';






const router = createBrowserRouter([
  {
    path: "/",
    element: <DashBoard1 />,
  },
  {
    path: "/applicationform",
    element: <ApplicationForm />,
  },
  {
    path: "/addaquestion",
    element: <AddaQuestion />
  }

]);


function App() {

  return (
    <ChakraProvider>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
     </ChakraProvider>
    // <ChakraProvider>

      

   
    //   <Routes>
    //     <Route path="/" element={<DashBoard1 />}>
    //       <Route path="applicationform" element={<ApplicationForm />} />
    //       <Route path="addaquestion" element={<AddaQuestion />} />
    //     </Route>
    //   </Routes>

    // </ChakraProvider>

  );
}

export default App;
