"use client";

import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginPage = () => {
  const router = useRouter();
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async () => {
    try {
      const response = await axios.post("/api/users/login", userLogin);
      // console.log(response.data);
      if (response.data.status === 400) {
        toast.error(response.data.error, {
          position: "top-right",
          autoClose: false,
          hideProgressBar: true,
          closeOnClick: false,
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
          progress: 0.1,
        });
        router.push("/");
      }
    } catch (error) {
      console.log(error);
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
              LOGIN
            </h1>
            <div className="text-white w-[270px] ">
              <input
                type="text"
                placeholder="EMAIL"
                className="mb-4 w-full bg-[#4D4D63] rounded-[7px] p-2"
                value={userLogin.email}
                onChange={(e) =>
                  setUserLogin({ ...userLogin, email: e.target.value })
                }
              />
              <input
                type="password"
                placeholder="PASSWORD"
                className="w-full bg-[#4D4D63] rounded-[7px] p-2"
                value={userLogin.password}
                onChange={(e) =>
                  setUserLogin({ ...userLogin, password: e.target.value })
                }
              />
            </div>
            <button
              type="submit"
              className="text-white bg-[#13294C] rounded-[7px] font-bold text-[20px] w-[270px] mt-10 p-2"
              onClick={handleLogin}
            >
              SUBMIT
            </button>
          </div>
          <div className="mt-5">
            <Link
              href="/signup"
              className="font-normal text-white opacity-[0.6] text-[15px] p-8"
            >
              REGISTER
            </Link>
            <Link
              href="/signup"
              className="font-normal text-white opacity-[0.6] text-[15px] pl-6"
            >
              FORGOT PASSWORD
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
