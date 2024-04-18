import { ActionIcon, Button, Flex, JsonInput, Textarea } from '@mantine/core';
import { useState } from 'react';
import * as Icons from 'react-icons/ri';

const Code = () => {
    const [inputJsonValue, setValue] = useState('');
    const [jsonValue, setOutputJsonValue] = useState('');

    const stringifyJson = () => {
        let output = '';
        try {
            output = JSON.stringify(inputJsonValue, null, '\t');
        } catch (error: any) {
            output = error;
        }
        setOutputJsonValue(output);
    };

    const parseJson = () => {
        let output = '';
        try {
            let parsed_text = JSON.parse(inputJsonValue);
            output = JSON.stringify(JSON.parse(parsed_text), null, '\t');
        } catch (error: any) {
            output = error;
        }
        setOutputJsonValue(output);
    };

    const beautifyJson = () => {
        let output = '';
        try {
            output = JSON.stringify(JSON.parse(inputJsonValue), null, '\t');
        } catch (error: any) {
            output = error;
        }
        setOutputJsonValue(output);
    };

    const normalizeJson = () => {
        let output = '';
        try {
            output = JSON.stringify(JSON.parse(inputJsonValue));
        } catch (error: any) {
            output = error;
        }
        setOutputJsonValue(output);
    };

    const handleClick = (val: string) => {
        navigator.clipboard.writeText(val);
    };

    return (
        <Flex gap="md" justify="center" align="stretch" direction="column">
            <Flex gap="md" justify="center">
                <Button onClick={stringifyJson}>Stringify JSON</Button>
                <Button onClick={parseJson}>Parse JSON</Button>
                <Button onClick={normalizeJson}>Normalize JSON</Button>
                <Button onClick={beautifyJson}>Beautify JSON</Button>
            </Flex>
            <Flex gap="md" justify="center" align="stretch" direction={{ base: 'column', sm: 'row' }}>
                <Textarea
                    w="100%"
                    label="JSON Text"
                    withAsterisk
                    value={inputJsonValue}
                    onChange={e => setValue(e.currentTarget.value)}
                    autosize
                    minRows={22}
                    rightSection={
                        <ActionIcon variant="transparent" onClick={() => handleClick(inputJsonValue)}>
                            <Icons.RiFileCopyLine />
                        </ActionIcon>
                    }
                />
                <JsonInput
                    w="100%"
                    value={jsonValue}
                    onChange={setOutputJsonValue}
                    label="JSON Result"
                    validationError="Invalid JSON"
                    formatOnBlur
                    autosize
                    minRows={25}
                    rightSection={
                        <ActionIcon variant="transparent" onClick={() => handleClick(jsonValue)}>
                            <Icons.RiFileCopyLine />
                        </ActionIcon>
                    }
                />
            </Flex>
        </Flex>
    );
};

export { Code };
