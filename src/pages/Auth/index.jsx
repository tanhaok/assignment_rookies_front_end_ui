import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, Navigate } from "react-router-dom";
import { LogIn, Register } from "../../service/AccountService.js";

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [role, setRole] = useState();

  const onSubmit = (data) => {
    LogIn(data)
      .then((res) => {
        sessionStorage.clear();
        localStorage.setItem("token", res.data.accessToken);
        localStorage.setItem("accId", res.data.accId);
        localStorage.setItem("username", res.data.username);
        setRole(res.data.role);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="log-in">
      {role === "USER" && <Navigate to={"/"}></Navigate>}
      {role === "ADMIN" && <Navigate to={"/admin"}></Navigate>}
      <div className="label">LOG IN</div>
      <div className="form-log-in">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Username</label>
          <input
            {...register("username", {
              required: true,
              maxLength: 20,
              pattern: /^[A-Za-z]+$/i,
            })}
          />
          {errors?.firstName?.type === "required" && (
            <p>This field is required</p>
          )}
          {errors?.firstName?.type === "maxLength" && (
            <p>First name cannot exceed 20 characters</p>
          )}
          {errors?.firstName?.type === "pattern" && (
            <p>Alphabetical characters only</p>
          )}
          <label>Password</label>
          <input
            {...register("password", {
              required: true,
              maxLength: 20,
            })}
          />
          {errors?.lastName?.type === "required" && (
            <p>This field is required</p>
          )}
          {errors?.lastName?.type === "maxLength" && (
            <p>First name cannot exceed 20 characters</p>
          )}
          <input type="submit" value={"Log In"} />
          <small>
            <Link to={"/register"}>Create New Account</Link>
          </small>
        </form>
      </div>
    </div>
  );
};
// TODO: check is exist username in db
const SignUp = () => {
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");
  const [role, setRole] = useState();

  const onSubmit = (data) => {
    console.log(data);
    Register(data)
      .then((res) => {
        sessionStorage.clear();
        localStorage.setItem("token", res.data.accessToken);
        localStorage.setItem("accId", res.data.accId);
        localStorage.setItem("username", res.data.username);
        setRole(res.data.role);
      })
      .catch((error) => {
        setError("Can not register");
        console.log(error);
      });
  };
  return (
    <>
      {role === "USER" && <Navigate to={"/"}></Navigate>}
      {role === "ADMIN" && <Navigate to={"/admin"}></Navigate>}
      <div className="register">
        <div className="form">
          {error && <div className="text-danger">{error}</div>}
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="email"
              {...register("email", { required: true, maxLength: 30 })}
            />
            <input
              {...register("username", { required: true, maxLength: 20 })}
            />
            <input
              type="password"
              {...register("password", { required: true, maxLength: 20 })}
            />
            <input
              {...register("address", { required: true, maxLength: 20 })}
            />
            <input
              type="number"
              {...register("phone", {
                required: true,
              })}
            />
            <input type="submit" />
          </form>
        </div>
      </div>
    </>
  );
};

export { SignIn, SignUp };
