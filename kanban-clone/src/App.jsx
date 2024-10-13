import './App.css'
import { priorityColor } from '@/utils/columnColor.js'

function App() {
  const color = priorityColor['baja']

  return (
    <>
      <section className='max-w-[400px] mx-auto rounded overflow-hidden shadow-lg bg-red-100 py-2'>
        <div className="max-w-sm mx-auto rounded overflow-hidden shadow-lg bg-white">
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
        <div className="mt-2 max-w-sm mx-auto rounded overflow-hidden shadow-lg bg-white">
          <div className="px-6 py-2">
            <p className="text-gray-700 text-base font-semibold cursor-pointer">
              + Agregar Tarea
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-sm mx-auto rounded overflow-hidden shadow-lg">
        <div className="px-6 py-6">
          <p className="text-gray-700 text-base font-semibold cursor-pointer">
            + Agregar Columna
          </p>
        </div>
      </div>
    </>
  )
}

export default App
