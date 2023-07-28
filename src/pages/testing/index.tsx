import { Button, SimpleGrid, Tabs } from '@mantine/core';
import { Chance } from 'chance';
import { useState } from 'react';
import { TextFieldWithCopy } from '../../components';

const test_data_tabs = [
    { id: 0, value: 'person', name: 'Person' },
    { id: 1, value: 'text', name: 'Text' },
    { id: 2, value: 'web', name: 'Web' },
    { id: 3, value: 'location', name: 'Location' },
    { id: 4, value: 'time', name: 'Time' },
    { id: 5, value: 'finance', name: 'Finance' },
    { id: 6, value: 'miscellaneous', name: 'Miscellaneous' },
];

const getFakeData = (count: number) => {
    var chance = new Chance();
    return {
        // Person
        age: chance.age(),
        gender: chance.gender(),
        birthday: chance.birthday(),
        first: chance.first(),
        last: chance.last(),
        name: chance.name(),
        name_prefix: chance.name_prefix(),
        name_suffix: chance.name_suffix(),
        phone: chance.phone(),
        // Text
        paragraph: chance.paragraph(),
        sentence: chance.sentence(),
        word: chance.word({
            length: count,
        }),
        string: chance.string({ length: count }),
        // Web
        color: chance.color(),
        company: chance.company(),
        domain: chance.domain(),
        email: chance.email(),
        profession: chance.profession(),
        url: chance.url(),
        ip: chance.ip(),
        twitter: chance.twitter(),
        password: chance.string({
            length: 10,
            alpha: true,
            numeric: true,
            symbols: true,
        }),
        // Location
        address: chance.address(),
        city: chance.city(),
        areacode: chance.areacode(),
        country: chance.country({ full: true }),
        locale: chance.locale(),
        province: chance.province(),
        state: chance.state(),
        street: chance.street(),
        zip: chance.zip(),
        // Time
        date: chance.date(),
        timezone: chance.timezone(),
        timestamp: chance.timestamp(),
        millisecond: chance.millisecond(),
        // Finance
        cc: chance.cc(),
        currency: chance.currency(),
        dollar: chance.dollar(),
        euro: chance.euro(),
        // Miscellaneous
        guid: chance.guid(),
        hash: chance.hash(),
        android_id: chance.android_id(),
        apple_token: chance.apple_token(),
    };
};

const TestDataField = ({ fieldName, fieldData }: any) => {
    return <TextFieldWithCopy label={fieldName} value={fieldData} setValue={() => {}} />;
};

const Testing = () => {
    const [wordCount, setWordCount] = useState(50);
    const [data, setData] = useState<any>();

    const handleWordCount = (e: any) => {
        setWordCount(e.target.value);
    };

    const generateData = (e: any) => {
        e.preventDefault();
        setData(getFakeData(wordCount));
    };

    const getTestDataComponent = (id: number) => {
        switch (id) {
            case 0:
                return (
                    <>
                        <SimpleGrid cols={2}>
                            <div>
                                <TestDataField multiline={false} fieldName={'Name'} fieldData={data.name} />
                            </div>
                            <div>
                                <TestDataField multiline={false} fieldName={'First Name'} fieldData={data.first} />
                            </div>
                            <div>
                                <TestDataField multiline={false} fieldName={'Last Name'} fieldData={data.last} />
                            </div>
                            <div>
                                <TestDataField
                                    multiline={false}
                                    fieldName={'Name Prefix'}
                                    fieldData={data.name_prefix}
                                />
                            </div>
                            <div>
                                <TestDataField
                                    multiline={false}
                                    fieldName={'Name Suffix'}
                                    fieldData={data.name_suffix}
                                />
                            </div>
                            <div>
                                <TestDataField multiline={false} fieldName={'Age'} fieldData={data.age.toString()} />
                            </div>
                            <div>
                                <TestDataField multiline={false} fieldName={'Gender'} fieldData={data.gender} />
                            </div>
                            <div>
                                <TestDataField multiline={false} fieldName={'Profession'} fieldData={data.profession} />
                            </div>
                            <div>
                                <TestDataField multiline={false} fieldName={'Phone'} fieldData={data.phone} />
                            </div>
                            <div>
                                <TestDataField
                                    multiline={false}
                                    fieldName={'Birthday'}
                                    fieldData={data.birthday.toString()}
                                />
                            </div>
                        </SimpleGrid>
                    </>
                );
            case 1:
                return (
                    <>
                        <SimpleGrid cols={2}>
                            <div>
                                <TestDataField
                                    multiline={true}
                                    fieldName={'Word'}
                                    fieldData={data.word}
                                    isRandomWord={true}
                                    wordCount={wordCount}
                                    handleWordCount={handleWordCount}
                                />
                            </div>
                            <div>
                                <TestDataField
                                    multiline={true}
                                    fieldName={'Random String'}
                                    fieldData={data.string}
                                    isRandomWord={true}
                                    wordCount={wordCount}
                                    handleWordCount={handleWordCount}
                                />
                            </div>
                            <div>
                                <TestDataField multiline={true} fieldName={'Paragraph'} fieldData={data.paragraph} />
                            </div>
                            <div>
                                <TestDataField multiline={true} fieldName={'Sentence'} fieldData={data.sentence} />
                            </div>
                        </SimpleGrid>
                    </>
                );
            case 2:
                return (
                    <>
                        <SimpleGrid cols={2}>
                            <div>
                                <TestDataField multiline={false} fieldName={'Color'} fieldData={data.color} />
                            </div>
                            <div>
                                <TestDataField multiline={false} fieldName={'Company'} fieldData={data.company} />
                            </div>
                            <div>
                                <TestDataField multiline={false} fieldName={'Domain'} fieldData={data.domain} />
                            </div>
                            <div>
                                <TestDataField multiline={false} fieldName={'Email'} fieldData={data.email} />
                            </div>
                            <div>
                                <TestDataField multiline={false} fieldName={'URL'} fieldData={data.url} />
                            </div>
                            <div>
                                <TestDataField multiline={false} fieldName={'IP'} fieldData={data.ip} />
                            </div>
                            <div>
                                <TestDataField multiline={false} fieldName={'Username'} fieldData={data.twitter} />
                            </div>
                            <div>
                                <TestDataField multiline={false} fieldName={'Password'} fieldData={data.password} />
                            </div>
                        </SimpleGrid>
                    </>
                );
            case 3:
                return (
                    <>
                        <SimpleGrid cols={2}>
                            <div>
                                <TestDataField multiline={false} fieldName={'Address'} fieldData={data.address} />
                            </div>
                            <div>
                                <TestDataField multiline={false} fieldName={'Street'} fieldData={data.street} />
                            </div>
                            <div>
                                <TestDataField multiline={false} fieldName={'City'} fieldData={data.city} />
                            </div>
                            <div>
                                <TestDataField multiline={false} fieldName={'Province'} fieldData={data.province} />
                            </div>
                            <div>
                                <TestDataField multiline={false} fieldName={'State'} fieldData={data.state} />
                            </div>
                            <div>
                                <TestDataField multiline={false} fieldName={'Country'} fieldData={data.country} />
                            </div>
                            <div>
                                <TestDataField multiline={false} fieldName={'Area Code'} fieldData={data.areacode} />
                            </div>
                            <div>
                                <TestDataField multiline={false} fieldName={'ZIP'} fieldData={data.zip} />
                            </div>
                            <div>
                                <TestDataField multiline={false} fieldName={'Locale'} fieldData={data.locale} />
                            </div>
                        </SimpleGrid>
                    </>
                );
            case 4:
                return (
                    <>
                        <SimpleGrid cols={2}>
                            <div>
                                <TestDataField multiline={false} fieldName={'Date'} fieldData={data.date.toString()} />
                            </div>
                            <div>
                                <TestDataField
                                    multiline={false}
                                    fieldName={'Timezone'}
                                    fieldData={data.timezone.name}
                                />
                            </div>
                            <div>
                                <TestDataField
                                    multiline={false}
                                    fieldName={'Timestamp'}
                                    fieldData={data.timestamp.toString()}
                                />
                            </div>
                            <div>
                                <TestDataField
                                    multiline={false}
                                    fieldName={'Millisecond'}
                                    fieldData={data.millisecond.toString()}
                                />
                            </div>
                        </SimpleGrid>
                    </>
                );
            case 5:
                return (
                    <>
                        <SimpleGrid cols={2}>
                            <div>
                                <TestDataField multiline={false} fieldName={'CC'} fieldData={data.cc} />
                            </div>
                            <div>
                                <TestDataField
                                    multiline={false}
                                    fieldName={'Currency'}
                                    fieldData={data.currency.name}
                                />
                            </div>
                            <div>
                                <TestDataField multiline={false} fieldName={'Dollar'} fieldData={data.dollar} />
                            </div>
                            <div>
                                <TestDataField multiline={false} fieldName={'Euro'} fieldData={data.euro} />
                            </div>
                        </SimpleGrid>
                    </>
                );
            case 6:
                return (
                    <>
                        <SimpleGrid cols={2}>
                            <div>
                                <TestDataField multiline={false} fieldName={'GUID'} fieldData={data.guid.toString()} />
                            </div>
                            <div>
                                <TestDataField multiline={false} fieldName={'Hash'} fieldData={data.hash.toString()} />
                            </div>
                            <div>
                                <TestDataField multiline={false} fieldName={'Android Id'} fieldData={data.android_id} />
                            </div>
                            <div>
                                <TestDataField
                                    multiline={false}
                                    fieldName={'Apple Token'}
                                    fieldData={data.apple_token}
                                />
                            </div>
                        </SimpleGrid>
                    </>
                );
            default:
                return <></>;
        }
    };

    return (
        <div>
            <Button onClick={generateData} fullWidth py={5}>
                Generate Data
            </Button>

            {data && (
                <Tabs defaultValue={test_data_tabs[0].value}>
                    <Tabs.List grow>
                        {test_data_tabs.map(test_data_tab => (
                            <Tabs.Tab key={test_data_tab.id} value={test_data_tab.value}>
                                {test_data_tab.name}
                            </Tabs.Tab>
                        ))}
                    </Tabs.List>

                    {test_data_tabs.map(test_data_tab => (
                        <Tabs.Panel key={test_data_tab.id} value={test_data_tab.value}>
                            <div style={{ padding: '15px' }}>{getTestDataComponent(test_data_tab.id)}</div>
                        </Tabs.Panel>
                    ))}
                </Tabs>
            )}
        </div>
    );
};

export { Testing };
