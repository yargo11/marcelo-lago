import { Flex, HStack, useBreakpointValue } from '@chakra-ui/react'

import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';

export default function Header() {
    const isWideScreen = useBreakpointValue({ base: false, sm: false, md: true })

    return (
        <Flex w='full' h='68px' boxShadow='0px 0px 47px -26px rgb(0 0 0 / 50%)'>

            <HStack maxW='1320px' w='100%' m='auto' justify='space-between'
                fontWeight='bold'
                color='gray.600'
                px={['1rem', '0rem']}
            >
                {isWideScreen ?
                    <>
                        <DesktopMenu />
                    </>
                    :
                    <>
                        <MobileMenu />
                    </>
                }
            </HStack>

        </Flex>
    )
}