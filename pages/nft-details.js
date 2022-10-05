import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Footer, Header } from "../components";
import { truncateEthAddress } from "../utils/truncAddress";

const mainURL = `https://arweave.net/`;

const NFTDetails = () => {
  const [isLoading, setIsLoading] = useState(true);

  const router = useRouter();

  const [nft, setNft] = useState({
    price: "",
    tokenId: "",
    seller: "",
    owner: "",
    image: "",
    description: "",
  });

  useEffect(() => {
    if (!router.isReady) return;

    setNft(router?.query);

    setIsLoading(false);
  }, [router.isReady]);

  console.log(nft);
  return (
    <div>
      <Head>
        <title>{nft.name} || Kittos</title>
        <link rel="shortcut icon" href="logo.png" />
      </Head>

      <Header />
      <div className="bg-[#1242ef] absolute left-[-250px] top-[-210px] h-[352px] w-[652px] blur-[350px] rounded-full "></div>
      <div className="relative overflow-hidden">
        <section className="grid grid-cols-2 max-w-[1240px] mx-auto my-2 gap-4 font-body sm:grid-cols-1 p-5">
          <div className="w-full h-full border border-solid border-sky-500 rounded-xl">
            <img
              src={mainURL + nft.image}
              alt={nft.name}
              className="w-full h-full rounded-xl"
            />
          </div>
          <div className="">
            <h1>
              #{nft.tokenId} {nft.name}
            </h1>
            <p className="text-[#ADB9C7]"> description: {nft.description}</p>
            <div>
              <p>Price</p>
              <h2>{nft.price} ETH</h2>
            </div>
            <div>
              <p>Owner </p>
              <h2 className="my-0 ssm:text-sm text-transparent font-bold bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">
                {truncateEthAddress(nft.owner)}
              </h2>
            </div>
            <div>
              <p>Blockchain</p>
              <h2>Ethereum ⟠</h2>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
};

export default NFTDetails;
