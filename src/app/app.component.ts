import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('f') signupForm: NgForm;

  emailValue: string = "";
  genders: String[] = ["Male", "Female"]
  user = {
    username: "",
    email: ""
  }

  suggestUserName() {
    const suggestedName = 'Superuser';
    this.signupForm.setValue({
      userData: {
        email: "nitish.kohade@gmail.com",
        username: "nitishh"
      },
      secret: "pet",
      questionAnswer: "",
      gender: "male"
    })
    // this.signupForm.form.patchValue({
    //   userData: {
    //     username: "asdasdsadadasd"
    //   }
    // })
  }

  set emailField(value: string) {
    console.log(value)
    this.emailValue = value;
  }

  get emailField() {
    return this.emailValue
  }

  // onSubmit(event: HTMLFormElement) {
  //   console.log(event)
  // }

  // onSubmit(event: NgForm) {
  //   console.log(event)
  // }

  onSubmit() {
    console.log(this.signupForm)
    this.user.email = this.signupForm.value.userData.email
    this.user.username = this.signupForm.value.userData.username

    this.signupForm.reset()
  }
}
