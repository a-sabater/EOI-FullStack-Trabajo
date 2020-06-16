import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MostrarImagenPage } from './mostrar-imagen.page';

describe('MostrarImagenPage', () => {
  let component: MostrarImagenPage;
  let fixture: ComponentFixture<MostrarImagenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarImagenPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MostrarImagenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
