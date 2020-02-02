import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl
} from "@angular/forms";
import { BsModalService } from "ngx-bootstrap/modal";
import { BsModalRef } from "ngx-bootstrap";
import { Subject } from "rxjs";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  public registerForm: FormGroup;
  public modalRef: BsModalRef;
  public buttonCancel: any = {
    show: false,
    text: "CANCELAR"
  };
  public buttonDelete: any = {
    show: false,
    text: "DELETAR"
  };

  public showCloseButton: boolean = true;
  public onClose: Subject<boolean>;

  constructor(private fb: FormBuilder, private _bsModalRef: BsModalRef) {
    this.registerForm = fb.group({
      name: [
        "",
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(50),
          Validators.pattern(
            /^(([a-zA-Z\u00C0-\u00FF][\s\w\u00C0-\u00FF]{0,59})|([A-Za-z0-9._-]{2,})(@[A-Za-z0-9_-]{2,})(\.[A-Za-z]{2,6})+)$/
          )
        ]
      ],
      cpf: [
        "",
        [
          Validators.required,
          Validators.pattern(/^(\d{3}\.){2}\d{3}\-\d{2}$/),
          Validators.minLength(14), // digits + word characters
          Validators.maxLength(14) // digits + word characters
        ]
      ],
      bornDate: [
        "",
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(60),
          Validators.pattern(
            /^([A-Za-z0-9._-]{2,})(@[A-Za-z0-9_-]{2,})(\.[A-Za-z]{2,6})+$/
          )
        ]
      ],
      patValor: [
        "",
        [
          Validators.minLength(8),
          Validators.maxLength(60),
          Validators.pattern(/^[1-9]\d{0,2}(\.\d{3})*,\d{2}$/)
        ]
      ],
      state: [
        "",
        [Validators.required, Validators.minLength(1), Validators.maxLength(3)]
      ],
      numberU: [
        "",
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(3),
          Validators.pattern(/[^0-9.]/)
        ]
      ],
      occupation: [
        "",
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(100)
        ]
      ],
      party: [
        "",
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(100)
        ]
      ],
      vice: [""],
      ver: [""],
      councilor: ["", [Validators.minLength(2), Validators.maxLength(100)]],
      vicePrefFk: ["", [Validators.minLength(2), Validators.maxLength(50)]]
    });
  }

  ngOnInit() {
    this.onClose = new Subject();
  }

  submit() {
    var data = this.registerForm.value;
    if (this.registerForm.invalid) {
      Object.keys(this.registerForm.controls).forEach(key => {
        let control = this.registerForm.get(key);
        control.markAsPending();
        control.markAsDirty();
        control.markAsTouched();
        control.updateValueAndValidity();
      });
      return;
    } else {
      console.log(data);
    }
  }

  fieldHasErrors(field) {
    let control = this.registerForm.get(field);
    console.log(field, control);
    if (
      control.errors &&
      Object.keys(control.errors).length &&
      control.invalid &&
      control.touched &&
      control.dirty
    )
      return "has-errors";
    return "";
  }

  public onConfirm(): void {
    this.onClose.next(true);
    this._bsModalRef.hide();
  }

  public onCancel(): void {
    this.onClose.next(false);
    this._bsModalRef.hide();
  }
}
