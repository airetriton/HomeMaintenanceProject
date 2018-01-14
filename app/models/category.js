module.exports = function(sequelize, DataTypes) {
    var Category = sequelize.define("Category", {
      // Giving the Category model a name of type STRING
      category_name: DataTypes.STRING
    });
  
    Category.associate = function(models) {
      // Associating Category with Tasks
      Category.hasMany(models.Task, {
        foreignKey: {
            allowNull: false
          }
      });
    };
  
    return Category;
  };
