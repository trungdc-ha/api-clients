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
        const result = await axios.post('https://my-json-server.typicode.com/trungdc-ha/api-clients/students', student)
        console.log(result)
    } catch (error){
        console.log(error)
    }
}
