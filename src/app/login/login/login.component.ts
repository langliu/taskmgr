import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Quote } from '../../domain/quote.module';
import { QuoteService } from '../../services/quote.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public form: FormGroup;
  public quote: Quote = {
    cn:
      '这世界并不会在意你的自尊，这世界希望你在自我感觉良好之前先要有所成就。',
    en:
      'The world won care about your self-esteem. The world will expect you to accomplish something before you feel good about yourself.',
    pic: '/assets/img/quotes/4.jpg',
  };

  constructor(private fb: FormBuilder, private quoteService$: QuoteService) {
    this.quoteService$.getQuote().subscribe(res => (this.quote = res));
  }

  ngOnInit() {
    this.form = this.fb.group({
      email: [
        '809721414@qq.com',
        Validators.compose([Validators.required, Validators.email]),
      ],
      password: [
        '',
        Validators.compose([Validators.required, Validators.minLength(6)]),
      ],
    });
  }

  onSubmit({ value, valid }, event: Event) {
    event.preventDefault();
    console.log(value);
    console.log(valid);
  }
}
