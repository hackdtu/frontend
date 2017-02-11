(function() {
    angular.module('socialApp', ['ngMaterial', 'ngMessages', 'ngAnimate', 'ngAria', 'ui.router', 'bm.uiTour', 'angularTreeview'])
        .config(function($mdIconProvider, $mdThemingProvider) {
            $mdIconProvider
                .fontSet('md', 'material-icons');

            var customBlueMap = $mdThemingProvider
                .extendPalette('light-blue', {
                    'contrastDefaultColor': 'light',
                    'contrastDarkColors': ['50'],
                    '50': 'ffffff'
                });
            $mdThemingProvider.definePalette('customBlue', customBlueMap);
            $mdThemingProvider.theme('default')
                .primaryPalette('customBlue', {
                    'default': '500',
                    'hue-1': '50'
                })
                .accentPalette('pink');
            $mdThemingProvider.theme('input', 'default')
                .primaryPalette('grey');
        })
        .config(function($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/');

            $stateProvider


            // HOME STATES AND NESTED VIEWS ========================================

                .state('splash',{
                    url: '/',
                    templateUrl: './view/splash.html'
                })
                .state('doctor',{
                    url: '/doctor',
                    templateUrl: './view/doctor.html'
                })
                .state('home',{
                    url: '/home',
                    templateUrl: './view/account.html'
                })

            .state('filledUpForm', {
                url: '/filledUpForm',
                templateUrl: './view/filledUpForm.html',
                controller: 'filledUpFormController'
            })

            .state('home2', {
                    url: '/home2',
                    templateUrl: './view/account2.html'
                })
                //    .state('ckeditor', {
                //        url: '/ckeditor',
                //        templateUrl: 'view/ckeditor.html',
                //       controller: 'ckeditorController'
                //   })

            .state('contacts', {
                url: '/contacts',
                templateUrl: './view/contacts.html',
                controller: 'contacts2Controller',
                controllerAs: 'ct'
            })


            .state('assignment', {
                    url: '/assignment',
                    templateUrl: './view/assignment.html',
                    controller: 'ckeditorController',
                    controllerAs: 'ck'

                })
                .state('backup', {
                    url: '/backup',
                    templateUrl: './view/backup.html',
                    controller: 'teamLeaderBoardController',
                    controllerAs: 'tlbCtrl'
                })
                .state('bookmark', {
                    url: '/bookmark',
                    templateUrl: './view/bookmark.html',
                    controller: 'bookmarkController'
                })
                //-------------------Nested states under bookmark-------------------------------
                .state('bookmark.emailVerification', {
                    url: '/emailVerification',
                    templateUrl: './view/bookmark.emailVerification.html'
                })
                .state('bookmark.passwordReset', {
                    url: '/passwordReset',
                    templateUrl: './view/bookmark.passwordReset.html'
                })
                .state('bookmark.emailChange', {
                    url: '/emailChange',
                    templateUrl: './view/bookmark.emailChange.html'
                })
                .state('bookmark.contacts', {
                    url: '/contacts',
                    templateUrl: './view/bookmark.contacts.html'
                })
                .state('bookmark.phone', {
                    url: '/phone',
                    templateUrl: './view/bookmark.phone.html'
                })
                //--------------------------------------------------------------------------------
                .state('description', {
                    url: '/description',
                    templateUrl: './view/description.html'
                })
                .state('dialog', {
                    url: '/dialog',
                    templateUrl: './view/dialog.html'
                })
                .state('dns', {
                    url: '/dns',
                    templateUrl: './view/dns.html',
                    controller: 'dnsController'
                })
                .state('extension', {
                    url: '/extension',
                    templateUrl: './view/extension.html'
                });

        })
        .filter('startsWithLetter', function() {
            return function(items, letter) {
                var filtered = [];
                var letterMatch = new RegExp(letter, 'i');
                for (var i = 0; i < items.length; i++) {
                    var item = items[i];
                    if (letterMatch.test(item.name.substring(0, 1))) {
                        filtered.push(item);
                    }
                }
                return filtered;
            };
        });
})();