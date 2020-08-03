import React from 'react'
import { useDrag } from 'react-dnd'
import { ItemTypes } from './ItemTypes'

const style = {
    border: '1px dashed gray',
    padding: '0.5rem 1rem',
    marginBottom: '.5rem',
    backgroundColor: 'white',
    cursor: 'move',
}

type Props = {
    name: string
   // callbackDROP: (e: React.MouseEvent<HTMLButtonElement>) => void;
    callbackDROP: (id: string) => void,
    userAnswer: string
}

export const Button = ({ name, callbackDROP, userAnswer }) => {

   
    const [{ isDragging }, drag] = useDrag({
        item: { name, type: ItemTypes.Button },
        //end: (item, monitor) => {
        //    const dropResult = monitor.getDropResult()
        //    if (item && dropResult) {
        //        alert(`You Moved Answer ${item.name} into ${dropResult.name}!`)
                
        //    }
        //},
        end: (dropResult, monitor) => {
            const { id: droppedId, originalIndex } = monitor.getItem()
            const didDrop = monitor.didDrop()
            if (didDrop) {
                if (!userAnswer) {
                    callbackDROP(name);
                }
                else {
                    alert(`Already Answer`);
                }
                
                // alert(userAnswer);
              //  moveCard({ item.name });
                //moveCard(droppedId, originalIndex)
            }
        },

        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
       
    })
   
    const opacity = isDragging ? 0.4 : 1
    //return (
  
    //    <button ref={drag} value={name}>
    //        <span dangerouslySetInnerHTML={{ __html: name }} />
    //    </button>

    //)

    return (
        <button ref={drag} value={name} >
            <span dangerouslySetInnerHTML={{ __html: name }} />
        </button>
    )
}
