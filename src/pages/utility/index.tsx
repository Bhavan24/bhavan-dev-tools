import { Button, Flex, SimpleGrid } from '@mantine/core';
import { useState } from 'react';
import { TextFieldWithCopy } from '../../components';

const Utility = () => {
    const [ip, setIp] = useState('');
    const [timestamp, setTimestamp] = useState('');
    const [loading, setLoading] = useState({ ip: false, timestamp: false });

    const getPublicIp = async () => {
        setIp('');
        setLoading(loading => ({ ...loading, ip: true }));
        const response = await fetch('https://api.ipify.org');
        const ip = await response.text();
        setIp(ip);
        setLoading(loading => ({ ...loading, ip: false }));
    };

    const getCurrentTimestamp = () => {
        setLoading(loading => ({ ...loading, timestamp: true }));
        setTimestamp(String(Date.now()));
        setLoading(loading => ({ ...loading, timestamp: false }));
    };

    return (
        <SimpleGrid cols={2} spacing="sm" verticalSpacing="sm">
            <Flex mih={50} gap="sm" justify="center" align="center" direction="row" wrap="wrap">
                <TextFieldWithCopy value={ip} setValue={setIp} />
                <Button loading={loading.ip} onClick={getPublicIp}>
                    Get Public IP
                </Button>
            </Flex>
            <Flex mih={50} gap="sm" justify="center" align="center" direction="row" wrap="wrap">
                <TextFieldWithCopy value={timestamp} setValue={setTimestamp} />
                <Button loading={loading.timestamp} onClick={getCurrentTimestamp}>
                    Get Timestamp
                </Button>
            </Flex>
        </SimpleGrid>
    );
};

export { Utility };
