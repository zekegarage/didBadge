const Badges = artifacts.require("Badges.sol");
const _name = "Badges";
const _symbol = "BNFT";
module.exports = function (deployer) {
  deployer.deploy(Badges, _name, _symbol);
};
