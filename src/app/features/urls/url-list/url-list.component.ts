import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {UrlService} from '../../../core/services/url.service';
import {ShortUrlModel} from '../../../core/models/short-url.model';
import {Router} from '@angular/router';
import {DatePipe, UpperCasePipe} from '@angular/common';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-url-list',
  standalone: true,
  imports: [DatePipe, UpperCasePipe],
  templateUrl: './url-list.component.html',
  styleUrl: './url-list.component.css'
})
export class UrlListComponent implements OnInit {

  urls: ShortUrlModel[] = [];

  constructor(private readonly urlService: UrlService, private readonly cdr: ChangeDetectorRef, private readonly router: Router, private toastr: ToastrService) {
  }

  goBack() {
    this.router.navigate(['/dashboard']);
  }

  loadUrls(alias: string = ''): void {
    this.urlService.listMy(alias).subscribe({
      next: (data) => {
        this.urls = [...data];
        this.cdr.detectChanges();
      },
      error: () => this.toastr.error('Não foi possível carregar os seus links.', 'Ops!')
    });
  }

  ngOnInit()
    :
    void {
    this.loadUrls();
  }

  copyLink(url: string) {
    navigator.clipboard.writeText(url);
    this.toastr.success('Link copiado!', 'Sucesso');
  }

  delete(id: number): void {
    if (confirm('Tem certeza que deseja excluir esta URL?')) {
      this.urlService.delete(id).subscribe({
        next: () => {
          this.urls = this.urls.filter(url => url.id !== id);
          this.toastr.success('URL excluída com sucesso!', 'Feito');
        }, error: () => this.toastr.error('Não foi possível excluir a URL', 'Erro')
      });
    }
  }
}
