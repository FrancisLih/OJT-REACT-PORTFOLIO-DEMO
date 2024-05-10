import React from 'react'
import { LiaArchiveSolid, LiaTimesSolid, LiaTrashAltSolid } from 'react-icons/lia'
import ModalWrapper from './ModalWrapper'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { queryData } from '../../helpers/queryData'
import { setIsActive, setMessage, setSuccess } from '../../../store/StoreAction'
import { StoreContext } from '../../../store/StoreContext'

const ModalConfirm = ({position, endpoint, queryKey, isArchiving, setIsSuccess}) => {

  const {dispatch} = React.useContext(StoreContext)
  const handleClose = () => dispatch(setIsActive(false))
  
  const queryClient = useQueryClient();


  const mutation = useMutation({
    mutationFn: (values) => queryData(endpoint, "put", values),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: [queryKey] });

      if (data.success) {
        dispatch(setIsActive(false));
        dispatch(setSuccess(true));
        dispatch(setMessage(`Record successfully ${isArchiving ? "Restored" : "Archived"}.`))
      } else {
        // setIsError(true)
        // setMessage(data.error)

      }
    
    },
  });

  const handleConfirm = async () => {
    mutation.mutate({
      isActive: isArchiving,
    });
  };

  return (
    <>
    <ModalWrapper position = {position}>
    <div className="modal-main max-w-[400px] w-full ">
      <div className="modal-header bg-warning text-white flex justify-between items-center p-3 rounded-t-md">
        <h4 className='mb-0  text-white'>Confirm</h4>
        <button onClick={handleClose}><LiaTimesSolid/></button>
      </div>


      <div className="modal-body p-4 rounded-b-md  bg-secondary">
        <div className='flex gap-2 items-center'>
        <LiaArchiveSolid className='text-4xl mx-auto text-warning mb-3'/>
        <div>
          <h2 className='mb-2'> {isArchiving ? "Restoring" : "Archiving"} Record</h2>
        <p className='mb-5'>Are you sure you want to {isArchiving === 1 ? "Restore" : "Archive"}  this record</p>
        </div>
        
        </div>
        <div className='flex gap-2 justify-end'>
          <button className='btn btn--warning btn-form w-1/4'onClick={handleConfirm}>Confirm</button>
        <button className='btn btn--cancel btn-form w-1/4' onClick={handleClose}>Cancel</button>
        </div>

      </div>
    </div>
    </ModalWrapper>

    </>
  )
}

export default ModalConfirm