import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../shared/services/user.service';
import {SanteService} from '../../../shared/services/sante.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-meeting',
    templateUrl: './meeting.component.html',
    styleUrls: ['./meeting.component.css'],
    providers: [SanteService, UserService]
})
export class MeetingComponent implements OnInit {
    tableData: { headerRow: string[]; dataRows: string[][]; };
    item1 = {meeting: null};
    item = {doctor: null, user: ''};
    path: any;
    userId: string;
    count: any;
    selectedDoctor: any;
    doctors: any[] = [{_id: 'hghjgjhghj', firstname: 'hjghgjhgh', lastname: 'jhjhkjhk'}];

    constructor(private service: SanteService,
                private userService: UserService,
                private router: Router) {
    }

    ngOnInit() {
        this.userId = this.userService.getCurrentUserId();
        this.tableData = {
            headerRow: ['ID', 'beginning', 'Status', 'End date', 'Doctor'],
            dataRows: []
        };
        this.getAll();
        this.getAllDoctors();
        console.log(this.doctors);
    }

    add() {
        this.item.user = this.userId;
        this.item.doctor = this.selectedDoctor;
        console.log('*********item**********', this.item);
        this.service.addMeeting(this.item).subscribe(data => {
            console.log('this is data ' + data);
            if (data) {
                let row: any[];
                row = [this.count, data.start_date, data.improved, data.end_date, data.user, data.doctor];
                this.tableData.dataRows.push(row);
                this.count++;
                this.router.navigateByUrl('/', {skipLocationChange: true}).then(() =>
                    this.router.navigate(['meeting']));
            }
        });
    }

    loadDoctor(val) {
        this.selectedDoctor = JSON.parse(val)._id;
        console.log(this.selectedDoctor);
        this.item.doctor = val._id;
    }

    getAll() {
        this.service.getUserMeeting(this.userId).subscribe(datas => {
            console.log(datas);
            if (datas) {
                let i = 1;
                for (const data of datas) {
                    let row: any[];
                    row = [this.count, data.start_date, data.improved, data.end_date, data.user, data.dfirstname + ' ' + data.dlastname];
                    this.tableData.dataRows.push(row);
                    i++;
                }
                this.count = i;
            }
        });
    }

    getAllDoctors() {
        this.userService.getAllDoctors().subscribe(datas => {
            if (datas) {
                this.doctors = datas;
                console.log('***datas*****', datas);
            }
        });
    }
    delete(event) {
        const target = event.target || event.srcElement || event.currentTarget;
        const id = target.id;
        this.service.delete(id).subscribe(data => {
            target.parentElement.parentElement.remove();
        });
    }
}
