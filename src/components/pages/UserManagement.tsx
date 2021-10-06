import { Box, Stack, Wrap, WrapItem, Image, Text } from "@chakra-ui/react";
import { memo, VFC } from "react";

export const UserManagement: VFC = memo(() => {
  return (
    <>
      <Wrap p={{ base: 4, md: 10}}>
        <WrapItem >
          <Box w="260" h="260" bg="gray" borderRadius="10px" shadow="md" p={4} _hover={{ opacity: ".6", cursor: "pointer"}}>
            <Stack textAlign="center">
              <Image src="https://source.unsplash.com/random" boxSize="160px" borderRadius="full" alt="user plofile" m="auto" />
              <Text fontSize="lg" fontWeight="bold" color="white">Haryu</Text>
              <Text fontSize="md">haryu ishida</Text>
            </Stack>
          </Box>
        </WrapItem>
      </Wrap>
    </>
  )
})
