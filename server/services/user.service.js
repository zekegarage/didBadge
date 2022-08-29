const models = require("../models");

// 유저 로그인 및 회원가입
const createUser = async (address) => {
  try {
    const count = await models.user.count({ where: { address } });
    if (count > 0) return 1;

    // 테스트넷 계정 생성
    const { address: testAddress } = caver.klay.accounts.create();
    const result = await models.user.create({
      address,
      test_address: testAddress,
    });
    return result;
  } catch (e) {
    throw Error(e);
  }
};

const getBadge = async (address) => {
  try {
  } catch (e) {
    throw Error(e);
  }
};

module.exports = {
  createUser,
};
