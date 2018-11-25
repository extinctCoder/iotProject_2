import { Component, OnInit } from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {IMqttMessage, MqttService} from 'ngx-mqtt';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-live-update',
  templateUrl: './live-update.component.html',
  styleUrls: ['./live-update.component.css']
})
export class LiveUpdateComponent implements OnInit {
  private subscription: Subscription;
  private message: string;
  private chart = [];
  private data = [];
  private weather_date = [];

  constructor(private mqtt_service: MqttService) {
    this.subscription = this.mqtt_service.observe('iotProjectV2/live-update').subscribe((message: IMqttMessage) => {
      this.message = message.payload.toString();
      this.update_chart()
      this.message = 'Data retrieval time: ' + new Date().toTimeString() + ', Data : ' + this.message;
    });
  }
  ngOnInit() {

  }

  private update_chart() {

    this.weather_date.push(new Date().toLocaleTimeString('en', { year: 'numeric', month: 'short', day: 'numeric' }));
    this.data.push( parseInt(this.message) );
    this.chart = new Chart('canvas', {
      type: 'line',
      data: {
        labels: this.weather_date,
        datasets: [
          {
            data: this.data,
            borderColor: '#3cba9f',
            fill: false,
          },
        ]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true
          }],
        }
      }
    });

    if(this.data.length >= 30) {
      this.data.pop();
      this.weather_date.pop();
      this.data.shift();
      this.weather_date.shift();
    }
  }
}
