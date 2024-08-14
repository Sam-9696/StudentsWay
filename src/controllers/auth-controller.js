const { signUp, logIn } = require('../services/auth-service');


const create = async (req, res) => {
    try {
        const response = await signUp(req.body);
        return res.status(201).json({
            success: true,
            message: 'Successfully created a new user',
            data: response,
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(404).json({
            message: "Something wrong in auth controller",
            data: {},
            success: false,
            err: error.error
        });
    }
}

const signIn = async (req, res) => {
    try {
        const response = await logIn(req.body);
        return res.status(200).json({
            success: true,
            data: response,
            err: {},
            message: 'Successfully signed in'
        });
    } catch (error) {
        console.log(error);
        return res.status(404).json({
            message: "Something wrong in auth controller",
            data: {},
            success: false,
            err: error.error
        });
    }
}

// const isAuthenticated = async (req, res) => {
//     try {
//         const token = req.headers['x-access-token'];
//         // const isVerified = userService.verifyToken(token); //{email: '', id: '', iat: '', exp; ''}   
//         const response  = await userService.isAuthenticated(token);
//         return res.status(200).json({
//             success: true,
//             err: {},
//             data: response,
//             message: 'user is authenticated and token is valid'
//         });
//     } catch (error) {
//         console.log(error);
//         return res.status(500).json({
//             message: 'Something went wrong',
//             data: {},
//             success: false,
//             err: error
//         });
//     }
// }

// const isAdmin = async(req, res) => {
//     try {
//         const response = await userService.isAdmin(req.body.id);
//         return res.status(200).json({
//             data: response,
//             err: {},
//             success: true,
//             message: 'Successfully fetched whether user is admin or not'
//         })
//     } catch (error) {
//         console.log(error);
//         return res.status(500).json({
//             message: 'Something went wrong',
//             data: {},
//             success: false,
//             err: error
//         });
//     }
// }

module.exports = {
    create,
    signIn,
    // isAuthenticated,
    // isAdmin
}