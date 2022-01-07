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

  @Input() set color(valor: string) {
    this.htmlElement.nativeElement.style.color = valor;
    this._color = valor;
  }

  @Input() set valido(valor: boolean) {
    if (valor) {
      this.htmlElement.nativeElement.classList.add('ocultar');
    }else{
    this.htmlElement.nativeElement.classList.remove('ocultar');
  }
}

  @Input() set mensaje(valor: string) {
    this.htmlElement.nativeElement.innerText = valor;
    this._mensaje = valor;
  }

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
    this.setColor();
    this.setMensaje;
  }

  setEstilo(): void {
    this.htmlElement.nativeElement.classList.add('form-text');
  }

  setColor(): void {
    this.htmlElement.nativeElement.style.color = this._color;
  }

  setMensaje(): void {
    this.htmlElement.nativeElement.innerText = this._mensaje;
  }
}
