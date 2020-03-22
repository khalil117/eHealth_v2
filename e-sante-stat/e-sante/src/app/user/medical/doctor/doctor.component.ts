import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../shared/services/user.service';
import { MedicalService } from '../../../shared/services/medical.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-doctor',
    templateUrl: './doctor.component.html',
    styleUrls: ['./doctor.component.css'],
    providers: [MedicalService, UserService]
})
export class DoctorComponent implements OnInit {
    tableData: { headerRow: string[]; dataRows: string[][]; };
    item: any = { doctor: null, user: '' };
   // doctors: any[];
    userId: any;
    count: any;
    path: any;
    selectedDoctor: any;
    doctors: any[] = [{_id: 'hghjgjhghj', firstname: 'hjghgjhgh', lastname: 'jhjhkjhk'}];
    constructor(private service: MedicalService,
                private userService: UserService,
                private router: Router) { }

    ngOnInit() {
        this.path = 'doctor';
        this.userId = this.userService.getCurrentUserId();
        this.tableData = {
            headerRow: ['ID', 'Specialty', 'Doctor', 'Current?', 'Comment'],
            dataRows: []
        };
        this.getDoctors();
        this.getAll();
        console.log(this.doctors);
    }

    add() {
            this.item.user = this.userId;
            this.item.doctor = this.selectedDoctor;
            this.service.addTreating(this.item).subscribe(data => {
                console.log('this is the doctor' + data.doctor)
                if (data) {
                    let row: any[];
                    row = [this.count, data.speciality, data.doctor, data.improved, data.comment, data._id];
                    this.tableData.dataRows.push(row);
                    this.count++;
                    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() =>
                    this.router.navigate(['doctor']));
                    this.item = {};
                }
            });

    }

    loadDoctor(val) {
        this.selectedDoctor = JSON.parse(val)._id;
        console.log(this.selectedDoctor);
        this.item.doctor = val._id;
    }

    getAll() {
        this.service.getUserTreating(this.userId).subscribe(datas => {
            console.log('this is the doctor' + datas.doctor)

            if (datas) {
                var i = 1;
                for (const data of datas) {
                    let row: any[];
                    row = [i, data.speciality, data.dfirstname + ' ' + data.dlastname, data.improved, data.comment, data._id];
                    this.tableData.dataRows.push(row);
                    i++;
                }
                this.count = i;
            }
        });
    }

    getDoctors() {
       return this.userService.getAllDoctors().subscribe(datas => {
            console.log('datas ****************', datas);
            if (datas) {
                this.doctors = datas;
            } else {
                this.doctors = [];
            }
        });
    }



    delete(event) {
        const target = event.target || event.srcElement || event.currentTarget;
        const id = target.id;
        this.service.delete(id, this.path).subscribe(data => {
            target.parentElement.parentElement.remove();
        });
    }
}
