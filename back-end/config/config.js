module.exports = {
	PORT: process.env.PORT || 5000,
	PGUSER: process.env.PGUSER,
	PGHOST: process.env.PGHOST,
	PGDATABASE: process.env.PGDATABASE,
	PGPASSWORD: process.env.PGPASSWORD,
	PGPORT: process.env.PGPORT,
	JWT_SECRET: process.env.JWT_SECRET || "shh",
	NODE_ENV: process.env.NODE_ENV || "development",
};
