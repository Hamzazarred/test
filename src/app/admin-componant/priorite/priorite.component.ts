import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Tag } from 'src/app/modal/Modal';
import { TagService } from 'src/app/service/tag.service';

@Component({
  selector: 'app-priorite',
  templateUrl: './priorite.component.html',
  styleUrls: ['./priorite.component.scss']
})
export class PrioriteComponent implements OnInit {
  tasks: Array<any>=[];
  developers: Array<Tag> = [];
 
  idboutique:number;
  constructor( private toastr: ToastrService,    private route: ActivatedRoute,private httpservice:TagService,
  
    private router: Router
    ) {    this.route.params.subscribe(
      params => {
        console.log(params)
        this.idboutique = params.idBoutique});}


  ngOnInit(): void {
    this.httpservice.findTagsForBoutique(this.idboutique).subscribe((response) => {
    
    this.tasks=response

    });
  }
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
  save()
  {
    if(this.tasks.length==0)
    {
     
     this.httpservice.RongTagToBoutique(this.developers).subscribe(reponse=>{
console.log(reponse)
     })
      
    
    }
    else
    {
      this.toastr.error("All tags must be organized before they can be saved.")
    }
  }

}
function showToaster() {
  throw new Error('Function not implemented.');
}

