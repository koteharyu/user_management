import { Wrap, WrapItem, Spinner, Center } from "@chakra-ui/react";
import { memo, useEffect, VFC } from "react";
import { UserCard } from "../organisms/user/UserCard";
import { useAllUsers } from '../../hooks/useAllUsers'

export const UserManagement: VFC = memo(() => {
  const { getUsers, users, loading } = useAllUsers()

  useEffect(() => {
    getUsers()
  },[])

  return (
    <>
      {loading ? (
        <Center height="100vh">
          <Spinner />
        </Center>
      ) : (
        <Wrap p={{ base: 4, md: 10 }}>
          {users.map((user) => (
            <WrapItem key={user.id} mx="auto">
              <UserCard userName={user.username} iamgeUrl="https://source.unsplash.com/random" fullName={user.name} />
            </WrapItem>
          ))}
        </Wrap>
      )}
    </>
  )
})
