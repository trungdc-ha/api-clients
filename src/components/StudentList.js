import {useEffect, useState} from "react";
import axios from "axios";
import * as studentService from "../services/studentService";

export function StudentList() {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        //cach 1 - promise
        // axios.get('http://localhost:8080/students')
        //     .then((res) => {
        //         console.log(res.data)
        //         setStudents(res.data)
        //     })
        //     .catch((error => {
        //         console.log(error)
        //     }))

        //cach 2 -
        // const fetchApi = async () => {
        //     try {
        //         const result= await axios.get('http://localhost:8080/students')
        //         setStudents(result.data)
        //         console.log("OK")
        //     } catch (error){
        //         console.log(error)
        //     }
        // }
        // fetchApi()

        //Cach 3 dùng service
        const fetchApi = async () => {
            const result = await studentService.findAll()
            setStudents(result)
        }
        fetchApi()

    }, [])

    return (
        <>
            <h1>Hello A11</h1>
            <table className="table">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>Languages</th>
                </tr>
                </thead>
                <tbody>
                {/*<tr>*/}
                {/*    <td>ID</td>*/}
                {/*    <td>Nguyen Van A</td>*/}
                {/*    <td>Male</td>*/}
                {/*    <td>C# Java</td>*/}
                {/*</tr>*/}
                {
                    students.map((student) => (
                        <tr key={student.id}>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.gender == 1 ? 'Male' : 'Female'}</td>
                            <td>
                                {
                                    student.languages.map((lang) => (
                                        <span key={lang}>{lang}</span>
                                    ))
                                }
                            </td>
                        </tr>
                    ))
                }

                </tbody>
            </table>
        </>
    )
}
