import {
    Box, Flex, Icon, SimpleGrid, Text,
    Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon,
} from '@chakra-ui/react'
import Plans from '../../components/Plans'
import PriceTable from '../../components/PriceTable'

export default function Pricing() {
    return (
        <Flex maxW='1320px' w='100%' m='auto' direction='column'>
            <Text as='h1' textAlign='center' lineHeight='4rem'>Video design plans for Educational purposes</Text>
            <Box mx='1rem'>
                <Text as='h6' my='1rem' textAlign='justify'>
                    Hi there! I&apos;m Mark, congratulations on your decision of launching an online course. I&apos;m a volunteer teacher myself & believe in the power of education, too.
                </Text>
                <Text as='h6' my='1rem' textAlign='justify'>
                    After years serving dozens of clients worldwide, I&apos;ve figured out the needs of most content creators.
                    Here you&apos;ll find the five most requested configurations combined into different plans.
                </Text>
            </Box>

            {/* TABELA DE PRECIFICAÇÃO */}
            <Box>
                <PriceTable />
            </Box>

            {/* INCLUSO EM TODOS OS PLANOS */}
            <Box mt='3rem'>
                <Text as='h1' fontWeight='700' color='#3e3e3e' textAlign='center'> Every plan includes</Text>
                <SimpleGrid minChildWidth='300px' spacing='40px' my='2rem'>
                    <Plans
                        planTitle='SPEECH'
                        planDescription='Cut individual mispells and speech erros, fillers like &apos;Uuhs&apos;, unintentionally repeated words and longe silences'
                    />
                    <Plans
                        planTitle='EDITING & DISTRIBUTION'
                        planDescription='Trim unused beginning & end from footage. Cut bad takes & Bloopers'
                    />
                    <Plans
                        planTitle='VIDEO & AUDIO'
                        planDescription='Adjust brightness/constrat/sharpness. Normalize volume levels between videos'
                    />
                    <Plans
                        planTitle='BRANDING & COPYRIGHT'
                        planDescription='Dispaly your logo in the corner and insert your intro into each video (Both provided by you)'
                    />
                </SimpleGrid>
            </Box>

            {/* FAQ */}
            <Box my='3rem'>
                <Text as='h2' fontWeight='700' color='gray.600' textAlign='center' mb='2rem'>
                    Frequently Asked Questions
                </Text>
                <Accordion allowToggle>
                    <AccordionItem>
                        <Text as='h2'>
                            <AccordionButton py='25px' _expanded={{
                                bg: 'gray.100'
                            }}>
                                <Box flex='1' textAlign='left' as='h5'>
                                    Frequently Asked Question 1
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </Text>
                        <AccordionPanel pb={4} fontWeight='500' color='#6e6e6e'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <Text as='h2'>
                            <AccordionButton py='25px'>
                                <Box flex='1' textAlign='left' as='h5'>
                                    Frequently Asked Question 2
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </Text>
                        <AccordionPanel pb={4} fontWeight='500' color='#6e6e6e'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <Text as='h2'>
                            <AccordionButton py='25px'>
                                <Box flex='1' textAlign='left' as='h5'>
                                    Frequently Asked Question 3
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </Text>
                        <AccordionPanel pb={4} fontWeight='500' color='#6e6e6e'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat.
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </Box>
        </Flex >
    )
}