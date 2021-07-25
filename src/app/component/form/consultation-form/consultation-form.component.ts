import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../../model/user';
import {Consultation} from '../../../model/consultation';
import * as BalloonEditor from '@ckeditor/ckeditor5-build-balloon';
import {NotificationService} from '../../../shared/notification.service';
import {ConsultationService} from '../../../shared/consultation.service';

@Component({
  selector: 'app-consultation-form',
  templateUrl: './consultation-form.component.html',
  styleUrls: ['./consultation-form.component.css']
})
export class ConsultationFormComponent implements OnInit {

  patient: User;
  @Input() consultation: Consultation;
  @Input() addModeChild: boolean;
  statusConsultation: string[] = ['en cours de traitement', 'en attente d\'examen ', 'en attente de contrôle', 'patient s\'est rétabli'];

  Editor = BalloonEditor;
  editorConfig = {
    placeholder: 'Le diagnostic doit contenir au moins 20 caractères.'
  };

  constructor(private consultationService: ConsultationService, private notifyService: NotificationService) { }

  ngOnInit(): void {
    this.addModeChild = true;
    if (this.addModeChild) {
      this.consultation = new Consultation();
    }
    this.patient = new User();
  }

  saveConsultation(){
    this.consultation.status = this.statusConsultation[0];
    this.consultation.id = 2;
    this.consultationService.updateSymptom(this.consultation.id, this.consultation).subscribe(
      () => {
        this.notifyService.showSuccess('Consultation ajouté avec succès !', 'Ajout');
      }
      );
  }
}
