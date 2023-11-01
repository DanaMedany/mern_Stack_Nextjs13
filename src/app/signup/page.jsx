"use client";

import Link from "next/link";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignupPage = () => {
  const router = useRouter();
  const [userSignUp, setUserSignUp] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSignUp = async () => {
    try {
      const response = await axios.post("/api/users/signup", userSignUp);
      if (response.data.status === 409) {
        toast.error(response.data.error, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: 0.1,
        });
      } else if (response.data.status === 400) {
        toast.error(response.data.error, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: 0.1,
        });
      } else {
        toast.success(response.data.message, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: 0.2,
        });
        router.push("/login");
      }
    } catch (error) {
      console.log("Error while calling API" + error);
    }
  };

  return (
    <section className=" max-w-[1280px] max-h-[700px] mx-auto ">
      <ToastContainer />
      <div className="w-full bg-primary-blue h-full flex-center md:py-[50px] py-[30px] ">
        <div className="w-[350px] h-[500px] rounded-[10px] bg-secondary-gray login_shadow relative">
          <div className="absolute -top-[10%] -left-[20%] w-[160px] ">
            <Image src="./circle.svg" alt="circle" width={150} height={150} />
          </div>
          <div className="absolute -bottom-[10%] -right-[20%] w-[160px]">
            <Image src="./circle.svg" alt="circle" width={150} height={150} />
          </div>
          <div className="absolute w-[150px] h-[150px] top-0 right-0">
            <Image
              src="./chatgpt robot with speech bubble.png"
              alt="chatgpt robot with speech bubble"
              width={150}
              height={150}
            />
          </div>
          <div className="pt-[120px] flex flex-col pl-[32px]">
            <h1 className="text-white font-bold opacity-[0.70] text-[60px]">
              SIGNUP
            </h1>
            <div className="text-white w-[270px] ">
              <input
                type="text"
                placeholder="USERNAME"
                className="w-full bg-[#4D4D63] rounded-[7px] p-2"
                value={userSignUp.username}
                onChange={(e) =>
                  setUserSignUp({ ...userSignUp, username: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="EMAIL"
                className="my-4 w-full bg-[#4D4D63] rounded-[7px] p-2"
                value={userSignUp.email}
                onChange={(e) =>
                  setUserSignUp({ ...userSignUp, email: e.target.value })
                }
              />
              <input
                type="password"
                placeholder="PASSWORD"
                className="w-full bg-[#4D4D63] rounded-[7px] p-2"
                value={userSignUp.password}
                onChange={(e) =>
                  setUserSignUp({ ...userSignUp, password: e.target.value })
                }
              />
            </div>
            <button
              type="submit"
              className="text-white bg-[#13294C] rounded-[7px] font-bold text-[20px] w-[270px] mt-8 p-2"
              onClick={handleSignUp}
            >
              SUBMIT
            </button>
          </div>
          <div className="mt-5">
            <Link
              href="/login"
              className="font-normal text-white opacity-[0.6] text-[15px] p-10"
            >
              LOGIN
            </Link>
            <Link
              href="/signup"
              className="font-normal text-white opacity-[0.6] text-[15px] pl-7"
            >
              FORGOT PASSWORD
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignupPage;
