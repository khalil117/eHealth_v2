import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user.service';
import { SanteService } from '../shared/services/sante.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-appstat',
  templateUrl: './appstat.component.html',
  styleUrls: ['./appstat.component.scss'],
  providers: [UserService, SanteService]

})
export class AppstatComponent implements OnInit {
    public data: any;
    public fromDate: Date = new Date(2017);
    public toDate: Date = new Date(2018);
  constructor(
    private userService: UserService,
    private service: SanteService,
    private router: Router
  ) { }

  ngOnInit() {
      this.data = this.service.getAllergiesStat(this.fromDate, this.toDate);
      this.service.getAllergiesStat(this.fromDate, this.toDate).subscribe(datas => {
          this.data = datas.data;
          console.log('this is the stats' + JSON.stringify(datas));
      });
      console.log(this.data);
  }

    // lineChart
    public lineChartData:Array<any> = [
        {data: [11, 27, 13, 33, 9, 24, 24], label: 'Hereditary'},
        {data: [28, 10, 18, 19, 16, 27, 30], label: 'In Progress'},
    ];
    public lineChartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    public lineChartOptions:any = {
        responsive: true
    };
    public lineChartColors:Array<any> = [
        { // grey
            backgroundColor: 'rgba(148,159,177,0.2)',
            borderColor: 'rgba(148,159,177,1)',
            pointBackgroundColor: 'rgba(148,159,177,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        },
        { // dark grey
            backgroundColor: 'rgba(77,83,96,0.2)',
            borderColor: 'rgba(77,83,96,1)',
            pointBackgroundColor: 'rgba(77,83,96,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(77,83,96,1)'
        },
        { // grey
            backgroundColor: 'rgba(148,159,177,0.2)',
            borderColor: 'rgba(148,159,177,1)',
            pointBackgroundColor: 'rgba(148,159,177,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        }
    ];
    public lineChartLegend:boolean = true;
    public lineChartType:string = 'line';

    public randomize():void {
       alert('ok');
    }

    // events
    public chartClicked(e:any):void {
        console.log(e);
    }

    public chartHovered(e:any):void {
        console.log(e);
    }
}
