import {useState, useEffect, useRef } from 'react';
// API 
import API from '../API';

const initialState = {
    results: [],
}

export const usePersonFetch = ({personId}) => {
    const [loading, setLoading] = useState(false);
    const [state, setState] = useState({});
    const [error, setError] = useState(false);
    
    const fetchPeople = async(personID) =>{
        try{
            setError(false);
            setLoading(true);

            const person = await API.fetchPeople(personID);
            setState(person);
        }catch(err){
            setError(true);
        }
        setLoading(false);
    }
    // Initial render
    useEffect(() => {
        fetchPeople(personId);
    }, [personId]);

    return { state, loading, error }
}
