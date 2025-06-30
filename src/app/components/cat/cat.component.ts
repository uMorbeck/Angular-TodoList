import { Component, OnInit } from '@angular/core';
import { CataasService } from '../../services/cataas.service';

@Component({
  selector: 'app-cat',
  imports: [],
  templateUrl: './cat.component.html',
  styleUrl: './cat.component.css'
})
export class CatComponent implements OnInit {
  imageSrc: string = '';

  constructor(private catService: CataasService) {}

  ngOnInit(): void {
    this.catService.getImg().subscribe(blob => {
      console.log(blob)
      const objectURL = URL.createObjectURL(blob);
      this.imageSrc = objectURL;
    });
    console.log(this.imageSrc)
  }
}
