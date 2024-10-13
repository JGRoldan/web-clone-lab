import { useEffect, useState } from 'react'
import columnColor from '@/utils/columnColor'
import TrashIcon from '@/components/icons/TrashIcon'

const ColumnContainer = ({ title, id, deleteColumn }) => {
    const [color, setColor] = useState('')

    useEffect(() => {
        let getColor = columnColor[Math.floor(Math.random() * columnColor.length)]
        setColor(getColor)
    }, [color])

    return (
        <div
            style={{ borderWidth: '2px', borderColor: color }}
            className="w-80 max-w-sm mx-auto rounded overflow-hidden shadow-lg flex flex-col">
            <div className="py-1 cursor-grab flex justify-between">
                <div className="font-bold mb-2">{title}</div>
                <button onClick={() => { deleteColumn(id) }}>
                    <TrashIcon />
                </button>
            </div>
            <div className="flex flex-grow">Contenido</div>
            <div>Footer</div>
        </div>
    )
}

export default ColumnContainer