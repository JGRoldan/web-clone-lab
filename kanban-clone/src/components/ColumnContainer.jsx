import { useEffect, useState } from 'react'
import columnColor from '@/utils/columnColor'
import PlusIcon from '@/components/icons/PlusIcon'
import TrashIcon from '@/components/icons/TrashIcon'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import TaskCard from './TaskCard'

const ColumnContainer = ({ title, id, deleteColumn, updateColumn, createTask, tasks, deleteTask }) => {
    const [color, setColor] = useState('')
    const [editColumnName, setEditColumnName] = useState(false)

    const { setNodeRef, attributes, listeners, transform, transition, isDragging } = useSortable({
        id,
        data: {
            type: 'column',
            column: { title, id },
        },

    })
    const style = {
        transition,
        transform: CSS.Transform.toString(transform),
        borderWidth: '2px',
        borderColor: color
    }
    useEffect(() => {
        let getColor = columnColor[Math.floor(Math.random() * columnColor.length)]
        setColor(getColor)
    }, [])
    if (isDragging) {
        return (<div
            ref={setNodeRef}
            style={style}
            className="w-80 max-w-sm mx-auto rounded overflow-hidden shadow-lg flex flex-col">
        </div>)
    }
    return (
        <div
            ref={setNodeRef}
            style={style}
            className="w-80 max-w-sm mx-auto rounded overflow-hidden shadow-lg flex flex-col bg-slate-200">
            <div
                style={{ backgroundColor: color }}
                className="cursor-grab flex justify-between">
                <div className="font-bold mb-2"
                    onClick={() => setEditColumnName(true)}
                    {...attributes}
                    {...listeners}
                >
                    {!editColumnName && title}
                    {editColumnName && (
                        <input
                            className=''
                            value={title}
                            autoFocus
                            onBlur={() => setEditColumnName(false)}
                            onChange={(e) => { updateColumn(id, e.target.value) }}
                            onKeyDown={(e) => {
                                if (e.key !== 'Enter') return
                                setEditColumnName(false)
                            }}
                        />
                    )}
                </div>
                <button onClick={() => {
                    deleteColumn(id)
                }}>
                    <TrashIcon />
                </button>
            </div>
            <div className="flex flex-grow flex-col gap-2">
                {tasks.map(task => (<TaskCard key={task.id} task={task} deleteTask={deleteTask} />))}
            </div>

            {/* Footer */}
            <button
                style={{ backgroundColor: color }}
                className="flex gap-2 items-center text-base font-semibold"
                onClick={() => createTask(id)}
            >
                <PlusIcon />
                Agregar Tarea
            </button>
        </div>
    )
}

export default ColumnContainer


{/* Tarea */ }
{/* <div className="flex flex-grow">
<div className="w-72 min-w-72 mx-auto rounded overflow-hidden shadow-lg bg-white">
    <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Titulo de tarea</div>
        <p className="text-gray-700 text-base">
            Descripción de la tarea
        </p>
    </div>
    <h3 className="px-6 font-semibold">Prioridad</h3>
    <div className="px-6 pt-2 pb-2">
        <span className="inline-block rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2"
            style={{ backgroundColor: color }}>Baja</span>
    </div>
</div>
</div> */}