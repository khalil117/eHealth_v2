import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { isNgTemplate } from '@angular/compiler';

@Injectable()
export class MedicalService {

    constructor(private http: HttpClient) { }

    // Medical
    add(item, path): any {
        return this.http.post('http://localhost:3000/medical/' + path, item);
    }

    update(id, item, path): any {
        return this.http.put('http://localhost:3000/medical/' + path + '/' + id, item);
    }

    getAll(userId, path, ): any {
        return this.http.get('http://localhost:3000/medical/' + path + '/' + userId);
    }

    // delete
    delete(id, path): any {
        return this.http.delete('http://localhost:3000/medical/' + path + '/' + id);
    }

        // Treating
        addTreating(item): any {
            return this.http.post('http://localhost:3000/medical/doctor/treatings', item);
        }

        improveTreating(item): any {
            return this.http.put('http://localhost:3000/medical/doctor/treatings/' + item._id, item);
        }

        getUserTreating(userId): any {
           return this.http.get('http://localhost:3000/medical/doctor/treatings/user/' + userId);
        }

        getUserTreatingProved(): any {
            return this.http.get('http://localhost:3000/medical/doctor/treatings/');
         }

        getDoctorTreating(userId): any {
            return this.http.get('http://localhost:3000/medical/doctor/treatings/doctor/' + userId);
        }

        deleteTreating(id): any {
            return this.http.delete('http://localhost:3000/medical/doctor/treatings' + id);
        }
        // updateComment(item): any {
        //     return this.http.put('http://localhost:3000/medical/doctor/treatings/' + item._id, item);
        // }
}
