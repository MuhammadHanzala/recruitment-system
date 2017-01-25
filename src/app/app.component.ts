import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  items$: FirebaseListObservable<any[]>;
  constructor(af: AngularFire) {
    this.items$ = af.database.list('/list');
    const promise = af.database.object('/item').remove();
    promise
      .then(data => console.log('success', data))
      .catch(err => console.log(err, 'You dont have access!'));
  }
}
