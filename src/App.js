import { useState } from 'react';

import Layout from './components/Layout';
import WorkersTable from './components/WorkersTable';
import WorkerInput from './components/WorkerInput';

let id = 0;

function App() {
    const [workers, setWorkers] = useState([]);
    const maxLength = 5;

    const handleAdd = value => {
        const worker = {
            ...value,
            id: id++,
        };

        setWorkers([...workers, worker]);
    }

    const handleDelete = id => {
        setWorkers(workers.filter(worker => worker.id !== id));
    }

    return (
        <Layout>
            <WorkersTable
                workers={workers}
                onDelete={handleDelete} />
            <WorkerInput
                onAdd={handleAdd}
                disabled={workers.length >= maxLength}
            />
        </Layout>
    )
}

export default App;
