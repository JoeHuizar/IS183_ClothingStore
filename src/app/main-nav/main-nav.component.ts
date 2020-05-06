import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ToastService } from '../toast/toast.service';
import { HttpService } from '../../shared-service/http.service';

export interface IBike {
  id?: number;
  image: string;
  price: number;
  quantity: number;
  description: string;
}
@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit {

  bikes: Array<IBike> = [];
  myName = '';
  cars = [];
  clothings = [];
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toastService: ToastService,
    private http: HttpService
  ) { }

  ngOnInit() {
  }

//Begin imported from NodeRestClient
  //THIS IS TO REFRESH CARS ON INITIALIZATION
  // async refresh() {
  //   this.cars = await this.getCars('car');
  // }

  //gets clothing
  async refresh() {
    this.clothings = await this.getClothings('clothing');
  }

  async getClothingByColor() {
    console.log('from pink')
    this.clothings = await this.getClothings('Clothing/get-clothing-by-color/Pink');
  }

  async showCars() {
    this.cars = await this.getCars('car');
  }

  // getCars('car');
  async getCars(path: string) {
    const resp = await this.http.get(path);
    console.log('resp from getCars(), resp')
    return resp;
  }

  async getClothings(path: string) {
    const resp = await this.http.get(path);
    console.log('resp from getClothing(), resp')
    return resp;
  }

  async createCar() {
    const car = {
      make: null,
      model: null,
      year: null
    };
    const resp = await this.http.post('car', car);
    console.log('from createCar resp: ', resp);
    if(resp){
      // this.refresh();
      this.cars.unshift(resp);
    } else {
      this.toastService.showToast('Danger', 3000, 'Car creation failed!');
    }
    return resp;
  }

  async createClothing() {
    const clothing = {
      image_url: null,
      clothing_type: null,
      color: null
    };
    const resp = await this.http.post('clothing', clothing);
    console.log('from createClothing resp: ', resp);
    if(resp){
      // this.refresh();
      this.clothings.unshift(resp);
    } else {
      this.toastService.showToast('Danger', 3000, 'Car creation failed!');
    }
    return resp;
  }

  async updateCar(car: any) {
    console.log('from updateCar car: ', car);
    const resp = await this.http.put(`car/id/${car.id}`, car);
    if (resp) {
      this.toastService.showToast('success', 3000, 'Car updated successfully!');
    }
    return resp;
  }

  async updateClothing(clothing: any) {
    console.log('from updateClothing Clothing: ', clothing);
    const resp = await this.http.put(`clothing/id/${clothing.id}`, clothing);
    if (resp) {
      this.toastService.showToast('success', 3000, 'Clothing updated successfully!');
    }
    return resp;
  }

  async removeCar(car: any, index: number) {
    console.log('from removeCar...', index);
    // this.cars.splice(index, 1);
    const resp = await this.http.delete(`car/id/${car.id}`);
    console.log('resp from removeCar...', resp);
    if (resp) {
      this.refresh();
    } else {
      this.toastService.showToast('danger', 3000, 'Delete car failed!');
    }
  }

  async removeClothing(clothing: any, index: number) {
    console.log('from removeClothing...', index);
    // this.cars.splice(index, 1);
    const resp = await this.http.delete(`clothing/id/${clothing.id}`);
    console.log('resp from removeClothing...', resp);
    if (resp) {
      this.refresh();
    } else {
      this.toastService.showToast('danger', 3000, 'Delete clothing failed!');
    }

  }
//end imported from NodeRestClient
  showAbout() {
    this.toastService.showToast('success', 7000, 'This application was created by Lucas Phan (C).');
    this.http.testing();
  }

  async logout() {
    const resp = await this.http.logout();
    if(resp.statusCode === 200) {
      localStorage.removeItem('id_token');
      this.router.navigate(['login']);
    }
  }

  async goToCart() {
    this.router.navigate(['app-cart']);
  }

  goToEdit() {
    this.router.navigate(['app-cart']);
  }
}
