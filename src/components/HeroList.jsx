import React from 'react'
import { heroes } from '../data/heroesData'
import { Row, Col } from 'react-bootstrap';
import { HeroCard } from './HeroCard';

export const HeroList = ({publisher}) => {
   
    const mostrarHeroes = heroes.filter( hero => hero.publisher === publisher )


  return (
    <div>
       
       <Row xs={1} md={2} lg={4} className='m-3'>
            {
                mostrarHeroes.map((hero) =>{
                    return(
                        <Col key={hero.id}>
                            <HeroCard hero={hero}/>
                        </Col>
                    )
                })
            }
       </Row>
   </div>
  )
}
