import { CopyIcon } from '@chakra-ui/icons';
import { IconButton, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import React from 'react';

interface ITextFieldWithCopy {
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
}

const TextFieldWithCopy = ({ value, setValue }: ITextFieldWithCopy) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setValue(event.target.value || '');

    const handleClick = () => {
        navigator.clipboard.writeText(value);
    };

    return (
        <InputGroup size="md">
            <Input pr="4.5rem" value={value} onChange={handleChange} />
            <InputRightElement>
                <IconButton size="sm" aria-label="Copy" icon={<CopyIcon />} onClick={handleClick} />
            </InputRightElement>
        </InputGroup>
    );
};

export { TextFieldWithCopy };
