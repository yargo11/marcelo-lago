import { Center, Flex, Text, Icon, Box, Divider } from '@chakra-ui/react'
import { IconContext } from 'react-icons'

interface PlansProps {
    planTitle: string,
    planDescription: string,
    // planIcon: IconContext,
}


export default function Plans({ planTitle, planDescription }: PlansProps) {
    return (
        <Center
            maxW='351px'
            maxH='196px'
            borderRadius='8px'
            border='1px solid #e1e1e1'
            p='30px'
        >
            <Flex direction='column'>
                <Text as='h6' fontWeight='700' color='#141414' mb='0.5rem'>{planTitle}</Text>
                <Divider />
                <Text my='1rem' color='#6e6e6e'>{planDescription}</Text>
            </Flex>

        </Center>

    )
}