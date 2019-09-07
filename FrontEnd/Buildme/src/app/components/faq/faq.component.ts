import { Component, OnInit } from '@angular/core';

import { BackendServiceService } from '../../Services/backend-service.service'; //Import Backend Service
import { Faq } from '../../Classes/faq'; //Import Faq class

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  urlGetFaq = "http://localhost:4200/Faq/uploadFAQ"; //API for get all Faq questions and answers
  errorMessage = "";

  public faqs: Faq[] = [];

  constructor(private backend: BackendServiceService) { }

  ngOnInit() {
    this.GetAllFQAs();//Call function to get the FAQs while initializing the component
  }

  //Function to get all the FAQs
  GetAllFQAs(){
    this.backend.getRequest(this.urlGetFaq).subscribe(message => {
      this.faqs = message; //Assign the response to FAQs object array 
    }, error => this.errorMessage = error);
  }

}
