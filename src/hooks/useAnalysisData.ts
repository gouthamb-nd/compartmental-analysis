import { useQuery } from '@tanstack/react-query'
import { client } from '../utils/axios-utils'


const tableDataKey = ()=>["table-data"]
const mappingDataKey = ()=>["table-data"]


export const useGetData = ()=>{
    return useQuery({queryKey: tableDataKey(), queryFn: ()=>client.get('/dataset'),
})
}

export const  useGetChecker = ()=>{
    return useQuery({queryKey: mappingDataKey(), queryFn: ()=>client.get('/mappingData'),
})
}

