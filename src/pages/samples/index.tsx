import { AspectRatio, Box, Divider, Flex, Link, Spacer, Text, VStack } from '@chakra-ui/react'

export default function Samples() {
    return (
        <Flex maxW='1320px' w='100%' m='auto' direction='column' my='3rem'>
            <Text as='h1' fontWeight='bold' color='#3e3e3e' textAlign='center'>Happy clients</Text>

            <Box>
                <Flex justify='space-between' bg='green.50' my='2rem' boxShadow='5px 5px 10px #6aa84f'>
                    <VStack p='1.5rem' flex='1' align='start'>
                        <Text as='h2' fontWeight='500' color='#38761d'>
                            Basic
                        </Text>
                        <Divider />
                        <Spacer />
                        <Text as='h6' fontWeight='400' color='#6aa84f'>
                            <Text as='i'>
                                &quot;Mark delivered a spectacular video that exceeded my expectations. He was quick to respond and offered tips to enhance my video recording next time. I will be using him for all my video editing needs!&quot;
                            </Text>
                        </Text>
                        <Spacer />
                        <Text>
                            Cynthia Matheny, Founder <Link href='https://www.cynthiamatheny.com/'>https://www.cynthiamatheny.com/</Link>, Purchased Basic plan and customized it
                        </Text>
                    </VStack>
                    <Box borderRadius='12px'>
                        <AspectRatio width={['100vw', '400px']} >
                            <iframe
                                title='Arcane'
                                src='https://www.youtube.com/embed/QhBnZ6NPOY0'
                                allowFullScreen
                            />
                        </AspectRatio>
                    </Box>
                </Flex>

                <Flex justify='space-between' bg='blue.50' my='2rem' boxShadow='5px 5px 10px #1155cc'>
                    <Box>
                        <AspectRatio width={['100vw', '400px']}>
                            <iframe
                                title='Arcane'
                                src='https://www.youtube.com/embed/QhBnZ6NPOY0'
                                allowFullScreen
                            />
                        </AspectRatio>
                    </Box>
                    <VStack p='1.5rem' flex='1' align='start'>
                        <Text as='h2' fontWeight='500' color='#1c4587'>
                            Webinator
                        </Text>
                        <Divider />
                        <Spacer />
                        <Text as='h6' fontWeight='400' color='#1155cc'>
                            <Text as='i'>
                            &quot;Great guy to work with. Communicative, extremely fast and professional approach.&quot;
                            </Text>
                        </Text>
                        <Spacer />
                        <Text>
                            Jerry Jarnald, Manager at <Link href='https://event.veo.co/'>Veo</Link>, Purchased Webinator
                        </Text>
                    </VStack>
                </Flex>

                <Flex justify='space-between' bg='gray.50' my='2rem' boxShadow='5px 5px 10px #021f3b'>
                    <VStack p='1.5rem' flex='1' align='start'>
                        <Text as='h2' fontWeight='500' color='#000d1a' >
                            Master Class
                        </Text>
                        <Divider />
                        <Spacer />
                        <Text as='h6' fontWeight='400' color='#021f3b'>
                            <Text as='i'>
                            &quot;Mark got a very good eye for what to do, and most importantly, what not to do, when editing. This is a very rare skill which you wont find many having mastered, definetely a hidden gem here!&quot;
                            </Text>
                        </Text>
                        <Spacer />
                        <Text>
                            J. Johasson, <Link href='https://www.youtube.com/user/akmigone'>Youtube Star</Link>, purcahsed Master Class
                        </Text>
                    </VStack>
                    <Box>
                        <AspectRatio width={['100vw', '400px']}>
                            <iframe
                                title='Arcane'
                                src='https://www.youtube.com/embed/QhBnZ6NPOY0'
                                allowFullScreen
                            />
                        </AspectRatio>
                    </Box>
                </Flex>
            </Box>

            <Text as='h1' fontWeight='700' textAlign='center'>Confira mais do meu trabalho</Text>
        </Flex>
    )
}