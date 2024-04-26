import { ChangeEvent, useState } from 'react';

interface InputProps {
    label: string
    text: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const Input = ({ label, text, onChange }: InputProps) => {
    return (
        <label>
            {label}
            {' '}
            <input
                className='border border-blue-500'
                value={text}
                onChange={onChange}
            />
        </label>
    );
}

export default function SyncedInputs() {
    const [text, setText] = useState('');
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    }
    return (
        <>
            <Input label="First input" text={text} onChange={handleChange} />
            <Input label="Second input" text={text} onChange={handleChange} />
        </>
    );
}