import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SanteService {

    constructor(private http: HttpClient) { }

    // alergies stat
    getAllergiesStat(fromDate: Date, toDate: Date): any {
        return this.http.post('http://localhost:3000/stat/allergies/', {fromDate, toDate} );
    }
    // disease stat
    getDiseaseStat(): any {
        return this.http.get('http://localhost:3000/sante/diseases/' );
    }
    // alergies
    addAllergy(item): any {
        return this.http.post('http://localhost:3000/sante/allergies', item);
    }

    getAllergies(userId): any {
        return this.http.get('http://localhost:3000/sante/allergies/' + userId);
    }

    // meeting
    addMeeting(item): any {
        return this.http.post('http://localhost:3000/info/meetings', item);
    }

    improveMeeting(item): any {
        return this.http.put('http://localhost:3000/info/meetings/' + item._id, item);
    }

    getUserMeeting(userId): any {
        return this.http.get('http://localhost:3000/info/meetings/user/' + userId);
    }

    getDoctorMeeting(userId): any {
        return this.http.get('http://localhost:3000/info/meetings/doctor/' + userId);
    }

    delete(id): any {
        return this.http.delete('http://localhost:3000/info/meetings' + id);
    }

    // treating
    addTreating(item): any {
        return this.http.post('http://localhost:3000/info/treating', item);
    }

    improveTreating(item): any {
        return this.http.put('http://localhost:3000/info/treating/' + item._id, item);
    }

    getUserTreating(userId): any {
        return this.http.get('http://localhost:3000/info/treating/user/' + userId);
    }

    getDoctorTreating(userId): any {
        return this.http.get('http://localhost:3000/info/treating/doctor/' + userId);
    }

    deleteTreating(id): any {
        return this.http.delete('http://localhost:3000/info/treating' + id);
    }


    // diseases
    addDisease(item): any {
        return this.http.post('http://localhost:3000/sante/diseases', item);
    }

    getDiseases(userId): any {
        return this.http.get('http://localhost:3000/sante/diseases/' + userId);
    }

    // medicaments
    addMedicament(item): any {
        return this.http.post('http://localhost:3000/sante/medicaments', item);
    }

    getMedicaments(userId): any {
        return this.http.get('http://localhost:3000/sante/medicaments/' + userId);
    }

    // surgerys
    addSurgery(item): any {
        return this.http.post('http://localhost:3000/sante/surgerys', item);
    }

    getSurgerys(userId): any {
        return this.http.get('http://localhost:3000/sante/surgerys/' + userId);
    }

    // vaccinations
    addVaccination(item): any {
        return this.http.post('http://localhost:3000/sante/vaccinations', item);
    }

    getVaccinations(userId): any {
        return this.http.get('http://localhost:3000/sante/vaccinations/' + userId);
    }

    // teeths
    addTeeth(item): any {
        return this.http.post('http://localhost:3000/sante/teeths', item);
    }

    getTeeths(userId): any {
        return this.http.get('http://localhost:3000/sante/teeths/' + userId);
    }

    // delete
    deleteAllergy(allergyId): any {
        return this.http.delete('http://localhost:3000/sante/allergies/' + allergyId);
    }
    // delete
    deleteDisease(diseaseId): any {
        return this.http.delete('http://localhost:3000/sante/diseases/' + diseaseId);
    }
    // delete
    deleteMedicament(medicamentId): any {
        return this.http.delete('http://localhost:3000/sante/medicaments/' + medicamentId);
    }
    // delete
    deleteSurgery(surgeryId): any {
        return this.http.delete('http://localhost:3000/sante/surgerys/' + surgeryId);
    }
    // delete
    deleteVaccination(vaccinationId): any {
        return this.http.delete('http://localhost:3000/sante/vaccinations/' + vaccinationId);
    }
    // delete
    deleteTeeth(teethId): any {
        return this.http.delete('http://localhost:3000/sante/teeths/' + teethId);
    }

}
