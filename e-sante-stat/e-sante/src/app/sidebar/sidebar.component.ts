import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    id: string;
    path: string;
    title: string;
    icon: string;
    class: string;
    sub: any;
    role: string[];
}
export const ROUTES: RouteInfo[] = [
    {
        id: 'dashboard',
        path: 'dashboard',
        title: 'Dashboard',
        icon: 'pe-7s-graph',
        class: '',
        sub: [],
        role: ['medecin', 'particulier']
    },
    {
        id: 'profile',
        path: 'profile',
        title: 'Personal Information ',
        icon: 'pe-7s-user',
        class: '',
        sub: [],
        role: ['medecin', 'particulier']
    },
    {
        id: 'Improve Meeting',
        path: 'improve',
        title: 'Improve',
        icon: 'pe-7s-science',
        class: '',
        sub: [],
        role: ['medecin']
    },
    {
        id: 'infos',
        path: null,
        title: 'General Information',
        icon: 'pe-7s-info',
        class: '',
        sub: [
            { path: 'blood', title: 'Blood type', icon: 'pe-7s-drop', class: '' },
            { path: 'height', title: 'Height', icon: 'pe-7s-menu', class: '' },
            { path: 'weight', title: 'Weight', icon: 'pe-7s-timer', class: '' },
            { path: 'imc', title: 'BMI', icon: 'pe-7s-graph3', class: '' },
        ],
        role: ['particulier']
    },

    {
        id: 'sante',
        path: null,
        title: 'Health Status',
        icon: 'pe-7s-science',
        class: '',
        sub: [
            { path: 'allergy', title: 'Allergic', icon: 'pe-7s-note', class: '' },
            { path: 'disease', title: 'Disease', icon: 'pe-7s-note', class: '' },
            { path: 'medicament', title: 'Medicament', icon: 'pe-7s-note', class: '' },
            { path: 'surgery', title: 'Surgical', icon: 'pe-7s-note', class: '' },
            { path: 'vaccination', title: 'Vaccinations', icon: 'pe-7s-note', class: '' },
            { path: 'teeth', title: 'Teeth', icon: 'pe-7s-note', class: '' },
        ],
        role: ['particulier']
    },

    {
        id: 'Appointment',
        path: null,
        title: 'Appointment',
        icon: 'pe-7s-science',
        class: '',
        sub: [
            { path: 'meeting', title: 'Appointment', icon: 'pe-7s-note', class: '' },
        ],
        role: ['particulier']
    },



    {
        id: 'medical',
        path: null,
        title: 'Medical consultation',
        icon: 'pe-7s-note2',
        class: '',
        sub: [
            { path: 'doctor', title: 'Doctor', icon: 'pe-7s-id', class: '' },
            { path: 'consultation', title: 'Consultation', icon: 'pe-7s-note', class: '' },
            { path: 'analysis', title: 'Analysis', icon: 'pe-7s-note', class: '' },
            { path: 'radiology', title: 'Radiology', icon: 'pe-7s-note', class: '' }
        ],
        role: ['particulier']
    },

    {
        id: 'Statistics',
        path: null,
        title: 'Statistics',
        icon: 'pe-7s-science',
        class: '',
        sub: [
            { path: 'stat', title: 'Allergy statistics ', icon: 'pe-7s-note', class: '' },
            { path: 'diseasestat', title: 'Disease statistics ', icon: 'pe-7s-note', class: '' },
        ],
        role: ['medecin', 'particulier']
    },

    /*
    { path: 'typography', title: 'Typography',  icon:'pe-7s-news-paper', class: '' },
    { path: 'icons', title: 'Icons',  icon:'pe-7s-science', class: '' },
    { path: 'notifications', title: 'Notifications',  icon:'pe-7s-bell', class: '' },
    */
];

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
    item: any = {doctor: null};
    menuItems: any[];
    role = '';
    constructor() { }

    ngOnInit() {
        this.role = JSON.parse(localStorage.getItem('user')).role[0];
        this.menuItems = ROUTES.filter((menuItem: RouteInfo) => menuItem.role.indexOf(this.role) > -1);
    }
    isMobileMenu() {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };
    isdoctor() {
        if (this.role === 'medecin') {
            return true;
        }
        return false;
    };
    isImproved() {
        if (this.item.improved === true) {
            return true;
        }
        return false
    };
}
