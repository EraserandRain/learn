import React , { forwardRef, useRef } from 'react';

const MyInput = React.memo(forwardRef<HTMLInputElement>((props, ref) => {
    return (
        <input {...props} ref={ref} />
    )
}))

export default function RefDemo() {
    const inputRef = useRef<HTMLInputElement>(null);

    function handleClick() {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }

    return (
        <>
            <MyInput ref={inputRef} />
            <button onClick={handleClick}>
                Focus input
            </button>
        </>
    )
}