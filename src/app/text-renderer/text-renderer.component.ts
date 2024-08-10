import { Component } from '@angular/core';

@Component({
  selector: 'app-text-renderer',
  templateUrl:'./text-renderer.component.html',
   
  
  styles: [`
    div {
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 5px;
    }
  `]
})
export class TextRendererComponent {
  renderedContent: string;

  constructor() {
    // Simulated text content from a text area input
    const textAreaContent = `Hip Knee Programme&nbsp; Green band 6 ds&nbsp; then continue at home<div><br></div><div><br></div><div>1st Week September repeat ALL BLUE ( Leg And Shoulder)&nbsp; 6days then continue at home<br>|<h1>Review in October</h1>&nbsp;</div><div><br></div><div><br></div>`;
    
    // Sanitize the content to prevent XSS attacks
    this.renderedContent = this.sanitizeContent(textAreaContent);
  }

  sanitizeContent(content: string): string {
    // Implement content sanitization logic here
    // For demonstration purposes, we can use a simple sanitizer
    return content.replace(/<script.*?>.*?<\/script>/gi, '');
  }
}
