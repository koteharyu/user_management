import { memo, VFC } from "react";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, FormControl, FormLabel, Input, Stack } from '@chakra-ui/react'

type Props = {
  isOpen: boolean
  onClose: () => void
}

export const UserDetailModal: VFC<Props> = memo((props) => {

  const { isOpen, onClose } = props

  return (
    <Modal isOpen={isOpen} onClose={onClose} autoFocus={false} motionPreset="slideInRight" >
      <ModalOverlay>
        <ModalContent pb={6}>
          <ModalHeader>
            user detail
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody mx={4}>
            <Stack spacing={5}>
              <FormControl>
                <FormLabel>
                  User Name
                </FormLabel>
                <Input value="haryu" isReadOnly />
              </FormControl>
              <FormControl>
                <FormLabel>
                  Full Name
                </FormLabel>
                <Input value="haryu" isReadOnly />
              </FormControl>
              <FormControl>
                <FormLabel>
                  E-mail
                </FormLabel>
                <Input value="haryu" isReadOnly />
              </FormControl>
              <FormControl>
                <FormLabel>
                  Tell
                </FormLabel>
                <Input value="haryu" isReadOnly />
              </FormControl>
            </Stack>
          </ModalBody>
        </ModalContent>
      </ModalOverlay>
    </Modal>
  )
})
