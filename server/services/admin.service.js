const { contractAddr } = require("../contractInfo");
const Coz = require("../models/Coz");
const User = require("../models/User");
require("dotenv").config;

// 유저리스트 가져오기
const getUserList = async () => {
  try {
    const result = await Coz.findAll({ raw: true });
    let testList = [];
    for (let i = 0; i < result.length; i++) {
      const testAddr = await User.findOne({
        raw: true,
        where: { address: result[i].klip_address },
      });
      testList.push(testAddr.test_address);
      result[i].test_address = testAddr.test_address;
    }
    for (let i = 0; i < testList.length; i++) {
      const count = await new caver.kct.kip17(contractAddr).balanceOf(
        testList[i]
      );
      result[i].count = count;
    }
    return result;
  } catch (e) {
    throw Error(e);
  }
};

// 뱃지 발급
const createBadge = async (address, tokenURI) => {
  try {
    // 토큰아이디 조회
    const tokenId =
      Number(await new caver.kct.kip17(contractAddr).totalSupply()) + 1;
    // 뱃지NFT 발급
    const conResult = await badgeContract.send(
      { from: process.env.SERVERADDRESS, gas: 1000000 },
      "mintWithTokenURI",
      address,
      tokenId,
      tokenURI
    );
    return conResult.status === true ? true : false;
  } catch (e) {
    throw Error(e);
  }
};

// 유저의 뱃지리스트 반환
const getUserBadgeList = async (address) => {
  try {
    const CaverExtKAS = require("caver-js-ext-kas");
    const caverExtKAS = new CaverExtKAS(
      1001,
      process.env.KASACCESS,
      process.env.KASSECRETKEY
    );
    const result = await caverExtKAS.kas.tokenHistory.getNFTListByOwner(
      contractAddr,
      address
    );
    let tokenUriList = [];
    tokenUriList = result.items.map((el) => {
      return el.tokenUri;
    });
    return tokenUriList;
  } catch (e) {
    throw Error(e);
  }
};

module.exports = {
  getUserList,
  createBadge,
  getUserBadgeList,
};
