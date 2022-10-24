import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdownDirectiveTs]'
})
export class DropdownDirectiveTsDirective {

  //@Input() rcpSelec: Recipe;

  // @Input() defaultBgColor: string = "transparent";
  // @Input() highlightBgColor: string = "blue";

  @Input() defaultColor: string = "black";
  @Input() highlightColor: string = "yellow";

  // @HostBinding("style.backgroundColor") backgroundColor: string;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  @HostListener("click") mouseclick(eventData: Event) {
    console.log('Pippo!')
    // this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'blue')
    //this.backgroundColor = this.highlightBgColor;
    this.renderer.setStyle(this.elRef.nativeElement, "color", this.highlightColor);
    this.renderer.addClass(this.elRef.nativeElement, 'show')
  }

  @HostListener("mouseenter") mouseover(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'blue')
    // this.backgroundColor = this.highlightBgColor;
    this.renderer.setStyle(this.elRef.nativeElement, "color", this.highlightColor);

  }

  @HostListener("mouseleave") mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'transparent')
    // this.backgroundColor = this.defaultBgColor;
    this.renderer.setStyle(this.elRef.nativeElement, "color", this.defaultColor);
  }

}

