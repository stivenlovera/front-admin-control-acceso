import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.css']
})
export class ContactosComponent implements OnInit {

  constructor(
    private metaTagService: Meta,
    private titleService:Title
  ) { }

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
      { name: 'og:type', content: 'annix-contactos' },
      { name: 'og:url', content: 'https://anniix.com' },
      { name: 'og:title', content: 'Test contacts' },
      { name: 'og:description', content: 'Descripcion de contactos' },
      { name: 'og:image', content: 'https://ik.imagekit.io/u1gy0bysycr/327274-love-live-school-idol-paradise-vol-3-lily-white-ps-vita-front-cover_dh8HDfjoK.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651940910898' },
      //metas de  prueba
    ]);
  }

}
