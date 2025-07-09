"use server"

import { redirect } from "next/navigation"

export const searchAction=async (searchText:string)=>{
    if(typeof searchText !== "string" || !searchText) {
        redirect("/")
    }
    redirect(`articles?search=${searchText}`)
}