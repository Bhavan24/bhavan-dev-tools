import { ActionIcon, Box, Button, Collapse, Flex, Group, List, Textarea } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Configuration, OpenAIApi } from 'openai';
import { useCallback, useState } from 'react';
import * as Icons from 'react-icons/ri';

export const apiKey = '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';

const configuration = new Configuration({
    apiKey,
});

const openai = new OpenAIApi(configuration);

const KEY = 'openai-history';

const saveItem = (item: any) => {
    const existingList = getItem();
    existingList.push(item);
    localStorage.setItem(KEY, JSON.stringify(existingList));
};

const getItem = (): any[] => {
    const existingList = localStorage.getItem(KEY);
    return existingList ? JSON.parse(existingList) : [];
};

const Gpt = () => {
    const [prompt, setPrompt] = useState('');
    const [response, setResponse] = useState('');
    const [submitting, setSubmitting] = useState<boolean>(false);
    const [opened, { toggle }] = useDisclosure(false);

    const askQuery = useCallback(() => {
        const openAiTest = async () => {
            const newPrompt = prompt?.trim() || '';

            const { data } = await openai.createChatCompletion({
                model: 'gpt-3.5-turbo-16k',
                messages: [{ role: 'user', content: newPrompt }],
                max_tokens: 2048,
                n: 1,
                stop: '',
                temperature: 0.5,
            });

            const response = data.choices[0].message?.content?.trim() || '';
            setResponse(response);

            const history = {
                prompt: newPrompt,
                response: response,
            };

            saveItem(history);
        };

        setSubmitting(true);

        try {
            openAiTest().finally(() => {
                setSubmitting(false);
            });
        } catch (error) {
            console.log(error);
            setSubmitting(false);
        }
    }, [prompt]);

    const handleClick = () => {
        navigator.clipboard.writeText(response);
    };

    return (
        <Flex gap="sm" justify="center" align="center" direction="column" wrap="wrap" m={5} px={15}>
            <Textarea
                w="100%"
                m={5}
                placeholder="Provide short prompt"
                label="Prompt"
                value={prompt}
                onChange={e => {
                    setPrompt(e.target.value);
                }}
                rightSection={
                    <ActionIcon onClick={askQuery} loading={submitting}>
                        <Icons.RiSendPlaneFill />
                    </ActionIcon>
                }
                withAsterisk
            />
            <Textarea
                w="100%"
                m={5}
                value={response}
                minRows={10}
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

            <Box maw={600} mx="auto">
                <Group position="center" mb={5}>
                    <Button variant="subtle" compact onClick={toggle}>
                        View History
                    </Button>
                </Group>

                <Collapse in={opened}>
                    <List>
                        {getItem().map(({ prompt, response }) => (
                            <List.Item>
                                <div style={{ display: 'flex' }}>
                                    <span>{prompt}</span>
                                    <ActionIcon
                                        variant="transparent"
                                        onClick={() => {
                                            setPrompt(prompt);
                                            setResponse(response);
                                        }}
                                    >
                                        <Icons.RiUploadLine />
                                    </ActionIcon>
                                </div>
                            </List.Item>
                        ))}
                    </List>
                </Collapse>
            </Box>
        </Flex>
    );
};

export { Gpt };

