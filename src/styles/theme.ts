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
                fontSize: ['4xl','5xl','6xl']
            },
            h2: {
                fontSize: '5xl'
            },
            h3: {
                fontSize: '4xl'
            },
            h4: {
                fontSize: '3xl'
            },
            h5: {
                fontSize: '2xl'
            },
            h6: {
                fontSize: 'xl'
            },
        }
    },
    components: {
        Th: {
            defaultProps: {
                textAlign: 'center',
                fontWeight: 'bold',
                color:'pink.900'
            }
        },
        Td: {
            defaultProps: {
                textAlign: 'center',
            }
        },
    }
})