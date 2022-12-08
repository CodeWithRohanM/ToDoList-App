import React, { useState } from "react";
import LineThroughIcon from "/Users/rohanmote/Desktop/Thapa Projects/Mini Projects/To Do List App/todolist/src/Icons/xx.png";
import DeleteIcon from "/Users/rohanmote/Desktop/Thapa Projects/Mini Projects/To Do List App/todolist/src/Icons/delete.png"



export default function CardList(props) {

    const morningAfternoons = new Date().getHours() > 12 ? new Date().getHours() - 12 : new Date().getHours()

    const amPms = new Date().getHours() < 12 ? "AM" : "PM";

    const completeTimes = " : " + new Date().getMinutes() + " : " + new Date().getSeconds() + " ";


    const [hrLine, setHrLine] = useState(false);

    const [actionToPerform, setActionToPerform] = useState(LineThroughIcon);



    const lineThrough = () => {
        setHrLine(true);
        setActionToPerform(DeleteIcon);
    }



    return <>

        <div className="flex justify-between flex-row items-center">
            <div className="flex flex-row gap-x-4 items-center">

                <button type="button" className="p-2 text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center" onClick={lineThrough} onDoubleClick={() => {
                    props.deleteItem(props.id)
                }}><img src={actionToPerform} className="h-5 w-5"></img></button>
                <h1 style={{ textDecoration: hrLine ? "line-through" : "none" }}>{`${props.itemValue}`}</h1>
            </div>

            <h3 className="text-sm">{morningAfternoons + completeTimes + amPms}</h3>
        </div>
    </>
}