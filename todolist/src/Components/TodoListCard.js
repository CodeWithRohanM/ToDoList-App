import React, { useEffect, useState } from "react";
import CardList from "./CardList";
import Shark from "/Users/rohanmote/Desktop/Thapa Projects/Mini Projects/To Do List App/todolist/src/Icons/shark.png";


export default function TodoListCard() {


    const [item, setItem] = useState("");
    const [printItem, setPrintItem] = useState([]);

    const [currentDate, setCurrentDate] = useState(new Date());


    const morningAfternoon = new Date().getHours() > 12 ? new Date().getHours() - 12 : new Date().getHours()

    const amPm = new Date().getHours() < 12 ? "AM" : "PM";

    const completeTime = " : " + new Date().getMinutes() + " : " + new Date().getSeconds() + " ";



    setInterval(()=>{
            setCurrentDate(morningAfternoon+completeTime+amPm);
        },1000)




    const getItem = (event) => {
        setItem(event.target.value);
    }


    const displayItem = () => {
        setPrintItem((prevValue) => {
            return [...prevValue, item];
        });

        setItem("");


    }

    const deleteSelected = (id) => {
        setPrintItem((oldItems) => {
            return oldItems.filter((event, index) => {
                return id !== index;
            })
        })
    }



    return <>

        <div id="mainContainer" className="flex flex-col w-full h-screen bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900">


            <div className="flex w-full bg-gradient-to-r from-purple-200 via-purple-400 to-purple-800 p-6 justify-between">
                <div className="flex flex-row w-full justify-between items-center">
                    <div className="flex flex-row gap-5 items-center">
                        <img src={Shark} className="w-14 h-14"></img>
                        <h1 className="text-7xl font-extrabold " style={{ fontFamily: "headerFont" }}>Shark" List</h1>
                    </div>
                    <div className="relative flex w-1/5 flex-wrap">
                        <span className="bg-yellow-300 z-10 h-full leading-snug font-normal absolute text-slate-300 absolute bg-transparent rounded text-base w-8 pl-3 py-3">
                            <i className="fa fa-globe text-2xl"></i>
                        </span>
                        <input type="text" placeholder={`${currentDate}`} className="text-2xl px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-gradient-to-r from-rose-50 to-teal-50 bg-white rounded border-0 shadow outline-none focus:outline-none focus:ring w-full pl-10" />
                    </div>

                </div>

            </div>
            <div className="flex justify-center mt-20">
                <div id="actualCard" className="w-1/3 h-auto bg-gradient-to-r from-rose-100 to-teal-100 border-2 p-16 rounded-md">

                    <div id="CardContent" className="text-2xl">

                        <div className="flex items-center border-b border-teal-500 py-2">
                            <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Add Item.." aria-label="Full name" value={item} onChange={getItem} />
                            <button type="button" className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={displayItem}>Add</button>
                        </div>





                        <div id="CardLists" className="flex flex-col gap-y-5 mt-12">

                            {
                                printItem.map((event, index) => {
                                    return <>
                                        <CardList key={index} id={index} itemValue={event} deleteItem = {deleteSelected}/>
                                    </>
                                })
                            }

                        </div>

                        <div className="justify-center w-full flex mt-10">
                            <button type="button" className="p-2 text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Remove All</button>
                        </div>
                    </div>

                </div>
            </div>
            </div>
        </>
}