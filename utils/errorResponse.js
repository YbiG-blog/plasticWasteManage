const responseTemplate = async (success, message, data, error) => {
    return {
        success,
        message,
        data: data === null ? {}: await (data),
        error: !error || Object.keys(error)?.length == 0 ? {} : await (error)
    }
}
const errorResponse = {
    serverError: "Some server error occured",
    unauthorisedAccess: "Unauthorized access!",
    alreadyRegistered: "Account Id already exists.",
    invalidToken: "Invalid token used!",
    wrongPassword: "Wrong password entered.",
    differentToken: "Don't try to create a different token!",
    tokenNotFound: "No token found in 'authorization' header",
    loginSuccess: "Logged in successfully. Save the token for access to your account.",
    registerSuccess: "Registered in successfully. Save the token for access to your account.",
    badGateway: "Unknown route discovered. Check for correct URL and method.",
    noDataFound: "No such data found",
    requestVarsNotFound: "Some of the request body parameters are not found in the request, check the correct postman documentation.",
    getDataSuccess: data => { return `${data[0].toUpperCase() + data.slice(1)} successfully retrieved!` },
    updateDataSuccess: data => { return `${data[0].toUpperCase() + data.slice(1)} successfully updated!` },
    saveDataSuccess: data => { return `${data[0].toUpperCase() + data.slice(1)} successfully saved into database!` },
    removeDataSuccess: data => { return `${data[0].toUpperCase() + data.slice(1)} successfully removed from database!` }
};

module.exports = { responseTemplate, errorResponse };