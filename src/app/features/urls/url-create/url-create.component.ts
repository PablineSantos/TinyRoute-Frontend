import {Component, EventEmitter, Output, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {UrlService} from '../../../core/services/url.service';
import {CreateShortUrlRequestModel} from '../../../core/models/create-short-url-request.model';
import {AuthService} from '../../../core/services/auth.service';
import {ShortUrlModel} from '../../../core/models/short-url.model';
import {ToastrService} from 'ngx-toastr';


@Component({
  selector: 'app-url-create',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './url-create.component.html',
  styleUrl: './url-create.component.css'
})
export class UrlCreateComponent {
  originalUrl = '';
  customAlias = '';
  maxClicks: number | null = null;
  expiresAt: string | null = null;

  loading = false;
  generatedUrl = signal<ShortUrlModel | null>(null); // Mostra o resultado do PDF

  @Output() created = new EventEmitter<void>();

  constructor(private urlService: UrlService, public authService: AuthService, private toastr: ToastrService) {
  }

  create(): void {
    this.loading = true;

    const payload: CreateShortUrlRequestModel = {
      originalUrl: this.originalUrl,
      customAlias: this.customAlias || null,
      maxClicks: this.authService.isLoggedIn() ? this.maxClicks : null,
      expiresAt: this.authService.isLoggedIn() ? this.expiresAt : null
    };

    this.urlService.create(payload).subscribe({
      next: (res) => {
        this.loading = false;
        this.generatedUrl.set(res);
        this.created.emit();
        this.toastr.success('Link encurtado com sucesso!', 'Pronto!');
      },
      error: (err) => {
        this.loading = false;
        const errorMessage = err.error?.message || 'Erro interno ao criar a URL.';
        this.toastr.error(errorMessage, 'Ops!');
      }
    });
  }

  reset() {
    this.generatedUrl.set(null);
    this.originalUrl = '';
    this.customAlias = '';
    this.maxClicks = null;
    this.expiresAt = null;
  }

  copyToClipboard() {
    const url = this.generatedUrl()?.shortUrl;
    if (url) {
      navigator.clipboard.writeText(url);
      this.toastr.info('Link copiado para a área de transferência', 'Copiado');
    }
  }
}
