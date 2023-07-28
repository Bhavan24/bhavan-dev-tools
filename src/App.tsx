import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import { Code, Gcp, Gpt, Kaya, Testing, Utility } from './pages';

function App() {
    return (
        <Tabs isFitted>
            <TabList>
                <Tab>Utility</Tab>
                <Tab>Testing</Tab>
                <Tab>GPT</Tab>
                <Tab>Code</Tab>
                <Tab>GCP</Tab>
                <Tab>Kaya</Tab>
            </TabList>

            <TabPanels>
                <TabPanel>
                    <Utility />
                </TabPanel>
                <TabPanel>
                    <Testing />
                </TabPanel>
                <TabPanel>
                    <Gpt />
                </TabPanel>
                <TabPanel>
                    <Code />
                </TabPanel>
                <TabPanel>
                    <Gcp />
                </TabPanel>
                <TabPanel>
                    <Kaya />
                </TabPanel>
            </TabPanels>
        </Tabs>
    );
}

export default App;
