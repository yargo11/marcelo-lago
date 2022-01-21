import { background, extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
    styles: {
        global: {
            body: {
                padding: '0px',
                margin: '0px',
                boxSizing: 'border-box'
            },
            h1: {
                fontSize: ['4xl', '5xl', '6xl']
            },
            h2: {
                fontSize: ['3xl', '4xl', '5xl']
            },
            h3: {
                fontSize: ['2xl', '3xl', '4xl']
            },
            h4: {
                fontSize: ['xl', '2xl', '3xl']
            },
            h5: {
                fontSize: ['lg', 'xl', '2xl']
            },
            h6: {
                fontSize: ['md', 'lg', 'xl']
            },
        }
    },
    components: {
        Th: {
            defaultProps: {
                textAlign: 'center',
                fontWeight: 'bold',
                color: 'pink.900'
            }
        },
        Td: {
            defaultProps: {
                textAlign: 'center',
            }
        },
    }
})