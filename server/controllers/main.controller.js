exports.main_get = async (req, res, next) => {
  try {
    res.status(200).send("Hello World!!🌎")
  } catch (e) {
    return res.status(400).json({ message: e.message });
  }
};

