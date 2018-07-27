const hour-button = $('#hour-btn');
const hour-button = $('#week-btn');
const hour-button = $('#year-btn');


var job = {
  hoursPerWeek: 40,
  hourlyWage: 10, // $/hr
  weeklyWage: this.hourlyWage * this.hoursPerWeek, // $/hr
  yearlyWage: this.weeklyWage * 52, // $/hr

  convertFromYearly: function(yearlyWage){
    // updates hourly and weekly wages
    this.hourlyWage = (yearlyWage / (this.hoursPerWeek * 52)).toFixed(2);
    this.weeklyWage = (yearlyWage / (52)).toFixed(2);
    this.yearlyWage = (yearlyWage).toFixed(2);

    console.log(this.hourlyWage, this.weeklyWage, this.yearlyWage);
  },

  convertFromWeekly: function(weeklyWage){
    // updates hourly and weekly wages
    this.hourlyWage = (weeklyWage / (this.hoursPerWeek)).toFixed(2);
    this.weeklyWage = (weeklyWage).toFixed(2);
    this.yearlyWage = (weeklyWage * 52).toFixed(2);

    console.log(this.hourlyWage, this.weeklyWage, this.yearlyWage);
  },

  convertFromHourly: function(hourlyWage){
    // updates hourly and weekly wages
    this.hourlyWage = (hourlyWage).toFixed(2);
    this.weeklyWage = (hourlyWage * (this.hoursPerWeek)).toFixed(2);
    this.yearlyWage = (hourlyWage * (this.hoursPerWeek * 52)).toFixed(2);

    console.log(this.hourlyWage, this.weeklyWage, this.yearlyWage);
  }
}

job.convertFromYearly(100000);
job.convertFromWeekly(1923.08);
job.convertFromHourly(48.08);
