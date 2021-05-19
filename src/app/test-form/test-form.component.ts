import { Component } from '@angular/core';

import { FormControl, FormGroup, FormArray } from '@ngneat/reactive-forms';

@Component({
  selector: 'app-test-form',
  template: `
    <form [formGroup]="group">
      <input type="text" formControlName="input" />
    </form>
  `
})
export class TestFormComponent {
  group = new FormGroup<{ input: string }>({ input: new FormControl<string>('') });
}
