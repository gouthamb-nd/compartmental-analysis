import { useQuery } from '@tanstack/react-query'
import axios from "axios"



type checkerObject ={
    name: string,
    mappedItem: string
    mappedSubItem: string,
    isRequired: boolean,
    type: string[],
    options: null,
    isGroupable: boolean
}

const fetchData = async ()=>{
    return await axios.get("http://localhost:4000/data")
}
const fetchChecker = async ()=>{
    return await axios.get("http://localhost:4000/checker")
}




export const useGetData = ()=>{
    return useQuery({queryKey: ["analysis-data"], queryFn: fetchData,
                select: (data)=>(data.data.dataframe)
})
}

export const  useGetChecker = ()=>{
    return useQuery({queryKey: ["checker"], queryFn: fetchChecker ,
                    select: (data)=>(data.data.filter((item: checkerObject)=>item.mappedItem !==""))
})


}

