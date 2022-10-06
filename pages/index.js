import Head from "next/head";
import Image from "next/image";
import data from "../constants/mock-nft.json";
import mockartist from "../constants/mock-artist.json";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Footer, Header } from "../components";

export default function Home() {
  const [isWalletConnected, setIsWalletConnected] = useState(false);

  const [addr, setAddr] = useState("");

  const router = useRouter();

  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("Please Install MetaMask");
        return;
      }
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      setIsWalletConnected(true);
      localStorage.setItem("walletAddress", accounts[0]);
      router.push("/dashboard");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const addr = localStorage.getItem("walletAddress");
    setAddr(addr);
  }, []);

  return (
    <div className="">
      <Head>
        <title>Kittos </title>
        <link rel="shortcut icon" href="logo.png" />
      </Head>

      <div className="bg-[#1242ef] absolute left-[-250px] top-[-210px] h-[352px] w-[652px] blur-[350px] rounded-full "></div>

      {isWalletConnected ||  addr ? <Header /> : null}

      <div className="relative overflow-hidden">
        {/* HeroSection */}
        <section className="max-w-[1240px] my-20 mx-auto grid grid-cols-2  gap-2 font-body h-[540px] overflow-hidden top-7 md:gap-12 medium md:px-5 sm:grid-cols-1 sm:h-full relative ">
          <div className="flex flex-col items-start justify-center h-full sm:items-center">
            <h1 className="w-full text-4xl sm:text-center">
              Discover New Era of <br /> Crypto Currencies
            </h1>
            <p className="text-[#ADB9C7] sm:text-center">
              Kittos is the primier marketplace for NFT, which are digital items
              you can truly own. Digital items have existed for a long time, but
              never like this.
            </p>
            {addr ? (
              <button
                type="button"
                className="bg-[#1E50FF] outline-none border-none py-3 px-5 rounded-xl font-body cursor-pointer transition duration-250 ease-in-out hover:scale-125 hover:drop-shadow-xl hover:shadow-sky-600 w-auto focus:scale-90"
                onClick={connectWallet}
              >
                Create an NFT
              </button>
            ) : (
              <button
                type="button"
                className="bg-[#1E50FF] outline-none border-none py-3 px-5 rounded-xl font-body cursor-pointer  duration-250 ease-in-out hover:transform-x-1 hover:drop-shadow-xl hover:shadow-sky-600 w-full mt-8 transition transform hover:-translate-y-3 motion-reduce:transition-none motion-reduce:hover:transform-none "
                onClick={connectWallet}
              >
                Connect Wallet
              </button>
            )}
          </div>
          <div className="w-full flex items-center justify-center">
            <div className="w-[400px] h-[536px] bg-[#272D37]/60 rounded-2xl flex flex-col p-6 sm:h-max">
              <Image
                src="/images/mock.png"
                alt="mock"
                height={352}
                width={352}
                layout="intrinsic"
              ></Image>
              <div className="">
                <h1>Hamlet</h1>
                <div className="h-[56px] flex justify-between">
                  <div className="flex flex-row gap-2">
                    <img
                      src="images/mockcreator.jpg"
                      alt="creator-image"
                      className="h-[56px] w-[56px] rounded-xl"
                    />
                    <div>
                      <p className="my-1 text-base text-[#8F9CA9]">Creator </p>
                      <h4 className="my-0">0x000...0000</h4>
                    </div>
                  </div>
                  <div>
                    <p className="my-1 text-[#8F9CA9]">Current Price</p>
                    <h4 className="my-0 ">4.99 ETH</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-[1240px] my-20 mx-auto  gap-2 font-body top-7 ">
          <h1 className="text-center w-full">Create and sell your NFTs</h1>

          <div className="grid grid-cols-3 gap-5 sm:grid-cols-1 sm:p-12 md:grid-cols-1 md:mx-10">
            {data.map((item) => (
              <div
                key={item.id}
                className="w-full bg-[#272D37] flex flex-col justify-center items-center p-3 rounded-xl"
              >
                <div className="w-[80px] h-[80px] flex  justify-center items-center ">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full"
                  />
                </div>
                <h4 className="font-bold text-[24px] md:text-[14px]">
                  {item.title}
                </h4>
                <p className="text-center text-[#ADB9C7] text-[14px]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-[1240px] my-20 mx-auto  gap-2 font-body top-7 ">
          <h2 className="sm:text-center md:mx-10">Featured Artist </h2>
          <div className="grid grid-cols-4 gap-3 sm:gap-y-8 md:grid-cols-2 sm:grid-cols-1 sm:p-12 md:mx-10">
            {mockartist.map((data) => (
              <div
                key={data.id}
                className="w-full bg-[#272D37] flex flex-col justify-center items-center p-3 rounded-xl"
              >
                <div className="w-full relative">
                  <img
                    src={data.bgImage}
                    alt={data.name}
                    layout="responsive"
                    className="w-full rounded-2xl h-[225px]"
                  />
                  <img
                    src={data.image}
                    alt={data.name}
                    layout="intrinsic"
                    className="absolute -bottom-[40px] left-0 right-0 mx-auto h-[104px] w-[104px] bg-[#272D37] rounded-full"
                  />
                </div>
                <div className="w-full text-center mt-8 font-bold">
                  <h3>{data.name}</h3>
                  <p>Price: {data.price}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Community */}
        <section className="max-w-[1240px] bg- my-20 mx-auto bg-[#272D37] gap-2 font-body top-7 text-center p-10 rounded-xl sm:mx-10 md:m-10 border border-solid border-sky-600">
          <div>
            <h1 className="text-4xl sm:text-2xl">Create Your Own NFT!</h1>
            <p className="text-[#ADB9C7] px-[120px] sm:p-2 ms:p-1">
              We have a large scale group to support each other in this game,
              Join us to get the news as soon as possible and follow our latest
              announcements!
            </p>
            <button className="bg-[#1E50FF] outline-none border-none py-3 px-5 rounded-xl font-body cursor-pointer transition duration-250 ease-in-out hover:scale-125 hover:drop-shadow-xl hover:shadow-sky-600 w-auto  ">
              Join Community Now
            </button>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
