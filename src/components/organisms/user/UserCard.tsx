import { memo, VFC } from "react";
import { Box, Stack, Image, Text } from '@chakra-ui/react'

type Props = {
  userName: string
  iamgeUrl: string
  fullName: string
}

export const UserCard: VFC<Props> = memo((props) => {
  const { userName, iamgeUrl, fullName } = props
  return (
    <Box w="260" h="260" bg="gray" borderRadius="10px" shadow="md" p={4} _hover={{ opacity: ".6", cursor: "pointer" }}>
      <Stack textAlign="center">
        <Image src={iamgeUrl} boxSize="160px" borderRadius="full" alt={userName} m="auto" />
        <Text fontSize="lg" fontWeight="bold" color="white">{userName}</Text>
        <Text fontSize="md">{fullName}</Text>
      </Stack>
    </Box>
  )
})
