import { ActionIcon, Button, Flex, Textarea } from '@mantine/core';
import { useState } from 'react';
import * as Icons from 'react-icons/ri';

const Gpt = () => {
    const [prompt, setPrompt] = useState('');
    const [response, setResponse] = useState('');

    const askQuery = () => {
        
    };

    const handleClick = () => {
        navigator.clipboard.writeText(response);
    };

    return (
        <Flex gap="sm" justify="center" align="center" direction="column" wrap="wrap" m={5}>
            <Button onClick={askQuery} fullWidth p={5}>
                Ask Query
            </Button>
            <Textarea
                w="100%"
                m={5}
                placeholder="Provide short prompt"
                label="Prompt"
                value={prompt}
                onChange={e => {
                    setPrompt(e.target.value);
                }}
                withAsterisk
            />
            <Textarea
                w="100%"
                m={5}
                value={response}
                onChange={e => {
                    setResponse(e.target.value);
                }}
                label="Response"
                rightSection={
                    <ActionIcon variant="transparent" onClick={handleClick}>
                        <Icons.RiFileCopyLine />
                    </ActionIcon>
                }
            />
        </Flex>
    );
};

export { Gpt };
