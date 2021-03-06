(function() {
  'use strict';
  angular.module('civic.community.main', []);
  angular.module('civic.community')
    .config(CommunityViewConfig)
    .controller('CommunityViewController', CommunityViewController);

  // @ngInject
  function CommunityViewConfig($stateProvider) {
    $stateProvider
      .state('community', {
        abstract: true,
        url: '/community',
        template: '<ui-view id="community-view"></ui-view>',
        controller: 'CommunityViewController',
        data: {
          titleExp: '"Community"'
        },
        onExit: /* @ngInject */ function($deepStateRedirect) {
          $deepStateRedirect.reset();
        }
      });

  }

  // @ngInject
  function CommunityViewController() {
    // console.log('CommunityViewController instantiated.');
  }

})();
