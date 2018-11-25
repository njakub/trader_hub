import angular from 'angular';
import {FooterComponent} from './footer.component';
import './footer.scss'

export const FooterModule = angular
    .module('FooterModule', [])
    .component('taFooter', FooterComponent)
    .name;