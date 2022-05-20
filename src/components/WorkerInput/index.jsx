import { useRef, useState } from 'react';

function WorkerInput({ onAdd, disabled }) {
    const [error, setError] = useState();
    const inputRef = useRef();

    const handleSubmit = () => {
        const value = inputRef.current.value || '';
        const [name, surname] = value.split(' ');

        if (!name || !surname) {
            return setError('Pole jest wymagane!');
        }

        setError(null);
        onAdd({ name, surname });
        inputRef.current.value = '';
    };

    return (
        <div className="worker-input">
            <input type="text" ref={inputRef} />
            <button
                type="button"
                disabled={disabled}
                onClick={handleSubmit}>
                Dodaj
            </button>
            {error && (
                <div>{error}</div>
            )}
        </div>
    );
}

export default WorkerInput;
