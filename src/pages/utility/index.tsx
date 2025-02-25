import { Button, Flex, Select, SimpleGrid } from '@mantine/core';
import * as changeCase from 'change-case';
import { useState } from 'react';
import { TextFieldWithCopy } from '../../components';
import { DateTypes, DATE_TYPES, TextCases, TEXT_CASES } from '../../constants';

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
    const [tsType, setTsType] = useState<DateTypes>(DateTypes.toString);

    const get_time_value = (timestamp: any) => {
        let date = new Date(+timestamp).toString();
        return date === 'Invalid Date' ? `${timestamp}` : +timestamp;
    };

    const handleChangeTimestamp = () => {
        var currentText = '';
        const timeString = get_time_value(ts);

        switch (tsType) {
            case DateTypes.toString:
                currentText = new Date(timeString).toString();
                break;
            case DateTypes.toISOString:
                currentText = new Date(timeString).toISOString();
                break;
            case DateTypes.toDateString:
                currentText = new Date(timeString).toDateString();
                break;
            case DateTypes.toTimeString:
                currentText = new Date(timeString).toTimeString();
                break;
            case DateTypes.toUTCString:
                currentText = new Date(timeString).toUTCString();
                break;
            case DateTypes.toLocaleTimeString:
                currentText = new Date(timeString).toLocaleTimeString();
                break;
            case DateTypes.toLocaleDateString:
                currentText = new Date(timeString).toLocaleDateString();
                break;
            case DateTypes.toLocaleString:
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
            <Select
                miw={350}
                placeholder="Pick Conversion Type"
                data={DATE_TYPES}
                value={tsType}
                onChange={e => {
                    setTsType(e as DateTypes);
                }}
            />
            <TextFieldWithCopy placeHolder="Human Readable Time" value={convertedTs} setValue={setConvertedTs} />
            <Button onClick={handleChangeTimestamp}>Convert</Button>
        </Flex>
    );
};

const ChangeTextCaseComponent = () => {
    const [text, setText] = useState('');
    const [finalText, setFinalText] = useState('');
    const [textCase, setCase] = useState<TextCases>(TextCases.lowerCase);

    const handleChangeCase = () => {
        var currentText = '';

        switch (textCase) {
            case TextCases.lowerCase:
                currentText = text.toLowerCase();
                break;
            case TextCases.upperCase:
                currentText = text.toUpperCase();
                break;
            case TextCases.camelCase:
                currentText = changeCase.camelCase(text);
                break;
            case TextCases.capitalCase:
                currentText = changeCase.capitalCase(text);
                break;
            case TextCases.constantCase:
                currentText = changeCase.constantCase(text);
                break;
            case TextCases.dotCase:
                currentText = changeCase.dotCase(text);
                break;
            case TextCases.headerCase:
                currentText = changeCase.headerCase(text);
                break;
            case TextCases.noCase:
                currentText = changeCase.noCase(text);
                break;
            case TextCases.paramCase:
                currentText = changeCase.paramCase(text);
                break;
            case TextCases.pascalCase:
                currentText = changeCase.pascalCase(text);
                break;
            case TextCases.pathCase:
                currentText = changeCase.pathCase(text);
                break;
            case TextCases.sentenceCase:
                currentText = changeCase.sentenceCase(text);
                break;
            case TextCases.snakeCase:
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
            <Select
                miw={350}
                placeholder="Pick Conversion Type"
                data={TEXT_CASES}
                value={textCase}
                onChange={e => {
                    setCase(e as TextCases);
                }}
            />
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
