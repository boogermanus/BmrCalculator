import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IBmr } from '../models/ibmr';

@Injectable({
  providedIn: 'root'
})
export class BmrService {

  private URL: string;
  readonly CONTROLLER = 'bmr';
  constructor(private httpClient: HttpClient,
    @Inject('BASE_URL') private baseURL: string) {
    this.URL = `${this.baseURL}${this.CONTROLLER}`;
  }

  saveBmr(bmr: IBmr): Promise<IBmr> {
    return this.httpClient.post<IBmr>(this.URL, bmr).toPromise();
  }

  getBmrs(): Promise<IBmr[]> {
    return this.httpClient.get<IBmr[]>(this.URL).toPromise();
  }

  deleteBmr(id: number): Promise<IBmr> {
    return this.httpClient.delete<IBmr>(`${this.URL}/${id}`).toPromise();
  }
}
