import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../shared/services/user.service';
import { SanteService } from '../../../../shared/services/sante.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-meeting',
    templateUrl: './improve.component.html',
    styleUrls: ['./improve.component.css'],
    providers: [SanteService, UserService]
})
export class ImproveComponent implements OnInit {
    tableData: { headerRow: string[]; dataRows: string[][]; };
    item: any = {doctor: null};
    userId: any;
    count: any;
    constructor(
        private service: SanteService,
        private userService: UserService,
        private router: Router) { }

    ngOnInit() {
        this.userId = this.userService.getCurrentUserId();
        this.tableData = {
            headerRow: ['beginning', 'Status', 'End date', 'User'],
            dataRows: []
        };
        this.getAll();
    }

    improve(id, status) {
        this.item.user = this.userId;
        this.item._id = id;
        this.item.improved = !status;
        this.service.improveMeeting(this.item).subscribe(data => {
            console.log(data);
            if (data) {
                this.getAll();
                let row: any[];
                row = [data._id, data.start_date, data.improved, data.end_date, data.user];
                this.tableData.dataRows.push(row);
                this.count++;
                this.router.navigateByUrl('/', {skipLocationChange: true}).then(() =>
                    this.router.navigate(['improve']));
            }
        });
    }

    getAll() {
        this.service.getDoctorMeeting(this.userId).subscribe(datas => {
            if (datas) {
                console.log(datas);
                let i = 1;
                for (const data of datas) {
                    let row: any[];
                    row = [data._id, data.start_date, data.improved, data.end_date,  data.ufirstname + ' ' + data.ulastname];
                    this.tableData.dataRows.push(row);
                    i++;
                }
                this.count = i;
            }
        });
    }
}
