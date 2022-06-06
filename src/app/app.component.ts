import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    private metaTagService: Meta,
    private titleService:Title
  ){

  }
  ngOnInit(): void {
    this.titleService.setTitle("Esto son contactos");
    this.metaTagService.addTags([
      {
        name: 'keywords',
        content: 'Angular SEO Integration, Music CRUD, Angular Universal',
      },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Digamber Singh' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'date', content: '2019-10-31', scheme: 'YYYY-MM-DD' },
      { charset: 'UTF-8' },
      { name: 'og:type', content: 'annix' },
      { name: 'og:url', content: 'https://anniix.com' },
      { name: 'og:title', content: 'Test inicio' },
      { name: 'og:description', content: 'Descripcion de inicio' },
      { name: 'og:image', content: 'https://ik.imagekit.io/u1gy0bysycr/images_3MRGTjOVc.jfif?ik-sdk-version=javascript-1.4.3&updatedAt=1651940965024' },
      //metas de  prueba
    ]);


  }
  title = 'anniix-ssr';

  isMenuOpen = true;
  contentMargin = 240;

  onToolbarMenuToggle() {
    //console.log('On toolbar toggled', this.isMenuOpen);
    this.isMenuOpen = !this.isMenuOpen;

    if(!this.isMenuOpen) {
      this.contentMargin = 70;
    } else {
      this.contentMargin = 240;
    }
  }
}
