module.exports = function(sequelize, DataTypes) {
    var Task = sequelize.define("Task", {
        task_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1,30]
            }
        },
        checked: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    });
  
    Task.associate = function(models) {
      // We're saying that a Task should belong to an Season
      // A Task can't be created without a Season due to the foreign key constraint
      Task.belongsTo(models.Season, {
        foreignKey: {
          allowNull: false
        }
      });
      // We're saying that a Task should belong to an Category
      // A Task can't be created without a Category due to the foreign key constraint
      Task.belongsTo(models.Category, {
        foreignKey: {
          allowNull: false
        }
      });
    };
  
    return Task;
  };
  