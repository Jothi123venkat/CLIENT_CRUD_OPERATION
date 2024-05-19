import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsFillPencilFill } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
const Userpage = () => {
  const [user, setUser] = useState([ ]);


  useEffect(() => {
     getapi();

  }, [])
  

  const getapi =()=>{
      axios.get("http://localhost:5000/").then((result) => {
          console.log(result.data);
          setUser(result.data)
      }).catch((err) => {
         console.log(err);
      });
  }


   const navi = useNavigate();

  const createuser = () => {
    navi("/create");
  };

  // const handleupdate =()=>{
  //   navi(`/update`)
  // }

  // /deleteuser/:id

 const handleDelete =(id)=>{
   axios.delete(`http://localhost:5000/deleteuser/${id}`).then((result) => {
        console.log(result.data);
        window.location.reload();
   }).catch((err) => {
       console.log(err);
   });
 }

  return (
    <div className=" d-flex   vh-100  bg-primary justify-content-center  align-items-center ">
      <div className="   w-auto  h-auto bg-white  rounded  p-3 ">
        <div className=" d-flex  justify-content-end mb-3  ">
          <button
            style={{ background: "green", color: "white" }}
            onClick={createuser}
          >
            Add User
          </button>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>age</th>
              <th>update</th>
              <th>delete</th>
            </tr>
          </thead>
          <tbody>
            {user &&
              user.map((a, index) => (
                <>
                  <tr>
                    <td>{a.name}</td>
                    <td>{a.email}</td>
                    <td>{a.age}</td>
                    <td className="Updata">
                      {" "}
                    <Link to={`/update/${a._id}`}>  <BsFillPencilFill /></Link>
                    </td>
                    <td>
                      {" "}
                      <MdDelete onClick={()=>handleDelete(a._id)} />
                      
                    </td>
                  </tr>
                </>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Userpage;
