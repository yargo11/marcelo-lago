import { Flex, Text } from '@chakra-ui/react'
import { InlineWidget } from 'react-calendly'

export default function BookUp() {
    // <Script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async />
    return (
        <Flex maxW='1320px' w='100%' m='auto' direction='column'>
            <InlineWidget
                url="https://calendly.com/yargovale"
                styles={{
                    height: '1000px'
                }}
            />
        </Flex>
    )
}