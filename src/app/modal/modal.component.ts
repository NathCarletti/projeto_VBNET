import { Component, OnInit } from "@angular/core";
import { Subject } from "rxjs";
import { BsModalRef } from "ngx-bootstrap/modal";

@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.css"]
})
export class ModalComponent implements OnInit {
  public title: any;
  public message: any;
  public globalClass: string;

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

  constructor(private _bsModalRef: BsModalRef) {}

  public ngOnInit(): void {
    this.onClose = new Subject();
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
