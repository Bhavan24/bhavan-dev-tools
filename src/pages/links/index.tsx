import { Select } from '@mantine/core';
import { useEffect, useState } from 'react';

enum Environments {
    DEV = 'dev',
    QA = 'qa',
    PRE_PROD = 'pre-prod',
    PROD = 'prod',
}

const ENVIRONMENTS = [Environments.DEV, Environments.QA, Environments.PRE_PROD, Environments.PROD];

const Links = () => {
    const [searchValue, onSearchChange] = useState('');

    useEffect(() => {
        console.log(searchValue);
    }, [searchValue]);

    return (
        <div style={{ margin: '10px' }}>
            <Select
                label="Select Environment"
                onSearchChange={onSearchChange}
                searchValue={searchValue}
                nothingFound="No options"
                placeholder="Pick one"
                data={ENVIRONMENTS}
            />
        </div>
    );
};

export { Links };
