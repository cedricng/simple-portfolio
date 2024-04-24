import React from 'react';
import Title from './Title';
import competences from '../data/competences';
import CompetencesItem from './CompetencesItem';
import { ImageList,ImageListItem,ImageListItemBar } from '@mui/material';

function Competences() {
  return (
    <>
    <div className="flex flex-col md:flex-row justify-center mt-20">
    <div className="w-full md:w-7/12">
       <Title>Competences</Title>
       </div>
       </div>
       <div className="flex flex-col md:flex-row justify-center mb-20">
    <div className="w-full md:w-7/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
       {competences.map(item => (
          <CompetencesItem
             title={item.title}
             imgUrl={item.imgUrl}
             
          />
       ))}
       {/*<ImageList sx={{ width: 500, height: 450 }}>*/}
      {/*competences.map((item) => (
        <ImageListItem key={item.imgUrl}>
          <img
            srcSet={`${item.imgUrl}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.imgUrl}?w=248&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            position="below"
          />
        </ImageListItem>
      ))*/}
    {/*</ImageList>*/}
    </div>
    </div>
 </>
  )
}

export default Competences