import { ethers } from "ethers";
import { useEffect, useState } from "react";
import axios from "axios";
import Web3Modal from "web3modal";

import NFTCard from "../components/NFTCard";


import { nftAddress, nftTransferAddress } from "../../../Contracts/congif";

import NFT from "../../../Contracts/artifacts/contracts/NFT.sol/NFT.json";
import NFTTransfer from "../../../Contracts/artifacts/contracts/NFTTransfer.sol/NFTTransfer.json";

export default function MyAssets() {
  const [nfts, setNFTs] = useState([]);
  const [loadingState, setLoadingState] = useState("not-loaded");

  useEffect(() => {
    //load nfts when the webpage loads
    loadNFTs();
  }, []);

  /**
   * Load transferred Nft
   * @returns {Promise<void>}
   */
  async function loadNFTs() {
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = await new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();

    const marketContract = new ethers.Contract(
      nftTransferAddress,
      NFTTransfer.abi,
      signer
    );
    const tokenContract = new ethers.Contract(nftAddress, NFT.abi, provider);
    //fetching the transferred certificates from the market contracts
    const data = await marketContract.fetchCertificatesTransferred();

    const items = await Promise.all(
      data.map(async (i) => {
        //getting the ipfs url of each certificate item
        const tokenURI = await tokenContract.tokenURI(i.tokenId);
        //fetching the ipfs url, which will return a meta json
        const meta = await axios.get(tokenURI);

        let item = {
          tokenId: i.tokenId.toNumber(),
          seller: i.seller,
          owner: i.owner,
          image: meta.data.image,
        };
        return item;
      })
    );
    setNFTs(items);
    setLoadingState("loaded");
  }

  if (loadingState === "loaded" && !nfts.length)
    return (
      <h1 className="py-10 px-20 text-3xl text-white mt-[60px]">No Certificate Transferred Yet</h1>
    );

  return (
    <div className="flex justify-center">
      <div className="p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
          {nfts.map((nft, i) => {
            return (
              <NFTCard
                key={i}
                nftImage={nft.image}
                nftName={nft.name}
                nftDesciption={nft.description}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
