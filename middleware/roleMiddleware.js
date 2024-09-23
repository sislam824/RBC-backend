const roleBasedAccess = (req, res, next) => {
  const { school_id } = req.user;
  if (school_id !== req.body.school_id) {
    return res
      .status(403)
      .json({ message: "Unauthorized access to other schools data" });
  }
  next();
};

module.exports = roleBasedAccess;
