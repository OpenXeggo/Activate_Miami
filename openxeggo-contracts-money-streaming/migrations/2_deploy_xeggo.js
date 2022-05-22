
const Xeggo = artifacts.require("./Xeggo.sol");

module.exports = async (deployer, network, accounts) => {
  await deployer.deploy(Xeggo);

};
