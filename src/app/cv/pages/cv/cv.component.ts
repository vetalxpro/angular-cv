import { Component, OnInit } from '@angular/core';
import { CvService } from '../../services/cv.service';
import { Cv } from '../../models/cv';
import { Contact } from '../../models/contact';
import { animate, query, stagger, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: [ './cv.component.scss' ],
  animations: [
    trigger('section', [
      transition('* => *', [
        query('app-cv-section', [
          style({ opacity: 0, transform: 'translateY(-10px)' }),
          stagger(200, [
            animate('0.3s', style({
              opacity: 1,
              transform: 'translateY(0)'
            }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class CvComponent implements OnInit {
  cv: Cv;
  contacts: Contact[];

  constructor( private cvService: CvService ) {
  }

  ngOnInit() {
    this.cv = this.cvService.getCv();
    this.contacts = [
      {
        name: `${this.cv.location.country} ${this.cv.location.city}`,
        icon: 'fas fa-map-marker-alt',
        link: `https://www.google.com.ua/maps/@46.469391,30.740883,14z?hl=ru`
      },
      {
        name: this.cv.contacts.email,
        icon: 'fas fa-envelope',
        link: `mailto:${this.cv.contacts.email}`
      },
      {
        name: this.cv.contacts.phone,
        icon: 'fas fa-phone',
        link: `tel:${this.cv.contacts.phone}`
      },
      {
        name: `${this.cv.contacts.github}`,
        icon: 'fab fa-github',
        link: `//${this.cv.contacts.github}`
      },
      {
        name: `${this.cv.contacts.telegram}`,
        icon: 'fab fa-telegram',
        link: `//${this.cv.contacts.telegram}`
      },
      {
        name: `${this.cv.contacts.skype}`,
        icon: 'fab fa-skype',
        link: `skype:${this.cv.contacts.skype}`
      }
    ];
  }

}
