import { Table, TableCaption, Tbody, Td, Text, Th, Thead, Tr, Icon, } from '@chakra-ui/react'
import { FaRegCheckCircle, FaRegTimesCircle } from 'react-icons/fa'

export default function WideVersion() {
    return (
        < Table >
            <TableCaption></TableCaption>
            <Thead>
                <Tr>
                    <Th></Th>
                    <Th textAlign='center'>Basic</Th>
                    <Th textAlign='center'>Webinator</Th>
                    <Th textAlign='center'>Master Class</Th>
                </Tr>
            </Thead>
            <Tbody>
                <Tr bg='#c9daf8'>
                    <Td colSpan={4} fontWeight='700' fontSize='1.5rem' color='#fff'>EDITING & DISTRIBUTION</Td>

                </Tr>
                <Tr bg='#c9daf8'>
                    <Td>📦 Multiple Takes per Lesson or Multiple files per take</Td>
                    <Td textAlign='center'><Icon as={FaRegTimesCircle} color='red.900' w='1.5rem' h='1.5rem' /></Td>
                    <Td textAlign='center'><Icon as={FaRegCheckCircle} color='green.900' w='1.5rem' h='1.5rem' /></Td>
                    <Td textAlign='center'><Icon as={FaRegCheckCircle} color='green.900' w='1.5rem' h='1.5rem' /></Td>
                </Tr>
                <Tr bg='#c9daf8'>
                    <Td>🖥️ Mixing Multiple Cameras or Screens</Td>
                    <Td textAlign='center'><Icon as={FaRegTimesCircle} color='red.900' w='1.5rem' h='1.5rem' /></Td>
                    <Td textAlign='center'>Up to 2 sources</Td>
                    <Td textAlign='center'>Up to 3 sources</Td>
                </Tr>
                <Tr bg='#c9daf8'>
                    <Td>📣 Mix Multiple Bad Takes Into Good Ones</Td>
                    <Td textAlign='center'><Icon as={FaRegTimesCircle} color='red.900' w='1.5rem' h='1.5rem' /></Td>
                    <Td textAlign='center'><Icon as={FaRegTimesCircle} color='red.900' w='1.5rem' h='1.5rem' /></Td>
                    <Td textAlign='center'><Icon as={FaRegCheckCircle} color='green.900' w='1.5rem' h='1.5rem' /></Td>
                </Tr>
                <Tr bg='#c9daf8'>
                    <Td>🎤 Sync Voice with Video <Text fontSize='0.75rem'>(if the voice track is separated from content)</Text></Td>
                    <Td textAlign='center'><Icon as={FaRegTimesCircle} color='red.900' w='1.5rem' h='1.5rem' /></Td>
                    <Td textAlign='center'><Icon as={FaRegTimesCircle} color='red.900' w='1.5rem' h='1.5rem' /></Td>
                    <Td textAlign='center'><Icon as={FaRegCheckCircle} color='green.900' w='1.5rem' h='1.5rem' /></Td>
                </Tr>
            </Tbody>
        </Table >
    )
}