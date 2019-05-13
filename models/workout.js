module.exports = function(sequelize, DataTypes) {
  var Workout = sequelize.define("Workout", {
    type: {
      type: DataTypes.STRING,
    },
    date: {
      type: DataTypes.DATE
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

  // Workout.associate = function(models) {
  //   Workout.hasOne(models.User, {
  //     // onDelete: "set null"
  //   });
  // };

  return Workout;
};
