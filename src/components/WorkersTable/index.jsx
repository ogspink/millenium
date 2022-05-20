import './index.scss';
import WorkerRow from './WorkerRow';

function WorkersTable({ workers, onDelete }) {
    return (
        <div className="table">
            <div className="table__title">Pracownicy</div>
            <div>
                {workers && workers.map(worker => (
                    <WorkerRow
                        key={worker.id}
                        worker={worker}
                        onDelete={onDelete}
                    />
                ))}
            </div>
        </div>
    );
}

export default WorkersTable;
