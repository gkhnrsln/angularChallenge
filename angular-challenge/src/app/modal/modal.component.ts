import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  @Output() close = new EventEmitter<void>();
  @Output() save = new EventEmitter<void>();
  @Input() title = '';

  closeModal() {
    this.close.emit();
  }

  saveChanges() {
    this.save.emit();
  }
}
