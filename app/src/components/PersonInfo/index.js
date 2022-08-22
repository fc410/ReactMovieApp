import React, { Container } from 'react';
// Styles
import {Wrapper, Content, Text, PersonImg } from './PersonInfo.styled';
//Components
import Actor from '../Actor';
import Thumb from '../Thumb';
// Config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config';
// Images
import NoImage from '../../images/no_image.jpg'
// Horizontal scroll
import HorizontalScroll from 'react-scroll-horizontal';
// Hooks
import { usePersonSearchFetch } from '../../hooks/usePersonSearchFetch.js';


const PersonInfo = ({person}) =>{
    const currentYear = new Date().getFullYear();
    
    let name;
    if(person.name){
        name=person.name;
    }
    else{
        name= '';
    }
    const { state: pers, loading, error} = usePersonSearchFetch(name);
    console.log(pers.results[0].known_for)

    return (
        <Wrapper>
            <Content>
                <PersonImg>
                    <Actor
                        name={person.name}
                        imageUrl={
                            person.profile_path
                            ? `${IMAGE_BASE_URL}${POSTER_SIZE}${person.profile_path}`
                            : NoImage
                        }
                        personId={person.id}
                    />
                    <div className="info"> 
                        <h3>Personal Information</h3>
                        <div>
                            <h4>Known for</h4>
                            {person.known_for_department}
                        </div>
                        <h4>Gender</h4>
                        <div>{person.gender == 2 ? 'Male' : 'Female'}</div>
                        <h4>Birthday</h4>
                        <div>{person.birthday} {person.birthday ? '(' + (currentYear-person.birthday.substring(0,4)) + ' years old)': null}</div>
                        <h4>Place of birth</h4>
                        <div>{person.place_of_birth}</div>
                    </div>
                </PersonImg>
                <Text>
                    <h3>Biography:</h3>
                    <div className="descriptor">
                        {person.biography}
                    </div>
                    <h4>Known For</h4>
                    <HorizontalScroll>
                        {pers? 
                         pers.results[0].known_for.map(movie=>{
                            return movie.id;
                         }) : null
                    }
                    </HorizontalScroll>
                    <h4>Acting</h4>
                    <div>
                        All movies
                    </div>
                </Text>
                
            </Content>
        </Wrapper>
    )
}

export default PersonInfo;