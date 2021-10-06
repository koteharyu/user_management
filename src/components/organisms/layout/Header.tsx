import { Box, Flex, Heading, Link, IconButton, Drawer, DrawerOverlay, DrawerContent, DrawerBody, Button, useDisclosure } from "@chakra-ui/react";
import { memo, VFC } from "react";
import { HamburgerIcon } from "@chakra-ui/icons";

export const Header: VFC = memo(() => {
  const { isOpen, onClose, onOpen } = useDisclosure()
  return (
    <>
      <Flex as="nav" bg="teal.500" color="gray.50" align="center" justify="space-between" padding={{ base: 3, md: 5 }}>
        <Flex align="center" as="a" mr={8} _hover={{ cursor: "pointer" }}>
          <Heading as="h1" fontSize={{ base: "md", md: "lg" }}>User Management App</Heading>
        </Flex>
        <Flex align="center" fontSize="sm" flexGrow={2} display={{ base: "none", md: "flex" }}>
          <Box pr={4}>
            <Link>
              Users
            </Link>
          </Box>
          <Link>
            Setting
          </Link>
        </Flex>
        <IconButton aria-label="menu button" icon={<HamburgerIcon />} size="sm" variant="unstyled" display={{ base: "block", md: "none" }} onClick={onOpen} />
      </Flex>
      <Drawer placement="left" size="xs" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerBody p={0} bg="gray.100">
              <Button w="100%">TOP</Button>
              <Button w="100%">Users</Button>
              <Button w="100%">Settin</Button>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  )
})
