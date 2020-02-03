import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class CrudService {
  constructor(private http: HttpClient) {}
  listCandidatos(): Observable<any> {
    return this.http.get("https://localhost:5001/candidatos/index");
  }
  listCandidatoById(id): Observable<any> {
    return this.http.get("https://localhost:5001/candidatos/index" + id);
  }
  createCandidatos(): Observable<any> {
    return this.http.get("https://localhost:5001/candidatos/index");
  }
  deleteCandidatos(id): Observable<any> {
    return this.http.delete("https://localhost:5001/candidatos/index" + id);
  }
  editCandidatos(id, jsonCandidato): Observable<any> {
    return this.http.put(
      "https://localhost:5001/candidatos/index/" + id,
      jsonCandidato
    );
  }
}
