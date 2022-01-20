import {
    Box, Flex, HStack, Icon, Text,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Textarea,
    Button,
    Link,
    Avatar
} from '@chakra-ui/react'
import { FaInstagram, FaLinkedinIn, FaVimeoV } from 'react-icons/fa'

export default function Footer() {
    return (
        <Flex bg='gray.900' color='gray.50' py='1rem'>
            <HStack maxW='1320px' w='100%' m='auto' justify='space-between'>
                <Avatar size='2xl' name='Marcelo Lago' src='/marcelo.jfif' />
                <Box>
                    <Text as='h6' fontWeight='bold'>
                        My social medias:
                    </Text>
                    <HStack justify='space-evenly' mt='1rem'>
                        <Link href='https://www.instagram.com/lagovideodesign/' _hover={{ color: '#e1306c' }}>
                            <Icon as={FaInstagram} w='32px' h='32px' />
                        </Link>
                        <Link href='https://www.linkedin.com/in/marcelo-lago-video-learning/' _hover={{ color: '#0e76a8' }}>
                            <Icon as={FaLinkedinIn} w='32px' h='32px' />
                        </Link>
                        <Link href='https://vimeo.com/showcase/8593572' _hover={{ color: '#86c9ef' }}>
                            <Icon as={FaVimeoV} w='32px' h='32px' />
                        </Link>
                    </HStack>
                </Box>
                <Flex direction='column'>
                    <Text as='h6' fontWeight='bold'>Contact me</Text>
                    <FormControl>
                        <FormLabel htmlFor='email' />
                        <Input id='email' type='email' placeholder='Email' required />
                        <FormHelperText>* I&apos;ll never share your email.</FormHelperText>

                        <FormLabel htmlFor='email' />
                        <Textarea placeholder='Send me a message!' />
                        <Button type='submit' w='full' mt='1rem'>Send</Button>
                    </FormControl>
                </Flex>
            </HStack>
        </Flex>
    )
}