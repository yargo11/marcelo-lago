import { Box, HStack, Link, Text } from "@chakra-ui/react";
import Image from "next/image";


export default function DesktopMenu() {
    return (
        // <HStack maxW='1320px' w='100%' m='auto' justify='space-between'
        //     fontWeight='bold'
        //     color='gray.600'
        // >
        <>
            <Box>
                <Link href='/'>
                    <Image src='/LogoExport.svg' alt='Marcelo Lago' height={50} width={300} />
                </Link>
            </Box>
            <HStack spacing={18} fontSize='lg'>
                <Link href='/about'>Sobre/Intro</Link>
                <Link href='/samples'>Exemplos/Depoimentos</Link>
                <Link href='/pricing'>Preços/FAQ</Link>
                <Link href='/bookup'>Contato/Agendamento</Link>
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