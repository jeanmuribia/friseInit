import React from 'react';
import { SortableContext, horizontalListSortingStrategy } from '@dnd-kit/sortable';
import Cards from '../Cards/Cards';
import './Column.css';

export const Column = ({ cards, onDelete }) => {
  return (
    <div className='column'>
      <SortableContext items={cards} strategy={horizontalListSortingStrategy}>
        {cards.map((card) => (
          <div key={card.id} className='card-container'>
            <Cards id={card.id} title={card.title} color={card.color} />
            <button className='delete-button' onClick={() => onDelete(card.id)}>X</button>
          </div>
        ))}
      </SortableContext>
    </div>
  );
};
