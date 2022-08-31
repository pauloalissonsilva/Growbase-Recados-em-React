import { Flex, Avatar, Box, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData: boolean
}

export default function Profile({ showProfileData = true }) {

  return (
    <Flex align="center">
      {
        showProfileData && (

          <Box mr="4" textAlign="right">
            <Text>Paulo Alisson</Text>
            <Text color="gray.300" fontSize="small">Alyssonbbmp@gmail.com</Text>
          </Box>
        )
      }
      <Avatar size="md" name="Paulo Alisson" src="image.png" />
    </Flex>
  )
}
