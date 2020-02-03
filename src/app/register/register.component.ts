import { Component, OnInit, Input } from "@angular/core";
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
    text: "SALVAR"
  };
  user;
  isEdit = false;
  public showCloseButton: boolean = true;
  public onClose: Subject<boolean>;

  constructor(
    private fb: FormBuilder,
    private _bsModalRef: BsModalRef,
    private modalService: BsModalService
  ) {
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
          Validators.pattern(/^[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}$/)
        ]
      ],
      bornDate: [
        "",
        [Validators.required, Validators.minLength(8), Validators.maxLength(60)]
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
      vicePrefFk: ["", [Validators.minLength(2), Validators.maxLength(50)]]
    });
  }

  ngOnInit() {
    this.onClose = new Subject();
  }

  submit() {
    var data = this.registerForm.value;
    console.log(data);
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
    let data = this.registerForm.value;
    this.registerForm.setValue({
      name:
        this.registerForm.value.name == ""
          ? this.user.nome
          : this.registerForm.value.name,
      cpf:
        this.registerForm.value.cpf == ""
          ? this.user.cpf
          : this.registerForm.value.cpf,
      bornDate:
        this.registerForm.value.nome == ""
          ? this.user.datanasc
          : this.registerForm.value.bornDate,
      patValor:
        this.registerForm.value.patValor == ""
          ? this.user.valorp
          : this.registerForm.value.patValor,
      numberU:
        this.registerForm.value.numberU == ""
          ? this.user.numurna
          : this.registerForm.value.numberU,
      occupation:
        this.registerForm.value.occupation == ""
          ? this.user.ocupacao
          : this.registerForm.value.occupation,
      state:
        this.registerForm.value.state == ""
          ? this.user.situacao
          : this.registerForm.value.state,
      vice: this.registerForm.value.vice == "vice" ? true : false,
      ver: this.registerForm.value.vice == "ver" ? true : false,
      party:
        this.registerForm.value.party == ""
          ? this.user.partido
          : this.registerForm.value.party,
      vicePrefFk:
        this.registerForm.value.vicePrefFk == ""
          ? this.user.vicePref
          : this.registerForm.value.vicePrefFk
    });
    console.log(data);
    this.onClose.next(data);
    this._bsModalRef.hide();
    for (let i = 1; i <= this.modalService.getModalsCount(); i++) {
      this.modalService.hide(i);
    }
  }

  public onCancel(): void {
    console.log("aqui", this.registerForm, this.modalService.getModalsCount);
    //this.onClose.next(false);
    this._bsModalRef.hide();
    for (let i = 1; i <= this.modalService.getModalsCount(); i++) {
      this.modalService.hide(i);
    }
  }
}
