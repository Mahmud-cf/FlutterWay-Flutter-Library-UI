import React from 'react'
import { template } from '../AllData'
import commentIcon from '../assets/comment.png'
import downloadIcon from '../assets/download.png'

function Templates() {
  return (
    <div>
        <div className="template-title flex justify-between items-center mb-5">
            <h2 className='text-2xl font-normal dark:text-white' >Templates</h2>
            <p className='text-lite text-sm cursor-pointer dark:hover:text-white hover:underline hover:text-black ' >See all</p>
        </div>
        <div className="template-wrapper grid grid-cols-2 sm:grid-cols-3 gap-4 ">
          {template.map((tempItem) => (
            <div key={tempItem.id} >
              <img className='cursor-pointer' src={tempItem.img} alt="" />
              <div className='flex justify-between py-2' >
                  <h6 className='font-medium cursor-pointer xl:text-base lg:text-sm text-xs dark:text-white' >{tempItem.title}</h6>
                  <div className='flex items-center' >
                    <img className='w-4 h-4 lg:w-5 lg:h-5 ml-3' src={commentIcon} alt="" />
                    <span className=' xl:text-base lg:text-sm text-xs dark:text-white' >{tempItem.comment}</span>
                    <img className='w-4 h-4 lg:w-5 lg:h-5 ml-3' src={downloadIcon} alt="" />
                    <span className=' xl:text-base lg:text-sm text-xs dark:text-white' >{tempItem.download}</span>
                  </div>
              </div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Templates