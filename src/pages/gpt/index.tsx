import { ActionIcon, Flex, Textarea } from '@mantine/core';
import { Configuration, OpenAIApi } from 'openai';
import { useCallback, useState } from 'react';
import * as Icons from 'react-icons/ri';

export const apiKey = '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';

const configuration = new Configuration({
    apiKey,
});

const openai = new OpenAIApi(configuration);
console.log('openai');

const Gpt = () => {
    const [prompt, setPrompt] = useState('');
    const [response, setResponse] = useState('');
    const [submitting, setSubmitting] = useState<boolean>(false);

    const askQuery = useCallback(() => {
        const openAiTest = async () => {
            const { data } = await openai.createCompletion({
                model: 'text-davinci-003',
                prompt: prompt.trim(),
                max_tokens: 2048,
                n: 1,
                stop: '',
                temperature: 0.5,
            });

            const response = data.choices[0].text?.trim() || '';
            setResponse(response);
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
                minRows={4}
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
