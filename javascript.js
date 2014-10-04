(function() {
  var app = angular.module('Quickmune', []);

  app.controller('testController', function(){
    this.product = vaccine;
  });

  var vaccines = {
    name: 'Tetanus',
    description: 'Tetanus vaccine is a vaccine composed of deactivated tetanus toxins. This vaccine is	immunogenic but not pathogenic and is used to prevent an individual from contracting tetanus.', 
    isAvailable: true ,
    location: 'Worldwide'
  };
  })();
