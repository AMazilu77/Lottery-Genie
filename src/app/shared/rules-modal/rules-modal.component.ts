import { Component, Input, Output, EventEmitter, HostBinding } from '@angular/core';

@Component({
  selector: 'app-rules-modal',
  templateUrl: './rules-modal.component.html',
  styleUrls: ['./rules-modal.component.scss']
})
export class RulesModalComponent {
  @Input() gameTitle = '';
  @Input() quote = '';
  @Output() closed = new EventEmitter<void>();
  @HostBinding('style.position') position = 'absolute';

  view: 'rules' | 'odds' | 'theory' = 'rules';

  setView(view: 'rules' | 'odds' | 'theory') {
    this.view = view;
  }

  close() {
    this.closed.emit();
  }
}
