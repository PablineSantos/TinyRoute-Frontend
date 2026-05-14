import {Component, OnInit, ViewChild} from '@angular/core';
import {UrlCreateComponent} from '../urls/url-create/url-create.component';
import {NavbarComponent} from '../../shared/components/navbar/navbar.component';
import {UrlListComponent} from '../urls/url-list/url-list.component';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {debounceTime, distinctUntilChanged} from 'rxjs';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [UrlCreateComponent, UrlListComponent, NavbarComponent,ReactiveFormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  @ViewChild(UrlListComponent) urlListComponent!: UrlListComponent;
  showCreateForm:boolean = true;

  searchControl:FormControl<string|null> = new FormControl('');

  constructor() {
    this.searchControl.valueChanges.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      takeUntilDestroyed()
    ).subscribe(termoPesquisa => {
      if (this.urlListComponent) {
        this.urlListComponent.loadUrls(termoPesquisa || '');
      }
    });
  }

  toggleCreate():void  {
    this.showCreateForm = !this.showCreateForm;
  }

  onCreated(): void {
    setTimeout(():void => {
      if (this.urlListComponent) {
        this.searchControl.setValue('', { emitEvent: false });
        this.urlListComponent.loadUrls();
      }
    }, 300);
  }
}
