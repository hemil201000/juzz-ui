import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [HttpClientModule , FormsModule],
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  amount: number | null = null;
  qrCodeImage: string = ''; // URL or byte array for QR code
  receipt: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Retrieve data from the previous route
    this.route.queryParams.subscribe(params => {
      this.amount = +params['amount'];
      this.qrCodeImage = params['qrCodeImage']; // Assuming you pass the image as a URL
      this.receipt = params['receipt'];
    });
  }


  enterUPIId() {
    // Logic for copying UPI ID
  }
}