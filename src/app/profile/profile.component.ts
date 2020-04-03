import { Component, OnInit } from "@angular/core";
import { MsalService } from "@azure/msal-angular";
import { HttpClient } from "@angular/common/http";

const GRAPH_ENDPOINT = "https://graph.microsoft.com/v1.0/me";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  profile;

  constructor(private authService: MsalService, private http: HttpClient) {}

  ngOnInit() {
    this.getProfile();
    this.getUserInfo();
  }

  getProfile() {
    this.http
      .get(GRAPH_ENDPOINT)
      .toPromise()
      .then(profile => {
        this.profile = profile;
      });
  }

  getUserInfo() {
    this.http
      .get(
        "https://raptoraksapigetway.azure-api.net/RaptorIngress/client/api/User/GetUserInformation?emailId=ravish.vaghela@ctpsandbox.com"
      )
      .toPromise()
      .then(result => console.log(result));
  }
}
