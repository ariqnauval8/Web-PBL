import { useEffect, useState } from "react"
import { baseUrl } from "../config/constat"
import axios from "axios"

const CRUDaxios = () => {
    const initialInput = {title: "", year: 0, categoryId: null, id: null}
    const[data, setData] = useState([])
    const[categories, setCategories] = useState([])
    const[input, setInput] = useState({initialInput})


    const fetchData = () =>{
        axios.get(`${baseUrl}/api/movie`).then((response)=>{
                    setData(response.data.data)
                })
        axios.get(`${baseUrl}/api/category`).then((response)=>{
        let result = response.data.data
        setCategories(result)
                if (result.length > 0){
                    setInput({...input, categoryId:result[0].id})
                }
            })
        }

    const fetchDataMovie = () =>{
         
    }

    const fetchDataCategory = () =>{
         
    }

    useEffect(()=>{
       fetchData()
    },[])

    const handleSubmit = async (event)=>{
    event.preventDefault()
    try{
      if (input.id){
        await axios.put(`${baseUrl}/api/movie/${input.id}`, {title: input.title, year: Number(input.year), categoryId: Number(input.categoryId)})
      }else{
        await axios.post(`${baseUrl}/api/movie`, {title: input.title, year: Number(input.year), categoryId: Number(input.categoryId)})
      }
      fetchDataMovie()
      fetchDataCategory()
      setInput({...input, title: ""})
    }catch(err){
      alert(err)
    }
  }

  const handleChange = (event)=>{
    let {name, value} = event.target
    setInput({...input, [name]: value})
  }

  const handleDelete = async (id)=>{
    try{
      await axios.delete(`${baseUrl}/api/movie/${id}`)
      fetchData()
    }catch(err){
      alert(err)
    }
    setInput({initialInput})
  }

  const handleEdit = async (id)=>{
    try{
      let response = await axios.get(`${baseUrl}/api/movie/${id}`)
      let {title, categoryId, year} = response.data.data
      setInput({id, title, categoryId, year})
    }catch(err){
      alert(err)
    }
  }


    return(
        <>
        <h1 className="text-header">CRUD AXIOS</h1>

            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title</label>
                <input type="text" id="title" name="title" onChange={handleChange} value={input.title} placeholder="Input Movie Title Here.." />

                <label htmlFor="year">Year</label>
                <input type="number" id="year" name="year"  onChange={handleChange} value={input.year} min={1945} max={2025} placeholder="Input Movie Realese Year.." />

                <label htmlFor="categoryId">Category</label>
                <select id="categoryId" name="categoryId" onChange={handleChange}>
                    {categories.map((category,index) => {
                        return(
                        <option key={index} selected={category.id === input.id} value={category.id}>{category.title}</option>
                        )
                    })}
                </select>
            
                <input type="submit" value="Submit" />
            </form>


            <table>
                <thead>
                <tr>
                    <th>Nomor</th>
                    <th>Title</th>
                    <th>Year</th>
                    <th>Category</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                    {data.map((item,index)=>{
                        return(
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{item.title}</td>
                            <td>{item.year}</td>
                            <td>{item.categoryId}</td>
                            <td>
                                <button className="button button-edit mr-1" onClick={() => {handleEdit(item.id)}
                                }>Edit</button>
                                <button className="button button-delete" onClick={()=>{
                                    if (confirm("Are you sure want delete this movie!") == true) {
                                    handleDelete(item.id)
                                    }
                                }}>Delete</button>
                            </td>
                        </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}

export default CRUDaxios