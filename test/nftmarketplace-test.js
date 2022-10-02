const { ethers } = require("hardhat");

describe("NFTMarketplace App", async function () {
  it("Should create Marketplace", async function () {
    const contractFactory = await ethers.getContractFactory("NFTMarketplace");
    const contractDeploy = await contractFactory.deploy();

    await contractDeploy.deployed();

    let listingPrice = await  contractDeploy.getListingPrice();

    listingPrice = await listingPrice.toString();

    const auctionPrice = ethers.utils.parseUnits("1", "ether");

    await contractDeploy.createToken("mytoken1", auctionPrice, {
      value: listingPrice,
    });

    await contractDeploy.createToken("mytoken2", auctionPrice, {
      value: listingPrice,
    });

    const [_, creator,buyer] = await ethers.getSigners();

    await contractDeploy
      .connect(creator)
      .createMarketSale(1, { value: auctionPrice });

    await contractDeploy
      .connect(creator)
      .resellToken(1, auctionPrice, { value: auctionPrice });

    unsoldItems = await contractDeploy.fetchMarketItems();
    unsoldItems = await Promise.all(
      unsoldItems.map(async (i) => {
        const tokenUri = await contractDeploy.tokenURI(i.tokenId);
        let item = {
          price: i.price.toString(),
          tokenId: i.tokenId.toString(),
          seller: i.seller,
          owner: i.owner,
          tokenUri,
        };
        return item;
      })
    );
    console.log(`Unsold items: ${unsoldItems}`);
  });
});