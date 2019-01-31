import { Component, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
      .has-error input{
      border: 1px solid red;
      }
  `]
})
export class AppComponent {
  @ViewChild('form') form: NgForm;

  answers = [{
    type: 'yes',
    text: 'Да'
  }, {
    type: 'no',
    text: 'Нет'
  }];

  defaultAnswer = "no";
  defaultCountry = "ua";

  formData = {};
  isSubmited = false;

  addRandEmail() {
    const randEmail = 'wfm@gmail.com';
    // this.form.setValue({
    //   user: {
    //     pass: '',
    //     email: randEmail
    //   },
    //   country: '',
    //   answer: ''
    // })
    this.form.form.patchValue({
      user: {email: randEmail}
    })
  }

  submitForm() {
    this.isSubmited = true;
    this.formData = this.form.value;
    this.form.reset();
  }
}
