import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useRef, useState } from "react";
import { Header } from "../components";

const Create = () => {
  const [nftDetails, setNftDetails] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
  });

  const [file, setFile] = useState("");

  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const dataRef = useRef();

  function triggerOnChange() {
    dataRef.current.click();
  }

  async function handleFileChange(e) {
    const uploadedFile = e.target.files[0];
    if (!uploadedFile) return;
    setNftDetails({ ...nftDetails, image: uploadedFile });
  }

  return (
    <div className="font-body">
      <Head>
        <title>Create NFT || Kittos </title>
        <link rel="shortcut icon" href="logo.png" />
      </Head>

      <Header />

      <h1 className="text-center">Kittos Create NFT</h1>

      <section className="max-w-[1024px] my-20 mx-auto grid grid-cols-2  gap-10 font-body  overflow-hidden top-7 md:gap-10 medium md:px-5 sm:grid-cols-1 sm:h-full relative ">
        <div
          className="w-full bg-[#272D37]/60 rounded-3xl sm:h-[350px] border border-solid border-sky-700 cursor-pointer"
          onClick={triggerOnChange}
        >
          <input
            id="selectImage"
            style={{ display: "none" }}
            type="file"
            onChange={handleFileChange}
            ref={dataRef}
          />
          {nftDetails.image ? (
            <div className="w-full h-full flex justify-center items-center">
              <img
                src={window.URL.createObjectURL(nftDetails.image)}
                alt="image"
                ref={nftDetails.image}
                className="w-full h-full  sm:h-[350px] rounded-3xl p-2"
              />
            </div>
          ) : (
            <div className="h-full flex justify-center items-center">
              <h2 className="text-center">
                Please Select Here to See Your File Preview
              </h2>
            </div>
          )}
        </div>

        <div className="w-full flex flex-col font-body gap-5">
          <div className="flex flex-col">
            <label className="text-2xl my-1 font-semibold ">Name</label>
            <input
              placeholder="eg.Kittos ka"
              className="px-5 py-3 rounded-xl
               placeholder:text-slate-400 outline-none border-none  bg-[#272D37]/60 placeholder:font-body font-body"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-2xl my-1 font-semibold">Description</label>
            <textarea
              placeholder="eg.Kittos ka"
              className="px-5 py-3 rounded-lg placeholder:text-slate-400 bg-[#272D37]/60 border-none outline-none placeholder:font-body tx font-body"
              rows="10"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-2xl my-1 font-semibold">Price</label>
            <input
              type="number"
              placeholder="100"
              className="px-5 py-3 rounded-xl
               placeholder:text-slate-400 outline-none border-none  bg-[#272D37]/60 placeholder:font-body font-body"
            />
          </div>
          <button
            type="button"
            className="bg-[#1E50FF] outline-none border-none py-3 px-5 rounded-xl font-body cursor-pointer transition duration-250 ease-in-out  hover:drop-shadow-xl hover:shadow-sky-600 w-auto focus:scale-90"
          >
            Create
          </button>
        </div>
      </section>
      
    </div>
  );
};

export default Create;
