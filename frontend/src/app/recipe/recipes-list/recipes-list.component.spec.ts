import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesListComponent } from './recipes-list.component';
import { RecipeService } from '../recipe.service';
import { of } from 'rxjs';
import { Recipe } from '../recipe';

const mockedRecipesList: Array<Recipe> = [
  {
    recipeId: 1,
    name: 'Pizza',
    description: 'Mega Pizza',
    imageId: 23,
  },
];

class MockRecipeService {
  getList() {
    return of(mockedRecipesList);
  }
}

describe('RecipesListComponent', () => {
  let component: RecipesListComponent;
  let fixture: ComponentFixture<RecipesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [{ provide: RecipeService, useClass: MockRecipeService }],
      declarations: [RecipesListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.card-title')?.textContent).toContain(
      mockedRecipesList[0].name
    );
    expect(compiled.querySelector('.card-text')?.textContent).toContain(
      mockedRecipesList[0].description
    );
  });
});
