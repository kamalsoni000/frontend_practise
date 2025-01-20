"use client"
import Image from "next/image";
import { useState } from "react";

const generatUniqueid = () => {
  return Date.now().toString(36) + Math.random().toString(36).substring(2, 9);
}

export default function Home() {

  const [List, setList] = useState<{
    id: string,
    name: string
  }[]>([]);
  const [addName, setAddName] = useState("");

  const addTodo = () => {
    if (addName.length > 0) {
      setList((prev) => [...prev, {
        id: generatUniqueid(),
        name: addName.trim()
      }]);
      setAddName("");
    }
  }
  const deleteTodo=(id:string)=>{
    setList((prev)=>prev.filter(i=>i?.id!==id));
  }

  return (
    <div className=" items-center justify-items-center">
      <div>
        <h1>Todo List</h1>
        <div>


          <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
          <div className="relative">
            <input
              onChange={(e) => {
                console.log(e.target.value);
                setAddName(e.target.value);
              }}
              value={addName}
              type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="add todo" required />
            <button
              onClick={() => addTodo()}
              className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add</button>
          </div>

        </div>
        <ul>
          {
            List && List.map((i) => {
              return (<li key={i?.id}>
                <span>{i?.name}</span>
                <button
                onClick={()=>deleteTodo(i?.id)}
                type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Delete</button>
              </li>)
            })
          }

        </ul>
      </div>
    </div>
  );
}
