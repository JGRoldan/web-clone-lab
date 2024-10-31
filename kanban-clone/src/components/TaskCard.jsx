import { useState } from 'react'
import TrashIcon from '@/components/icons/TrashIcon'

const TaskCard = ({ task, deleteTask }) => {
    const [mouseOver, setMouseOver] = useState(false)

    return (
        <div className="relative h-28 w-72 min-w-72 mx-auto rounded overflow-hidden shadow-lg bg-white hover:ring-2 hover:ring-rose-500"
            onMouseEnter={() => setMouseOver(true)}
            onMouseLeave={() => setMouseOver(false)}
        >
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Titulo de tarea</div>
                <p className="text-gray-700 text-base">
                    Descripción de la tarea
                </p>
            </div>
            {mouseOver && (
                <button
                    onClick={() => deleteTask(task.id)}
                    className="absoulte py-2 px-4 -translate-y-20 translate-x-56"
                >
                    <TrashIcon />
                </button>)}

        </div>
    )
}

export default TaskCard

{/* <span className="inline-block rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2"
        style={{ backgroundColor: color }}>Baja
    </span> */}