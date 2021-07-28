import {Component, OnInit} from '@angular/core';
import {User} from '../../../model/user';
import {Consultation} from '../../../model/consultation';
import * as BalloonEditor from '@ckeditor/ckeditor5-build-balloon';
import {NotificationService} from '../../../shared/notification.service';
import {ConsultationService} from '../../../shared/consultation.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Symptom} from '../../../model/symptom';




@Component({
  selector: 'app-consultation-form',
  templateUrl: './consultation-form.component.html',
  styleUrls: ['./consultation-form.component.css']
})
export class ConsultationFormComponent implements OnInit {

  id: string;
  userPatient = new User();
  consultation = new Consultation();
  symptoms: Symptom[];
  viewForm = false;


  statusConsultation: string[] ;

  Editor = BalloonEditor;
  editorConfig = {
    placeholder: 'Le diagnostic doit contenir au moins 20 caractères.'
  };

  constructor(private consultationService: ConsultationService, private notifyService: NotificationService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.statusConsultation = this.consultationService.getStatus();
    this.id = this.activatedRoute.snapshot.params.id;
    this.consultationService.getBy('id', this.id).subscribe(
      (data: Consultation[]) => {
        this.consultation = data[0];
        console.log(this.consultation);
        this.symptoms = this.consultation.symptoms;
        this.userPatient = this.consultation.schedules[0].userPatient;
      }
      );
  }

  saveConsultation(){
    delete this.consultation.schedules ;
    console.log(this.consultation);
    this.consultationService.updateConsultation(this.consultation.id, this.consultation).subscribe(
      () => {
        this.notifyService.showInfo('Consultation enregistrée avec succès.', 'Enregistrée');
      }
      );
    this.router.navigate(['/consultation/table']);
  }

  viewFormSymptom(){
    this.viewForm = true;
  }

  addSymptom(s: Symptom[]) {
    this.symptoms = s;
    this.consultation.symptoms = s;
    this.viewForm = false;
  }
}
