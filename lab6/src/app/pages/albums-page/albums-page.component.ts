import { Component } from '@angular/core';
import { IAlbum } from 'src/app/models/album';
import { AlbumsService } from 'src/app/service/albums.service';

@Component({
  selector: 'app-albums-page',
  templateUrl: './albums-page.component.html',
  styleUrls: ['./albums-page.component.css'],
})
export class AlbumsPageComponent {
  albums: IAlbum[] = [];
  newAlbum: IAlbum = {} as IAlbum;
  newAlbumTitle: string = '';

  constructor(private albumsService: AlbumsService) {}

  addAlbum() {
    this.albumsService.addAlbum(this.newAlbum).subscribe((album) => {
      this.albums.push(album);
      this.newAlbum = {} as IAlbum;
    });
  }
}
