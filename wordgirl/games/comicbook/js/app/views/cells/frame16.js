/*global define $ requestAnimationFrame*/
/**
 *
 * Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */
define(function (require) {
	
	var Backbone = require('backbone'),
        Vars = require('app/models/vars'),
        UserEvent = require('app/events/user-event'),
        AppEvent = require('app/events/app-event'),
        CellView = require('app/views/cells/cell-view'),
        Frame;

    Frame = CellView.extend({
        initialize: function () {
            CellView.prototype.initialize.call(this);
        },

		animate: function () {
			var speed = 2;
			
            if (this.layers[0].x > this.layers[0].origin.x + 150) {
                this.layers[0].x = this.layers[0].origin.x - 300;
            }

            if (this.layers[1].x > this.layers[1].origin.x + 80 || this.layers[1].y > this.layers[1].origin.y + 150) {
                this.layers[1].x = this.layers[1].origin.x - 150;
                this.layers[1].y = this.layers[1].origin.y - 150;
            }

            if (this.layers[2].x < this.layers[2].origin.x - 300) {
                this.layers[2].x = this.layers[2].origin.x - 100;
                this.layers[2].y = this.layers[2].origin.y - 100;
            }

            if (this.layers[3].x > this.layers[3].origin.x + 100) {
                this.layers[3].x = this.layers[3].origin.x - 300;
                this.layers[3].y = this.layers[3].origin.y - 250;
            }

            if (this.layers[4].x < this.layers[4].origin.x - 200) {
                this.layers[4].x = this.layers[4].origin.x + 100;
                this.layers[4].y = this.layers[4].origin.y - 130;
            }

            if (this.layers[5].x < this.layers[5].origin.x - 100) {
                this.layers[5].x = this.layers[5].origin.x + 100;
                this.layers[5].y = this.layers[5].origin.y;
            }

            if (this.layers[6].x > this.layers[6].origin.x + 100) {
                this.layers[6].x = this.layers[6].origin.x - 400;
                this.layers[6].y = this.layers[6].origin.y - 100;
            }

            this.layers[0].x += 1 * speed;
            this.layers[1].x += 0.5 * speed;
            this.layers[1].y += 1 * speed;
            this.layers[2].x -= 0.5 * speed;
            this.layers[2].y += 1 * speed;
            this.layers[3].x += 1 * speed;
            this.layers[3].y += 1 * speed;
            this.layers[4].x -= 1 * speed;
            this.layers[4].y += 1 * speed;
            this.layers[5].x -= 1 * speed;
            this.layers[6].x += 1.4 * speed;
		},
		
		freeze: function () {
			var i;
			
            for (i = 0; i < this.layers.length; i += 1) {
                this.layers[i].x = this.layers[i].origin.x;
                this.layers[i].y = this.layers[i].origin.y;
            }
		}
		
    });

	return Frame;
});

