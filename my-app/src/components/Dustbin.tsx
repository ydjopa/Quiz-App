import React from 'react'
import { useDrop } from 'react-dnd'
import { ItemTypesNew } from './ItemTypesNew';

type Props = {
    callbackDROP: (id: string) => void,
    userAnswer: string
}

let Answername = "";
let PreviousAnswer = "";
let AnswerDone = false;

export const AnsWerBox = () => {
    const [{ canDrop, isOver, dropResult }, drop] = useDrop({
        accept: ItemTypesNew.CARD,
        drop(_item, monitor) {
            Answername = monitor.getItem().id;
            AnswerDone = monitor.getItem().userAnswer;
            if (!AnswerDone) {
                PreviousAnswer = "";
            }

        },

        collect: (monitor) => ({
            isOver: monitor.isOver(),
            //canDrop: monitor.canDrop(),
            dropResult: monitor.getItem(),
            canDrop: AnswerDone ? true : false
            // You will receive hover() even for items for which canDrop() is false
        }),

        
        
    })

    const isActive = canDrop && isOver
    let backgroundColor = '#222'
    if (isActive) {
        backgroundColor = 'darkgreen'
    } else if (canDrop) {
        backgroundColor = 'darkkhaki'
    }

    if (dropResult != null && AnswerDone ) {

        if (PreviousAnswer !== "" && AnswerDone) {
            return (
                <div ref={drop} className="opacitycss">
                    <div className="sc-AxirZ eOexFn"><button value={PreviousAnswer} ><span>{PreviousAnswer}</span>
                    </button></div>
                </div>
            )
        }
        else {

            return (
                <div ref={drop} className="opacitycss">
                    <div className="sc-AxirZ eOexFn"><button value={dropResult.id} ><span>{dropResult.id}</span>
                    </button></div>
                </div>
            )
        }
    }
    else if (Answername !== "" && !AnswerDone) {
        PreviousAnswer = Answername;
        AnswerDone = true;
        return (
            <div ref={drop} className="opacitycss">
            <div  className="sc-AxirZ eOexFn"><button value={Answername} ><span>{Answername}</span>
                </button></div>
            </div>
        )
    }
    else {
        if (PreviousAnswer !== "" && AnswerDone) {
            return (
                <div ref={drop} className="opacitycss">
                    <div className="sc-AxirZ eOexFn"><button value={PreviousAnswer} ><span>{PreviousAnswer}</span>
                    </button></div>
                </div>
            )
        }
        else {

            return (
                <div ref={drop} className="opacitycss">
                    <div className="sc-AxirZ eOexFn"><button value='' ><span>Drag and drop your answer here</span>
                    </button></div>
                </div>
            )
        }
     
    }

}



