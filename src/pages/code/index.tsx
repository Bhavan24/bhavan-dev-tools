import { ActionIcon, JsonInput } from '@mantine/core';
import { useState } from 'react';
import * as Icons from 'react-icons/ri';

const Code = () => {
    const [jsonValue, setJsonValue] = useState('');

    const handleClick = () => {
        navigator.clipboard.writeText(jsonValue);
    };

    return (
        <div style={{ margin: '15px' }}>
            <JsonInput
                value={jsonValue}
                onChange={setJsonValue}
                label="Provide your JSON to format"
                placeholder=""
                validationError="Invalid JSON"
                formatOnBlur
                autosize
                minRows={4}
                rightSection={
                    <ActionIcon variant="transparent" onClick={handleClick}>
                        <Icons.RiFileCopyLine />
                    </ActionIcon>
                }
            />
        </div>
    );
};

export { Code };
