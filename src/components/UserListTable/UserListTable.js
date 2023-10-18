import {  AiFillDelete, AiTwotoneEdit } from "react-icons/ai";
import { Link } from "react-router-dom";


const UserListTable = ({initialData, setUserData}) => {
    const handleDelete = (i) => {
        const userConfirm = window.confirm("Are you sure you want to delete this element?")
        if(userConfirm){
            const newArray = initialData.filter((itm, index)=> index !== i)
            
            setUserData(newArray)
        }

    }

    return(
        <div className="] my-12 ">
            <table className="border border-[#dedede] w-full text-[10px] md:text-base">
                <tr>
                    <td className="font-bold border border-[#dedede] md:border-none text-[grey] pl-2 md:pl-8 py-3">NAME</td>
                    <td className="font-bold border border-[#dedede] md:border-none text-[grey] pl-2 md:pl-8 py-3">EMAIL</td>
                    <td className="font-bold  border border-[#dedede] md:border-none text-[grey] pl-2 md:pl-8 py-3">ROLE</td>
                    <td className="font-bold  border border-[#dedede]  max-w-[40px] md:max-w-none md:border-none text-[grey] pl-2 md:pl-8 py-3">ACTIONS</td>
                </tr>
                {initialData?.map((itm, i) =>(
                    <tr className="border border-[#dedede]">
                        <td className="font-semibold  border border-[#dedede] md:border-none pl-2 md:pl-8 py-4   max-w-[50px] md:max-w-none">{itm.name}</td>
                        <td className="font-semibold border border-[#dedede] md:border-none pl-2 pr-2 md:pl-8 py-4  max-w-[90px] md:max-w-none overflow-scroll md:overflow-hidden">{itm.email}</td>
                        <td className="font-semibold border border-[#dedede] md:border-none pl-2 md:pl-8 py-4">{itm.role}</td>
                        <td className="py-4 pl-2  md:pl-8 flex gap-2 md:gap-4 items-center ">
                            <Link to={`/updateuser/${i}`}>< AiTwotoneEdit className="text-[grey] text-base md:text-2xl cursor-pointer"/></Link>
                            <AiFillDelete className="text-[grey] text-base md:text-2xl cursor-pointer" onClick={()=>handleDelete(i)}/>
                        </td>
                    </tr>
                ))}
                {initialData.length === 0 && 
                <tr>
                    <td colSpan={4} className="font-bold text-[grey] pl-8 py-12 text-center border border-[#dedede]">No users found</td>
                </tr>
                
                }
            </table>
        </div>
    )
}


export default UserListTable