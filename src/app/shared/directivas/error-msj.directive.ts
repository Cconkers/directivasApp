import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[ErrorMsj]',
})
export class ErrorMsjDirective implements OnInit, OnChanges {
  private _color: string = 'red';
  private _mensaje: string = 'Federico Garcilaso Lorca';

  htmlElement: ElementRef<HTMLElement>;

@Input() set color(valor:string) {
  this.htmlElement.nativeElement.style.color = valor;
  this._color = valor;
}

@Input () set mensaje(valor:string) {
  this.htmlElement.nativeElement.innerText = valor;
  this._mensaje = valor;
}

  // @Input() mensaje: string = 'Este campo es necesario';


  constructor(private el: ElementRef<HTMLElement>) {
    this.htmlElement = el;
  }

  ngOnChanges(changes: SimpleChanges): void {
    // if (changes['mensaje']) {
    //   const mensaje = changes['mensaje'].currentValue;
    //   this.htmlElement.nativeElement.innerText = mensaje;
    // }

    // if (changes['color']) {
    //   const color = changes['color'].currentValue;
    //   this.htmlElement.nativeElement.style.color = this.color;
    // }
  }

  ngOnInit(): void {

  }

  setColor(): void {
    this.htmlElement.nativeElement.style.color = this.color;
    this.htmlElement.nativeElement.classList.add('form-text');
  }

  setMensaje(): void {
    this.htmlElement.nativeElement.innerText = this.mensaje;
  }
}
