import React from 'react'
import SpinnerFetching from '../../../../partials/spinners/SpinnerFetching';
import useQueryData from '../../../../custom-hook/useQueryData';
import ModalWrapper from '../../../../partials/modals/ModalWrapper';
import ModalProjects from './ModalProjects';
import { StoreContext } from '../../../../../store/StoreContext';
import { setIsShow } from '../../../../../store/StoreAction';
import { devBaseImgUrl } from '../../../../helpers/functions-general';

const Project = () => {

    const {store, dispatch} = React.useContext(StoreContext)
    const [info, setInfo] = React.useState(null)
    const {
        isLoading,
        isFetching,
        error,
        data: works,
      } = useQueryData(
        "/v1/works", // endpoint
        "get", // method
        "works", // key
      );

      const handleShowMore = (item) => {
        dispatch(setIsShow(true))
        setInfo(item)
      }
  return (
    <>
    <section>
            <div className='container'>
                <h3 className='text-center mb-5 text-content'>My Projects</h3>
                <div className='relative'>
                    {isLoading ? (
                        <SpinnerFetching />
                    ) : (
                        <div className='grid grid-cols-3 gap-5'>
                            {works?.data.map((item, key) => (
                                <div
                                    className='project_card'key={key}>
                                    <img
                                        className='w-full h-[300px] object-cover'
                                        src={`${devBaseImgUrl} /${item.works_image}`} alt=''
                                    />
                                    <h4 className='text-center pt-5 pb-2 mb-0'>Title</h4>
                                    <ul className='flex justify-between opacity-55 mb-10'>
                                        <li>
                                            <small>{item.works_title}</small>
                                        </li>
                                        <li>
                                            <small>{item.works_publish_date}</small>
                                        </li>
                                    </ul>
                                    <p className='line-clamp-2'>
                                    {item.works_description}
                                    </p>
                                    <button className='btn btn--accent w-full justify-center py-3' onClick={()=>handleShowMore(item)}>View</button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
        {store.isShow && <ModalProjects position="center" info={info}/>}
        </>
  )
}

export default Project