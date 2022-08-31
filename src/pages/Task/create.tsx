import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, Stack, Textarea } from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";

import { Input } from "../../components/Form/Input";
import Header from "../../components/Header";

export default function CreateTask() {
  const [value, setValue] = useState('')

  const handleInputChange = (e: { target: { value: any; }; }) => {
    let inputValue = e.target.value
    setValue(inputValue)
  }

  return (
    <Box>
      <Header />
      <Flex w="100%" my="6" maxWidth={760} mx="auto" px="6">

        <Box flex="1" borderRadius={8} bg="gray.800" px={["6", "8"]}>
          <Heading py="4" size="lg" fontWeight="normal" >Criar taks</Heading>

          <Divider my="6" borderColor="gray.700" />
          <Stack spacing="8">
            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input
                id="name"
                name="name" type="name"
                label="Nome"
              />
            </SimpleGrid>
            <Textarea
                value={value}
                onChange={handleInputChange}
                placeholder='Digite os detalhes da task'
                size='sm'
                resize="none"
              />
          </Stack>
          <Flex py="8" justify="flex-end">
            <HStack spacing="4">
              <Link to="/">
                <Button as="a" colorScheme="whiteAlpha">Cancelar</Button>
              </Link>
              <Button colorScheme="green">Salvar</Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}
