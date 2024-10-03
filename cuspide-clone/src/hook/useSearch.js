import { useState, useEffect, useRef } from 'react'

export function useSearch() {
    const [search, setSearch] = useState('')
    const [error, setError] = useState(null)
    const isFirstInput = useRef(true)

    useEffect(() => {
        if (isFirstInput.current) {//Valida si es el primer input del user
            isFirstInput.current = search === ''
            return
        }
        if (search === '') {
            setError('No se puede buscar un libro vacia.')
            return
        }
        setError(null)
    }, [search])

    return { search, setSearch, error }
}