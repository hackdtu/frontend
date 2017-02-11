(function() {
    angular.module('socialApp')
        .controller('AppController', ['$scope', '$http', '$mdMedia', '$mdSidenav', function($scope, $http, $mdMedia, $mdSidenav) {
            //$scope.name = "Raounak";
            $scope.greeting = [];
            $http.get("http://178.62.41.110:88/government?uid=1234")
                .then(function(response) {
                    $scope.greeting = response.data;
                   
                }, function(response) {
                    alert("we are in error");
                    //alert(response.data);
                    alert(response.status);

                });




            $scope.toggleIcons = function() {
                $scope.iconsOnly = !$scope.iconsOnly;
            };
            $scope.$watch(function() {
                if ($mdMedia('sm') || $mdMedia('xs')) {
                    return true;
                } else {
                    return false;
                }
                console.log($scope.showButton);
            }, function(response) {
                $scope.showButton = response;
                if (response) {
                    $scope.iconsOnly = false;
                } else {
                    $scope.iconsOnly = true;
                }
                console.log("This is status of button :" + response);
            });
            $scope.toggleLeft = function() {
                $mdSidenav('left').toggle();
            };

            $scope.letsStart = function(tour) {
                tour.start();
            };


            $scope.dataWeGet = [{
                icon_select: 'work',
                icon_colour: '#2EC1CC',
                typeof: 'headache',
                category: "",
                duration: "45",
                medicine: "popp",
                date: "4 FEB"
            }, {
                icon_colour: '#FFB61C',
                icon_select: 'description',
                typeof: 'headache',
                category: "",
                duration: "54",
                medicine: "87",
                date: "1 JAN"
            }, {
                icon_colour: '#FFB61C',
                icon_select: 'description',
                typeof: 'headache',
                category: "",
                duration: "90",
                medicine: "xyz",
                date: "12 DEC"
            }, {
                icon_colour: '#FFB61C',
                icon_select: 'description',
                typeof: 'backpain',
                category: "",
                duration: "5",
                medicine: "abcd",
                date: "23 DEC"
            }];


            $scope.category = [{
                value: 'headache'
            }, {
                value: 'backpain'
            }];


            $scope.messages = [{
                face: "././img/a1.jpg",
                name: 'Brian Olson',
                message: 'Then it got down off the top',
                time: '5 day ago'
            }, {
                face: "././img/a2.jpg",
                name: 'Vivien Sauer',
                message: 'Duchess, as pigs have to',
                time: '5 day ago'
            }, {
                face: "././img/a3.jpg",
                name: 'Ruby Shield',
                message: 'She tooks down a good',
                time: '5 day ago'
            }, {
                face: "././img/a4.jpg",
                name: 'Kitty Heller DVM',
                message: 'I could shut up like a',
                time: '5 day ago'
            }, {
                face: "././img/a5.jpg",
                name: 'Yadlin Kehyt',
                message: 'Alice, I dont, think--',
                time: '5 day ago'
            }, {
                face: "././img/a5.jpg",
                name: 'Yadlin Kehyt',
                message: 'Alice, I dont, think--',
                time: '5 day ago'
            }, {
                face: "././img/a5.jpg",
                name: 'Yadlin Kehyt',
                message: 'Alice, I dont, think--',
                time: '5 day ago'
            }, {
                face: "././img/a5.jpg",
                name: 'Yadlin Kehyt',
                message: 'Alice, I dont, think--',
                time: '5 day ago'
            }, {
                face: "././img/a5.jpg",
                name: 'Yadlin Kehyt',
                message: 'Alice, I dont, think--',
                time: '5 day ago'
            }, {
                face: "././img/a5.jpg",
                name: 'Yadlin Kehyt',
                message: 'Alice, I dont, think--',
                time: '5 day ago'
            }, {
                face: "././img/a5.jpg",
                name: 'Yadlin Kehyt',
                message: 'Alice, I dont, think--',
                time: '5 day ago'
            }, {
                face: "././img/a5.jpg",
                name: 'Yadlin Kehyt',
                message: 'Alice, I dont, think--',
                time: '5 day ago'
            }, {
                face: "././img/a5.jpg",
                name: 'Yadlin Kehyt',
                message: 'Alice, I dont, think--',
                time: '5 day ago'
            }, {
                face: "././img/a5.jpg",
                name: 'Yadlin Kehyt',
                message: 'Alice, I dont, think--',
                time: '5 day ago'
            }, {
                face: "././img/a5.jpg",
                name: 'Yadlin Kehyt',
                message: 'Alice, I dont, think--',
                time: '5 day ago'
            }];

            $scope.notification_title = [{
                    title: 'Twitter'
                },
                {
                    title: 'Server'
                },
                {
                    title: 'Sales'
                }
            ];
            $scope.notifications = [{
                title_name: 'Twitter',
                title_icon: '././img/twitter.png',
                message: 'Mention from oxygen',
                time: 'an hour ago'
            }, {
                title_name: 'Twitter',
                title_icon: '././img/twitter.png',
                message: 'Oxygenna',
                time: 'an hour ago'
            }, {
                title_name: 'Twitter',
                title_icon: '././img/twitter.png',
                message: 'Oxygenna',
                time: 'an hour ago'
            }, {
                title_name: 'Twitter',
                title_icon: '././img/twitter.png',
                message: 'Followed by Oxygenna',
                time: 'an hour ago'
            }, {
                title_name: 'Server',
                title_icon: '././img/server_down.png',
                message: 'Server Down',
                time: 'an hour ago'
            }, {
                title_name: 'Server',
                title_icon: '././img/server_slow.png',
                message: 'Slow Response Time',
                time: 'an hour ago'
            }, {
                title_name: 'Server',
                title_icon: '././img/server_down.png',
                message: 'Server Down',
                time: 'an hour ago'
            }, {
                title_name: 'Sales',
                title_icon: '././img/shop_cart.png',
                message: 'Triangular Admin $21',
                time: 'an hour ago'
            }, {
                title_name: 'Sales',
                title_icon: '././img/shop_cart.png',
                message: 'Triangular Admin $21',
                time: 'an hour ago'
            }, {
                title_name: 'Sales',
                title_icon: '././img/shop_cart.png',
                message: 'Lambda WordPress',
                time: 'an hour ago'
            }, {
                title_name: 'Sales',
                title_icon: '././img/shop_cart.png',
                message: 'Triangular Admin $21',
                time: 'an hour ago'
            }];

            $scope.switch = {
                cb1: true,
                cb2: '',
                cb3: '',

            };

            $scope.statistics = {
                storage_space: 60,
                bandwidth_usage: 20,
                memory_usage: 100,
                storage_space_server: 80,
                bandwidth_usage_server: 50,
                memory_usage_server: 100,

            }


        }]);
})();