import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-portal-video-cam',
  templateUrl: './video-cam.component.html',
  styleUrls: ['./video-cam.component.scss']
})
export class VideoCamComponent implements OnInit {
  @ViewChild('videoElement') videoElement!: ElementRef;

  constructor() { }

  ngOnInit(): void {
    this.startVideo();
  }

  async startVideo() {
    try {
      const constraints = {
        video: {
          width: { ideal: 1280 },
          height: { ideal: 720 }
        }
      };

      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      this.videoElement.nativeElement.srcObject = stream;
    } catch (err) {
      console.error('Error accessing media devices.', err);
    }
  }
}

/*
This code is an Angular component written in TypeScript, which initializes and displays a video stream from the user's webcam using the WebRTC (Web Real-Time Communication) API. Let me explain it step by step:

1. Import statements:
   - `Component`, `OnInit`, `ViewChild`, and `ElementRef` are imported from `@angular/core`. These are used to create Angular components, handle lifecycle hooks, and access DOM elements, respectively.

2. Component decorator:
   - `@Component` is a decorator that provides metadata for the Angular component.
   - `selector`: 'app-video-cam' defines the custom HTML tag that will be used to insert this component.
   - `templateUrl`: The path to the component's HTML template file.
   - `styleUrls`: An array containing the path to the component's CSS style file.

3. Component class:
   - `VideoCamComponent` class is defined, which implements the `OnInit` lifecycle hook.
   - `@ViewChild('videoElement') videoElement!: ElementRef;` is a decorator that queries the DOM for an element with a local reference named "videoElement" and stores the ElementRef instance.

4. Constructor:
   - The constructor is empty in this case, as there's no need for any dependency injection or additional setup.

5. ngOnInit lifecycle hook:
   - `ngOnInit` is a lifecycle hook called after the component is initialized. In this case, it calls the `startVideo` method.

6. startVideo method:
   - This is an asynchronous method that captures the video stream from the user's webcam and assigns it to the videoElement's `srcObject` property.
   - `constraints` is an object that defines the desired video resolution (1280x720).
   - `navigator.mediaDevices.getUserMedia(constraints)` is a promise that resolves to a MediaStream object if the user grants access to their webcam.
   - In case of any error while accessing the media devices, an error message is logged to the console.

This component can be used in an Angular application to display a live video stream from the user's webcam.
 */