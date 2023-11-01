"use client";

import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

const Profile = () => {
  const [data, setData] = useState("");

  const fetchData = async () => {
    try {
      const response = await axios.get("/api/users/tokenData");
      setData(response.data.userExist);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <section className="flex items-center min-h-screen my-6 mx-auto py-4 text-white max-w-[600px] relative">
      <div className="absolute right-10 top-20">
        <Image src="./images_avatar.png" alt="avatar" width={160} height={160} />
      </div>
      <div className="bg-secondary-gray p-6 ">
        <h1 className="text-[40px] mb-6">Profile</h1>
        <h3>USERNAME: {data.username}</h3>
        <h3 className="my-6">EMAIL: {data.email}</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          convallis porttitor cursus. Donec vel nisl blandit, sodales felis ut,
          fringilla quam. Fusce mollis pulvinar eros, vitae volutpat nulla
          ultrices in. Aliquam rhoncus auctor pulvinar. Vivamus quis tristique
          dolor. Quisque semper faucibus velit sed convallis. Praesent semper ex
          at lacinia auctor
        </p>
      </div>
    </section>
  );
};

export default Profile;
