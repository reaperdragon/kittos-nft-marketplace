import Head from "next/head";
import React, { useEffect, useState } from "react";
import { Footer, Header } from "../components";
import ContractABI from "../artifacts/contracts/NFTMarketplace.sol/NFTMarketplace.json";
import { toast } from "react-toastify";
import axios from "axios";
import { ethers } from "ethers";
import { truncateEthAddress } from "../utils/truncAddress";

const mainURL = `https://arweave.net/`;

const Dashboard = () => {
  const [nfts, setNts] = useState([]);
  const [loading, setLoading] = useState(false);

  const getContract = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    let contract = new ethers.Contract(
      process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,
      ContractABI.abi,
      provider
    );
    return contract;
  };

  const getNfts = async () => {
    try {
      const contract = await getContract();

      const data = await contract.fetchMarketItems();

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
          };
          return item;
        })
      );
      setNts(items);
      setLoading(true);
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    }
  };

  useEffect(() => {
    getNfts();
  }, []);

  console.log(nfts);

  if (!loading && !nfts.length) return <h1>NO Nfts in Marketplace</h1>;

  return (
    <div className="relative overflow-hidden">
      {" "}
      <Head>
        <title>Dashboard || Kittos</title>
        <link rel="shortcut icon" href="logo.png" />
      </Head>
      <Header />
      <div className="bg-[#1242ef] absolute left-[-250px] top-[-210px] h-[352px] w-[652px] blur-[350px] rounded-full "></div>
      <div className="relative overflow-hidden">
        <h1 className="text-center">Hot NFTs</h1>
        <section className="max-w-[1200px] my-20 mx-auto grid grid-cols-3 md:grid-cols-2 gap-2 font-body  overflow-hidden top-7 md:gap-12 medium md:px-5 sm:grid-cols-1 sm:h-full relative justify-center items-center ">
          {nfts?.map((nft, i) => (
            <div key={i} className="w-full h-[536px] sm:h-full ssm:h-max">
              <div className="w-full h-full ssm:h-max bg-[#272D37]/60 rounded-2xl flex flex-col p-6 sm:h-max cursor-pointer">
                <div className="relative ">
                  <img
                    src={mainURL + nft?.image}
                    alt="mock"
                    className="w-full h-[352px] ssm:h-max rounded-xl"
                  />
                  <div className="hover:block hidden bg-black absolute top-0 left-0 bottom-0 right-0 ">

                  </div>
                </div>
                <div className="">
                  <h1>{nft.name}</h1>
                  <div className="h-[56px] flex justify-between">
                    <div className="flex flex-row gap-2">
                      <div>
                        <p className="my-1 text-base text-[#8F9CA9]">
                          Creator{" "}
                        </p>
                        <h4 className="my-0 ssm:text-sm text-transparent font-bold bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">
                          {truncateEthAddress(nft.seller)}
                        </h4>
                      </div>
                    </div>
                    <div>
                      <p className="my-1 text-[#8F9CA9]">Current Price</p>
                      <h4 className="my-0 ">{nft.price} ETH</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
