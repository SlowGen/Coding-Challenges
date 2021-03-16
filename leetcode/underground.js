//Design UndergroundSystem class that can return an average
//time for a particular station-to-station trip


var UndergroundSystem = function() {
    this.rides = new Map();
    this.stations = new Map();
    this.trips = new Map();
};

UndergroundSystem.prototype.checkIn = function(id, stationName, t) {
    this.rides.set(id, t);
    this.stations.set(id, stationName);
};


UndergroundSystem.prototype.checkOut = function(id, stationName, t) {
    const tripTime = t - this.rides.get(id)
    const trip = this.stations.get(id) + stationName;
    if (!this.trips.has(trip)) {
        let allTimes = [tripTime]
        this.trips.set(trip, allTimes)
    }
    else {
        let allTimes = this.trips.get(trip);
        allTimes.push(tripTime);
        this.trips.set(trip, allTimes)
    }
};


UndergroundSystem.prototype.getAverageTime = function(startStation, endStation) {
    const trip = startStation + endStation
    if (this.trips.has(trip)) {
        let allTimes = this.trips.get(trip)
        return allTimes.reduce((a, b) => a+b) / allTimes.length
    }
    else return null
};


//https://leetcode.com/problems/design-underground-system/