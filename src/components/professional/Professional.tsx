import React from 'react'
import './Professional.scss'
import {AiOutlineArrowRight} from 'react-icons/ai'

const Professional = ({img, role}: any) => {

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
          <button className='professionalBtn'>Ver Profissionais <AiOutlineArrowRight size={'22px'}/> </button>
        </div>
      </div>
    </>
  )
}

export default Professional