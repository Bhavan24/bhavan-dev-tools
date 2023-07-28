import { ActionIcon, TextInput } from '@mantine/core';
import React from 'react';
import * as Icons from 'react-icons/ri';

interface ITextFieldWithCopy {
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
    placeHolder?: string;
    label?: string;
    fullWidth?: boolean;
}

const TextFieldWithCopy = ({
    value,
    setValue,
    placeHolder = '',
    label = '',
    fullWidth = false,
}: ITextFieldWithCopy) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setValue(event.target.value || '');

    const handleClick = () => {
        navigator.clipboard.writeText(value);
    };

    return (
        <TextInput
            placeholder={placeHolder}
            label={label}
            style={fullWidth ? { width: '100%' } : {}}
            miw={350}
            value={value}
            onChange={handleChange}
            rightSection={
                <ActionIcon variant="transparent" onClick={handleClick}>
                    <Icons.RiFileCopyLine />
                </ActionIcon>
            }
        />
    );
};

export { TextFieldWithCopy };
