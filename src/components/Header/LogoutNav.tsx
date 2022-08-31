import { Button, HStack, Icon } from "@chakra-ui/react";
import { RiNotificationLine, RiUserLine } from "react-icons/ri";

export default function LogoutNav() {
  return (
    <HStack
      spacing={["6", "8"]}
      mx={["6", "8"]}
      pr={["6", "8"]}
      py="1"
      color="gray.300"
      borderRightWidth={1}
      borderColor="gray.700"
    >

      <Button as="a" colorScheme="whiteAlpha">Sair</Button>
    </HStack>
  )
}
