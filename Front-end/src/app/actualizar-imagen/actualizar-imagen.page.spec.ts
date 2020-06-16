import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ActualizarImagenPage } from './actualizar-imagen.page';

describe('ActualizaImagenPage', () => {
  let component: ActualizarImagenPage;
  let fixture: ComponentFixture<ActualizarImagenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActualizarImagenPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ActualizarImagenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
