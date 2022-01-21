import { AspectRatio, Avatar, Box, Button, Flex, HStack, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Flex maxW='1320px' w='100%' m='auto' wrap='wrap' my='3rem' py='3rem' >
        <Flex direction='column' flex='1' justifyContent='space-evenly' mx='1rem'>
          <Text as='h1' textAlign={['center', 'left']}>The Unlimited Design Solution That</Text>
          <Text as='h6' textAlign={['justify', 'left']}>Scale your business quicker and lower your expenses with a dedicated design team that supports you every step of the way.</Text>
          <Flex justify={['center','left']}>
            <Button
              borderRadius='32px'
              w='160px'
              fontWeight='bold'
              colorScheme='pink'
              my='1rem'
            >
              Call to Action
            </Button>
          </Flex>
        </Flex>
        <Box >
          <AspectRatio width={['100vw', '600px']}>
            <iframe
              title='Arcane'
              src='https://www.youtube.com/embed/QhBnZ6NPOY0'
              allowFullScreen
            />
          </AspectRatio>
        </Box>
      </Flex>
      <Box w='full' bg='#2072ba'>
        <Flex maxW='1320px' w='100%' m='auto' direction='column' wrap='wrap' py='3rem' alignItems='center'>
          <Text as='h3' color='gray.50'>MY PERSONAL MISSION</Text>
          <Text
            as='h1'
            textAlign='center'
            fontWeight='bold'
            color='#21ed8b'
            lineHeight='1.9em'
          >
            MAKE LEARNING FROM VIDEO THE ULTIMATE EXPERIENCE.
          </Text>
        </Flex>
      </Box>
      <Box w='full' bg='gray.900' borderBottom='1px solid #fff' borderStyle='dashed'>
        <HStack maxW='1320px' w='100%' m='auto' justify='space-evenly' py='2rem' wrap='wrap'>
          <Avatar size='2xl' name='Marcelo Lago' src='/marcelo.jfif' />
          <Avatar size='2xl' name='Marcelo Lago' src='/marcelo.jfif' />
          <Avatar size='2xl' name='Marcelo Lago' src='/marcelo.jfif' />
          <Avatar size='2xl' name='Marcelo Lago' src='/marcelo.jfif' />
          <Avatar size='2xl' name='Marcelo Lago' src='/marcelo.jfif' />
        </HStack>
      </Box>
    </>
  )
}