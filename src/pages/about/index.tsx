import { Box, Flex, Image, Text, SimpleGrid } from '@chakra-ui/react'

export default function About() {
    return (
        <Box w='full' bg='#0a2a46' color='gray.50'>
            <Box maxW='1320px' w='100%' m='auto' py='3rem'>
                <Flex direction='column' align='center'>
                    <Text as='h3' fontWeight='bold'>MARCELO LAGO</Text>
                    <Text as='h4' color='#1cde70'>eLearning Video Specialist</Text>
                </Flex>
                <Flex direction={['column', 'row']} maxW='980px' w='100%' m='auto' mt='2rem'>
                    <Box maxW='576px' mx='1rem'>
                        <Text textAlign='justify'>
                            Like every kid in 1998, I loved playing video games and messing with computers, so when I grew up, I decided to study Computer Science so I could create cool games, or at least that's what I thought made sense.
                        </Text>
                        <Text mt='1.5rem' textAlign='justify'>
                            First semester, I noticed I wasn't very bright with math and sort of hated problems with numbers. Instead <span style={{ color: '#1cde70' }}>I was hooked on how to make things look cool and be satisfying to use</span>games I liked. So when I understood a little about Human Computer Interaction, I decided CS wasn't for me and started looking for another way to explore my talents.
                        </Text>
                        <Text mt='1.5rem' textAlign='justify'>
                            I started my actual career making some money as a generic illustrator / graphics designer and eventually got back into college to study Design in 2014. <span style={{ color: '#1cde70' }}>There I studied User Experience, Interaction Design, Information Ergonomics...</span> Many interesting areas that had a lot more to do with me.
                        </Text>
                        <Text mt='1.5rem' textAlign='justify'>
                            Graduated as a Design bachelor, I was hired as a video editor for an English language school in Brazil. There I developed my skills and made myself into an instructional designer. <span style={{ color: '#1cde70' }}>Studied both Video platforms (Premiere Pro) and eLearning platforms (Adobe Captivate)</span>.
                        </Text>
                        <Text mt='1.5rem' textAlign='justify'>
                            Fell in instant love with education and teaching, and <span style={{ color: '#1cde70' }}>became a volunteer ESL teacher in the process. I had plenty of classroom experience</span> and still use that to sharpen my skills when designing video courses.
                        </Text>
                        <Text mt='1.5rem' textAlign='justify'>
                            Then I quit my job and started my own business as a consultant and eLearning video creator. Since then I explore ways <span style={{ color: '#1cde70' }}>to help instructors, teachers and coaches create their content in a way it pleases their audience / students</span>.
                        </Text>
                        <Text mt='1.5rem' textAlign='justify'>
                            Recognizing many problems in not only the current eLearning format, but in education itself, <span style={{ color: '#1cde70' }}>I made a vow to pursue the best ways possible to create engaging, fun, and satisfying experiences through eLearning</span>.
                        </Text>
                    </Box>
                    <Box maxW='368px' w='100%'>
                        <Image src='/BetterRes_edited_edited.webp' alt='Marcelo Lago' borderRadius='8px' border='1px solid #ffffff' />
                    </Box>
                </Flex>
            </Box >
        </Box >
    )
}