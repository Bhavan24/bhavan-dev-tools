import { Avatar, Badge, Flex, Tabs } from '@mantine/core';
import * as Icons from 'react-icons/ri';
import { Code, Gpt, Links, Testing, Utility } from './pages';

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
                    <Tabs.Tab value="code" icon={<Icons.RiCodeBoxLine />}>
                        Code
                    </Tabs.Tab>
                    <Tabs.Tab value="gpt" icon={<Icons.RiOpenaiFill />}>
                        GPT
                    </Tabs.Tab>
                    <Tabs.Tab value="links" icon={<Icons.RiLinksFill />}>
                        Links
                    </Tabs.Tab>
                </Tabs.List>

                <Tabs.Panel value="utility" pt="xs">
                    <Utility />
                </Tabs.Panel>

                <Tabs.Panel value="testing" pt="xs">
                    <Testing />
                </Tabs.Panel>

                <Tabs.Panel value="code" pt="xs">
                    <Code />
                </Tabs.Panel>

                <Tabs.Panel value="gpt" pt="xs">
                    <Gpt />
                </Tabs.Panel>

                <Tabs.Panel value="links" pt="xs">
                    <Links />
                </Tabs.Panel>
            </Tabs>
            <Flex justify="center" m={5} style={{ float: 'right', display: 'none' }}>
                <Badge
                    style={{ cursor: 'pointer' }}
                    pl={0}
                    size="lg"
                    color="blue"
                    radius="xl"
                    onClick={() => {
                        window.open('https://www.linkedin.com/in/bhavan24/', '_blank');
                    }}
                    leftSection={
                        <Avatar
                            alt="Avatar for badge"
                            size={24}
                            mr={5}
                            src="https://avatars.githubusercontent.com/u/68679905?v=4"
                        />
                    }
                >
                    @Dev: Bhavan
                </Badge>
            </Flex>
        </div>
    );
}

export default App;
