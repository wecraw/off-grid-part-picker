import { Component } from '@angular/core';
import { BuildSpecs } from '../common/build-specs';
import { testAppliances } from '../common/appliance-groups';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  buildSpecs: BuildSpecs = {} as BuildSpecs;

  fadeOutScene: number = -1;
  fadeInScene: number = -1;

  progressStep: number = 0;

  testAppliances = testAppliances


  buildTypeSelect(type: 'van' | 'cabin'){
    this.buildSpecs.buildType = type
    this.next()
  }

  setupTypeSelect(type: 'simple' | 'custom'){
    this.buildSpecs.setupType = type
    this.next()
  } 


  //helpers
  isSimpleMode(){
    return this.buildSpecs.setupType === 'simple'
  }


  //DOM helpers-----------------------------------------------------
  isFadeOut(sceneNumber: number){
    return this.fadeOutScene === sceneNumber
  }

  isFadeIn(sceneNumber: number){
    return this.fadeInScene === sceneNumber
  }

  back(){
    this.fadeToScene(this.progressStep, this.progressStep - 1)
  }

  next(){
    this.fadeToScene(this.progressStep, this.progressStep + 1)
  }

  fadeToScene(tranisitonFrom: number, transitionTo: number){
    this.fadeOutScene = tranisitonFrom;

    setTimeout(() => {
      this.fadeInScene = transitionTo
      this.progressStep = transitionTo
    }, 300) //duration of fade out animation

  }
}
