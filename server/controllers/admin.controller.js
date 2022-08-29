const AdminService = require("../services/admin.service");

// 유저리스트 가져오기
exports.admin_get = async (req, res, next) => {
  try {
    const userInfo = await AdminService.getUserList();
    res.status(200).json({ message: "Get userInfo", data: userInfo });
  } catch (e) {
    return res.status(400).json({ message: e.message });
  }
};

// 유저 뱃지 리스트 가져오기
exports.admin_badge_get = async (req, res, next) => {
  try {
    const address = req.params.test_address;
    const userBadgeList = await AdminService.getUserBadgeList(address);
    res.status(200).json({ message: "Get userBadge", data: userBadgeList });
  } catch (e) {
    return res.status(400).json({ message: e.message });
  }
};

// 유저뱃지 발급
exports.admin_badge_post = async (req, res, next) => {
  try {
    const address = req.params.test_address;
    const tokenURI = req.body.tokenURI;
    const result = await AdminService.createBadge(address, tokenURI);
    result === true
      ? res.status(201).json({ message: "Badge Created!", data: result })
      : res.status(400).json({ message: "Fail" });
  } catch (e) {
    return res.status(400).json({ message: e.message });
  }
};
