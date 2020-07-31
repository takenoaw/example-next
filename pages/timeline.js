import React, { useEffect } from 'react'
import { useUser } from '../hooks/useUser'
import Router  from 'next/router';
import Navbar from '../components/Navbar';


export default function Timeline() {
    const {isLogged} = useUser();
    const loading = 'loading...'
    useEffect(() => {
        if(!localStorage.getItem('token')){
            Router.push('/login')
        }
    }, [isLogged])
    return (
        <div>
            {!isLogged && <>loading...</>}
            {
                isLogged && 
                <Navbar/>
            }
        </div>
    )
}
