import React, { useState } from 'react'
import './Profile.scss'
import Capacitor from '../../components/capacitor/Capacitor'
import { TfiSearch } from 'react-icons/tfi'
import {PiWarning} from 'react-icons/pi'
import myself from './../../assets/myself.jpg'
import { RiStarSFill } from 'react-icons/ri'
import {AiOutlineArrowRight} from 'react-icons/ai'


const Profile = () => {
    const [ ,setSearchValue] = useState<String>()
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

        <div className='profileAllContent'>

            <div className='warningProfile'>
                <PiWarning size={'40px'}/>
                <span><strong>Completar perfil: </strong>Preencha suas informações para encontrar pacientes</span>
            </div>
            
            <div className='profileSection'>
                <span id='first'>Seu perfil</span>
                <div className='profileInfo'>
                    <img src={myself} alt='foto de perfil'/>
                    <div className='profileInfoContent'>
                        <span id='second'>Matheus Felipe</span>
                        <span id= 'third'>Recife - PE</span>
                        <div className='starProfile'>
                            <span id='fourth'>
                                <RiStarSFill />
                                <RiStarSFill />
                                <RiStarSFill />
                                <RiStarSFill />
                                <RiStarSFill />
                            <span >(8)</span>
                            </span>
                        </div>
                    </div>
                </div>
                <div className='complete'> 
                    <span>Completar perfil <AiOutlineArrowRight size={'18px'}/> </span>
                </div>
            </div>
            <div className='profileContent'>
                <div className='profileCapacitor'>
                    <div className='profileSpan'>
                        <span>Capacitações profissionais</span>
                        <span> Ver mais</span>
                    </div>
                    <div className='capacitorCard'>
                        <Capacitor btnName = "Parceiros" name= "Diabetes: alimentos para evitar." img= "fruits" />
                        <Capacitor btnName = "Capacitações" name= "Como ministar doses"  img="research" />  
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Profile