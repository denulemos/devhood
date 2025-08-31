# Clean Code en Angular

### ¿Cuales son algunas reglas de Clean Code en Angular?

🔹 **1. Un componente, una responsabilidad**
**❌ Malo:** un componente que muestra una lista *y* también guarda datos en el servidor.
**✅ Bueno:** un componente que solo muestra la lista, y otro que se encarga de guardar los datos.

```ts
// ❌ Esto hace demasiado:
@Component({...})
export class UsuarioComponent {
  usuarios = [];
  guardarUsuario(usuario) {
    // guardar en API
  }
}
```

```ts
// ✅ Separado en dos componentes:
- UsuarioListaComponent (muestra)
- UsuarioFormularioComponent (guarda)
```

🔹 **2. Usá componentes hijos**
Cuando un componente se vuelve grande, dividilo en partes más chiquitas:

```html
<!-- padre -->
<app-info-personal></app-info-personal>
<app-preferencias></app-preferencias>
```

🔹 **3. Plantillas (HTML) simples y limpias**
**❌ Malo:**

```html
<div *ngIf="user && user.age > 18 && user.isActive">...</div>
```

**✅ Bueno:**

```ts
mostrarContenido() {
  return this.user && this.user.age > 18 && this.user.isActive;
}
```

```html
<div *ngIf="mostrarContenido()">...</div>
```


🔹 **4. Servicios para lógica pesada**
El componente solo debería mostrar cosas, **no** manejar llamadas a APIs.

```ts
// Servicio
getDatos() {
  return this.http.get('https://api.com/datos');
}
```

```ts
// Componente
this.apiService.getDatos().subscribe(...);
```

🔹 **5. Desuscribirse de los Observables**

```ts
subscripcion: Subscription;

ngOnInit() {
  this.subscripcion = this.servicio.getDatos().subscribe(...);
}

ngOnDestroy() {
  this.subscripcion.unsubscribe();
}
```

O mejor aún, usá el `async` pipe:

```html
<div *ngIf="datos$ | async as datos">
  {{ datos.nombre }}
</div>
```

🔹 **6. Usá Angular CLI**
Siempre preferí:

```bash
ng generate component usuario
ng generate service api
```

Te asegura estructura clara y buenas prácticas.


🔹 **7. Evitá lógica compleja en el HTML**
Si hay mucha lógica en el template, movela al archivo `.ts`.


🔹 **8. Usá tipado estricto y `interfaces`**
No uses `any`. Definí tus modelos:

```ts
interface Usuario {
  nombre: string;
  edad: number;
}
```


🔹 **9. Poné nombres claros y descriptivos**
**❌ Malo:** `comp1`, `servicio2`
**✅ Bueno:** `FormularioUsuarioComponent`, `AutenticacionService`


🔹 **10. Estilo consistente con Prettier/ESLint**
Instalá herramientas que formateen y detecten errores automáticamente.

---

## **Patrones de diseño en Angular**

### Arquitectura modular

Trata de separar toda la aplicacion en modulos logicos y funcionales que agrupan componentes, servivios y directivas relacionadas.

```typescript
// Módulo de usuario (user.module.ts)
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';

@NgModule({
  declarations: [UserComponent],
  imports: [CommonModule],
})
export class UserModule {}

// Módulo principal (app.module.ts)
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, UserModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

### Inyeccion de Dependencias

Angular gestiona los servicios compartidos mediante la inyeccion de dependencias. Se inyecta mediante el constructor o con `injector`

```typescript
// Servicio (logger.service.ts)
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', // Disponible en toda la app
})
export class LoggerService {
  log(message: string): void {
    console.log('Log:', message);
  }
}

// Componente que usa el servicio (app.component.ts)
import { Component } from '@angular/core';
import { LoggerService } from './logger.service';

@Component({
  selector: 'app-root',
  template: `<button (click)="logMessage()">Log</button>`,
})
export class AppComponent {
  constructor(private logger: LoggerService) {}

  logMessage(): void {
    this.logger.log('Mensaje desde el componente');
  }
}
```

### Component Communication

Es el uso de `@Input` y `@Output` para la comunicacion entre componentes, en conjunto con `EventEmitter` para emision de eventos desde componentes hijos y `ViewChild` para acceder a componentes hijos desde componentes padres.

```typescript
// Componente hijo (child.component.ts)
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `<button (click)="notify()">Notificar al padre</button>`,
})
export class ChildComponent {
  @Input() childMessage: string = ''; // Recibe datos del padre
  @Output() notifyParent = new EventEmitter<string>();

  notify(): void {
    this.notifyParent.emit('Mensaje del hijo');
  }
}

// Componente padre (parent.component.ts)
import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
    <app-child
      [childMessage]="'Hola desde el padre'"
      (notifyParent)="handleNotification($event)"
    ></app-child>
  `,
})
export class ParentComponent {
  handleNotification(message: string): void {
    console.log('Mensaje recibido:', message);
  }
}
```

### Singleton Services

Si un servicio que luego sera inyectado posee el `injectable` con el valor `root` eso significa que habra una sola instancia de la misma en toda la aplicacion.

```typescript
// Servicio global (state.service.ts)
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  private state = { counter: 0 };

  getCounter(): number {
    return this.state.counter;
  }

  incrementCounter(): void {
    this.state.counter++;
  }
}

// Componentes que comparten el estado
@Component({ /* ... */ })
export class ComponentA {
  constructor(private stateService: StateService) {}

  increment(): void {
    this.stateService.incrementCounter();
  }
}

@Component({ /* ... */ })
export class ComponentB {
  constructor(private stateService: StateService) {}

  getCounter(): number {
    return this.stateService.getCounter();
  }
}
```

### Redux Pattern

Es el uso de Redux o NgRx para el manejo de estados complejos en aplicaciones grandes. 

```typescript

// Defino estado y accioned

export interface AppState {
  count: number;
}

export const increment = createAction('[Counter] Increment');
export const decrement = createAction('[Counter] Decrement');

// Reducer

export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => ({ ...state, count: state.count + 1 })),
  on(decrement, (state) => ({ ...state, count: state.count - 1 }))
);

// Uso

export class CounterComponent {
  count$ = this.store.select('count');

  constructor(private store: Store<{ count: number }>) {}

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }
}
```

### Reactive Forms

Mediante el uso de `ReactiveFormsModule` puedo manejar estados complejos de formularios.

```typescript
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  template: `
    <form [formGroup]="form" (ngSubmit)="onSubmit()">
      <input formControlName="name" placeholder="Nombre" />
      <button type="submit" [disabled]="form.invalid">Enviar</button>
    </form>
  `,
})
export class ReactiveFormComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
    });
  }

  onSubmit(): void {
    console.log(this.form.value);
  }
}
```

### Lazy Loading

Es el uso de `loadChildren` en el archivo de rutas para cargar modulos de manera asincrona.

```typescript
// Ruta con Lazy Loading (app-routing.module.ts)
const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'users',
    loadChildren: () =>
      import('./user/user.module').then((m) => m.UserModule),
  },
];
```

### Facade Pattern

Abstrae la logica compleja de varios servicios en una sola clase para proporcionar una API simplificada para el resto de la aplicacion.

Por ejemplo en este caso, `UserFacade` combina el uso de `userService` y `authService` en uno solo.

```typescript
// Servicios individuales
@Injectable({ providedIn: 'root' })
export class UserService {
  getUser() {
    return { name: 'John Doe' };
  }
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  isAuthenticated() {
    return true;
  }
}

// Fachada (user.facade.ts)
@Injectable({ providedIn: 'root' })
export class UserFacade {
  constructor(
    private userService: UserService,
    private authService: AuthService
  ) {}

  getUserData() {
    if (this.authService.isAuthenticated()) {
      return this.userService.getUser();
    }
    return null;
  }
}

// Componente que usa la fachada
@Component({ /* ... */ })
export class ProfileComponent {
  constructor(private userFacade: UserFacade) {}

  getUser() {
    console.log(this.userFacade.getUserData());
  }
}
```