import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Slider } from 'src/app/modal/Modal';
import { SliderService } from 'src/app/service/slider.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  public addmore: FormGroup;
  userFile ;
  ary:any;
  imgURL: any;
  url: any;
  idboutique:any;
  public imagePath;
  httpservice: any;
  constructor(private _fb: FormBuilder,private sliderService : SliderService,private route: ActivatedRoute) { 
    this.route.params.subscribe(
      params => {
        console.log(params)
      
      this.idboutique=params.idBoutique
      
        this.sliderService.findSliderForBoutique( params.idBoutique).subscribe((slider)=>
        {    
           this.slides=slider
          if( slider.length!=0){
            this.deleteRow(0);
          } 
        
         console.log(slider)
         
            slider.map(x=> {
              this.upaddNewRow1(x.image,x.titre,x.description,x.height,x.width);
                           
            });  
        });
      });
      
      }
      
  slides :Slider[]
  ngOnInit(): void {
   
   
 
    this.addmore = this._fb.group({
      titre:[''],
      description:[''],
      width:[''],
      height:[''],
   
  image :[''],
      itemRows: this._fb.array([this.initItemRows()])
  
    });
    this.uploaddata()
  }

  uploaddata(){
 }
  upaddNewRow1(image:string,titre:string,description:string,width:number,height:number) {
    this.formArr.push(this.upinitItemRows(image,titre,description,width,height));
   
   
  }
  upinitItemRows(image: string,titre:string,des:string,width:number,height:number) {
    return this._fb.group({

  titre:[titre],
      description:[des],
    
   
  image :[image],
  width:[height],
  height:[width]

    });
  }
  initItemRows() {
    return this._fb.group({
    titre:[''],
    description:[''],
    width:[''],
   height:[''],
   image:[''],
    });
  }
 sup(){
   this.ary=this.formArr.value
      for(var i=0;i<this.ary.length;i++)
   {
 this.ary[i].image=this.ary[i].image.replace(/^.*[\\\/]/, '')
 this.ary[i].image=   '/assets/' +this.ary[i].image;  
 
   }
   this.slides=this.ary
 }
 save()
 {this.sup()
   console.log(this.slides)
    
    this.sliderService.editSliderToBoutique(this.slides, this.idboutique).subscribe(category => {
   
     
    });
     
   
 
 } 
  deleteRow(index: number) {
    this.formArr.removeAt(index);
  }
  addNewRow() {
    this.formArr.push(this.initItemRows());
    
  
  
  }  
  get formArr() {
    return this.addmore.get('itemRows') as FormArray;
  }
  onSelectFile(event) {
    if (event.target.files.length > 0)
    {
      const file = event.target.files[0];
      this.userFile = file;
   
     // this.f['profile'].setValue(file);

    var mimeType = event.target.files[0].type;
    if (mimeType.match(/image\/*/) == null) {


      return;
    }

    var reader = new FileReader();

    this.imagePath = file;
    reader.readAsDataURL(file);

    this.sup()
  }


    }
}
