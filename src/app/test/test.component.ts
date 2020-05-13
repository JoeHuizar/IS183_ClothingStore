import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ToastService } from '../toast/toast.service';
import { HttpService } from '../../shared-service/http.service';
import { TestService } from './test.service';

export interface IBike {
  id?: number;
  image: string;
  price: number;
  quantity: number;
  description: string;
}

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  bikes: Array<IBike> = [];
  myName = '';
  cars = [];
  clothings = [];
  clothing: Object;
  clothes: Array<Object>;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toastService: ToastService,
    private http: HttpService,
    private testService: TestService
  ) { }

  async ngOnInit() {
    // await this.refresh();
    this.clothes = [];
    this.getClothes();

    this.http.getClothingByColor(this.activatedRoute.snapshot.params['color'])
      .then((resp) => {
        this.clothing = resp;
      });
  }

  async refresh() {
    this.clothings = await this.getClothings('clothing');
  }

  async getClothes() {
    this.testService.getClothes().then((resp)=> {
          this.clothes = resp;
        })
  }

  async getPink(Pink) {
    // let clothingColor = "Pink";
    // let filteredClothing = await this.clothings.filter(pinkClothes => pinkClothes.color == clothingColor);
    // this.clothings = filteredClothing;
    this.http.getClothingByColor(this.activatedRoute.snapshot.params[Pink])
    .then((resp) => {
      this.clothing = resp;
    });
    
  }

  // async getPink() {
  //   this.clothings = await this.getClothingByColor('Pink');
  // }
  

  async getClothingByColor() {
    console.log('from pink')
    // let color = 'Pink';
    this.clothings = await this.getClothings('clothing?color=Pink');
  }

  async getPinkClothes() {
    let filteredClothes = await this.getClothingByColor();
    console.log('from getPinkClothes', filteredClothes);
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

  // filterByColor(color: string){
  //   this.http.getClothingByColor(color).then((resp)=> {
  //     if(resp){
  //       this.clothings = this.clothings.filter(())
  //     }
  //   })
  // }


}
