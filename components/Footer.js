import React from "react";

const Footer = () => {
  return (
    <footer className="relative">
      <section className="max-w-[1240px] mt-20 mb-10 mx-auto  gap-2 font-body top-7 md:p-10">
        <div className="grid footer justify-between gap-[88px] md:grid-cols-2 md:gap-6 ">
          <div className="col-span-1">
            <div className="flex items-center justify-start gap-1">
              <img src="logo.png" alt="logo" className="w-[40px] h-[40px]" />
              <h4 className="">Kittos</h4>
            </div>
            <p className="text-lg text-[#ADB9C7]">
              The world’s first and largest digital marketplace for crypto
              collectibles and non-fungible tokens (NFTs). Buy, sell, and
              discover exclusive digital items.
            </p>
          </div>
          <div>
            <h3 className="title">Resources</h3>
            <p className="desc">Help Center</p>
            <p className="desc">Platform Status</p>
            <p className="desc">Partners</p>
            <p className="desc">Gas-Free Marketplace</p>
            <p className="desc">Blog</p>
          </div>
          <div>
            <h3 className="title">Company</h3>
            <p className="desc">Our Team</p>
            <p className="desc">About Us</p>
            <p className="desc">Partners</p>
            <p className="desc">Contact Us</p>
            <p className="desc">Career</p>
          </div>
          <div>
            <h3 className="title">Contact</h3>
            <p className="desc">
              2715 Ash Dr. San Jose, <br /> South Dakota 83475
            </p>
          </div>
        </div>
        <div>
          <h3>{new Date().getFullYear()} All Right Reserved</h3>
          <p>
            Designed and Developed By{" "}
            <span className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">
              {" "}
              Aakrut Dabhi{" "}
            </span>
          </p>
        </div>
      </section>

      <div className="bg-[#1242ef] absolute left-[-380px] top-[222.18px] h-[352px] w-[652px] blur-[350px] rounded-full"></div>
    </footer>
  );
};

export default Footer;
