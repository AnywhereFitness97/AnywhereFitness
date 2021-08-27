const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const server = express();
server.use(express.json());
server.use(helmet());
server.use(cors());

const authRouter = require("./auth/auth-router");
const userRouter = require("./user/user-router");
const searchRouter = require("./search/search-router");
const classRouter = require("./class/class-router");
const clientListRouter = require("./clientList/clientList-router");

server.use("/api/v1/class", classRouter);
server.use("/api/v1/search", searchRouter);
server.use("/api/v1/auth", authRouter);
server.use("/api/v1/user", userRouter);
server.use("/api/v1/clientlist", clientListRouter);

// ERROR HANDLING MIDDLEWARE
server.use("*", (req, res) => {
	res.status(500).json({
		message: "Something Went wrong in the Server",
	});
});
server.use((err, req, res) => {
	res.status(err.status || 500).json({
		message: err.message,
		stack: err.stack,
	});
});

module.exports = server;
