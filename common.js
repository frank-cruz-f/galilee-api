//Common file shared through the app, contains services paths, common codes and messages.

const common = {
	codes : {
		SUCCESS: 0,
		ERROR: 999
	},
	messages: {
		CATEGORY_ID_MISSING: "CategoryId is missing",
		POST_ERROR: "Error in post",
		GET_ERROR: "Error in get",
		DELETE_ERROR: "Error in delete",
		SUCCESS: "Success"
	}
}

module.exports = common;