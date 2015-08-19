// Write your package code here!
CustomPackage = {
  log: function(msg){
    console.log(msg);
    Meteor.call('serverlog',msg);
  }
};