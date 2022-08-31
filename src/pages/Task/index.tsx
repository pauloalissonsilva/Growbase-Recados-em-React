import { Box, Button, Checkbox, Text, Flex, Heading, Icon, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import api from "../../services/api";

interface TaskData {
  description: string
  detail: string
}

export default function TaskList() {
  const [task, setTask] = useState<TaskData>()
  const token = localStorage.getItem('@:token');

  useEffect(() => {
    api.post("/task",
      {
        description: "Estudar o Growbase",
        detail: "Estudar sobre base de projetos e Redux Toolkit",
        token
      }).then(response => setTask(response.data.data))
  }, [])


  return (
    <Box>
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal" >Tasks</Heading>
            <Link to="/tasks/create">
              <Button as="a" size="sm" fontSize="sm" colorScheme="pink" leftIcon={<Icon as={RiAddLine} />}>
                Criar Novo
              </Button>
            </Link>
          </Flex>
          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px={["4", "4", "6"]} color="gray.300" w="8">
                  <Checkbox colorScheme="red" />
                </Th>
                <Th>Nome</Th>
                <Th>Detalhes</Th>
                <Th w="8"></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px={["4", "4", "6"]} >
                  <Checkbox colorScheme="red" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Paulo Alisson S. Costa</Text>
                  </Box>
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">{task?.description}</Text>
                  </Box>
                </Td>
                <Td>
                  <Button as="a" size="sm" fontSize="sm" colorScheme="green" leftIcon={<Icon as={RiPencilLine} />}>
                    Editar
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </Box>
      </Flex>
    </Box>
  )
}
