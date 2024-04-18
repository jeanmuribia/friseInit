import Cards from "../Cards/Cards"
import "./Column.css"
import { SortableContext, horizontalListSortingStrategy } from "@dnd-kit/sortable"


export const Column = ({cards}) => {
    return (
        <div className='column'>
            <SortableContext items={cards} strategy={horizontalListSortingStrategy}> 
            {cards.map((card) => (
               <Cards id={card.id} title={card.title} key={card.id} color={card.color}/>
            ))}
            </SortableContext>
        </div>
    )
    }

  