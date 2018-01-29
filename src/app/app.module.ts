import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material';

// 引入自定义模块
import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './login/login.module';
import { CoreModule } from './core/core.module';
import { ProjectModule } from './project/project.module';
import { TaskModule } from './task/task.module';

// 导入组件
import { AppComponent } from './app.component';
import { QuoteService } from './services/quote.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CoreModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    LoginModule,
    AppRoutingModule,
    ProjectModule,
    TaskModule,
  ],
  providers: [QuoteService],
  bootstrap: [AppComponent],
})
export class AppModule {}
