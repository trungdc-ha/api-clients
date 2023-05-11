import axios from "axios";

export const findAll = async () => {
    try {
        const result= await axios.get('https://my-json-server.typicode.com/trungdc-ha/api-clients/students')
        return result.data
    } catch (error){
        console.log(error)
    }
}


export const save = async (student) => {
    try {
        await axios.post('https://my-json-server.typicode.com/trungdc-ha/api-clients/students', student)
    } catch (error){
        console.log(error)
    }
}
