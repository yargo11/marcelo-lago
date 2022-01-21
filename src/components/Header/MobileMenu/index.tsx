import {
    Box, Button, HStack, IconButton, useDisclosure, VStack,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRef } from "react";
import { FiMenu } from "react-icons/fi";

export default function MobileMenu() {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()

    return (
        <>
            {/* <HStack w='full' justify='space-between' px='1rem'> */}
            <Box >
                <Link href='/'>
                    Marcelo Lago
                </Link>
            </Box>
            <IconButton ref={btnRef} colorScheme='teal' onClick={onOpen} icon={<FiMenu />} aria-label='Open drawer' ml='auto'>
                Open
            </IconButton>
            <Drawer
                isOpen={isOpen}
                placement='top'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Marcelo Lago</DrawerHeader>

                    <DrawerBody>
                        <VStack alignItems='left' fontSize='xl'>
                            <Link href='/about'>Sobre/Intro</Link>
                            <Link href='/samples'>Exemplos/Depoimentos</Link>
                            <Link href='/pricing'>Preços/FAQ</Link>
                            <Link href='#'>Contato/Agendamento</Link>
                        </VStack>
                    </DrawerBody>

                    <DrawerFooter>
                        <Button variant='outline' mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
            {/* </HStack> */}
        </>
    )
}