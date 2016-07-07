var location = [
  {name: 'Irving Place',
  dogFriendly: true,
  communityManagers: true,
  conferenceRooms: true,
  eventSpace: true,
  highSpeedInternet: true,
  bikeStorage: true,
  lounges: true,
  microRoastedCoffee: true,
  monthlyDemoDays: true,
  printing: true,
  privatePhoneBooths: true,
  purifiedWater: true,
  screeningRoom: true,
  weeklyEvents: true,
  uniqueInteriorDesign: true,
  curatedEventsLineup: true,
  freeBeer: true,
  arcadeRoom: true,
  bocceCourt: true,
  helpfulBooks: true,
  honestyMarket: true,

  }

  {name: 'Times Square',
  dogFriendly: true,
  communityManagers: true,
  conferenceRooms: true,
  eventSpace: true,
  highSpeedInternet: true,
  bikeStorage: true,
  lounges: true,
  microRoastedCoffee: true,
  monthlyDemoDays: true,
  printing: true,
  privatePhoneBooths: true,
  purifiedWater: true,
  screeningRoom: true,
  weeklyEvents: true,
  uniqueInteriorDesign: true,
  curatedEventsLineup: true,
  freeBeer: true,
  arcadeRoom: true,
  bocceCourt: true,
  helpfulBooks: true,
  honestyMarket: true,
  }

  {name: 'Soho West',
  dogFriendly: true,
  communityManagers: true,
  conferenceRooms: true,
  eventSpace: true,
  highSpeedInternet: true,
  bikeStorage: true,
  lounges: true,
  microRoastedCoffee: true,
  monthlyDemoDays: true,
  printing: true,
  privatePhoneBooths: true,
  purifiedWater: true,
  screeningRoom: true,
  weeklyEvents: true,
  uniqueInteriorDesign: true,
  curatedEventsLineup: true,
  freeBeer: true,
  arcadeRoom: false,
  bocceCourt: false,
  helpfulBooks: false,
  honestyMarket: false,

  }

  {name: 'Charging Bull',
  dogFriendly: true,
  communityManagers: true,
  conferenceRooms: true,
  eventSpace: true,
  highSpeedInternet: true,
  bikeStorage: true,
  lounges: true,
  microRoastedCoffee: true,
  monthlyDemoDays: true,
  printing: true,
  privatePhoneBooths: true,
  purifiedWater: true,
  screeningRoom: true,
  weeklyEvents: true,
  uniqueInteriorDesign: true,
  curatedEventsLineup: true,
  freeBeer: true,
  arcadeRoom: true,
  bocceCourt: true,
  helpfulBooks: true,
  honestyMarket: true,
  }

  {name: 'Park South',
  dogFriendly: true,
  communityManagers: true,
  conferenceRooms: true,
  eventSpace: true,
  highSpeedInternet: true,
  bikeStorage: true,
  lounges: true,
  microRoastedCoffee: true,
  monthlyDemoDays: true,
  printing: true,
  privatePhoneBooths: true,
  purifiedWater: true,
  screeningRoom: true,
  weeklyEvents: true,
  uniqueInteriorDesign: true,
  curatedEventsLineup: true,
  freeBeer: true,
  arcadeRoom: true,
  bocceCourt: true,
  helpfulBooks: true,
  honestyMarket: true,
  }
]





$(function(){
  // Check
$("#checkbox").attr("checked", true);

//  Uncheck
$("#checkbox").attr("checked", false);

var form = document.getElementById('amenity');

function submitFn(event) {
    event.preventDefault();
    var boxes = document.getElementsByClassName('checkbox');
    var checked = [];
    for(var i=0; boxes[i]; ++i){
      if(boxes[i].checked){
        checked.push(boxes[i].name);
      }
    }

    var checkedStr = checked.join();

    document.getElementById('checkbox_str').value = checkedStr;
    form.submit();

    return false;
}


var checked = $('.names:checked').map(function() {
  return this.value;
}).get();
if (checked.length) {
  console.log(checked);
} else {
  console.log('null');
}



  }); 