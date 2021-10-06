import { Flex, Box, Heading, Divider, Input, Stack } from "@chakra-ui/react";
import { ChangeEvent, memo, useState, VFC } from "react";
import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { useAuth } from '../../hooks/useAuth'

export const Login: VFC = memo(() => {
  const [userId, setUserId] = useState<string>("")
  const { login, loading } = useAuth()
  const onChangeUserId = (e: ChangeEvent<HTMLInputElement>) => {
    setUserId(e.target.value)
  }
  const onClickLogin = () => {
    login(userId)
  }

  return (
    <Flex align="center" justify="center" height="100vh">
      <Box bg="gray" w="sm" p={4} borderRadius="md" shadow="md">
        <Heading as="h1" size="lg" textAlign="center">User Management App</Heading>
        <Divider my={4} />
        <Stack spacing={6} py={4} px={10}>
          <Input placeholder="User Id" value={userId} onChange={onChangeUserId} />
          <PrimaryButton onClick={onClickLogin} loadng={loading} disabled={userId === ""}>LOGIN</PrimaryButton>
        </Stack>
      </Box>
    </Flex>
  )
})
