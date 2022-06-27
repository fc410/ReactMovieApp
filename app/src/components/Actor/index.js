import React from 'react';
// Styles
import { Wrapper, Image } from './Actor.style'

import { Link } from 'react-router-dom';

const Actor = ({name, character, imageUrl, personId}) => {

    return(
        <Wrapper>
            <Link to={`/person/${personId}`}>
                <Image src={imageUrl} alt='actor-thumb' />
            </Link>

            <h3>{name}</h3>
            <p>{character}</p>
        </Wrapper>
    )
}


export default Actor;