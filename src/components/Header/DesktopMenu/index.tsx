import { Box, HStack, Text } from "@chakra-ui/react";
import Link from "next/link";


export default function DesktopMenu() {
    return (
        // <HStack maxW='1320px' w='100%' m='auto' justify='space-between'
        //     fontWeight='bold'
        //     color='gray.600'
        // >
        <>
            <Box>
                <Link href='/'>
                    Marcelo Lago
                </Link>
            </Box>
            <HStack spacing={18} fontSize='lg'>
                <Link href='/about'>Sobre/Intro</Link>
                <Link href='/samples'>Exemplos/Depoimentos</Link>
                <Link href='/pricing'>Preços/FAQ</Link>
                <Link href='#'>Contato/Agendamento</Link>
            </HStack >
            <Box>
                <Text>
                    Login
                </Text>
            </Box>
        </>
        // </HStack>
    )
}