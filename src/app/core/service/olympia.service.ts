import {Athlete} from "../types/athlete";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable()
export class OlympiaService {
  constructor(private http: HttpClient) { }

  getAthletesResponse() {
    return this.http.get<Athlete[]>(environment.apiPath + "/athletes")
  }
}
