import UserListTable from "../../components/UserListTable/UserListTable"
import Navbar from "../../components/Navbar/Navbar"
import { AiOutlinePlus, AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

const Home = ({userData,setUserData}) => {



    return(
        <>
        <Navbar />
        <div className="pt-12 md:pt-28 px-4 md:px-[4rem] lg:px-[10rem] xl:px-[20rem]">
            <div className="flex justify-between items-center">
                <h1 className="font-bold text-lg md:text-2xl">
                    Users
                </h1>
                <Link to="/createuser" >
                <button className="bg-[#00b8c5] text-[white] text-xs md:text-base px-4 py-2 rounded-[5px] shadow-xl flex  items-center gap-3">
                    <AiOutlinePlus /> Create User
                </button>
                </Link>
            </div>
            <UserListTable initialData={userData} setUserData={setUserData}/>
        </div>
        
        </>
    )
}


export default Home