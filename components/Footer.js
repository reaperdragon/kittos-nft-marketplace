import React from "react";


const Footer = () => {
  return (
    <footer>
      <section className="max-w-[1240px] my-20 mx-auto  gap-2 font-body top-7 grid grid-rows-2">
        <div>
          <div>
            <div>
              <img src="logo.png" alt="logo" />
              <h4>Kittos</h4>
            </div>
            <h5>
              The world’s first and largest digital marketplace for crypto
              collectibles and non-fungible tokens (NFTs). Buy, sell, and
              discover exclusive digital items.
            </h5>
          </div>
          <div>
            <h3>Resources</h3>
            <p>Help Center</p>
            <p>Platform Status</p>
            <p>Partners</p>
            <p>Gas-Free Marketplace</p>
            <p>Blog</p>
          </div>
          <div>
            <h3>Company</h3>
            <p>Our Team</p>
            <p>About Us</p>
            <p>Partners</p>
            <p>Contact Us</p>
            <p>Career</p>
          </div>
          <div>
            <h3>Contact</h3>
            <p>
              2715 Ash Dr. San Jose, <br /> South Dakota 83475
            </p>
          </div>
        </div>
        <div>
          <h3>{new Date().getFullYear()} All Right Reserved</h3>
          <h4>Designed and Developed By Aakrut Dabhi</h4>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
