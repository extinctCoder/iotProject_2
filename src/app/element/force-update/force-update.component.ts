import { Component, OnInit, NgZone } from '@angular/core';
import {IMqttMessage, MqttService} from 'ngx-mqtt';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-force-update',
  templateUrl: './force-update.component.html',
  styleUrls: ['./force-update.component.css']
})
export class ForceUpdateComponent implements OnInit {
  private log_data: string;
  private subscription: Subscription;
  private message: string;

  constructor(private mqtt_service: MqttService) {
    this.subscription = this.mqtt_service.observe('iotProjectV2/force-update/data').subscribe((message: IMqttMessage) => {
      this.message = message.payload.toString();
      this.message = 'Data retrieval time: ' + new Date().toTimeString() + ', Data : ' + this.message;
    });
  }

  ngOnInit() {
  }

  call_update() {
    this.mqtt_service.unsafePublish('iotProjectV2/force-update/command', '1', {qos: 1, retain: true});
    this.log_data = 'Last call was in ' + new Date().toTimeString();
  }
}
