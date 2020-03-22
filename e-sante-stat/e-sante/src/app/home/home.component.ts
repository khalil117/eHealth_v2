import { Component, OnInit } from '@angular/core';
import { LegendItem, ChartType } from '../lbd/lbd-chart/lbd-chart.component';
import { InfoService } from '../shared/services/info.service';
import { UserService } from '../shared/services/user.service';
import { MedicalService } from '../shared/services/medical.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    providers: [InfoService, UserService, MedicalService]
})
export class HomeComponent implements OnInit {
    tableData: { headerRow: string[]; dataRows: string[][]; };
    tableData1: { headerRow: string[]; dataRows: string[][]; };
    item: any = {doctor: null};
    error: any;
    success: any;
    count: any;
    role: any;
    role1: any;
    userId: any;
    heightLabels = [];
    heightValues = [];
    public tailleChartType: ChartType;
    public tailleChartData: any;
    public tailleChartOptions: any;
    public tailleChartResponsive: any[];
    public tailleChartLegendItems: LegendItem[];

    public poidsChartType: ChartType;
    public poidsChartData: any;
    public poidsChartOptions: any;
    public poidsChartResponsive: any[];
    public poidsChartLegendItems: LegendItem[];

    constructor(
        private infoService: InfoService,
        private userService: UserService,
        private service: MedicalService,
        private router: Router) { }

    ngOnInit() {
                    this.userId = this.userService.getCurrentUserId();
                    this.role = JSON.parse(localStorage.getItem('user')).role[0];
                    this.role1 = JSON.parse(localStorage.getItem('user')).role1
                    if (this.isdoctor() === false) {
                    this.tableData = {
                        headerRow: ['ID'],
                        dataRows: []
                    };
                    this.getHeight();
                    this.getWeight();
                } else {

                    this.tableData = {
                        headerRow: ['Specialty', 'Current?', 'Comment', 'User'],
                        dataRows: []
                    };
                    this.getAllDrTr();
                }
                if (this.isImproved() === true) {
                    this.tableData1 = {
                        headerRow: [ 'Comment', 'User'],
                        dataRows: []
                    };
                    this.getAllUsPr();
                } else {

                }
    }

    getHeight() {
        var heightSeries = { labels: [], series: [] }
        this.infoService.getHeight(this.userId).subscribe(data => {

            if (data) {
                var heightId = data._id;
                this.infoService.getAllHeights(heightId).subscribe(data2 => {
                    if (data2) {
                        for (let height of data2) {
                            heightSeries.labels.push(this.convertDate(height.date));
                            heightSeries.series.push(height.height);
                        }

                        heightSeries.labels.push(this.convertDate(data.date));
                        heightSeries.series.push(data.height);
                        this.buildHeight(heightSeries);
                    }
                });
            }
        });
    }

    getWeight() {
        var weightSeries = { labels: [], series: [] }
        this.infoService.getWeight(this.userId).subscribe(data => {

            if (data) {
                var weightId = data._id;
                this.infoService.getAllWeights(weightId).subscribe(data2 => {
                    if (data2) {
                        for (let weight of data2) {
                            weightSeries.labels.push(this.convertDate(weight.date));
                            weightSeries.series.push(weight.weight);
                        }

                        weightSeries.labels.push(this.convertDate(data.date));
                        weightSeries.series.push(data.weight);
                        this.buildWeight(weightSeries);
                    }
                });
            }
        });

        return weightSeries;
    }

    buildHeight(heightSeries) {
        this.tailleChartType = ChartType.Line;
        this.tailleChartData = {
            labels: heightSeries.labels,
            series: [
                heightSeries.series
            ]
        };

        this.tailleChartOptions = {
            seriesBarDistance: 10,
            axisX: {
                showGrid: false
            },
            height: '245px'
        };
        this.tailleChartResponsive = [
            ['screen and (max-width: 640px)', {
                seriesBarDistance: 5,
                axisX: {
                    labelInterpolationFnc: function (value) {
                        return value[0];
                    }
                }
            }]
        ];
    }

    buildWeight(weightSeries) {

        this.poidsChartType = ChartType.Line;
        this.poidsChartData = {
            labels: weightSeries.labels,
            series: [
                weightSeries.series
            ]
        };
        this.poidsChartOptions = {
            seriesBarDistance: 10,
            axisX: {
                showGrid: false
            },
            height: '245px'
        };
        this.poidsChartResponsive = [
            ['screen and (max-width: 640px)', {
                seriesBarDistance: 5,
                axisX: {
                    labelInterpolationFnc: function (value) {
                        return value[0];
                    }
                }
            }]
        ];
    }
    improve(id, status) {
        this.item.user = this.userId;
        this.item._id = id;
        this.item.improved = !status;
        this.service.improveTreating(this.item).subscribe(data => {
            console.log(data);
            if (data) {
                this.getAllDrTr();
                let row: any[];
                row = [data._id, data.specialty, data.improved, data.comment, data.user];
                this.tableData.dataRows.push(row);
                this.count++;
                this.router.navigateByUrl('/', {skipLocationChange: true}).then(() =>
                    this.router.navigate(['dashboard']));
            }
        });
    }

    getAllUsPr() {
        this.service.getUserTreatingProved().subscribe(datas => {
            if (datas) {
                console.log(datas);
                let i = 1;
                for (const data of datas) {
                    let row: any[];
                    row = [data._id, data.comment,  data.ufirstname + ' ' + data.ulastname];
                    this.tableData1.dataRows.push(row);
                    i++;
                }
                this.count = i;
            }
        });
    }

    getAllDrTr() {
        this.service.getDoctorTreating(this.userId).subscribe(datas => {
            if (datas) {
                console.log(datas);
                let i = 1;
                for (const data of datas) {
                    let row: any[];
                    row = [data._id, data.speciality, data.doctor, data.improved, data.comment,  data.ufirstname + ' ' + data.ulastname];
                    this.tableData.dataRows.push(row);
                    i++;
                }
                this.count = i;
            }
        });
    }
    // update(id, comment) {
    //     this.success = '';
    //     this.error = '';
    //     this.item._id = id;
    //     this.item.comment = comment;
    //     this.service.updateComment(this.item).subscribe(data => {
    //         if (!data.errors) {
    //             this.getAllDrTr();
    //             let row: any[];
    //             row = [data._id, data.specialty, data.improved, data.comment, data.user];
    //             this.tableData.dataRows.push(row);
    //             this.count++;
    //             this.router.navigateByUrl('/', {skipLocationChange: true}).then(() =>
    //                 this.router.navigate(['dashboard']));
    //         }
    //     });
    // }

    convertDate(inputFormat) {
        function pad(s) { return (s < 10) ? '0' + s : s; }
        var d = new Date(inputFormat);
        return [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear().toString().substring(2, 4)].join('/');
    }

    isdoctor() {
        if (this.role === 'medecin') {
            return true;
        }
        return false;
    };

    isImproved() {
        if (this.item.improved === !status) {
            return false;
        }
        return true
    };
}
