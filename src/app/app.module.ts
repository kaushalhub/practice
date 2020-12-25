import { NgModule } from '@angular/core'
import { BrowserModule, platformBrowser } from '@angular/platform-browser'
import { AppComponent } from './app.component'
import { CardComponent } from './card.component'


@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent ,CardComponent],
    bootstrap: [AppComponent]
})

export class AppModule {}