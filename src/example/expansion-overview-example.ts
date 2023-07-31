import { Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';

/**
 * @title Basic expansion panel
 */
@Component({
  selector: 'expansion-overview-example',
  templateUrl: 'expansion-overview-example.html',
  styleUrls: ['expansion-overview-example.scss'],
  standalone: true,
  imports: [MatExpansionModule],
})
export class ExpansionOverviewExample {
  panelOpenState = false;
}

/**  Copyright 2023 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */
