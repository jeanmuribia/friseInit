import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import './Cards.css';

const Cards = ({ id, title, color }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });
  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
    backgroundColor: color
  };

  return (
    <div ref={setNodeRef} {...attributes} {...listeners} style={style} className='card'>
      {title}
    </div>
  );
};

export default Cards;
