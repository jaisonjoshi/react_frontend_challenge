import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar"



import { AiOutlineArrowLeft } from "react-icons/ai";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateUser = ({userData, setUserData}) => {
    const navigate = useNavigate()

    const [info, setInfo] = useState({name:null, email:null,role:"User"})
    const handleChange = (e) => {
        setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(info.name == null || info.email == null ){
            alert("Please fill all the details")
        }
        else{
           
        setUserData([...userData, info])
        navigate("/")
        }
    }



    return (
        <>
            <Navbar />
            <div className="pt-8 md:pt-20 w-[90%] sm:w-[80%] md:w-[50%] lg:w-[40%] 2xl:w-[30%] mx-auto">
                <div className="font-bold md:text-2xl flex gap-4 items-center">
                    <Link to="/"><AiOutlineArrowLeft className="mt-1" /></Link> Create User
                </div>

                <div className="border border-[#dedede] text-xs md:text-base my-8 py-8 md:py-12 px-8">
                    <form className="flex flex-col gap-4 md:gap-8" onSubmit={handleSubmit}>
                        <div className="flex flex-col gap-2">
                            <label className="font-semibold">NAME</label>
                            <input type="text" id="name" className="border border-[#dedede] outline-none rounded px-4 py-2" onChange={handleChange}/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="font-semibold">EMAIL</label>
                            <input type="text" id="email" className="border border-[#dedede] outline-none rounded px-4 py-2" onChange={handleChange}/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="font-semibold">ROLE</label>
                            <select name="" id="role" className="outline-none bg-[white] border border-[#dedede] rounded px-4 py-2" onChange={handleChange}>
                                <option value="User" className="py-8">User</option>
                                <option value="Admin">Admin</option>
                            </select>
                        </div>
                        <div className="flex  flex-col gap-4 mt-8">


                            <button className="bg-[#00b8c5] text-[white] py-2 rounded text-sm md:text-lg" onClick={handleSubmit}>Create User</button>
                            <Link to="/" className="text-center">Cancel</Link>

                        </div>

                    </form>
                </div>
            </div>



        </>
    )
}


export default CreateUser