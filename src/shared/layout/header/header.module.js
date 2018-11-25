import angular from 'angular';
import {HeaderComponent} from './header.component';
import './header.scss'

export const HeaderModule = angular
    .module('HeaderModule', [])
    .component('taHeader', HeaderComponent)
    .name;