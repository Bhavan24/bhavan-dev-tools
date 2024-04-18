import {
    ActionIcon,
    Box,
    Button,
    Collapse,
    Dialog,
    Flex,
    Group,
    List,
    Select,
    Textarea,
    TextInput,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { truncate } from 'lodash';
import { useCallback, useState } from 'react';
import * as Icons from 'react-icons/ri';
import { GPT_MODELS, GPT_OPTIONS } from '../../constants';
import { deleteItem, getItem, openai, saveItem } from './utils';
import { SpeechToText } from './speech';

const Gpt = () => {
    const [apiKey, setApiKey] = useState('');
    const [prompt, setPrompt] = useState('');
    const [model, setModel] = useState(GPT_MODELS[0]);
    const [option, setOption] = useState(GPT_OPTIONS[0].value);
    const [response, setResponse] = useState('');
    const [submitting, setSubmitting] = useState<boolean>(false);
    const [opened, { toggle }] = useDisclosure(false);
    const [dialogOpened, { toggle: dialogToggle, close: closeDialog }] = useDisclosure(false);

    const askQuery = useCallback(() => {
        const openAiTest = async () => {
            const newPrompt = prompt?.trim() || '';

            const { data } = await openai.createChatCompletion({
                model,
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
    }, [prompt, model]);

    const handleClick = () => {
        navigator.clipboard.writeText(response);
    };

    return (
        <Flex gap="sm" justify="center" align="center" direction="column" wrap="wrap" m={5} px={15}>
            <Select
                required
                label="Model"
                w="100%"
                placeholder="Pick Conversion Type"
                data={GPT_MODELS}
                value={model}
                onChange={e => {
                    e && setModel(String(e));
                }}
            />
            <Select
                required
                label="Option"
                w="100%"
                placeholder="Pick Option"
                searchable
                data={GPT_OPTIONS}
                value={option}
                onChange={e => {
                    if (e) {
                        setOption(e);
                        setPrompt(prompt => `${e || ''} \n\n ${prompt}`);
                    }
                }}
            />
            <Textarea
                w="100%"
                m={5}
                autosize
                autoComplete="on"
                autoCorrect="on"
                minRows={2}
                placeholder="Provide short prompt"
                label="Prompt"
                value={prompt}
                onChange={e => {
                    setPrompt(e.target.value);
                }}
                rightSection={
                    <Flex gap="sm" justify="space-between" align="center" direction="row" wrap="wrap" h="100%">
                        <SpeechToText
                            onChange={(text: any) => {
                                setPrompt(text);
                            }}
                        />
                        <ActionIcon onClick={askQuery} loading={submitting}>
                            <Icons.RiSendPlaneFill />
                        </ActionIcon>
                    </Flex>
                }
                withAsterisk
            />
            <Textarea
                w="100%"
                m={5}
                autosize
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
            <Box w="100%" mx="auto">
                <Group position="center" mb={5}>
                    <Button variant="subtle" compact onClick={toggle}>
                        View History
                    </Button>
                    <Button
                        variant="subtle"
                        compact
                        onClick={() => {
                            deleteItem();
                            window.location.reload();
                        }}
                    >
                        Delete History
                    </Button>
                    <Button variant="filled" compact onClick={dialogToggle}>
                        Save API key
                    </Button>
                </Group>

                <Collapse in={opened}>
                    <List>
                        {getItem().map(({ prompt, response }) => (
                            <List.Item>
                                <div style={{ display: 'flex' }}>
                                    <span title={prompt}>{truncate(prompt, { length: 60 })}</span>
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
            <Dialog opened={dialogOpened} withCloseButton onClose={closeDialog} size="lg" radius="md">
                <p>Provide your API key</p>
                <Group align="flex-end">
                    <TextInput
                        value={apiKey}
                        onChange={e => {
                            setApiKey(e.target.value);
                        }}
                        placeholder="Chat GPT key"
                        sx={{ flex: 1 }}
                    />
                    <Button
                        onClick={() => {
                            localStorage.setItem('GPT_API_KEY', apiKey);
                            closeDialog();
                            window.location.reload();
                        }}
                    >
                        Save
                    </Button>
                </Group>
            </Dialog>
        </Flex>
    );
};

export { Gpt };
