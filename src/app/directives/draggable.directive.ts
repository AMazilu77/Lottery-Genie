import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDraggable]'
})
export class DraggableDirective {
  private isDragging = false;
  private startX = 0;
  private startY = 0;

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.position = 'absolute';
  }

  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent) {
    this.isDragging = true;
    this.startX = event.clientX - this.el.nativeElement.offsetLeft;
    this.startY = event.clientY - this.el.nativeElement.offsetTop;
    document.addEventListener('mousemove', this.onMouseMove);
    document.addEventListener('mouseup', this.onMouseUp);
  }

  onMouseMove = (event: MouseEvent) => {
    if (this.isDragging) {
      this.el.nativeElement.style.left = `${event.clientX - this.startX}px`;
      this.el.nativeElement.style.top = `${event.clientY - this.startY}px`;
    }
  };

  onMouseUp = () => {
    this.isDragging = false;
    document.removeEventListener('mousemove', this.onMouseMove);
    document.removeEventListener('mouseup', this.onMouseUp);
  };
}
