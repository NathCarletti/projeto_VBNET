import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { InfoTableComponent } from "./info-table/info-table.component";
import { RegisterComponent } from "./register/register.component";
import { ModalComponent } from "./modal/modal.component";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { ModalModule } from "ngx-bootstrap/modal";
import { ReactiveFormsModule } from "@angular/forms";
import { NgxMaskModule, IConfig } from "ngx-mask";
import { CrudService } from "./services/crud-service.component";
import { HttpClientModule } from "@angular/common/http";

export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;

@NgModule({
  declarations: [
    AppComponent,
    InfoTableComponent,
    RegisterComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxMaskModule.forRoot(options),
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [CrudService],
  bootstrap: [AppComponent],
  exports: [BsDropdownModule, TooltipModule, ModalModule],
  entryComponents: [ModalComponent, RegisterComponent]
})
export class AppModule {}
