import { Flex, Select } from '@mantine/core';
import { useState } from 'react';

const getLinksFromLocalStorage = () => {
    try {
        const links = localStorage.getItem('links');
        if (links) return JSON.parse(links);
        return [];
    } catch (error) {
        return [];
    }
};

const External = () => {
    const LINKS = getLinksFromLocalStorage();
    const [links, setLinks] = useState<string[]>(LINKS);
    const [currentLink, setCurrentLink] = useState<string>(LINKS[0]);

    const handleAddLink = (newLink: string) => {
        if (newLink.trim() !== '') {
            const newLinks = [...links, newLink];
            setLinks(newLinks);
            localStorage.setItem('links', JSON.stringify(newLinks));
        }
    };

    return (
        <Flex direction="column">
            <Select
                my={4}
                label={
                    <a href={currentLink} target="_blank" rel="noreferrer">
                        External Link
                    </a>
                }
                searchable
                onSearchChange={setCurrentLink}
                searchValue={currentLink}
                nothingFound="No options"
                placeholder="Pick one"
                data={links}
                creatable
                getCreateLabel={query => `+ Create ${query}`}
                onCreate={query => {
                    handleAddLink(query);
                    return query;
                }}
            />
            <iframe
                title="markdown"
                src={currentLink}
                style={{ width: '100%', height: '100vh', border: 'none', background: 'transparent' }}
            ></iframe>
        </Flex>
    );
};

export { External };
