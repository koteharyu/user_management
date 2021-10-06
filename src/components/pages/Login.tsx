import { Flex, Box, Heading, Divider, Input, Button, Stack } from "@chakra-ui/react";
import { memo, VFC } from "react";

export const Login: VFC = memo(() => {
  return (
    <Flex align="center" justify="center" height="100vh">
      <Box bg="gray" w="sm" p={4} borderRadius="md" shadow="md">
        <Heading as="h1" size="lg" textAlign="center">User Management App</Heading>
        <Divider my={4} />
        <Stack spacing={6} py={4} px={10}>
          <Input placeholder="User Id" />
          <Button bg="teal.400" color="white" _hover={{ opacity: "0.8"}}>LOGIN</Button>
        </Stack>
      </Box>
    </Flex>
  )
})
