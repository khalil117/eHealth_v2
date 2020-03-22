import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../shared/services/user.service';
import { MedicalService } from '../../../shared/services/medical.service';

@Component({
    selector: 'app-consultation',
    templateUrl: './consultation.component.html',
    styleUrls: ['./consultation.component.scss'],
    providers: [MedicalService, UserService]
})
export class ConsultationComponent implements OnInit {
    tableData: { headerRow: string[]; dataRows: string[][]; };
    item: any = { consultation: null };
    doctors: any[];
    userId: any;
    count: any;
    path: any;
    constructor(private service: MedicalService, private userService: UserService) { }

    ngOnInit() {
        this.path = 'consultation';
        this.userId = this.userService.getCurrentUserId();
        this.tableData = {
            headerRow: ['ID', 'Consultation', 'Speciality', 'Doctor', 'Date', 'Results', 'Drugs'],
            dataRows: []
        };
        this.getDoctors();
        this.getAll();
    }

    add() {
        if (this.item.consultation && this.item.speciality && this.item.doctor) {
            this.item.user = this.userId;
            this.service.add(this.item, this.path).subscribe(data => {
                if (data) {
                    let row: any[];
                    row = [this.count, data.consultation, data.speciality, data.doctor, data.start_date, data.bilan, data.medicaments, data._id];
                    this.tableData.dataRows.push(row);
                    this.count++;
                    this.item = {};
                }
            });
        }
    }

    getAll() {
        this.service.getAll(this.userId, this.path).subscribe(datas => {
            if (datas) {
                let i = 1;
                for (let data of datas) {
                    let row: any[];
                    row = [i, data.consultation, data.speciality, data.doctor, data.start_date, data.bilan, data.medicaments, data._id];
                    this.tableData.dataRows.push(row);
                    i++;
                }
                this.count = i;
            }
        });
    }
    getDoctors() {
        this.userService.getAllDoctors().subscribe(data => {
            console.log('data ****************', data);
            if (!data.errors) {
                this.doctors = data;
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
