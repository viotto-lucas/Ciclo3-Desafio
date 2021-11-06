'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ItemCompra extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ItemCompra.belongsTo(models.Compra, {foreignKey: 'CompraId', as:'compra'});
      ItemCompra.belongsTo(models.Produto, {foreignKey: 'ProdutoId', as:'produto'});
    }
  };
  ItemCompra.init({
    CompraId: DataTypes.INTEGER,
    ProdutoId: DataTypes.INTEGER,
    quantidade: DataTypes.INTEGER,
    VALOR: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'ItemCompra',
  });
  return ItemCompra;
};