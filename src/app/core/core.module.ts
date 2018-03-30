import {ModuleWithProviders, NgModule} from "@angular/core";
import {Facebook} from "@ionic-native/facebook";
import {AuthService} from "./services/auth.service";

@NgModule({
  declarations: [
  ],
  imports: [
  ],
  bootstrap: [],
  entryComponents: [
  ],
  providers: [
  ]
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        Facebook,
        AuthService
      ]
    };
  }
}
