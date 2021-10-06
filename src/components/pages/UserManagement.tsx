import { Wrap } from "@chakra-ui/react";
import { memo, VFC } from "react";
import { UserCard } from "../organisms/user/UserCard";

export const UserManagement: VFC = memo(() => {
  return (
    <>
      <Wrap p={{ base: 4, md: 10 }}>
        <UserCard userName="haryu" iamgeUrl="https://source.unsplash.com/random" fullName="haryu ishida" />
      </Wrap>
    </>
  )
})
