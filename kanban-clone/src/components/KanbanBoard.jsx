import { useState } from 'react'
import PlusIcon from '@/components/icons/PlusIcon'
import ColumnContainer from './ColumnContainer'

const KanbanBoard = () => {
    const [columns, setColumns] = useState([])

    const onHandlerCreateColumn = () => {
        const columnToAdd = {
            id: crypto.randomUUID(),
            title: `Nueva Tarea ${columns.length + 1}`,
        }
        setColumns([...columns, columnToAdd])
    }

    const onHandlerDeleteColumn = (id) => {
        const filteredColumns = columns.filter(column => column.id !== id)
        setColumns(filteredColumns)
    }

    return (
        <div className="flex min-h-screen w-full items-center">
            <div className="m-auto flex gap-2">
                {columns.map(({ title, id }) => {
                    return (
                        <ColumnContainer title={title} key={id} deleteColumn={onHandlerDeleteColumn} id={id} />
                    )
                })}
                <button
                    className="p-4 flex gap-2 items-center rounded shadow-lg h-16 w-80 min-w-80 text-gray-700 text-base font-semibold"
                    onClick={onHandlerCreateColumn}
                >
                    <PlusIcon />
                    Agregar Columna
                </button>
            </div>
        </div>
    )
}

export default KanbanBoard