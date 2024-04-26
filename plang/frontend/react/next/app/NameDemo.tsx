import React,{ useState } from 'react';


export default function NameDemo() {
    const [isEditing, setIsEditing] = useState(false)
    const [firstName, setFirstName] = useState('Jane')
    const [lastName, setLastName] = useState('Jacobs')

    const toggleEditing = (e: React.FormEvent) => {
        e.preventDefault()
        setIsEditing(!isEditing)
    }

    return (
        <form onSubmit={toggleEditing}>
            <label>
                First name:{' '}
                {!isEditing ?
                    <b>{firstName}</b> :
                    <input
                        className="border"
                        value={firstName}
                        onChange={(e) => {
                            setFirstName(e.target.value)
                        }} />
                }
            </label>
            <label>
                Last name:{' '}
                {!isEditing ?
                    <b>{lastName}</b> :
                    <input
                        className="border"
                        value={lastName}
                        onChange={(e) => { setLastName(e.target.value) }} />
                }
            </label>
            <button type="submit">
                {!isEditing ? "Edit Profile" : "Save Profile"}
            </button>
            <p><i>Hello, {firstName} {lastName} !</i></p>
        </form>
    );
}