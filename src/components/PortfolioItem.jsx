import React from 'react';
import ModalVideo from 'react-modal-video';
import {Button} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import { ReactDOM,useState } from 'react';
import Modal from 'react-modal';
import CloseIcon from '@mui/icons-material/Close';

const customStyles = {
   content: {
     top: '50%',
     left: '50%',
     right: 'auto',
     bottom: 'auto',
     marginRight: '-50%',
     transform: 'translate(-50%, -50%)',
   },
 };

function PortfolioItem({ title, imgUrl, videoUrl, stack, github, link }) {
   let subtitle;
   const [modalIsOpen, setIsOpen] = React.useState(false);
 
   function openModal() {
     setIsOpen(true);
   }
 
   function afterOpenModal() {
     // references are now sync'd and can be accessed.
     subtitle.style.color = '#f00';
   }
 
   function closeModal() {
     setIsOpen(false);
   }
 
   return (
      
      <>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <CloseIcon onClick={closeModal}>close</CloseIcon>
        <video className='vid'  width="800" autoplay="autoplay"  muted><source src={videoUrl} type="video/mp4" /></video>
        <script>
    document.getElementsByClassName('vid').play();
</script>
      </Modal>
      {/*<a 
         href={link}
         target="_blank"
         rel="noopener noreferrer"
         className="border-2 border-stone-900 dark:border-white rounded-md overflow-hidden"
   >*/}
         <div className="border-2 border-stone-900 dark:border-white rounded-md overflow-hidden">
         <img
            src={imgUrl}
            alt="portfolio" 
            className="w-full h-36 md:h-48 object-cover cursor-pointer"
         />
         
         <div className="w-full p-4">
         
            <h3 className="text-lg md:text-xl dark:text-white mb-2 md:mb-3 font-semibold ">{title}
            

</h3>            
<p className="my-2 ">

            {'  '}              
            {videoUrl ? <Button variant='contained' onClick={openModal}>Demo</Button>: ''}
            {'  '}   
            {github ? <Button variant='outlined' target='_blank' href={github}endIcon={<GitHubIcon />}>Github</Button>: ''}
            </p>
            <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm dark:text-white ">
            
               {stack.map(item => (
                  <span className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-white rounded-md">
                     {item}
                  </span>
                  
               ))}
            </p>
         </div>
         </div>
         
      {/*</a>*/}
      </>
   )
}

export default PortfolioItem;