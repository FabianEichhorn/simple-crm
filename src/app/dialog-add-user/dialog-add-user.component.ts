import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/user.class';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss']
})
export class DialogAddUserComponent implements OnInit {

  user = new User()
  birthDate: Date;
  loading = false;
  constructor(public dialogRef: MatDialogRef<DialogAddUserComponent>, private firestore: AngularFirestore,) { } // das DialogRef wird benötigt um mit dialogRef.close() das Dialog fenster einfach wieder schließen zu können. mit public geht das auch im html teil.

  ngOnInit(): void {
  }

  saveUser() {
    this.user.birthDate = this.birthDate.getTime(); // wir können mit ng Model nicht direkt auf user.birthdate zugreifen, weil sonst das Datum nicht richtig angezeigt wird, desswegen helfen wir uns mit einer Variable und dieser Funktion (wird als Timestamp angezeigt)
    console.log('user is', this.user);
    this.loading = true;
    this.firestore
    .collection('users')
    .add(this.user.toJSON())
    .then((result: any) => {
      this.loading = false;
      console.log('adding user finished', result)
    });
      
  }
}
