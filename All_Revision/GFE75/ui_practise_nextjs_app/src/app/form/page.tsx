"use client"
import Image from "next/image";
import { useState } from "react";

export default function Home() {
   const[form,setForm]=useState({
    name:"",
    email:"",
    message:""
   });

   const onChange=(e:any)=>{
    const pName=e.target.name;
    const pValue=e.target.value;
    setForm((prev)=>{
      return {
        ...prev,
        [pName]:pValue
      }
    })
   }

   const onSubmit=()=>{
    if(form.email.length===0|| form.name.length===0 || form.message.length===0){
      alert("filll all values");
      return;
    }
    console.log(form);
   }

  return (

    <form className="max-w-sm mx-auto" onSubmit={(e)=>{
      e.preventDefault();
      onSubmit();
    }}>
      <div className="mb-5">

        <label htmlFor="name">Name</label>
        <input id="name" value={form.name} onChange={(e)=>onChange(e)} name="name" type="text" placeholder="Enter Name" />
      </div>

      <div className="mb-5">
        <label htmlFor="email">Email</label>
        <input name="email" value={form.email} onChange={(e)=>onChange(e)} id="email" type="email" placeholder="Enter Email"/>
      </div>
      <div className="mb-5">
        <label htmlFor="message">Message</label>
        <textarea name="message" value={form.message} onChange={(e)=>onChange(e)} id="message"  placeholder="Enter Message"/>
      </div>
        <button type="submit">Submit</button>
    </form>
  );
}
