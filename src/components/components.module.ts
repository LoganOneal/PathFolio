import { NgModule } from '@angular/core';
import { ProgressBarComponent } from './progress-bar/progress-bar';
import { FlashCardComponent } from './flash-card/flash-card';
import { AltClassComponent } from './alt-class/alt-class';
@NgModule({
	declarations: [ProgressBarComponent,
    FlashCardComponent,
    AltClassComponent],
	imports: [],
	exports: [ProgressBarComponent,
    FlashCardComponent,
    AltClassComponent]
})
export class ComponentsModule {}
