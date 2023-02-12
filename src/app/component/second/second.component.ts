import { Component } from "@angular/core";

@Component({
    selector: "app-second",
    templateUrl: "./second.component.html",
    styleUrls: ["./second.component.css"]
})

export class SecondComponent{

  public images = [
        // "https://en.wikipedia.org/wiki/Nature#/media/File:Shaqi_jrvej.jpg",
        // "https://en.wikipedia.org/wiki/Nature#/media/File:Bachalpsee_reflection.jpg",
        // "https://en.wikipedia.org/wiki/Nature#/media/File:Levi,_Kittila_-_Finland_-_panoramio_-_aristidov_(7).jpg",
        // "https://en.wikipedia.org/wiki/Nature#/media/File:Galunggung.jpg"

        // {url: "assets/Images/1.jpg"},
        // {url: "assets/Images/2.jpg"},
        // {url: "assets/Images/3.jpg"},
        // {url: "assets/Images/4.jpg"}

        "assets/images/1.jpg",
        "assets/images/2.jpg",
        "assets/images/3.jpg",
        "assets/images/4.jpg"

  ]

public imageSlide = this.images[0];



public next(){
    this.imageSlide = this.imageSlide[this.imageSlide.indexOf(this.imageSlide) + 1] ?? this.imageSlide[this.imageSlide.length -1];
}

public previous(){
    this.imageSlide = this.imageSlide[this.imageSlide.indexOf(this.imageSlide) - 1] ?? this.imageSlide[0];
}
    
public interval: any;

public start(){
    const here = this;
    this.interval = setInterval(
        function(here: any){
            const img = here.imageSlide.indexOf(here.imageSlide)
            if (img === here.imageSlide.length - 1){
                here.imageSlide = here.imageSlide[0];
            }
            else{
                here.imageSlide = here.imageSlide[img+1];

            }
        }, 
        500,
        here
    );
}

public stop(){
    clearInterval(this.interval ?? null)
}

}