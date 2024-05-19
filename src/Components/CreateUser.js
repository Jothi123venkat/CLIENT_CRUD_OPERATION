import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const CreateUser = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm(); // Destructure register and handleSubmit
  const[data,setData]=useState();

  const onSubmit = (data) => {
    console.log(data); 
    axios.post("http://localhost:5000/createUser",data).then((result) => {
        console.log(result);
    }).catch((err) => {
        console.log(err);
    });
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
        <div className="w-50 h-auto bg-white rounded p-3">
          <h1 className="mb-3">Add user</h1>
          <div>
            <label htmlFor="name">Name</label>
            <br />
            <input
              type="text"
              id="name"
              name="name"
              style={{ width: "100%", padding: "15px" }}
              {...register("name")} 
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <br />
            <input
              type="email"
              id="email"
              name="email"
              style={{ width: "100%", padding: "15px" }}
              {...register("email",{required:true, pattern: /^\S+@\S+\.\S+$/})}
            
            />
          
          </div>
          <div>
            <label htmlFor="age">Age</label>
            <br />
            <input
              type="number"
              id="age"
              name="age"
              style={{ width: "100%", padding: "15px" }}
              {...register("age")} // Register the input
            />
          </div>

          <div className="d-flex justify-content-around">
            <button
              style={{
                background: "green",
                color: "white",
                padding: "10px",
                marginTop: "30px",
              }}
              onClick={() => navigate('/')}
            >
              prev
            </button>

            <button
              style={{
                background: "green",
                color: "white",
                padding: "10px",
                marginTop: "30px",
              }}
              type="submit"
            >
              submit
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default CreateUser;
