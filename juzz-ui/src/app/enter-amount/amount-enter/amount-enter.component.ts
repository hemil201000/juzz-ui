import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; 
import { Router } from '@angular/router';

interface ApiResponse {
  qrCodeImage: string; // Adjust the type based on your actual data
  receipt: string;
}

@Component({
  selector: 'app-amount-enter',
  standalone: true,
  imports: [HttpClientModule , FormsModule],
  templateUrl: './amount-enter.component.html',
  styleUrl: './amount-enter.component.css'
})
export class AmountEnterComponent {
  amount: number | null = null;

  constructor(private http: HttpClient , private router: Router) {}

  addAmount() {
    if (this.amount) {
      this.http.post<ApiResponse>('http://localhost:8082/transaction/generateQR', { amount: this.amount })
        .subscribe({
          next: (response: ApiResponse) => {
            console.log(response)
            const qrCodeImage = response.qrCodeImage; // Now TypeScript knows this exists
            const receipt = response.receipt;

            this.router.navigate(['/payment'], {
              queryParams: {
                amount: this.amount,
                qrCodeImage: qrCodeImage,
                receipt: receipt
              }
            });
          },
          error: (error) => {
            console.error('Error occurred:', error);
          }
        });
    } else {
      alert('Please enter an amount.');
    }
  }
}
