import React from 'react'
import ShowCard from '../ShowCard'
// It appears that you need to specify the folder for a single import
import { useSearch } from '../../contexts'

const ShowList = () => {
    const { showData } = useSearch()

    return (
        <>
            {showData.map(s => (
                s.image ? <ShowCard show={s} key={s.id} /> : ''
            ))}
        </>
    )
}

export default ShowList