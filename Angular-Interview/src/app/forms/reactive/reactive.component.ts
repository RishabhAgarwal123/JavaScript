import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrl: './reactive.component.scss'
})
export class ReactiveComponent {
  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      controls: this.fb.array([])
    })
  }

  getControls() {
    return (this.form.get('controls') as FormArray).controls;
  }

  addFormControl() {
    const newFormControl = this.fb.control('', Validators.required);
    (this.form.get('controls') as FormArray).push(newFormControl);
  }

  onSubmit() {
    if (this.form.valid) {
      console.log('Form submitted:', this.form.value);
    } else {
      console.error('Form invalid');
    }
  }
}
