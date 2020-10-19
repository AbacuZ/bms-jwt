const jsonwebtoken = require("jsonwebtoken")

module.exports = (accessToken, secretKey) => {
	let result = {}
	try {
		jsonwebtoken.verify(accessToken, secretKey, (err, decoded) => {
		if (err) {
			result = {
			isVerifyToken: false,
			message: err.message,
			data: null,
			};
		} else {
			result = {
			isVerifyToken: true,
			message: "Token is valid",
			data: decoded,
			};
		}
		});
		return result
	} catch (error) {
		throw error
	}
};
