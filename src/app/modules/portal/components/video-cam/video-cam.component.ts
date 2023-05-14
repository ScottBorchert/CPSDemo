import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-portal-video-cam',
  templateUrl: './video-cam.component.html',
  styleUrls: ['./video-cam.component.scss']
})
export class VideoCamComponent implements OnInit {
  @ViewChild('videoElement') videoElement!: ElementRef;
  isRecording: boolean = false;
  videoAvailable: boolean = false;
  recordedChunks: any[] = [];

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
      this.videoElement.nativeElement.play();
    } catch (err) {
      console.error('Error accessing media devices.', err);
    }
  }

  startRecording() {
    const video: HTMLVideoElement = this.videoElement.nativeElement;
    this.recordedChunks = [];
    this.isRecording = true;
    const mediaStream = video.srcObject as MediaStream | null;
  
    if (mediaStream) {
      const mediaRecorder = new MediaRecorder(mediaStream);
  
      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          this.recordedChunks.push(event.data);
        }
      };
  
      mediaRecorder.onstop = () => {
        this.isRecording = false;
        this.videoAvailable = true;
        video.srcObject = mediaStream; // Reset the srcObject to keep displaying the camera video
        video.play(); // Play the video again
      };
  
      mediaRecorder.start();
    } else {
      console.error('No media stream available.');
    }
  }
  
  stopRecording() {
    const video: HTMLVideoElement = this.videoElement.nativeElement;
    const mediaStream: MediaStream | null = video.srcObject as MediaStream | null;
  
    if (mediaStream) {
      const mediaTracks = mediaStream.getTracks();
  
      mediaTracks.forEach((track: MediaStreamTrack) => {
        track.stop();
      });
      this.startVideo();
    } else {
      console.error('No media stream available.');
    }
  }
  

  downloadVideo() {
    const blob = new Blob(this.recordedChunks, { type: 'video/webm' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    document.body.appendChild(a);
    a.style.display = 'none';
    a.href = url;
    a.download = 'recorded-video.webm';
    a.click();
    window.URL.revokeObjectURL(url);
  }
}
