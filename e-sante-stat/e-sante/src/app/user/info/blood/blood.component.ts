import { Component, OnInit } from '@angular/core';
import { InfoService } from '../../../shared/services/info.service';
import { UserService } from '../../../shared/services/user.service';
interface IBlood {
    _id?: string;
    group: string;
    user?: string;
    _v?: string;
}
@Component({
    selector: 'app-blood',
    templateUrl: './blood.component.html',
    styleUrls: ['./blood.component.scss'],
    providers: [InfoService, UserService]
})
export class BloodComponent implements OnInit {
    blood: IBlood;
    bloods: IBlood[] = [
        { group: null },
        { group: 'O+' },
        { group: 'O-' },
        { group: 'A+' },
        { group: 'A-' },
        { group: 'B+' },
        { group: 'B-' },
        { group: 'AB+' },
        { group: 'AB-' },
    ];
    userId: string;
    bloodId: string;
    constructor(private infoService: InfoService, private userService: UserService) {
    }

    ngOnInit() {
        this.blood = { _id: null, group: null , user:  this.userService.getCurrentUserId()};
        this.getBlood();

    }

    getBlood() {
        this.infoService.getBlood(this.blood.user).subscribe(data => {
            console.log('get blood', data);
            if (data) {
                this.blood = data;
            }
        });
    }

    updateBlood() {
        console.log('blood : ', this.blood);
        if (this.blood._id) {
            this.infoService.updateBlood(this.blood).subscribe(data => {
                console.log(data);
            });
        } else {
            delete this.blood._id;
            this.infoService.createBlood(this.blood).subscribe(data => {
                console.log(data);
            });
        }
    }
}
