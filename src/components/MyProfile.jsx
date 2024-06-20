import React from "react";
import Button from "./Button";

const MyProfile = () => {
  return (
    <div className="bg-zinc-900 rounded-lg w-full overflow-auto p-6 right">
      <div className="flex justify-between items-center mb-6 w-full px-1">
        <div className="logo text-3xl font-bold">ContactKeeper</div>
      </div>
      <div className="h-[75vh] w-full flex justify-center items-center">
        <div className="h-[50%] w-[80%] m-auto flex gap-2 items-end justify-center">
          <div className="left h-fit w-[50%] flex items-center justify-center flex-col gap-3  ">
            <div className="w-[70%] rounded-lg overflow-hidden">
            <img className=" h-full w-full object-cover" src="https://imgs.search.brave.com/8e6QukitGDYl8tmQQnBNVFHUheB31mnXT_OeI49PdME/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA0Lzk4LzcyLzQz/LzM2MF9GXzQ5ODcy/NDMyM19Gb25BeThM/WVlmRDFCVUMwYmNL/NTZhb1l3dUxISjJH/ZS5qcGc" alt="" />
            </div>
            <Button style='fill' text='upload image' />
          </div>
          <div className="right  h-fit w-[30%] flex items-center">
            <div className="flex flex-col gap-6">
                <div className="leading-none">
                    <h1 className="leading-[1.4vw] font-medium text-2xl">Name :</h1>
                    <h3 className="leading-[1.4vw] font-normal text-base">Pratham meena</h3>
                </div>
                <div className="leading-none">
                    <h1 className="leading-[1.4vw] font-medium text-2xl">Email :</h1>
                    <h3 className="leading-[1.4vw] font-normal text-base">Pratham meena</h3>
                </div>
                <div className="leading-none">
                    <h1 className="leading-[1.4vw] font-medium text-2xl">Phone number :</h1>
                    <h3 className="leading-[1.4vw] font-normal text-base">Pratham meena</h3>
                </div>
                <div className="leading-none">
                    <h1 className="leading-[1.4vw] font-medium text-2xl">Address :</h1>
                    <h3 className="leading-[1.4vw] font-normal text-base">Pratham meena</h3>
                </div>
                <Button style='border' text='Edit profile' />

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
