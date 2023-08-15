const { User, Product, Category, Images } = require("../models/index")
const { comparePassword, hashPassword } = require("../helpers/bcrypt");
const { signToken } = require("../helpers/jwt");

class userController {

    static async adminRegister(request, response, next) {
        try {

            const { username, email, password, phoneNumber, address } = request.body
            console.log(username, email, password, phoneNumber, address, "masukkk ke admin register");

            const created = await User.create({ username, email, password: hashPassword(password), phoneNumber, address, role: "admin" })
            response.status(201).json({
                message: {
                    id: created.id,
                    email: created.email,
                    role: created.role
                }
            })

        }
        catch (err) {
            next(err)
        }
    }

    static async adminlogin(request, response, next) {
        try {
            const { email, password } = request.body
            console.log("iseng", email, password);

            const user = await User.findOne({ where: { email } })

            if (!user) { throw { name: "InvalidUser" } }

            const isValidPassword = comparePassword(password, user.password)
            if (!isValidPassword) {
                throw { name: "InvalidPassword" }
            }
            console.log(user);


            const token = signToken({
                id: user.id,
                email: user.email,
                role: user.role
            })

            response.status(200).json({
                access_token: token, username: user.username, role: user.role
            })
        }
        catch (err) {
            console.log(err);
            next(err)
        }
    }

    //------ USER ------ //
    static async userRegister(request, response, next) {
        try {

            const { username, email, password, phoneNumber, address } = request.body
            // console.log(email, password);

            const created = await User.create({ username, email, password: hashPassword(password), phoneNumber, address, role: "customer" })
            response.status(201).json({
                message: {
                    id: created.id,
                    email: created.email
                }
            })

        }
        catch (err) {
            next(err)
        }
    }

    static async userlogin(request, response, next) {
        try {
            const { email, password } = request.body
            console.log(email, password);

            const user = await User.findOne({ where: { email } })

            if (!user) { throw { name: "InvalidUser" } }


            const isValidPassword = comparePassword(password, user.password)
            if (!isValidPassword) {
                throw { name: "InvalidPassword" }
            }
            console.log(user);


            const token = signToken({
                id: user.id,
                email: user.email,
                role: user.role
            })

            response.status(200).json({
                access_token: token, username: user.username
            })
        }
        catch (err) {
            next(err)
        }
    }
}
module.exports = userController