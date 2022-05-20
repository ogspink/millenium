function WorkerRow({ worker, onDelete }) {
    return (
        <div className="table__row">
            <div className="table__cell">{worker.name}</div>
            <div className="table__cell">{worker.surname}</div>
            <button
                className="table__delete"
                type="button"
                onClick={() => onDelete(worker.id)}
            >
                Usun
            </button>
        </div>
    );
}

export default WorkerRow;
