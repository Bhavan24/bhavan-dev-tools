import { Tabs } from '@mantine/core';
import * as Icons from 'react-icons/ri';
import { Code, Gpt, Links, Testing, Utility, Markdown, TodoApp, External } from './pages';

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
                        JSON
                    </Tabs.Tab>
                    <Tabs.Tab value="markdown" icon={<Icons.RiMarkdownLine />}>
                        Markdown
                    </Tabs.Tab>
                    <Tabs.Tab value="gpt" icon={<Icons.RiOpenaiFill />}>
                        GPT
                    </Tabs.Tab>
                    <Tabs.Tab value="links" icon={<Icons.RiLinksFill />}>
                        Links
                    </Tabs.Tab>
                    <Tabs.Tab value="todo" icon={<Icons.RiBook2Line />}>
                        Notes
                    </Tabs.Tab>
                    <Tabs.Tab value="external" icon={<Icons.RiExternalLinkLine />}>
                        External
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

                <Tabs.Panel value="markdown" pt="xs">
                    <Markdown />
                </Tabs.Panel>

                <Tabs.Panel value="gpt" pt="xs">
                    <Gpt />
                </Tabs.Panel>

                <Tabs.Panel value="links" pt="xs">
                    <Links />
                </Tabs.Panel>

                <Tabs.Panel value="todo" pt="xs">
                    <TodoApp />
                </Tabs.Panel>

                <Tabs.Panel value="external" pt="xs">
                    <External />
                </Tabs.Panel>
            </Tabs>
        </div>
    );
}

export default App;
