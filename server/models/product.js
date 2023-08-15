'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Product.belongsTo(models.User, { foreignKey: "authorId" })
      Product.belongsTo(models.Category, { foreignKey: "categoryId" })
      Product.hasMany(models.Images, { foreignKey: "productId" })
      // define association here
    }
  }
  Product.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Product name cannot be empty"
        },
        notEmpty: {
          msg: "Product name cannot be empty"
        }
      }
    },
    slug: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Slug cannot be empty"
        },
        notEmpty: {
          msg: "Slug cannot be empty"
        }
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Description cannot be empty"
        },
        notEmpty: {
          msg: "Description cannot be empty"
        }
      }
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Price cannot be empty"
        },
        notEmpty: {
          msg: "Price cannot be empty"
        },
        isNumeric: {
          msg: "Price must be a number"
        },
        notStartingWithZero(value) {
          if (value.startsWith('0')) {
            throw new Error('Price cannot start with 0')
          }
        },
        min: {
          args: [0],
          msg: "Price minimal 0"
        }
      }
    },
    mainImg: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Main Image cannot be empty"
        },
        notEmpty: {
          msg: "Main Image cannot be empty"
        }
      }
    },
    categoryId: DataTypes.INTEGER,
    authorId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};