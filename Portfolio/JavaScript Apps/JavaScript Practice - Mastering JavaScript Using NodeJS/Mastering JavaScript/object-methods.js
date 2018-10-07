let restuarant = {
    name: 'Mafnas-Bernard', 
    seatCapacity: 75,
    seatCount: 0, 
    checkAvaliability: function(partySize) {
        let seatsAvalible = this.seatCapacity - this.seatCount; 
        return partySize <= seatsAvalible; 
    },
    addParty: function(partySize) {
        if (partySize <= (this.seatCapacity - this.seatCount)) {
            this.seatCount = this.seatCount + partySize;
        } else {
            return(`I'm sorry we cannot add anymore people at this time`); 
        }
        return this.seatCount; 
        
    },
    removeParty: function(partySize) {
        this.seatCount = this.seatCount - partySize;
        return `A party of ${partySize} has been removed from the restaurant, there are now ${(this.seatCapacity - this.seatCount)} seats avaliable at this time`; 
    }
}

console.log(restuarant.checkAvaliability(4));
console.log(restuarant.addParty(74));
console.log(restuarant.checkAvaliability(4));
console.log(restuarant.removeParty(4));

