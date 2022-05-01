import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductService } from '../../../shared/services/product.service';

import { Product } from '../../../shared/models/Product';
import { Image } from '../../../shared/models/Image';
import { Subscription } from 'rxjs';
import { ImageService } from '../../../shared/services/image.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {

  products? : Array<Product>;
  images? : Array<Image>;

  productsLoadingSubscription?: Subscription;
  imagesLoadingSubscription?: Subscription;

  constructor(
    private productService : ProductService,
    private imageService : ImageService
  ) { }

  ngOnInit(): void {
    this.productsLoadingSubscription = this.productService.loadProducts().subscribe((data: Array<Product>) => {
      this.products = data;
    });
    this.imagesLoadingSubscription = this.imageService.loadImageMeta().subscribe((data: Array<Image>) => {
      this.images = data;
      console.log(this.images);
    })
  }

  ngOnDestroy(): void {
      this.productsLoadingSubscription?.unsubscribe();
      this.imagesLoadingSubscription?.unsubscribe();
  }

}
