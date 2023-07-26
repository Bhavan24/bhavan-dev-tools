import { Box, Button, SimpleGrid } from '@chakra-ui/react';
import { useState } from 'react';
import { TextFieldWithCopy } from '../../components/index.js';
import './index.css';

const Utility = () => {
    const [ip, setIp] = useState('');
    const [ipLoading, setIpLoading] = useState(false);

    const getPublicIp = async () => {
        setIp('');
        setIpLoading(true);
        const response = await fetch('https://api.ipify.org');
        const ip = await response.text();
        setIp(ip);
        setIpLoading(false);
    };

    return (
        <SimpleGrid columns={2} spacing={10}>
            <Box height="80px">
                <div className="box-wrapper">
                    <TextFieldWithCopy value={ip} setValue={setIp} />
                    <Button padding="5" isLoading={ipLoading} onClick={getPublicIp} loadingText="Loading...">
                        Get Public IP
                    </Button>
                </div>
            </Box>
            <Box height="80px"></Box>
            <Box height="80px"></Box>
            <Box height="80px"></Box>
            <Box height="80px"></Box>
        </SimpleGrid>
    );
};

export { Utility };
