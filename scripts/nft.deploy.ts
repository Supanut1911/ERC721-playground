import { ethers } from "hardhat";
import { setAddress } from "../utils/addressUtils";

async function main() {
  const contractName = "Nft";
  const owner = "";
  const nft = await ethers.deployContract(contractName, [owner]);
  const Nft = await nft.waitForDeployment();
  setAddress(contractName, await Nft.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
