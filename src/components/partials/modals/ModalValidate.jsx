import React from 'react'
import ModalWrapper from './ModalWrapper'
import { LiaTimesSolid } from 'react-icons/lia'
import { BiErrorCircle } from 'react-icons/bi'

const ModalValidate = ({position}) => {
  return (
    <ModalWrapper position={position}>
      <div className="modal-main w-[400px]">
          <div className="modal-header bg-info text-white flex justify-between items-center p-3 rounded-t-md">
            <h4 className='mb-0 text-white'>Information</h4>
            <button><LiaTimesSolid/></button>
          </div>
          <div className="modal-body p-4 rounded-b-md text-center bg-secondary">
          <BiErrorCircle className='text-4xl mx-auto text-info mb-3'/>
          <h2 className='mb-2'>Validation</h2>
          <p className='mb-5'>Record already exist</p>
          <button className='btn btn--info btn-form w-full mx-auto'>Okay</button>
          </div>
      </div>
    </ModalWrapper>
  )
}

export default ModalValidate