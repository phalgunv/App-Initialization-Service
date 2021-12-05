import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MyComponent1Component } from './my-component1/my-component1.component';
import { MyComponent2Component } from './my-component2/my-component2.component';
import { AppInitService } from './app-init.service';

export function initializeApplication(appInit: AppInitService) {
	return (): Promise<any> => {
		return appInit.init();
	};
}

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    MyComponent1Component,
    MyComponent2Component,
  ],
  providers: [{
    provide: APP_INITIALIZER,
    useFactory: initializeApplication,
    multi: true,
    deps: [AppInitService]
  }],
  bootstrap: [AppComponent],
})
export class AppModule {}
