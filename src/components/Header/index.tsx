import { Flex } from "@chakra-ui/react";

import Logo from "./Logo";
import LogoutNav from "./LogoutNav";

import Profile from "./Profile";
import SearchBox from "./SearchBox";

export default function Header() {

  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      px="6"
      mt="4"
      align="center"
    >
      <Logo />
      <SearchBox />
      <Flex align="center" ml="auto">
        <LogoutNav/>
        <Profile/>
      </Flex>
    </Flex>
  )
}
