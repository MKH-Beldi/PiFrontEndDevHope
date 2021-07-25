import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../../model/user';
import {Consultation} from '../../../model/consultation';
import * as BalloonEditor from '@ckeditor/ckeditor5-build-balloon';
import {NotificationService} from '../../../shared/notification.service';
import {ConsultationService} from '../../../shared/consultation.service';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-consultation-form',
  templateUrl: './consultation-form.component.html',
  styleUrls: ['./consultation-form.component.css']
})
export class ConsultationFormComponent implements OnInit {

  patient: User;
  id: string;
  @Input() consultation: Consultation;
  addMode: boolean;
  statusConsultation: string[] = ['en attente de consultation', 'en cours de traitement', 'en attente d\'examen ', 'en attente de contrôle', 'patient s\'est rétabli'];

  Editor = BalloonEditor;
  editorConfig = {
    placeholder: 'Le diagnostic doit contenir au moins 20 caractères.'
  };

  constructor(private consultationService: ConsultationService, private notifyService: NotificationService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params.id;
    this.addMode = !this.id;
    if (this.addMode) {
      this.consultation = new Consultation();
      this.patient = new User();
    }
    if (!this.addMode) {
      this.consultationService.getBy('id',  +this.id).subscribe(
        (data: Consultation[]) => {
          this.consultation = data[0];
          this.patient = this.consultation.schedules[0].userPatient;
        }
      );
    }
  }

  saveConsultation(){
    this.consultation.status = this.statusConsultation[1];
    this.consultation.id = 2;
    this.consultationService.updateSymptom(this.consultation.id, this.consultation).subscribe(
      () => {
        this.notifyService.showSuccess('Consultation ajouté avec succès !', 'Ajout');
      }
      );
  }
}
