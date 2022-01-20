import { Box, Divider, Flex, HStack, Icon, StackDivider, Text } from '@chakra-ui/react'
import { FaRegCheckCircle, FaRegTimesCircle } from 'react-icons/fa'

export default function MobileVersion() {
    return (
        <Flex mx='1rem' direction='column' align='center'>
            <Text as='h4' my='1rem'>
                Speech
            </Text>

            <HStack
                divider={<StackDivider borderColor='gray.200' />}
                spacing={4}
                align='stretch'
                w='full'
                px='2rem'
                my='1rem'
            >
                <Text fontSize='12px' w='33%' textAlign='center'>Basic</Text>
                <Text fontSize='12px' w='33%' textAlign='center'>Webinator</Text>
                <Text fontSize='12px' w='33%' textAlign='center'>Master Class</Text>
            </HStack>

            <Text fontSize='14px' mb='1rem'>Multiple takes per lesson or multiple files per take</Text>
            <HStack
                divider={<StackDivider borderColor='gray.200' />}
                spacing={4}
                align='stretch'
                w='full'
                px='2rem'
            >
                <Text fontSize='12px' w='33%' textAlign='center'><Icon as={FaRegTimesCircle} color='red.900' w='1.5rem' h='1.5rem' /></Text>
                <Text fontSize='12px' w='33%' textAlign='center'><Icon as={FaRegCheckCircle} color='green.900' w='1.5rem' h='1.5rem' /></Text>
                <Text fontSize='12px' w='33%' textAlign='center'><Icon as={FaRegCheckCircle} color='green.900' w='1.5rem' h='1.5rem' /></Text>
            </HStack>
            <Divider  my='0.5rem'/>
        </Flex>
    )
}