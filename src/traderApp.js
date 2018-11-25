import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import 'bootstrap/dist/css/bootstrap.css';
import 'jquery';
import {LayoutModule} from './shared/layout/layout.module'; 

const MODULE_NAME = 'traderApp';

angular
    .module(MODULE_NAME, [
        uiRouter,
       LayoutModule
    ])
    .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider){
        'ngInject';

        $urlRouterProvider.otherwise('/portal');

        $stateProvider
            .state('portal',{
                url: '/portal',
                template: '<ta-layout></ta-layout>'
            })
            .state('portal.about',{
                url: '/about',
                template: '<h1>Hello from about</h1>'
            })
        
    }])
    .component('taTraderApp', {
        template : '<ui-view></ui-view>'
    })

export default MODULE_NAME;