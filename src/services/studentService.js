import axios from "axios";

export const findAll = async () => {
    try {
        const result= await axios.get('http://localhost:8080/students')
        return result.data
    } catch (error){
        console.log(error)
    }
}


export const save = async (student) => {
    try {
        await axios.post('http://localhost:8080/students', student)
    } catch (error){
        console.log(error)
    }
}
