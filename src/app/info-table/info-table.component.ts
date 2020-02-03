import { Component, OnInit } from "@angular/core";
import { BsModalService } from "ngx-bootstrap";
import { BsModalRef } from "ngx-bootstrap/modal/bs-modal-ref.service";
import { ModalComponent } from "../modal/modal.component";
import { RegisterComponent } from "../register/register.component";
import { CrudService } from "../services/crud-service.component";

@Component({
  selector: "app-info-table",
  templateUrl: "./info-table.component.html",
  styleUrls: ["./info-table.component.css"]
})
export class InfoTableComponent implements OnInit {
  public modalRef: BsModalRef;
  public modalRefReg: BsModalRef;
  public listAll;
  data = ["nome", "cpf"];
  constructor(
    private modalService: BsModalService,
    private crudService: CrudService
  ) {}

  ngOnInit() {
    this.crudService.listCandidatos().subscribe(res => {
      console.log(res);
      this.listAll = res;
    });
  }

  openRegisterModal() {
    this.modalRefReg = this.modalService.show(RegisterComponent);
    this.modalRefReg.content.buttonCancel = { show: true, text: "CANCELAR" };
    this.modalRefReg.content.buttonDelete = { show: true, text: "SALVAR" };
    this.modalRefReg.content.onClose.subscribe(res => {
      console.log("register", res);
      this.crudService.createCandidatos().subscribe(
        res => {
          console.log("salvei", res);
        },
        err => {
          console.log("deu erro", err);
        }
      );
    });
  }

  editUserModal(user) {
    console.log(user);
    this.modalRef = this.modalService.show(RegisterComponent);
    this.modalRef.content.buttonCancel = { show: true, text: "CANCELAR" };
    this.modalRef.content.buttonDelete = { show: true, text: "SALVAR" };
    this.modalRef.content.user = user;
    this.modalRef.content.isEdit = true;
  }

  deleteUser(user) {
    this.modalRef = this.modalService.show(ModalComponent);
    this.modalRef.content.buttonCancel = { show: true, text: "CANCELAR" };
    this.modalRef.content.buttonDelete = { show: true, text: "DELETAR" };
    // tslint:disable-next-line:max-line-length
    this.modalRef.content.title = "Deletar " + user.nome + "?";
    this.modalRef.content.message =
      "Deseja deletar o usuário " + user.nome + " do sistema?";
    //if (this.modalRef.content.buttonOk){}
    this.modalRef.content.onClose.subscribe(result => {
      console.log(result);
      if (result) {
        //Aqui vem a rota de deletar usuario.subscribe(res => {})
      }
    });
  }
}
