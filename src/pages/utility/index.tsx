import { Button, SimpleGrid } from '@mantine/core';
import { useState } from 'react';
import { TextFieldWithCopy } from '../../components';
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
        <SimpleGrid spacing={10}>
            <div className="box-wrapper">
                <TextFieldWithCopy value={ip} setValue={setIp} />
                <Button loading={ipLoading} onClick={getPublicIp}>
                    Get Public IP
                </Button>
            </div>
        </SimpleGrid>
    );
};

export { Utility };
