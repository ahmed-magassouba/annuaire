import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[collaboratorBorderCard]'
})
export class BorderCardDirective {


  private initialColor: string = '#f5f5f5';
  private defaultColor: string = '#0B162C';
  private defaultHeight: number = 180;

  constructor(
    private el: ElementRef,
  ) {
    this.setBorder('#f5f5f5');
    this.setHeight(this.defaultHeight);
  }


  @Input('collaboratorBorderCard') borderColor: string;


  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder(this.borderColor || this.defaultColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBorder(this.initialColor);
  }

  setHeight(height: number) {
    this.el.nativeElement.style.height = `${height}px`;
    this.el.nativeElement.style.boxShadow = `0px 10px 5px #b2bec3`;
    this.el.nativeElement.style.borderRadius = `10px`;
    this.el.nativeElement.style.width = `200px`;

  };

  setBorder(color: string) {
    this.el.nativeElement.style.border = `solid 2px ${color}`;
  };

}
