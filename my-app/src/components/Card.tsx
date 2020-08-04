import React from 'react'
import { useDrag, useDrop } from 'react-dnd'
import { ItemTypesNew } from './ItemTypesNew'



export interface CardProps {
    id: string
    text: string,
    callbackDROP: (id: string) => void,
    userAnswer: boolean
  
}

interface Item {
    type: string
    id: string
    originalIndex: string
}
let dragid = "";
export const Card: React.FC<CardProps> = ({ id, text, userAnswer, callbackDROP}) => {
    const originalIndex = 0;
    const [{ isDragging }, drag] = useDrag({
        item: { type: ItemTypesNew.CARD, id, userAnswer },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
        end: (_dropResult, monitor) => {
            const didDrop = monitor.didDrop()
            if (didDrop) {
                if (!userAnswer) {
                    callbackDROP(id);
                    dragid = id;
                
                }
            }
           
        },
    })

    const [, drop] = useDrop({
        accept: ItemTypesNew.CARD,
        canDrop: () => false,
        hover({ id: draggedId }: Item) {
            if (draggedId !== id) {
            }
        },
    })
    
    //const opacity = isDragging ? 0 : 1
    console.log(dragid + " ID " + id);
    if (dragid === id) {
        return ( 
            <div ref={(node) => drag(drop(node))} >
            </div>
        )
   
    }
    else {
        return (

            <button ref={(node) => drag(drop(node))} value={text} >
                <span dangerouslySetInnerHTML={{ __html: text }} />
            </button>
        )
    }
    
}
