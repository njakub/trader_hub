import angular from 'angular';
import {LayoutComponent} from './layout.component';
import {HeaderModule} from './header/header.module'; 
import {FooterModule} from './footer/footer.module'; 
import './layout.scss'

export const LayoutModule = angular
    .module('LayoutModule', [
        HeaderModule,
        FooterModule
    ])
    .component('taLayout', LayoutComponent)
    .name;
