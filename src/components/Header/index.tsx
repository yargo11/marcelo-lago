import { Box, Flex, HStack, Link, List, ListItem, Text, useBreakpointValue } from '@chakra-ui/react'

export default function Header() {
    const isWideScreen = useBreakpointValue({ base: false, sm: false, md: true })

    return (
        <Flex w='full' h='68px' boxShadow='0px 0px 47px -26px rgb(0 0 0 / 50%)'>

            {isWideScreen ?
                <>
                    <HStack maxW='1320px' w='100%' m='auto' justify='space-between'
                        fontWeight='bold'
                        color='gray.600'
                    >
                        <Box>
                            <Link href='/'>
                                Marcelo Lago
                            </Link>
                        </Box>
                        <HStack spacing={18}>
                            <Link href='/about'>Sobre/Intro</Link>
                            <Text>Exemplos/Depoimentos</Text>
                            <Link href='/pricing'>Preços/FAQ</Link>
                            <Text>Contato/Agendamento</Text>
                        </HStack >
                        <Box>
                            <Text>
                                Login
                            </Text>
                        </Box>
                    </HStack>
                </>
                :
                <>
                </>
            }

        </Flex>
    )
}