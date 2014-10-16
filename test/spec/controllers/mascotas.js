'use strict';

describe('Controller: MascotasCtrl', function () {

  // load the controller's module
  beforeEach(module('benipeixgularApp'));

  var MascotasCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MascotasCtrl = $controller('MascotasCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
