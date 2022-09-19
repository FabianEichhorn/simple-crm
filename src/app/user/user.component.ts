import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {MatDialog} from '@angular/material/dialog';
import { User } from 'src/models/user.class';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user: User = new User(); // user: == Variable  User == Typ = new User() == Instanz die wir erstellen ein leeres JSON quasi nur mit Inhalt // würde auch mit user = new User() gehen
  allUsers = [] // allUsers wird mit der changes varibale der abonnier funktuion verknüpft um dann sich allUsers im Html teil ausgeben zu lassen.

  constructor(public dialog: MatDialog, private firestore: AngularFirestore) {

   }

  ngOnInit(): void { //on init firebase daten abonnieren
    this.firestore
    .collection('users')
    .valueChanges({idField: 'customIdName'}) // immer wenn sich was ändert wollen wir es wieder runterladen / mit idField wollen wir uns die jeweilige Id der nutzer holen
    .subscribe((changes: any) =>  {
    console.log('received changes from DB', changes);
    this.allUsers = changes;
    })
  }

  openDialog() {
    this.dialog.open(DialogAddUserComponent)
  }
}
