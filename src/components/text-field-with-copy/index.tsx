import { ActionIcon, TextInput } from '@mantine/core';
import React from 'react';
import * as Icons from 'react-icons/ri';

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
        <div>
            <TextInput
                value={value}
                onChange={handleChange}
                rightSection={
                    <ActionIcon variant="transparent" onClick={handleClick}>
                        <Icons.RiFileCopyLine />
                    </ActionIcon>
                }
            />
        </div>
    );
};

export { TextFieldWithCopy };
