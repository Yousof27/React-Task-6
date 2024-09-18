import { useState } from 'react';
import './form.css'

export default function Form() {
    const [inputs, setInputs] = useState({ name: '', email: '', age: '' });

    function formSubmit(e) {
        e.preventDefault();
        for (const input in inputs) {
            if (inputs[input].trim() === '') {
                console.log('Enter All The Data.');
                return;
            }
        }
        console.log(inputs);
    }

    return (
        <form onSubmit={(e) => formSubmit(e)}>
            <input onInput={(e) => setInputs({ ...inputs, name: e.target.value })} placeholder='Name:' value={inputs.name} />
            <input onInput={(e) => setInputs({ ...inputs, email: e.target.value })} placeholder='Email:' value={inputs.email} />
            <input onInput={(e) => setInputs({ ...inputs, age: e.target.value })} placeholder='Age:' value={inputs.age} />
            <input type='submit' value="Submit" />
        </form>
    );
}



