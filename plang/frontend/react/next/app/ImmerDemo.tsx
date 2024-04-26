import { useImmer } from 'use-immer'

export default function ImmerDemo() {
    const [state, updateState] = useImmer({
        name: 'John',
        age: 30,
        address: {
            street: '123 Main St',
            city: 'New York',
        },
    });

    // Function to update the nested object
    const updateAddress = () => {
        updateState((draft) => {
            draft.address.city = 'Los Angeles'
        })
    };

    return (
        <>
            <h1>User Information</h1>
            <p>Name: {state.name}</p>
            <p>Age: {state.age}</p>
            <p>Street: {state.address.street}</p>
            <p>City: {state.address.city}</p>

            <button onClick={updateAddress}>Update City</button>
        </>
    );
}


