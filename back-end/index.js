require("dotenv").config();

const server = require("./api/server");

const { PORT, NODE_ENV } = require("./config/config");

if (NODE_ENV === "development") {
	const cors = require("cors");
	server.use(cors());
}
server.listen(PORT, () => {
	console.log(` listening on PORT ${PORT}`);
});
