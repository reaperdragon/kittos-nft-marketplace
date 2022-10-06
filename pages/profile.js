import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Footer, Header, MyNFTContainer } from "../components";
import ContractABI from "../artifacts/contracts/NFTMarketplace.sol/NFTMarketplace.json";
import { ethers } from "ethers";
import axios from "axios";
import { truncateEthAddress } from "../utils/truncAddress";


const mainURL = `https://arweave.net/`;

const Profile = () => {
  const [nfts, setNts] = useState([]);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  useEffect(() => {
    getNfts();
  }, []);

  const getContract = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    const signer = provider.getSigner();

    let contract = new ethers.Contract(
      process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,
      ContractABI.abi,
      signer
    );
    return contract;
  };

  const getNfts = async () => {
    try {
      const contract = await getContract();

      const data = await contract.fetchMyNFTs();

      const items = await Promise.all(
        data?.map(async (i) => {
          const tokenURI = await contract.tokenURI(i.tokenId);

          const meta = await axios.get(mainURL + tokenURI);

          let price = ethers.utils.formatUnits(i.price.toString(), "ether");

          let item = {
            price,
            tokenId: i.tokenId.toNumber(),
            seller: i.seller,
            owner: i.owner,
            image: meta.data.image,
            name: meta.data.name,
            description: meta.data.description,
            tokenURI,
          };
          return item;
        })
      );
      setNts(items);
      setLoading(true);
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong", error);
    }
  };



  return (
    <div className="relative  ">
      <Head>
        <title> My Profile || Kittos </title>
        <link rel="shortcut icon" href="logo.png" />
      </Head>
      <Header />

      <div className="bg-[#1242ef] absolute left-[-250px] top-[-210px] h-[352px] w-[652px] blur-[350px] rounded-full font-body"></div>

      <div className="relative overflow-hidden">
        <section className="">
          <div className="max-w-[1400px] relative h-[280px] mx-auto my-0 bg-[#272D37]/60 rounded-2xl border-3 border-solid border-[#0039FF] sm:h-[150px] md:mx-2 ">
            <div className="flex items-center justify-center w-full h-full">
              <h1 className=" font-body font-semibold text-5xl md:text-2xl">
                My NFTs
              </h1>
            </div>

            <div className="absolute w-[160px] h-[160px] sm:w-[80px] sm:h-[80px] bg-white left-10 -bottom-[80px] rounded-[45px] sm:rounded-3xl profile flex  sm:-bottom-[40px] items-center justify-center">
              <img
                src="logo.png"
                alt="Logo"
                className="w-[80px] h-[80px] sm:h-[60px] sm:w-[60px]"
              />
            </div>
          </div>
        </section>
        <section className="max-w-[1200px] my-20 mx-auto grid grid-cols-3 md:grid-cols-2 gap-4 font-body  overflow-hidden top-7 md:gap-5 medium md:px-5 sm:grid-cols-1 sm:h-full relative justify-center items-center">
          {nfts?.map((nft, i) => (
            <MyNFTContainer key={nft.tokenId} nft={nft} />
          ))}
        </section>
        <Footer />
      </div>
    </div>
  );
};

export default Profile;
