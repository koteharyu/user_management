import { ChangeEvent, memo, useEffect, useState, VFC } from "react";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, FormControl, FormLabel, Input, Stack, ModalFooter } from '@chakra-ui/react'
import { User } from "../../../types/api/user";
import { PrimaryButton } from "../../atoms/button/PrimaryButton";

type Props = {
  isOpen: boolean
  onClose: () => void
  user: User | null
  isAdmin?: boolean
}

export const UserDetailModal: VFC<Props> = memo((props) => {

  const { isOpen, onClose, user, isAdmin = false } = props

  const [username, setUsername] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")

  useEffect(() => {
    setUsername(user?.username ?? "")
    setName(user?.name ?? "")
    setEmail(user?.email ?? "")
    setPhone(user?.phone ?? "")
  },[user])

  const onClickUpdate = () => alert("updated by admin")

  const onChangeUsername = (e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)
  const onChangeName = (e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)
  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)
  const onChangePhone = (e: ChangeEvent<HTMLInputElement>) => setPhone(e.target.value)

  return (
    <Modal isOpen={isOpen} onClose={onClose} autoFocus={false} motionPreset="slideInRight" >
      <ModalOverlay>
        <ModalContent pb={6}>
          <ModalHeader>
            user detail
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody mx={2}>
            <Stack spacing={5}>
              <FormControl>
                <FormLabel>
                  User Name
                </FormLabel>
                <Input value={username} onChange={onChangeUsername} isReadOnly={!isAdmin} />
              </FormControl>
              <FormControl>
                <FormLabel>
                  Full Name
                </FormLabel>
                <Input value={name} onChange={onChangeName} isReadOnly={!isAdmin} />
              </FormControl>
              <FormControl>
                <FormLabel>
                  E-mail
                </FormLabel>
                <Input value={email} onChange={onChangeEmail} isReadOnly={!isAdmin} />
              </FormControl>
              <FormControl>
                <FormLabel>
                  Tell
                </FormLabel>
                <Input value={phone} onChange={onChangePhone} isReadOnly={!isAdmin} />
              </FormControl>
            </Stack>
          </ModalBody>
          {isAdmin && (
            <ModalFooter>
              <PrimaryButton onClick={onClickUpdate}>??????</PrimaryButton>
            </ModalFooter>
          ) }
        </ModalContent>
      </ModalOverlay>
    </Modal>
  )
})
