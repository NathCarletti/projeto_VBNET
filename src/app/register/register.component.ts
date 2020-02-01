import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl
} from "@angular/forms";
import { BsModalRef } from "ngx-bootstrap";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  public registerForm: FormGroup;

  constructor(public fb: FormBuilder, public modalRef: BsModalRef) {
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
          Validators.minLength(2),
          Validators.maxLength(11),
          Validators.pattern(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/) //regex cpf
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
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(60),
          Validators.pattern(/^[1-9]\d{0,2}(\.\d{3})*,\d{2}$/)
        ]
      ],
      state: [
        "",
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(3),
          Validators.pattern(
            /^(\(1[1-9]\)\s?(?:7|9\d)\d{3}-\d{4}|(?:\(2[12478]\)|\(3[1-578]\)|\([4689][1-9]\)|\(5[13-5]\)|\(7[13-579]\))\s?(?:[6-8]|9\d?)\d{3}-\d{4})$/
          )
        ]
      ],
      numberU: [
        "",
        [
          Validators.minLength(1),
          Validators.maxLength(3),
          Validators.pattern(/[^0-9.]/)
        ]
      ],
      ocupation: [
        "",
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(100)
        ]
      ],
      councilor: ["", [Validators.minLength(2), Validators.maxLength(100)]],
      vicePresFk: [
        "",
        [
          Validators.minLength(2),
          Validators.maxLength(60),
          Validators.pattern(/^(\d){0,5}?$/)
        ]
      ]
    });
  }

  ngOnInit() {}
}
