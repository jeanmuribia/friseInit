import './App.css';
import { useState } from 'react';
import { DndContext, KeyboardSensor, PointerSensor, TouchSensor, closestCorners, useSensor, useSensors } from '@dnd-kit/core';
import { Column } from './components/Column/Column';
import { arrayMove, sortableKeyboardCoordinates } from '@dnd-kit/sortable';
import Input from './components/Input/Input';

export default function App() {
    const [cards, setCards] = useState([
      { id: 1, color: '#5cdb95', title: 'Carte 1' },
      { id: 2, color: '#f56991', title: 'Carte 2' },
      { id: 3, color: '#f39c12', title: 'Carte 3' },
      { id: 4, color: '#00b8d4', title: 'Carte 4' },
    ])

    const getTaskPos = id => cards.findIndex(card => card.id ===id)

    const handleDragEnd = event => {
      const {active, over} = event

      if (active.id === over.id) return

      setCards(cards => {

        const orgininalPos = getTaskPos(active.id)
        const newPos = getTaskPos(over.id)

        return arrayMove(cards, orgininalPos, newPos)

      })
    }

    const sensors = useSensors(
      useSensor(PointerSensor),
      useSensor(KeyboardSensor, {
        coordinateGetter: sortableKeyboardCoordinates
      }),
      useSensor(TouchSensor),
    )

  
    const addCard = title => {
      setCards(cards => [...cards, {id: cards.length + 1}])
    }

    const deleteCard = (cardId) => {
      setCards((prevCards) => prevCards.filter((card) => card.id !== cardId));
    };
    
    return (
      <div className="App">
        <h1> Frise d'initiative</h1>
        <DndContext
          sensors={sensors}
          onDragEnd={handleDragEnd}
          collisionDetection={closestCorners}
        >
          <Input onSubmit={addCard} />
          <Column cards={cards} onDelete={deleteCard} />
        </DndContext>
      </div>
    );
  }