import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
// Hooks
import { usePersonFetch } from '../hooks/usePersonFetch';
// Components
import Actor from './Actor';
import Spinner from './Spinner';
import BreadCrumb from './BreadCrumb';
import PersonInfo from './PersonInfo';
// Config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';
// Images
import NoImage from '../images/no_image.jpg'

const Person = () => {
    const [name, setName] = useState('');
    const personId = useParams();

    const { state: person, loading, error} = usePersonFetch(personId);

    if(loading) return <Spinner />;
    if(error) return <div>Something went wrong...</div>;
    return (
        <div>
            <BreadCrumb movieTitle={person.name} />
            <PersonInfo person={person}/>
        </div>
    )
}

export default Person;