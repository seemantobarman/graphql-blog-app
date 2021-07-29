import {
    Box,
    Button,
    useDisclosure,
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerContent,
    DrawerOverlay,
    Flex,
} from "@chakra-ui/react";

const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <Box as="nav" position="sticky">
            <Flex
                direction="row"
                width="100%"
                height="xs"
                bgColor="transparent"
                boxShadow="md"
                alignItems="center"
            >
                <Button marginLeft="5" onClick={onOpen}>
                    Open
                </Button>
            </Flex>
            <Drawer
                placement="left"
                size="md"
                onClose={onClose}
                isOpen={isOpen}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerHeader borderBottomWidth="2px">Menu</DrawerHeader>
                    <DrawerBody>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Box>
    );
};

export default Navbar;
