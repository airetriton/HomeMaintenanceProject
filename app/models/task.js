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
      // A Task can't be created without an Season due to the foreign key constraint
      Task.belongsTo(models.Season, {
        foreignKey: {
          allowNull: false
        }
      });
    };
  
    return Task;
  };
  