import { Foods } from './app/shared/models/food';
import { Tag } from './app/shared/models/Tag';

export const sample_foods: Foods[] = [
  
    {
        id:1,
        name:'ButterScotch CupCake',
        price: 30,
        favorite: false,
        imageUrl: 'assets/images/BD.png',
        tags: ['Essence']
      },
      {
        id:2,
        name:'Nuttela CupCake',
        price: 30,
        favorite:false,
        imageUrl: 'assets/images/Nut.png',
        tags: ['Chololate']
      },
      {
        id:3,
        name:'Strawberry CupCake',
        price: 30,
        favorite:false,
        imageUrl: 'assets/images/Stra.png',
        tags: ['FruitFlavour']
      },
      {
        id:4,
        name:'Pista CupCake',
        price: 20,
        favorite:false,
        imageUrl:'assets/images/Pista.png',
        tags: ['Essence']
      },
      {
        id:5,
        name:'Gulabjab CupCake',
        price: 70,
        favorite:false,
        imageUrl:  'assets/images/Gul.png',
        tags: [ 'SweetFlavour']
      },
      {
        id:6,
        name:'Chocolate CupCake',
        price: 40,
        favorite:false,
        imageUrl: 'assets/images/Cho.png',
        tags: ['Chocolate']
      },
      { 
        id:7,
        name:'Mango CupCake',
        price: 40,
        favorite:false,
        imageUrl:   'assets/images/Man.png',
        tags: ['FruitFlavour']

      }
     
      
     
      
      
  
    ]
  


export const sample_tags:Tag[] = [
    
        { name : 'Chocolate' ,count :1},
        { name : 'FruitFlavour' ,count :1},
        { name : 'Essence' ,count :1},
        { name : 'SweetFlavour' ,count :1},
         {name:'All',count:100}
      ]