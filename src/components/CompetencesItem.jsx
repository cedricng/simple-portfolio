import React from 'react';
import {Avatar} from '@mui/material';


function CompetencesItem({title, imgUrl}) {
  return (
    <span className='font-bold'><img width="56" alt={title} src={imgUrl} />{title}</span>
  )
}

export default CompetencesItem