import jwt from "jsonwebtoken";

const signToken = (user) => {
  return jwt.sign(
    {
      _id: user._id,
      name: user.name,
      username: user.username,
      isAdmin: user?.isAdmin,
      status: user.status,
    },
    process.env.JWT_SECRET_KEY,
    {
      expiresIn: "30d",
    }
  );
};

const isAuth = async (req, res, next) => {
  const { authorization } = req.headers;
  if (authorization) {
    const token = authorization.slice(7, authorization.length);
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decode) => {
      if (err) {
        res.status(401).send({ message: "Token yaroqsiz" });
      } else {
        req.user = decode;
        next();
      }
    });
  } else {
    res.status(401).send({ message: "Token yo'q" });
  }
};

const isAdmin = async (req, res, next) => {
  isAuth(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      res.status(401).send({ message: "User admin emas" });
    }
  });
};

export { signToken, isAuth, isAdmin };
Footer;
