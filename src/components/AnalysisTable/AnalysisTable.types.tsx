

export type MapperObject = {
    name: string,
    mappedItem: string,
    mappedSubItem: string,
    isRequired: boolean,
    type : string[],
    options: null,
    isGroupable: boolean
}


export type DataframeType = {
    id: string,
    dose: number,
    time: number,
    conc: number,
    amt: number,
    route: string
    }[]


export type DataObject = {
    metadata : {name:string, type: string}[],
    mapped: string[],
    unMappedHeaders: number,
    totalRows: number
    firstRow: number
    dataframe: DataframeType
}








