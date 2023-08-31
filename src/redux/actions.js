import { nanoid } from "@reduxjs/toolkit";

export const delAll=()=>({ type: 'delAll' });
export const deleteContact=(contactDel)=>({ type: 'deleteContact', payload: contactDel });
export const addContact=({name,number})=>({ type: 'addContact', payload: { name, number, id: nanoid() } });
export const chengeFilter=(value)=>({type:'chengeFilter',payload:value.toLowerCase().trim()})