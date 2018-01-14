module.exports = function(sequelize, DataTypes) {
    var Season = sequelize.define("Season", {
      // Giving the Season model a name of type STRING
      season_name: DataTypes.STRING
    });
  
    Season.associate = function(models) {
      // Associating Season with Tasks
      // When an Season is deleted, also delete any associated Tasks
      Season.hasMany(models.Task, {
        onDelete: "cascade"
      });
    };
  
    return Season;
  };
  