import { Component } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  progressStep: number = 0;

  scrollToScene(sceneNumber: number){

    if (sceneNumber > this.progressStep) this.progressStep = sceneNumber

    let id = "scene" + sceneNumber

    setTimeout(() => { //1ms timeout on this so that the DOM can update before attempting to scroll
      this.smoothScroll(id)
    }, 1);


  }

  smoothScroll(id: string){
    let el = document.getElementById(id);

    if (el) {
      el.scrollIntoView({
        behavior: 'smooth'
        
      })
    } else {
      throw new Error("element not found");
    }
  }

}
