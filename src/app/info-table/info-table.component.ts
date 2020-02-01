import { Component, OnInit } from "@angular/core";
import { BsModalService } from "ngx-bootstrap";
import { BsModalRef } from "ngx-bootstrap/modal/bs-modal-ref.service";
import { ModalComponent } from "../modal/modal.component";

@Component({
  selector: "app-info-table",
  templateUrl: "./info-table.component.html",
  styleUrls: ["./info-table.component.css"]
})
export class InfoTableComponent implements OnInit {
  public modalRef: BsModalRef;

  data = ["nome", "cpf"];
  constructor(private modalService: BsModalService) {}

  ngOnInit() {}

  deleteUser(user) {
    this.modalRef = this.modalService.show(ModalComponent);
    this.modalRef.content.buttonCancel = { show: true, text: "CANCELAR" };
    this.modalRef.content.buttonDelete = { show: true, text: "DELETAR" };
    // tslint:disable-next-line:max-line-length
    this.modalRef.content.title = "Deletar" + user + "?";
    this.modalRef.content.message =
      "Deseja deletar o usuário" + user + "do sistema?";
    //if (this.modalRef.content.buttonOk){}
    this.modalRef.content.onClose.subscribe(result => {
      console.log(result);
      if (result) {
        //Aqui vem a rota de deletar usuario.subscribe(res => {})
      }
    });
  }
}
