/**
 * Created by mediboxpvtltd on 22/02/17.
 */
var myapp = angular.module('myapp', ["highcharts-ng"]);

myapp.controller('myctrl', function ($scope) {

    $scope.highchartsNG = {
        options: {
            chart: {
                type: 'column'
            }
        },
        title: {
            text: 'Orders Per Month'
        },
        xAxis: {
            type: 'category'
        },

        legend: {
            enabled: false
        },

        plotOptions: {
            series: {
                borderWidth: 0,
                dataLabels: {
                    enabled: true
                }
            }
        },

        series: [{
            name: 'Months',
            colorByPoint: true,
            data: [{
                name: 'JAN',
                y: 100,
                drilldown: 'jan'
            }, {
                name: 'Feb',
                y: 9,
                drilldown: 'feb'
            }, {
                name: 'Mar',
                y: 10,
                drilldown: 'mar'
            },
                {
                    name: 'Apr',
                    y: 123,
                    drilldown: 'apr'
                },
                {
                    name: 'May',
                    y: 18,
                    drilldown: 'may'
                },
                {
                    name: 'Jun',
                    y: 42,
                    drilldown: 'jun'
                },
                {
                    name: 'Jul',
                    y: 40,
                    drilldown: 'july'
                },
                {
                    name: 'Aug',
                    y: 17,
                    drilldown: 'aug'
                },
                {
                    name: 'Sep',
                    y: 153,
                    drilldown: 'sep'
                },
                {
                    name: 'Oct',
                    y: 3,
                    drilldown: 'oct'
                },{
                    name: 'Nov',
                    y: 9,
                    drilldown: 'nov'
                }

                ]
        }],
        drilldown: {
            series: [{
                id: 'jan',
                data: [
                    [4, 1],
                    [5, 8],
                    [6, 2],
                    [8, 1],
                    [11,1],
                    [12,4],
                    [18,1],
                    [20,43],
                    [22,11],
                    [25,11],
                    [28,1],
                    [29,8],

                ]
            }, {
                id: 'feb',
                data: [
                    [3, 4],
                    [10, 4],
                    [19, 1],
                ]
            }, {
                id: 'mar',
                data: [
                    [9, 2],
                    [14, 6],
                    [16, 2],
                ]
            }, {
                    id: 'apr',
                    data: [
                        [1, 3],
                        [20, 15],
                        [21, 81],
                        [22, 20],
                        [26, 1],
                   ]
                },
                {
                    id: 'may',
                    data: [
                        [5, 1],
                        [26, 9],
                        [27, 2]
                    ]
                },
                {
                    id: 'jun',
                    data: [
                        [16, 1],
                        [27, 23],
                        [28, 12],
                        [30, 6],
                    ]
                },
                {
                    id: 'jul',
                    data: [
                        [1, 1],
                        [18, 7],
                        [19, 15],
                        [20, 2],
                        [26, 2],
                        [29, 2]
                    ]
                },
                {
                    id: 'aug',
                    data: [
                        [3, 2],
                        [10, 11],
                        [16, 1],
                        [22, 4],
                        [23, 1],
                        [24, 1],
                        [26, 1],
                        [29, 6]
                    ]
                },
                {
                    id: 'sep',
                    data: [
                        [6, 32],
                        [7, 25],
                        [8, 9],
                        [15, 12],
                        [19, 17],
                        [20, 2],
                        [21, 1],
                        [22, 16],
                        [23, 5],
                        [26, 1],
                        [27, 35]
                    ]
                },
                {
                    id: 'oct',
                    data: [
                        [15, 1],
                        [17, 5],
                        [22, 3]
                    ]
                },
                {
                   id: 'nov',
                    data: [
                        [15, 4],
                        [17, 4],
                        [22, 1]
                    ]
                }
            ]
        } }

});
