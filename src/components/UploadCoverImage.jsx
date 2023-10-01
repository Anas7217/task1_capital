



import { Box, Center, Stack, Text, Input, Img, Heading, Flex } from "@chakra-ui/react";
import { useState } from "react";

const UploadCoverImage = () => {
  const [selectedImage, setSelectedImage] = useState('upload.jpg');

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // You can handle the selected image here, for example, display a preview:
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
   
    <Box w={'595px'} h={'fit-content'} pb={5} mt={3} boxShadow={'xl'} borderRadius={'lg'}>
      <Flex flexDir={'column'} >
        <Stack>
          <Box bg={'#D0F7FA'} py={'4'} pl={'4'}  >

            <Heading>
            Upload cover image
            </Heading>
          </Box>
          <Box p={20}>
            <Center>
              <label htmlFor="imageInput">
                {selectedImage ? (

                  <Stack spacing={2} alignItems={'center'} justifyContent={'center'}>
                    <Img
                      src={selectedImage}
                      alt="Selected Image"
                      width="33px"
                      height="33px"
                      cursor={"pointer"}

                    />
                    <Text as="h4">Upload Cover Image</Text>
                    <Text as="p">16:9 ratio is recommended. Max image size 1mb</Text>
                  </Stack>
                ) : (
                  ""

                )}
              </label>
              <Input
                id="imageInput"
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleImageChange}
              />

            </Center>
          </Box>

        </Stack>

      </Flex>
    </Box>
    
  );
};

export default UploadCoverImage;

