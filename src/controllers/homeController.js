const getHomePage = (req, res) => {
  // process data
  // call model
  res.send("Hello World vs Hùng Mạnh and NodeMon");
};
const getImages = (req, res) => {
  res.render("sample.ejs");
};
module.exports = { getHomePage, getImages };
