const checkName = (req, res, next) => {
  if (req.body.name) {
    // console.log("name is ok");
    return next();
  } else {
    res.status(400).json({ error: "Name is required" });
  }
};
const checkBoolean = (req, res, next) => {
  if (typeof req.body.is_favorite === "boolean") {
    next();
  } else {
    res.status(400).json({ error: "is_favorite must be a boolean value" });
  }
};

module.exports = { checkBoolean, checkName };
