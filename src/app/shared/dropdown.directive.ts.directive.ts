import { Directive, ElementRef, HostBinding, HostListener, Input, Output, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdownDirectiveTs]'
})
export class DropdownDirectiveTsDirective {

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  private isOpen = false;

  @HostListener("click") mouseclick(eventData: Event) {
    console.log('Pippo!')

    const dropDownMenu = this.elRef.nativeElement.nextElementSibling;
    // console.log('dropDownMenu: ', dropDownMenu)
    if (!this.isOpen) {
      this.renderer.addClass(dropDownMenu, 'show');
    } else {
      this.renderer.removeClass(dropDownMenu, 'show');
    }
    this.isOpen = !this.isOpen;

    document.addEventListener('click', (event) => {
      if (event.target !== this.elRef.nativeElement) {
          this.isOpen = false;
          this.renderer.removeClass(dropDownMenu, 'show');
      }
    });
  }
}

