import './Professional.scss'
import {AiOutlineArrowRight} from 'react-icons/ai'
import { Link } from 'react-router-dom'

interface ProfessionalProps{
  img: String,
  role: String
}

const Professional = ({img, role}: ProfessionalProps) => {
  return (
    <>
      <div className=
        {
          img==='nurse'? 'professionalDivNurse' :
          img==='caregiver'? 'professionalDivCare' :
          img==='doctor'? 'professionalDivDoctor' : ''
        }
      >
        <div className='professionalContent'>
          <span>{role}</span>
          <Link to='/details' style={{textDecoration: 'none'}}>
            <button className='professionalBtn'>Ver Profissionais <AiOutlineArrowRight size={'22px'}/> </button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Professional