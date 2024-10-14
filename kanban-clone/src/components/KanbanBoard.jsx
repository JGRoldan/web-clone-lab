import { useState, useMemo } from 'react'
import { createPortal } from 'react-dom'
import PlusIcon from '@/components/icons/PlusIcon'
import ColumnContainer from './ColumnContainer'
import { DndContext, DragOverlay, PointerSensor, useSensor } from '@dnd-kit/core'
import { arrayMove, SortableContext } from '@dnd-kit/sortable'

const KanbanBoard = () => {
    const [columns, setColumns] = useState([])
    const columnsId = useMemo(() => columns.map(column => column.id), [columns])
    const [activeColumn, setActiveColumn] = useState(null)

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
    const onDragStart = (e) => {
        if (e.active.data.current.type === 'column') {
            setActiveColumn(e.active.data.current.column)
            return
        }
    }

    const onDragEnd = (e) => {
        const { active, over } = e
        const activeColId = active.id
        const overColId = over.id
        if (activeColId === overColId) return

        setColumns(columns => {
            const activeIndex = columns.findIndex(column => column.id === activeColId)
            const overIndex = columns.findIndex(column => column.id === overColId)
            return arrayMove(columns, activeIndex, overIndex)
        })
    }

    const sensor = useSensor(useSensor(PointerSensor, {
        activationConstraint: {
            distance: 2
        }
    }))

    const updateColumn = (id, title) => {
        const newColumn = columns.map(column => {
            if (column.id !== id) return column
            return { ...column, title }
        })
        setColumns(newColumn)
    }

    return (
        <div className="flex min-h-screen w-full items-center">
            <DndContext onDragStart={onDragStart} onDragEnd={onDragEnd} sensor={sensor}>
                <div className="m-auto flex gap-2">
                    <SortableContext items={columnsId} >
                        {columns.map(({ title, id }) => {
                            return (
                                <ColumnContainer
                                    title={title}
                                    key={id}
                                    deleteColumn={onHandlerDeleteColumn}
                                    id={id}
                                    updateColumn={updateColumn} />
                            )
                        })}
                    </SortableContext>
                    <button
                        className="p-4 flex gap-2 items-center rounded shadow-lg h-16 w-80 min-w-80 text-gray-700 text-base font-semibold"
                        onClick={onHandlerCreateColumn}
                    >
                        <PlusIcon />
                        Agregar Columna
                    </button>
                </div>
                {createPortal(
                    <DragOverlay>
                        {activeColumn && (
                            <ColumnContainer
                                title={activeColumn.title}
                                id={activeColumn.id}
                                deleteColumn={onHandlerDeleteColumn}
                                updateColumn={updateColumn} />
                        )}
                    </DragOverlay>, document.body)}

            </DndContext>
        </div>
    )
}

export default KanbanBoard