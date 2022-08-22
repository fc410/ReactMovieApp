import {useState, useEffect, useRef } from 'react';
// API 
import API from '../API';

const initialState = {
    results: [],
}

export const usePersonSearchFetch = (searchTerm) => {
    const [loading, setLoading] = useState(false);
    const [state, setState] = useState({});
    const [error, setError] = useState(false);
    
    const fetchSearchPerson = async(searchTerm) =>{
        try{
            setError(false);
            setLoading(true);
            console.log(searchTerm);
            const person = await API.fetchPerson(searchTerm);
            setState(person);
        }catch(err){
            setError(true);
        }
        setLoading(false);
    }
    // Initial render
    useEffect(() => {
        fetchSearchPerson(searchTerm);
    }, [searchTerm]);

    return { state, loading, error }
}
