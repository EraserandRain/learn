import React, { useState } from "react"

const useFormInput = (initialValue: string) => {
    const [value, setValue] = useState(initialValue)
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }
    const inputProps = {
        value: value,
        onChange: handleChange
    }
    return inputProps
}

const Form = () => {
    const firstNameProps = useFormInput('Mary')
    const lastNameProps = useFormInput('Poppins')
    return (
        <>
            <label>
                First name:
                <input {...firstNameProps} />
            </label>
            <label>
                Last name:
                <input {...lastNameProps} />
            </label>
            <p><b>Morning, {firstNameProps.value} {lastNameProps.value}</b></p>
        </>
    )
}

export default function CustomHookDemo() {
    return (
        <>
            <Form />
        </>
    )
};
