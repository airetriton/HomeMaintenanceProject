module.exports = function(sequelize, DataTypes) {
    var Season = sequelize.define("Season", {
      // Giving the Season model a name of type STRING
      season_name: DataTypes.STRING
    });
  
    Season.associate = function(models) {
      // Associating Season with Tasks
      Season.hasMany(models.Task, {
        foreignKey: {
          allowNull: false
        }
      });
    };
  
    return Season;
  };
