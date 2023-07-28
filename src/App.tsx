import { Tabs } from '@mantine/core';
import * as Icons from 'react-icons/ri';
import { Code, Gcp, Gpt, Kaya, Testing, Utility } from './pages';

function App() {
    return (
        <div>
            <Tabs defaultValue="utility" orientation="horizontal">
                <Tabs.List grow>
                    <Tabs.Tab value="utility" icon={<Icons.RiMicrosoftFill />}>
                        Utility
                    </Tabs.Tab>
                    <Tabs.Tab value="testing" icon={<Icons.RiDatabase2Line />}>
                        Testing
                    </Tabs.Tab>
                    <Tabs.Tab value="gpt" icon={<Icons.RiOpenaiFill />}>
                        GPT
                    </Tabs.Tab>
                    <Tabs.Tab value="code" icon={<Icons.RiFileCodeLine />}>
                        Code
                    </Tabs.Tab>
                    <Tabs.Tab value="gcp" icon={<Icons.RiGoogleFill />}>
                        GCP
                    </Tabs.Tab>
                    <Tabs.Tab value="kaya" icon={<Icons.RiKeyFill />}>
                        Kaya
                    </Tabs.Tab>
                </Tabs.List>

                <Tabs.Panel value="utility" pt="xs">
                    <Utility />
                </Tabs.Panel>

                <Tabs.Panel value="testing" pt="xs">
                    <Testing />
                </Tabs.Panel>

                <Tabs.Panel value="gpt" pt="xs">
                    <Gpt />
                </Tabs.Panel>

                <Tabs.Panel value="code" pt="xs">
                    <Code />
                </Tabs.Panel>

                <Tabs.Panel value="gcp" pt="xs">
                    <Gcp />
                </Tabs.Panel>

                <Tabs.Panel value="kaya" pt="xs">
                    <Kaya />
                </Tabs.Panel>
            </Tabs>
        </div>
    );
}

export default App;
