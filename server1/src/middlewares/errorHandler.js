export const errorHandler = (err, req, res, next) => {
  console.error("error");
  res
    .status(err.status || 500)
    .json({ message: err.message || "server error" });
};
