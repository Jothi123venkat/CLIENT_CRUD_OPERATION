import axios from "axios";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

const UpdateUser = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { handleSubmit, register, setValue } = useForm();

  useEffect(() => {
    // this is id get
    const getApi = async () => {
      try {
        const result = await axios.get(`http://localhost:5000/getuser/${id}`);
        console.log(result.data,"update");
        setValue("name", result.data.name);
        setValue("email", result.data.email);
        setValue("age", result.data.age);
      } catch (err) {
        console.log(err);
      }
    };
    getApi();
  }, [id, setValue]);

  const updateApi = async (data) => {
    try {
      await axios.put(`http://localhost:5000/updateuser/${id}`, data);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  const onSubmit = (data) => {
    console.log(data);
    updateApi(data);
  };

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 h-auto bg-white rounded p-3">
        <h1 className="mb-3">Update user</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="name">Name</label>
            <br />
            <input
              type="text"
              name="name"
              style={{ width: "100%", padding: "15px" }}
              {...register("name")}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <br />
            <input
              type="text"
              name="email"
              style={{ width: "100%", padding: "15px" }}
              {...register("email")}
            />
          </div>
          <div>
            <label htmlFor="age">Age</label>
            <br />
            <input
              type="number"
              name="age"
              style={{ width: "100%", padding: "15px" }}
              {...register("age")}
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
              onClick={() => navigate("/")}
              type="button"
            >
              Prev
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
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateUser;
