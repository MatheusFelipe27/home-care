import React, { useState } from 'react'
import './Home.scss'
import { TfiSearch } from "react-icons/tfi";
import Professional from '../../components/professional/Professional';
import Capacitor from '../../components/capacitor/Capacitor';

const professionalCards = [
  <Professional img= "caregiver" role="Cuidadores"/>,
  <Professional img= "nurse" role="Técnicos em enfermagem"/>,
  <Professional img= "doctor" role="Enfermeiros"/>,
]

const Home = () => {
  const [searchValue, setSearchValue]= useState<String>()
  
  return (
    <>
        <nav className='homeNav'>
            <div className='searchHome'>
                <span className="searchIcon">
                  <TfiSearch size={"22px"} color={'darkgray'} fontWeight={500}/>
                </span>
                <input 
                    className='homeNavInput'
                    placeholder='Buscar capatitações, profissionais...'
                    onChange={(e) => setSearchValue(e.target.value)}
                />
            </div>
        </nav>

        <div className='homeContent'>
            <span> Encontre profissionais</span>
            <div className='homeCards'>
              { professionalCards.filter((val)=> !searchValue || 
                val.props.role.toUpperCase().includes(searchValue.toUpperCase()))
                .map((value, index) =>(
                  <React.Fragment key={index}>{value}</React.Fragment>
                ))
              }
            </div>
            <div className='homeCapacitor'>
              <div className='homeSpan'>
                <span>Capacitações profissionais</span>
                <span> Ver mais</span>
              </div>
              <div className='capacitorCard'>
                <Capacitor btnName = "Parceiros" name= "Diabetes: alimentos para evitar." img= "fruits" />
                <Capacitor btnName = "Capacitações" name= "Como ministar doses"  img="research" />  
              </div>
            </div>
        </div>
    </>
  )
}

export default Home