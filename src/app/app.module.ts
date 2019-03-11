import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {SuiDropdownModule, SuiModalModule, SuiSidebarModule} from 'ng2-semantic-ui';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PoseComponent } from './pose/pose.component';
import { MenuComponent } from './menu/menu.component';
import {ObstacleListComponent} from './environment/obstacle/obstacle-list.component';
import {FormsModule} from '@angular/forms';
import {AddObstacleComponent} from './environment/add-obstacle/add-obstacle.component';
import {BoxValuesComponent} from './environment/obstacle/box/box-values.component';
import {EnvironmentComponent} from './environment/environment.component';
import {CapsuleValuesComponent} from './environment/obstacle/capsule/capsule-values.component';
import {EmptyComponent} from './environment/obstacle/empty/empty.component';
import {PlaneValuesComponent} from './environment/obstacle/plane/plane-values.component';
import {ToolListComponent} from './tool/tool-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PoseComponent,
    MenuComponent,
    AddObstacleComponent,
    ObstacleListComponent,
    BoxValuesComponent,
    EnvironmentComponent,
    CapsuleValuesComponent,
    EmptyComponent,
    PlaneValuesComponent,
    ToolListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SuiDropdownModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
