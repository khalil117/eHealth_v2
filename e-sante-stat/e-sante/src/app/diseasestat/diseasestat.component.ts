import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user.service';
import { SanteService } from '../shared/services/sante.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-diseasestat',
  templateUrl: './diseasestat.component.html',
  styleUrls: ['./diseasestat.component.scss'],
  providers: [UserService, SanteService]
})
export class DiseasestatComponent implements OnInit {
  tableData: { headerRow: string[]; dataRows: string[][]; };
  item: any = { disease: null };
  disease: any;
  count: any;

  constructor(
    private userService: UserService,
    private service: SanteService,
    private router: Router
  ) { }

  ngOnInit() {
    this.disease = this.userService.getCurrentUsersDisease();
    this.tableData = {
      headerRow: ['ID', 'Disease', 'In progress', 'Hereditary', 'Long duration', 'Detection date', 'Healing date', 'Others'],
      dataRows: []
    };
    this.getAll();
  }

  getAll() {
    this.service.getDiseaseStat().subscribe(datas => {
        if (datas) {
            var i = 1;
            for (let data of datas) {
                let row: any[];
                // tslint:disable-next-line:max-line-length
                row = [i, data.disease,  data.in_progress,  data.hereditary,  data.duration, data.start_date, data.end_date, data.description, data._id];
                this.tableData.dataRows.push(row);
                i++;
            }
            this.count = i;
        }
    });
}



}
