import React from 'react'
import { useParams } from 'react-router-dom'
import { heroes } from '../data/heroesData'

export const HeroPage = () => {
  const {heroId} = useParams()

  const hero = heroes.find(h => heroId === h.id)

  return (
    
    <div className='d-flex align-items-center m-3'>
      <div style={{flex:1}}>
        <img src={hero.imagen} alt={hero.superhero}/>
      </div>

      <div style={{flex:2}} className='ps-5'>
        <h2>{hero.superhero}</h2>
        <p><strong>Alter Ego:</strong> {hero.alter_ego} </p>
        <p><strong>Primera Aparicion:</strong> {hero.first_appearance} </p>
        <p><strong>Personaje:</strong> {hero.characters} </p>
        <p><strong>Publicado Por:</strong> {hero.publisher} </p>
      </div>

    </div>

  )
}
