import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import {get} from '@/store/modules/demo'
export default function Home() {
    const dispatch = useAppDispatch()
    useAppSelector((state) => {
        console.log(state);

    })
    useEffect(() => {
        dispatch()
    }, [])
    return (
        <div>Home</div>
    )
}
