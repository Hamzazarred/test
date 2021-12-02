import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { ActivatedRoute, Router } from '@angular/router';
import { Boutique } from '../modal/Modal';
import { BoutiqueService } from '../service/boutique.service';
interface Option {
  value: string;
  viewValue: string;

}

 @Component({
  selector: 'app-register-boutique',
  templateUrl: './register-boutique.component.html',
  styleUrls: ['./register-boutique.component.scss'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {showError: true}
  }]
})
export class RegisterBoutiqueComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  form1:any={}
  form2:any={}
  form3:any={}
  form4:any={}
  tFormGroup: FormGroup;
  qFormGroup: FormGroup;
  value: number=25;
  value2 :number=1;
 Options: Option[] = [
    {value: 'TND', viewValue: 'Dinar'},
    {value: '€', viewValue: 'Euro'},
    {value: '$', viewValue: 'Dollar'}
  ];
  Options1: Option[] = [
    {value: 'Autre', viewValue: 'Autre'},
    {value: 'Accesoires', viewValue: 'Accesoires/'},
    {value: 'Meuble de maison', viewValue: 'Meuble de maison'},
    {value: 'Livre', viewValue: 'Livre/Musique/Vidéo'},
    {value: 'Bjoux', viewValue: 'Bjoux'},
    {value: 'Art', viewValue: 'Art/Photographie'},
    {value: 'Sports', viewValue: 'Sports/Fitness/Activités'},
   
    {value: 'Fourniture', viewValue: 'Fourniture de bureau'},
    {value: 'animaux', viewValue: 'Animaux/Produit pour animaux'},
    {value: 'Vétement', viewValue: 'Vétement/Chausure/'},
    {value: 'Informatique', viewValue: 'Informatique et Mutimédia'},
    {value: 'Telephone', viewValue: 'Telephone portable'},
    {value: 'Immobilire', viewValue: 'Immobilire'},
   

  ];
   
   
   
  OptionControl = new FormControl(this.Options[2].value);
 
  constructor(private boutiqueService:BoutiqueService ,private _formBuilder: FormBuilder,private router:Router,  private route:ActivatedRoute,) {}

  ngOnInit() {

    this.firstFormGroup = this._formBuilder.group({
      boutiqueName: new FormControl ('', [Validators.required]
    ),
    pays: new FormControl ('', [Validators.required]),
    device: new FormControl ('', [Validators.required])
  });
   
    this.secondFormGroup = this._formBuilder.group({
      ville: new FormControl ('', [Validators.required]
    ),
    region: new FormControl ('', [Validators.required])
  });
  this.tFormGroup = this._formBuilder.group({
    phone: new FormControl ('', [Validators.pattern("[0-9]+"),Validators.minLength(8),Validators.maxLength(11)]
  ), nomdedomaine: new FormControl ('', [Validators.required])});
  this.qFormGroup = this._formBuilder.group({
    type: new FormControl ('', [Validators.required]
  )});
  }
 
  add()
  {
    this.value=this.value+25;
    this.value2=this.value2+1;


  }
  add1()
  {
    this.value=this.value+25;
    this.value2=this.value2+1;

    this.form1=this.firstFormGroup.value;
    this.form2=this.secondFormGroup.value;
    this.form3=this.tFormGroup.value;
    this.form4=this.qFormGroup.value;

let boutique=new Boutique(this.form1.boutiqueName,this.form1.pays,this.form1.device,this.form2.ville,this.form2.region,this.form3.phone,this.form3.nomdedomaine);
    let idUser = this.route.snapshot.params.id;
     console.log(boutique)
this.boutiqueService.addBoutiqueToUser(boutique,idUser).subscribe(
  data=>{
    console.log('cv')
  },
  err=>{
    console.log(err);
  }
)
    
  }
  reset(){
   
    this.router.navigate(['/cu']) 
  }
  back(){
    this.value=this.value-25;
    this.value2=this.value2-1;
  }
}
