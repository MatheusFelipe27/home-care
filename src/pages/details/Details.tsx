import React from 'react'
import { TfiSearch } from "react-icons/tfi";
import {AiOutlineArrowLeft} from 'react-icons/ai'

import './Details.scss'
import { Link } from 'react-router-dom';
import DetailsCard from '../../components/detailsCard/DetailsCard';

const detailsCard = [
    <DetailsCard name= "Richard Ramos" price= "70,00" coren= "00/00000" location= "São Paulo - SP"/>,
    <DetailsCard name= "Carolina Magalhães" price= "80,00" location= "Recife - PE"/>,
    <DetailsCard name= "Odete Rocha" price= "70,00"  coren= "00/00000" location= "Salvador - BA" />,
    <DetailsCard name= "Camila Couto" price= "90,00" location= "Belo Horizonte - MG"/>
]

const Details = () => {
  return (
    <>
        <div className='allDetailsContent'>
            <nav className='detailsNav'>
                <Link to = '/home' style={{textDecoration: 'none'}}> 
                    <AiOutlineArrowLeft size={'30px'} color='#FFF'/>
                </Link>
                <span>Profissionais</span>
                <TfiSearch size={'30px'} cursor={'pointer'} color='#FFF'/>
            </nav>
            <span className='spanQuantity'> 
                {   detailsCard.length <1 ? 'Não há profissionais no momento' :
                    detailsCard.length > 1 ? `${detailsCard.length} profissionais`: 
                    '1 profissional'
                }     
            </span>
            <div className='details'>
                {detailsCard.map((val, index) =>(
                    <React.Fragment key={index}> {val} </React.Fragment>
                ))}
            </div>
        </div>
    </>
  )
}

export default Details