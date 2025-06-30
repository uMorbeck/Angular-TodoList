import { inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CataasService {
  private http = inject(HttpClient);

  getImg(): Observable<Blob> {
    return this.http.get('https://cataas.com/cat?type=square&position=center', {
      headers: {
        Accept: 'image/*'
      },
      responseType: 'blob'})
  }
}
