(function() {
  'use strict';
  angular.module('civic.pages')
    .controller('HelpViewController', HelpViewController)
    .config(helpViewConfig);

  // @ngInject
  function helpViewConfig($stateProvider) {
    $stateProvider
      .state('help', {
        url: '/help',
        abstract: true,
        controller: 'HelpViewController',
        templateUrl: 'app/pages/help.tpl.html',
        data: {
          titleExp: '"Help"',
          navMode: 'sub'
        }
      })
      .state('help.introduction', {
        url: '/introduction',
        templateUrl: 'app/pages/help_intro.tpl.html',
        data: {
          titleExp: '"Help: Introduction"',
          navMode: 'sub'
        }
      })
      .state('help.gettingStarted', {
        url: '/gettingStarted',
        templateUrl: 'app/pages/help_getting_started_main.tpl.html',
        data: {
          titleExp: '"Help: Getting Started"',
          navMode: 'sub'
        }
      })
      .state('help.evidence', {
        url: '/evidence',
        templateUrl: 'app/pages/help_evidence_main.tpl.html',
        data: {
          titleExp: '"Help: Evidence"',
          navMode: 'sub'
        }
      })
      .state('help.variants', {
        url: '/variants',
        templateUrl: 'app/pages/help_variants.tpl.html',
        data: {
          titleExp: '"Help: Variants"',
          navMode: 'sub'
        }
      })
      .state('help.genes', {
        url: '/genes',
        templateUrl: 'app/pages/help_genes.tpl.html',
        data: {
          titleExp: '"Help: Genes"',
          navMode: 'sub'
        }
      })
      .state('help.variantGroups', {
        url: '/variantGroups',
        templateUrl: 'app/pages/help_variant_groups.tpl.html',
        data: {
          titleExp: '"Help: Variant Groups"',
          navMode: 'sub'
        }
      })
      .state('help.get', {
        url: '/get',
        templateUrl: 'app/pages/help_get.tpl.html',
        data: {
          titleExp: '"Help: Get Help"',
          navMode: 'sub'
        }
      })
      .state('help.report', {
        url: '/report',
        templateUrl: 'app/pages/help_report_problem.tpl.html',
        data: {
          titleExp: '"Help: Report a Problem"',
          navMode: 'sub'
        }
      });
  }

  // @ngInject
  function HelpViewController($scope, $modal) {
    var vm = $scope.vm = {};
    vm.tabs = {
      main: [
        {
          heading: 'Introduction',
          state: 'help.introduction'
        },
        {
          heading: 'Getting Started',
          state: 'help.gettingStarted'
        },
        {
          heading: 'Evidence',
          state: 'help.evidence'
        },
        {
          heading: 'Variants',
          state: 'help.variants'
        },
        {
          heading: 'Genes',
          state: 'help.genes'
        },
        {
          heading: 'Variant Groups',
          state: 'help.variantGroups'
        },
        {
          heading: 'Get Help',
          state: 'help.get'
        },
        {
          heading: 'Report Problem',
          state: 'help.report'
        }
      ],
      getting_started: [
	{
	  heading: 'Introductory Materials',
          template: 'app/pages/help_started_introductory_materials.tpl.html',
          active: true
        },
        {
          heading: 'Example Activities',
          template: 'app/pages/help_started_example.tpl.html',
          active: false
        },
        {
          heading: 'Source Ideas',
          template: 'app/pages/help_started_source.tpl.html',
          active: false
        },
        {
          heading: 'Monitoring',
          template: 'app/pages/help_started_monitoring.tpl.html',
          active: false
        }
	],
      evidence: [
        {
          heading: 'Overview',
          template: 'app/pages/help_evidence_overview.tpl.html',
          active: true
        },
        {
          heading: 'Evidence Level',
          template: 'app/pages/help_evidence_levels.tpl.html',
          active: false
        },
        {
          heading: 'Evidence Type',
          template: 'app/pages/help_evidence_types.tpl.html',
          active: false
        },
        {
          heading: 'Variant Origin',
          template: 'app/pages/help_evidence_variant_origin.tpl.html',
          active: false
        },
        {
          heading: 'Trust Rating',
          template: 'app/pages/help_evidence_trust_ratings.tpl.html',
          active: false
        }
      ],
      variant: [
        {
          heading: 'Overview',
          template: 'app/pages/help_variant_overview.tpl.html',
          active: true
        },
        {
          heading: 'Variant Name',
          template: 'app/pages/help_variant_naming.tpl.html',
          active: false
        },
        {
          heading: 'Variant Summary',
          template: 'app/pages/help_variant_summaries.tpl.html',
          active: false
        },
        {
          heading: 'Variant Type',
          template: 'app/pages/help_variant_varianttypes.tpl.html',
          active: false
        },
        {
          heading: 'Variant Coordinates',
          template: 'app/pages/help_variant_coordinates.tpl.html',
          active: false
        }
      ],
      gene: [
        {
          heading: 'Overview',
          template: 'app/pages/help_gene_overview.tpl.html',
          active: true
        },
        {
          heading: 'Gene Summary',
          template: 'app/pages/help_gene_summary.tpl.html',
          active: false
        }
      ],
      variant_group: [
        {
          heading: 'Overview',
          template: 'app/pages/help_variant_group_overview.tpl.html',
          active: true
        },
        {
          heading: 'Variant Group Summary',
          template: 'app/pages/help_variant_group_summary.tpl.html',
          active: false
        },
        {
          heading: 'Create a Variant Group',
          template: 'app/pages/help_variant_group_create.tpl.html',
          active: false
        },
        {
          heading: 'Add to a Variant Group',
          template: 'app/pages/help_variant_group_addto.tpl.html',
          active: false
        }
      ]
    };
    vm.imgPopup = function imgPopup() {
      $modal.open({
        animation: false,
        backdrop: true,
        template: '<div><img src="assets/images/GP-113_CIViC_schema-collaboration_SCHEMA_v3a.png" ' +
        'class="img-fluid" width="100%" height="100%" ' +
        'alt="CIViC Schema Diagram" ' +
        'ng-click="$close()"' +
        '/></div>',
        size: 'lg'
      });
    };
  }
})();
