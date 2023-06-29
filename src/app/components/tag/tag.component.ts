import { Component ,Input,OnInit } from '@angular/core';
import { FoodserviceService } from 'src/app/services/foodservice.service';
import { Tag } from 'src/app/shared/models/Tag';
import { Foods } from 'src/app/shared/models/food';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit{
  @Input()
 
  foodpagetags?:string[];
  tags:Tag[] =[];
  constructor(private fs: FoodserviceService){}

  ngOnInit(): void {
    if(!this.foodpagetags)
    this.tags = this.fs.getAllTag();
  }

}
