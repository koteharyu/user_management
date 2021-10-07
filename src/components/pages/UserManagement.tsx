import {
  Wrap, WrapItem, Spinner, Center, useDisclosure,
} from "@chakra-ui/react";
import { memo, useCallback, useEffect, VFC } from "react";
import { UserCard } from "../organisms/user/UserCard";
import { useAllUsers } from '../../hooks/useAllUsers'
import { UserDetailModal } from "../organisms/user/UserDetailModal";
import { useSelectUser } from '../../hooks/useSelectUser'

export const UserManagement: VFC = memo(() => {
  const { getUsers, users, loading } = useAllUsers()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { onSelectedUser, selectedUser } = useSelectUser()

  const onClickUser = useCallback((id: number) => {
    onSelectedUser({ id, users, onOpen })
  }, [users, onSelectedUser, onOpen ])

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <>
      {loading ? (
        <Center height="100vh">
          <Spinner />
        </Center>
      ) : (
        <Wrap p={{ base: 4, md: 10 }}>
          {users.map((user) => (
            <WrapItem key={user.id} mx="auto" >
              <UserCard onClick={onClickUser} id={user.id} userName={user.username} iamgeUrl="https://source.unsplash.com/random" fullName={user.name} />
            </WrapItem>
          ))}
        </Wrap>
      )}
      <UserDetailModal isOpen={isOpen} onClose={onClose} user={selectedUser} />
    </>
  )
})
