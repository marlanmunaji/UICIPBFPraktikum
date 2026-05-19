class Holiday {
  constructor(destination, days) {
    this.destination = destination;
    this.days = days;
  }
  info() {
    alert(this.destination + " will take " + this.days + " days.");
  }
}

var trip = new Holiday("Semeru", 10);
trip.info();