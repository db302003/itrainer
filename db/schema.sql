DROP DATABASE IF EXISTS workout_trackerdb;
CREATE DATABASE workout_trackerdb;

CREATE TABLE Workout_Tracker (

  userid 
  Week_day VARCHAR(100) NULL,
   Work_Out VARCHAR(100) NULL,
  DATE INT NULL,
  weight DECIMAL(10,4) NULL,
  sets DECIMAL(10,4) NULL,
  reps DECIMAL(10,4) NULL,
  notes varchar(400) null,
)
SELECT * FROM Workout_Tracker