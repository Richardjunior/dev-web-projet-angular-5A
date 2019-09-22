var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
let NgbdratingBasicComponent = class NgbdratingBasicComponent {
    constructor() {
        this.currentRate = 8;
        this.currentRate2 = 2;
        this.selected = 0;
        this.hovered = 0;
        this.readonly = false;
        // for form integration
        this.ctrl = new FormControl(null, Validators.required);
    }
    toggle() {
        if (this.ctrl.disabled) {
            this.ctrl.enable();
        }
        else {
            this.ctrl.disable();
        }
    }
};
NgbdratingBasicComponent = __decorate([
    Component({
        selector: 'app-ngbd-rating',
        templateUrl: './rating.component.html',
        styles: [
            `
      .star {
        font-size: 1.5rem;
        color: #b0c4de;
      }
      .filled {
        color: #1e90ff;
      }
      .heart {
        position: relative;
        display: inline-block;
        font-size: 3rem;
        color: #d3d3d3;
      }
      .full {
        color: red;
      }
      .half {
        position: absolute;
        display: inline-block;
        overflow: hidden;
        color: red;
      }
    `
        ]
    })
], NgbdratingBasicComponent);
export { NgbdratingBasicComponent };
//# sourceMappingURL=rating.component.js.map