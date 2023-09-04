import './DetailsCard.scss'
import myself from './../../assets/myself.jpg'
import {RiStarSFill} from 'react-icons/ri'
import { Link } from 'react-router-dom'

interface DetailsProps{
    name: String,
    price: String,
    coren?: String,
    location: String
}

const DetailsCard = ({name, price, coren,location} : DetailsProps) => {
  return (
    <>
        <div className='detailsCard'>
            <div className='detailsCardContent'>
                <img src={myself} alt='foto do profissional'/>
                <div className='detailsCardContentInfo'>
                    <span id='one'>{name}</span>
                    <div className='splitted'>
                        <span id='two'> R$ {price}</span>
                        <span id='three'> Plantão</span>
                    </div>
                    <span id='four'>{coren? `Coren: ${coren} | ${location}`: location}</span>
                    <div className='stars'>
                        <span id='five'>
                            <RiStarSFill/>
                            <RiStarSFill />
                            <RiStarSFill />
                            <RiStarSFill />
                            <RiStarSFill />
                        <span>(8)</span>
                        </span>
                    </div>

                </div>
            </div>
            <Link to= '/profile'> <button>Ver perfil</button></Link>   
        </div>
    </>
  )
}

export default DetailsCard