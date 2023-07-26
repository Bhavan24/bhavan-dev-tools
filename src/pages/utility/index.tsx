import { Box, SimpleGrid } from '@chakra-ui/react';
import { TextFieldWithCopy } from '../../components/index.js';

const Utility = () => {
    return (
        <SimpleGrid columns={2} spacing={10}>
            <Box bg="tomato" height="80px">
                <TextFieldWithCopy />
            </Box>
            <Box bg="tomato" height="80px"></Box>
            <Box bg="tomato" height="80px"></Box>
            <Box bg="tomato" height="80px"></Box>
            <Box bg="tomato" height="80px"></Box>
        </SimpleGrid>
    );
};

export { Utility };
