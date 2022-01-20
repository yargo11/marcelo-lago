import {
    useBreakpointValue,
    Table, TableCaption, Tbody, Td, Text, Th, Thead, Tr, Icon,
} from '@chakra-ui/react'
import MobileVersion from './MobileVersion'

import WideVersion from './WideVersion'

export default function PriceTable() {

    const isWideScreen = useBreakpointValue({ base: false, sm: false, md: true })

    return (
        <>
            {
                isWideScreen ?
                    <>
                        <WideVersion />
                    </>
                    :
                    <>
                        <MobileVersion />
                    </>
            }
        </>
    )
}