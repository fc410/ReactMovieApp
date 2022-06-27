import React from 'react';
import { useParams } from 'react-router-dom';
// Hooks
import { usePersonFetch } from '../hooks/usePersonFetch'
// Components
import Actor from './Actor';
import Spinner from './Spinner';
// Config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';
// Images
import NoImage from '../images/no_image.jpg'

const Person = () => {
    const personId = useParams();

    const { state: person, loading, error} = usePersonFetch(personId);
    console.log(person);

    if(loading) return <Spinner />;
    if(error) return <div>Something went wrong...</div>;
    return (
        <div>
            <Actor
                name={person.name}
                imageUrl={
                    person.profile_path
                    ? `${IMAGE_BASE_URL}${POSTER_SIZE}${person.profile_path}`
                    : NoImage
                }
                personId={person.id}
            />
        </div>
    )
}

export default Person;