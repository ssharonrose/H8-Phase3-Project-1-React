const { User, Product, Category, Images, sequelize } = require("../models/index")
const { slug } = require("../helpers/slug")

class productController {

    static async addProduct(request, response, next) {
        const t = await sequelize.transaction();
        try {

            console.log("MASUK ADDDD <<<<<<<<<<<<<<<<<<<<<<<,");

            const { userId } = request.dataUser

            const { name, description, price, mainImg, categoryId } = request.body

            console.log(name, description, price, mainImg, categoryId, "<<<<<<<<<<<<<<");

            const created = await Product.create({ name, slug: slug(name), description, price, mainImg, categoryId, authorId: userId }, { transaction: t })

            console.log(created, "<<<<<<<<<<");

            const { imgUrl1, imgUrl2, imgUrl3 } = request.body
            if (!imgUrl1 || !imgUrl2 || !imgUrl3) throw { name: "ImgLessThan3" }

            const images = await Images.bulkCreate([
                { imgUrl: imgUrl1, productId: created.id },
                { imgUrl: imgUrl2, productId: created.id },
                { imgUrl: imgUrl3, productId: created.id },
            ], { transaction: t })

            console.log("SELESAI add");

            response.status(201).json({
                message: created,
            })
            await t.commit()
        }
        catch (err) {
            await t.rollback();
            // throw
            console.log("masuk error <<<<<<<<<");
            next(err)
        }
    }

    static async readAllProduct(request, response, next) {
        try {
            const read = await Product.findAll({
                include: [User, Category, Images],
                order: [
                    ['createdAt', 'ASC']
                ]
            })

            // console.log(read);

            response.status(200).json(read)
        }
        catch (err) {
            next(err)
        }

    }

    static async readDetailProduct(request, response, next) {

        try {

            console.log("masuk detail");

            const { id } = request.params
            console.log(request.params);
            const oneProduct = await Product.findOne({
                where: { id }, include: [Images, User, Category]
            })

            console.log(oneProduct, "<<<<<<<<<<<<<<");

            if (!oneProduct) {
                throw { name: "NotFound" }
            } else {
                response.status(200).json(oneProduct)
            }

        }
        catch (err) {
            next(err)
        }
    }

    static async deleteProduct(request, response, next) {

        try {
            const { id } = request.params
            const oneProduct = await Product.findByPk(id)

            console.log(oneProduct);

            const deleteProduct = await Product.destroy({ where: { id } })

            if (!oneProduct) {
                throw { name: "NotFound" }
            } else {
                response.status(201).json({
                    message: `${oneProduct.name} success to delete`
                })
            }

        }
        catch (err) {
            next(err)
        }

    }

    static async editProduct(request, response, next) {
        // const t = await sequelize.transaction();
        try {

            console.log("MASUK EDITT <<<<<<<<<<<<<<<<<<<<<<<,");

            // const { userId } = request.dataUser

            const { name, description, price, mainImg, categoryId } = request.body

            console.log(name, description, price, mainImg, categoryId);
            const { id } = request.params


            const updated = await Product.update({ name, slug: slug(name), description, price, mainImg, categoryId }, { where: { id } })

            console.log(updated, "<<<<<<<<<<");


            // const { imgUrl1, imgUrl2, imgUrl3 } = request.body
            // if (!imgUrl1 || !imgUrl2 || !imgUrl3) throw { name: "ImgLessThan3" }

            // const images = await Images.bulkUpdate([
            //     { imgUrl: imgUrl1, productId: updated.id },
            //     { imgUrl: imgUrl2, productId: updated.id },
            //     { imgUrl: imgUrl3, productId: updated.id },
            // ], { transaction: t })

            console.log("SELESAI edittt");

            response.status(201).json({
                message: updated,
            })
            // await t.commit()
        }
        catch (err) {
            // await t.rollback();
            // throw
            console.log("masuk error <<<<<<<<<");
            next(err)
        }

    }


}
module.exports = productController

