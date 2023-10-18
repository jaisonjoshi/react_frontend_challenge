import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar"



import { AiOutlineArrowLeft } from "react-icons/ai";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import initialData from "../../assets/data/userList";

const UpdateUser = ({userData, setUserData}) => {
    const location = useLocation()
    const navigate = useNavigate()
    const pathname = location.pathname
    const id = pathname.split("/")[2];
    const [info,setInfo] = useState({name:"", email:"",role:""})

    useEffect(()=>{
        setInfo(initialData[id])

    },[] )
    
    const handleChange = (e) => {
        setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));

    }

    const handleSubmit = (e) => {
        e.preventDefault()

        try{
            initialData[id] = info
        setUserData(initialData)
        navigate("/")


        }
        catch(err){
            console.log(err)
        }
        


    }


    return (
        <>
            <Navbar />
            <div className="pt-8 md:pt-20 w-[90%] sm:w-[80%] md:w-[50%] lg:w-[40%] 2xl:w-[30%] mx-auto">
                <div className="font-bold md:text-2xl flex gap-4 items-center">
                    <Link to="/"><AiOutlineArrowLeft className="mt-1" /></Link> Update User
                </div>

                <div className="border border-[#dedede] text-xs md:text-base my-8 py-8 md:py-12 px-8">
                    <form className="flex flex-col gap-4 md:gap-8" onSubmit={handleSubmit}>
                        <div className="flex flex-col gap-2">
                            <label className="font-semibold">NAME</label>
                            <input type="text" id="name" className="border border-[#dedede] outline-none rounded px-4 py-2" onChange={handleChange} placeholder={info.name}/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="font-semibold">EMAIL</label>
                            <input type="text" id="email" className="border border-[#dedede] outline-none rounded px-4 py-2" onChange={handleChange} placeholder={info.email}/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="font-semibold">ROLE</label>
                            <select name="" id="role"  className="outline-none bg-[white] border border-[#dedede] rounded px-4 py-2" onChange={handleChange}>
                            <option value="User"  selected={info.role === "User"}>User</option>
                                <option value="Admin" selected={info.role === "Admin"}>Admin</option>
                            </select>
                        </div>
                        <div className="flex  flex-col gap-4">


                            <Link to="/" className="text-center">Cancel</Link>
                            <button className="bg-[#00b8c5] text-[white] py-2 rounded text-sm md:text-lg" onClick={handleSubmit}>Update User</button>
                        </div>

                    </form>
                </div>
            </div>



        </>
    )
}


export default UpdateUser