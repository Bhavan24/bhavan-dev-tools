import { Button, Flex, Select, SimpleGrid } from '@mantine/core';
import * as changeCase from 'change-case';
import { useState } from 'react';
import { TextFieldWithCopy } from '../../components';
import { DATE_TYPES, TEXT_CASES } from '../../constants';

const GetPublicIpComponent = () => {
    const [ip, setIp] = useState('');
    const [loading, setLoading] = useState(false);

    const getPublicIp = async () => {
        setIp('');
        setLoading(true);
        const response = await fetch('https://api.ipify.org');
        const ip = await response.text();
        setIp(ip);
        setLoading(false);
    };

    return (
        <Flex mih={50} gap="sm" justify="center" align="center" direction="row" wrap="wrap">
            <TextFieldWithCopy value={ip} setValue={setIp} />
            <Button loading={loading} onClick={getPublicIp}>
                Get Public IP
            </Button>
        </Flex>
    );
};

const GetTimestampComponent = () => {
    const [timestamp, setTimestamp] = useState('');

    const getCurrentTimestamp = () => {
        setTimestamp(String(Date.now()));
    };

    return (
        <Flex mih={50} gap="sm" justify="center" align="center" direction="row" wrap="wrap">
            <TextFieldWithCopy value={timestamp} setValue={setTimestamp} />
            <Button onClick={getCurrentTimestamp}>Get Timestamp</Button>
        </Flex>
    );
};

const ConvertTimestampComponent = () => {
    const [ts, setTs] = useState('');
    const [convertedTs, setConvertedTs] = useState('');
    const [tsType, setTsType] = useState<string | null>(null);

    const get_time_value = (timestamp: any) => {
        let date = new Date(+timestamp).toString();
        return date === 'Invalid Date' ? `${timestamp}` : +timestamp;
    };

    const handleChangeTimestamp = () => {
        var currentText = '';
        const timeString = get_time_value(ts);

        switch (tsType) {
            case DATE_TYPES[0].value:
                currentText = new Date(timeString).toString();
                break;
            case DATE_TYPES[1].value:
                currentText = new Date(timeString).toISOString();
                break;
            case DATE_TYPES[2].value:
                currentText = new Date(timeString).toDateString();
                break;
            case DATE_TYPES[3].value:
                currentText = new Date(timeString).toTimeString();
                break;
            case DATE_TYPES[4].value:
                currentText = new Date(timeString).toUTCString();
                break;
            case DATE_TYPES[5].value:
                currentText = new Date(timeString).toLocaleTimeString();
                break;
            case DATE_TYPES[6].value:
                currentText = new Date(timeString).toLocaleDateString();
                break;
            case DATE_TYPES[7].value:
                currentText = new Date(timeString).toLocaleString();
                break;
            default:
                currentText = new Date(timeString).toString();
                break;
        }

        setConvertedTs(currentText);
    };

    return (
        <Flex mih={50} gap="sm" justify="center" align="center" direction="column" wrap="wrap">
            <TextFieldWithCopy placeHolder="Timestamp" value={ts} setValue={setTs} />
            <Select placeholder="Pick Conversion Type" data={DATE_TYPES} value={tsType} onChange={setTsType} />
            <TextFieldWithCopy placeHolder="Human Readable Time" value={convertedTs} setValue={setConvertedTs} />
            <Button onClick={handleChangeTimestamp}>Convert</Button>
        </Flex>
    );
};

const ChangeTextCaseComponent = () => {
    const [text, setText] = useState('');
    const [finalText, setFinalText] = useState('');
    const [textCase, setCase] = useState<string | null>(null);

    const handleChangeCase = () => {
        var currentText = '';

        switch (textCase) {
            case TEXT_CASES[0].value:
                currentText = text.toLowerCase();
                break;
            case TEXT_CASES[1].value:
                currentText = text.toUpperCase();
                break;
            case TEXT_CASES[2].value:
                currentText = changeCase.camelCase(text);
                break;
            case TEXT_CASES[3].value:
                currentText = changeCase.capitalCase(text);
                break;
            case TEXT_CASES[4].value:
                currentText = changeCase.constantCase(text);
                break;
            case TEXT_CASES[5].value:
                currentText = changeCase.dotCase(text);
                break;
            case TEXT_CASES[6].value:
                currentText = changeCase.headerCase(text);
                break;
            case TEXT_CASES[7].value:
                currentText = changeCase.noCase(text);
                break;
            case TEXT_CASES[8].value:
                currentText = changeCase.paramCase(text);
                break;
            case TEXT_CASES[9].value:
                currentText = changeCase.pascalCase(text);
                break;
            case TEXT_CASES[10].value:
                currentText = changeCase.pathCase(text);
                break;
            case TEXT_CASES[11].value:
                currentText = changeCase.sentenceCase(text);
                break;
            case TEXT_CASES[12].value:
                currentText = changeCase.snakeCase(text);
                break;
            default:
                currentText = text.toLowerCase();
                break;
        }

        setFinalText(currentText);
    };

    return (
        <Flex mih={50} gap="sm" justify="center" align="center" direction="column" wrap="wrap">
            <TextFieldWithCopy placeHolder="Text" value={text} setValue={setText} />
            <Select placeholder="Pick Conversion Type" data={TEXT_CASES} value={textCase} onChange={setCase} />
            <TextFieldWithCopy placeHolder="Converted Text" value={finalText} setValue={setFinalText} />
            <Button onClick={handleChangeCase}>Convert</Button>
        </Flex>
    );
};

const Utility = () => {
    return (
        <SimpleGrid cols={2} spacing="sm" verticalSpacing="sm" py={10}>
            <GetPublicIpComponent />
            <GetTimestampComponent />
            <ChangeTextCaseComponent />
            <ConvertTimestampComponent />
        </SimpleGrid>
    );
};

export { Utility };
