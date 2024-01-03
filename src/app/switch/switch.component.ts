import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-switch',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './switch.component.html',
  styleUrl: './switch.component.css'
})
export class SwitchComponent 
{
  public colour : any;

  public crushName : any;

  ColorName(clr : any)
  {
    this.colour = clr;
  }

  CrushName(cn : any)
  {
    this.crushName = cn;
  }
}
