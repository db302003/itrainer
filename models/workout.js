module.exports = function(sequelize, DataTypes) {
  var Workout = sequelize.define("Workout", {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true
    },
    type: {
      type: DataTypes.STRING,
    },
    date: {
      type: DataTypes.DATE,
      defaultValue: sequelize.NOW
    },
    weight: {
      type: DataTypes.INTEGER
    },
    sets: {
      type: DataTypes.INTEGER
    },
    reps: {
      type: DataTypes.INTEGER
    },
    notes: {
      type: DataTypes.TEXT,
    }
  });

  Workout.associate = function(models) {
  
    Workout.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
    //   Workout.hasOne(models.User, {
  //     // onDelete: "set null"
  //   });
  };

  return Workout;
};
