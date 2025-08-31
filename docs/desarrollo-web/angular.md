# Preguntas generales 

## ¿Qué son los modulos en Angular?

**⚠️ En versiones nuevas de Angular (como Angular 15+), ya no es obligatorio usar módulos. Ahora puedes tener componentes "standalone": independientes, sin necesidad de estar dentro de un módulo.**

Imaginá que tu aplicación es una casa grande. En esa casa, hay habitaciones diferentes para distintas tareas: la cocina, el dormitorio, el baño, etc. Cada habitación tiene su propósito y sus herramientas.

En Angular, esa casa es tu aplicación, y cada habitación es un módulo (`NgModule`).

- Ayudan a organizar el código para que no sea un caos.
- Agrupan cosas que trabajan juntas, como componentes, servicios, y rutas.
- Te permiten importar otras librerías (por ejemplo, para mostrar botones, manejar formularios, etc.).
- Podes tener rutas específicas dentro de un módulo (como si tuvieras un mini-GPS dentro de cada habitación).

Supongamos que estás creando una tienda online:

- 🛍 Módulo de productos: todo lo que tiene que ver con mostrar productos, ver detalles, etc.
- 👩‍💼 Módulo de usuarios vendedores: gestión de sus productos, sus ventas.
- 🧑‍🤝‍🧑 Módulo de compradores: ver historial de compras, carrito, etc.

Cada módulo tiene su propio archivo `.module.ts`, como `productos.module.ts`

```js
@NgModule({
  declarations: [ProductoComponent],
  imports: [CommonModule],
  exports: [ProductoComponent]
})
export class ProductosModule {}
```

- declarations: qué componentes tiene este módulo.
- imports: qué cosas necesita (otros módulos, librerías, etc).
- exports: qué cosas le comparte a otros módulos.

Para resumir un poco:

- Los módulos son como grupos de funcionalidades que organizan tu app.
- Hacen que sea más fácil de mantener y escalar.
- Son como contenedores de lógica, donde pones componentes, servicios, rutas, etc.
- Aunque ahora podés usar componentes independientes, los módulos siguen siendo útiles en muchos casos.

---

## ¿Qué son los componentes standalone y cuando conviene utilizarlos?

Son una característica introducida en Angular 14 que permite definir componentes sin necesidad de declararlos en un módulo (`NgModule`). En lugar de eso, los componentes standalone se definen utilizando la propiedad `standalone: true` en el decorador `@Component`, y ellos mismos pueden importar directamente otros componentes, directivas, pipes, o módulos necesarios.

Un ejemplo básico de un componente standalone es el siguiente:

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-standalone-example',
  template: `<h1>Hola desde un componente standalone</h1>`,
  standalone: true,
  imports: [], // Aquí puedes importar otros componentes o módulos
})
export class StandaloneExampleComponent {}
```

**Ventajas**

1. **Simplicidad**: Elimina la necesidad de crear o mantener módulos para cada grupo de componentes.
2. **Modularidad**: Facilita la creación de componentes altamente independientes que pueden ser reutilizados en diferentes aplicaciones.
3. **Carga más rápida**: Se pueden usar directamente en **lazy loading** (carga diferida) o **bootstrap** sin necesidad de un módulo adicional.
4. **Menos boilerplate**: Reduce la sobrecarga de configuración al no requerir un módulo explícito para declarar o exportar un componente.
5. **Facilidad de pruebas**: Son más fáciles de probar de manera aislada, ya que no dependen de módulos intermedios.

**¿Cuándo conviene utilizarlos?**
Conviene usar componentes standalone en las siguientes situaciones:

1. **Aplicaciones nuevas**:
   - Si comienzas un proyecto desde cero, puedes adoptar el enfoque standalone desde el inicio para simplificar la estructura del proyecto y aprovechar las ventajas de esta arquitectura.

2. **Componentes independientes**:
   - Para componentes reutilizables o librerías de UI (como botones, tarjetas, o modal dialogs), donde no necesitas integrarlos en un módulo completo.

3. **Rutas (Lazy Loading)**:
   - En módulos cargados de manera diferida, los componentes standalone pueden ser la opción ideal, ya que pueden ser cargados directamente en una ruta sin necesidad de un módulo asociado.
   ```typescript
   import { Route } from '@angular/router';
   import { StandaloneExampleComponent } from './standalone-example.component';

   const routes: Route[] = [
     { path: 'example', component: StandaloneExampleComponent },
   ];
   ```

4. **Migración progresiva**:
   - Si tienes un proyecto con módulos existentes, puedes migrar poco a poco a componentes standalone en lugar de reestructurar completamente los módulos.

5. **Proyectos pequeños o específicos**:
   - En aplicaciones con pocos componentes, usar componentes standalone puede ser suficiente y evita el uso innecesario de módulos.

**Limitaciones**

1. **Compatibilidad con proyectos existentes**:
   - En proyectos grandes con módulos muy establecidos, puede ser complicado combinar ambos enfoques. Sin embargo, Angular permite mezclar componentes standalone y no-standalone.

2. **Agrupación lógica**:
   - Si tienes muchos componentes que comparten servicios o configuraciones, un módulo podría ser más práctico para organizar estas dependencias.

Los componentes standalone simplifican la arquitectura de Angular al reducir la dependencia de módulos y alinear el framework con tendencias modernas en diseño de componentes. Conviene adoptarlos cuando buscas simplicidad, modularidad y mayor flexibilidad en proyectos nuevos o en escenarios específicos como componentes reutilizables o lazy loading.

---

## ¿Qué es Property Binding?

Property Binding es cuando le pasás un valor dinámico a un elemento HTML usando corchetes [].
Es la forma que tiene Angular de decir: *“Ey, esta propiedad va a cambiar, así que estate atento”*

```html
<input [value]="empresa" [disabled]="habilitado" >
```

- empresa y habilitado son variables de tu componente.
- value y disabled son propiedades del `<input>`.
- El [value]="empresa" significa: "Poné el valor de esta variable dentro del input."

En cambio, la misma linea de codigo SIN corchetes: 

```html
<input type="text" value="empresa" disabled="habilitado" >
```

Acá Angular no entiende que empresa o habilitado son variables.
Los toma como texto plano. O sea, va a escribir literalmente "empresa" en el input.

#### ¿Y qué diferencia hay con la interpolación `{{}}`?

Ambas cosas sirven para mostrar datos, pero se usan en contextos distintos.

```html
<!-- Interpolación -->
<img src="{{itemImageUrl}}" />

<!-- Property Binding -->
<img [src]="itemImageUrl" />
```

Las dos hacen lo mismo si es un string, pero si estás trabajando con cosas más complejas que un texto (como objetos, booleanos, números, arrays), usá Property Binding. **¿Por qué?** Porque Angular entiende mejor ese tipo de datos con los corchetes

- Property Binding = `[propiedad]="valor"`
- Angular escucha y actualiza la propiedad del HTML cuando cambie el valor.
- Te ayuda a tener una app reactiva, sin andar actualizando todo a mano.
- Si pasás algo que no es un texto, usá sí o sí Property Binding.

---

## ¿Qué mejoras hay en la migración de AngularJS a Angular?

Migrar de AngularJS a Angular trae muchas mejoras importantes:

- **Arquitectura basada en componentes:** Angular utiliza componentes reutilizables y encapsulados, lo que facilita la organización y el mantenimiento del código.
- **Mejor rendimiento:** Angular es más rápido gracias a la compilación AOT (Ahead-of-Time), el cambio en la detección de cambios y el uso de TypeScript.
- **Soporte para TypeScript:** Angular está escrito en TypeScript, lo que permite tipado estático, autocompletado y detección temprana de errores.
- **Herramientas modernas:** Angular CLI automatiza tareas como la generación de componentes, servicios y la construcción del proyecto.
- **Lazy Loading:** Permite cargar módulos bajo demanda, mejorando el tiempo de carga inicial de la aplicación.
- **Mejor sistema de inyección de dependencias:** Más simple, potente y fácil de testear.
- **Programación reactiva con RxJS:** Facilita el manejo de flujos de datos asíncronos y eventos complejos.
- **Soporte para pruebas:** Angular tiene mejor integración con herramientas de testing y facilita la creación de pruebas unitarias y de integración.
- **Actualizaciones y soporte:** Angular recibe actualizaciones frecuentes, mejoras de seguridad y nuevas funcionalidades.

En resumen, migrar a Angular permite crear aplicaciones más rápidas, escalables, mantenibles y seguras, utilizando herramientas y patrones modernos.

| AngularJS | Angular |
| --- | --- |
| Arquitectura MVC (no estrictamente aplicado pero que usaba varios conceptos del mismo donde se separa la logica de negocio de la vista y el controlador) donde los controllers eran el nucleo de la logica de los componentes, y las directivas permitian la reutilizacion de partes de la interfaz | Arquitectura basada en componentes, cada componente tiene su vista y logica, mejorando la modularidad y reutilizacion de codigo |
| Poseia inyeccion de dependencias aunque era mucho mas complejo de entender, y no era facil de testear | Inyeccion de dependencias mucho mas facil de entender y de testear |
| El lenguaje principal de AngularJs es Javascript | Angular por defecto usa Typescript |
| Funcionaba con two-way data binding, que era bueno pero en aplicaciones grandes podia significar un gran problema de rendimiento ya que para mantener los datos actualizados en la vista se debian hacer muchas operaciones | Usa one-way data binding, que es mucho mas eficiente y facil de mantener, ademas de introducir Change Detection y compilacion AOT (ahead of time) precompilando el codigo antes de la ejecucion mejorando tiempos de carga |
| El sistema de routing de AngularJs era bueno y basico | El sistema de routing de Angular es mas avanzado y ofrece muchas mas herramientas como lazy loading, guards, resolvers, etc |
| Soportaba enlaces bidireccionales de datos, pero no estaba enfocado en una programacion reactiva | Se puede usar RxJS para manejar los datos de manera reactiva |
| Todo nuevo archivo y agregado debia hacerse a mano | Se cuenta con Angular CLI que automatiza muchas cosas |
| En AngularJS tenemos modulos, pero no se soporta el Lazy Loading | Se soporta el Lazy Loading |

---

## **¿Qué es RxJS?**

Reactive Extensions for Javascript (RxJS) es una libreria que nos permite trabajar con programacion reactiva en Javascript permitiendo el manejo de flujos asincronos de una forma mas declarativa, reactiva y consistente.

- Manejo de peticiones asincronas, en vez de utilizar Callbacks o Promises anidados, se pueden utilizar Observables para manejar flujos de datos asincronos
- Cuando tengo varias fuentes de datos que manejar que interactuan entre si, en RxJS puedo utilizar operadores como `map`, `combineLatest`, `map`, `filter` y `switchMap` para manejar estos flujos.
- RxJS ofrece herramientas como `takeUntil` o `takeWhile` para manejar las subscripciones de una forma eficiente y asi evitar memory leaks
- Con RxJs puedo manejar tanto flujos de datos sincronicos como asincronicos, y puedo combinarlos de una forma muy sencilla
- Si necesito coordinar multiples tareas asincronicas o flujos, RxJS me permite hacerlo de una forma muy sencilla con `forkJoin`, `merge`, `concat`, `combineLatest`, `zip`, etc, mejorando la concurrencia (la cual significa que puedo manejar multiples tareas al mismo tiempo)

En parte su uso podria ser reemplazado con Angular Signals en Angular 16, pero RxJS sigue siendo una herramienta muy poderosa para manejar flujos de datos asincronos.

### ¿Qué es un Observable en RxJS y cómo difiere de una Promesa en JavaScript?

RxJS (Reactive Extensions for JS) es una libreria que nos permite trabajar con programacion reactiva en Javascript, y la misma posee `Observables` que es un objeto que reprssenta una coleccion de valores o eventos que se emiten a lo largo del tiempo.

Las Promises solo pueden manejar un valor o evento, los Observables pueden manejar varias de manera sincronica e asincronica, por eso es ideal para el manejo de solicitudes HTTP. 

Los observables pueden ser modificados mediante el uso de otras tools de RxJS como `map` (transforma los valores), `filter` (filtra los valores), `reduce` (reduce los valores), `merge` (combina los valores de varios observables), `concat` (combina los valores de varios observables en orden), `forkJoin` (combina los valores de varios observables y devuelve un solo valor), `switchMap` (cancela la subscripcion anterior y se suscribe a la nueva), `debounceTime` (espera un tiempo antes de emitir un valor), `distinctUntilChanged` (emite un valor solo si es diferente al anterior), `catchError` (captura un error y lo maneja), `retry` (reintenta la operacion si falla), entre otros.

Sin embargo los observables por si mismos no hacen nada, precisan que algo este **subscripto** a ellos para que hagan algo, es por eso que es importante desubscribirse de ellos en el estado unmounted de la aplicacion. 

```javascript
import { Observable } from 'rxjs';

const observable = new Observable(subscriber => {
  subscriber.next('Hello');
  subscriber.next('World');
  subscriber.complete();
});

observable.subscribe({
  next(value) {
    console.log(value); // 'Hello', 'World'
  },
  complete() {
    console.log('Done!');
  }
});
```

| Promises | Observables |
| --- | --- |
| Solo pueden emitir un valor o un error | Pueden emitir multiples valores a lo largo del tiempo siempre y cuando la subscripcion este activa |
| Apenas se crea la Promise, la misma es ejecutad, se le dice `Eager` | No hace nada hasta que alguien este observandolo, es por eso que se le dice `lazy`, porque por si mismo no hace nada |
| La promesa no se puede cancelar | Se puede cancelar la subscripcion a un observable |

### Porque es importante desuscribirnos de los Observables?

- **Evitar Memory Leaks** Estas ocurren cuando objetos que ya no estamos usando quedan en memoria, si no te desubscribis de los observables, por su naturaleza, se seguiran ejecutando siempre y cuando tengan subscribers que lo escuchen.
- **Controlar el Ciclo de Vida del Observable**: Como Angular no lo maneja de manera automatica, es responsabilidad del desarrollador su manejo. Utilizar técnicas de desuscripción adecuadas (como ngOnDestroy o el operador takeUntil) garantiza que los observables solo vivan durante el ciclo de vida necesario y no más.
- **Evitar el Doble Manejo de Datos**: Si no te desuscribes de un observable, puedes terminar recibiendo datos que ya no necesitas o que no tienen sentido para el componente actual. Esto puede generar lógica extra para manejar estos casos y complicar el código.

### Formas de desubscripcion de Observables

Uso de `ngOnDestroy`

```ts
 ngOnInit() {
    this.subscription = this.myService.getData().subscribe(data => {
      // Manejo de los datos
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
```

Uso de `TakeUntil`

```ts
private destroy$ = new Subject<void>();

  ngOnInit() {
    this.myService.getData()
      .pipe(takeUntil(this.destroy$))
      .subscribe(data => {
        // Manejo de los datos
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
```

### Cual es la diferencia entre un Observable "cold" y "hot"?

Los **Cold Observables** son Observables que crean un flujo de datos por cada subscriptor, produciendo datos on-demand, es decir, solo cuando alguien se subscribe. El ejemplo mas comun es el llamado a un servicio con HTTP.

```typescript
import { Observable } from 'rxjs';
import { ajax } from 'rxjs/ajax';

const httpObservable = ajax.getJSON('https://jsonplaceholder.typicode.com/posts/1');

// Ambas ejecutaran una llamada HTTP
httpObservable.subscribe(data => console.log('Subscriber 1:', data));
httpObservable.subscribe(data => console.log('Subscriber 2:', data));
``` 

Los **Hot Observables** tienen su propio flujo independiente de las subscripciones, un ejemplo puede ser un WebSocket, donde los datos se emiten independientemente de las subscripciones. Tambien puede suceder que si una parte de subscribe de forma muy tardia, se pierda de alguna informacion, no vera ningun historial al respecto.

```typescript
import { fromEvent } from 'rxjs';

const clicks$ = fromEvent(document, 'click');

clicks$.subscribe(() => console.log('Subscriber 1: Click detected'));
setTimeout(() => {
  clicks$.subscribe(() => console.log('Subscriber 2: Click detected (late subscriber)'));
}, 5000);
```

### Angular Signals vs Observables

Observables

```typescript
import { Component } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-observable-example',
  template: `<p>Contador: {{ counter$ | async }}</p>`,
})
export class ObservableExampleComponent {
  counter$: Observable<number>;

  constructor() {
    this.counter$ = interval(1000).pipe(map((value) => value + 1));
  }
}
```

Signals

```typescript
import { Component, signal, effect } from '@angular/core';

@Component({
  selector: 'app-signal-example',
  template: `<p>Contador: {{ counter() }}</p>`,
})
export class SignalExampleComponent {
  counter = signal(0);

  constructor() {
    setInterval(() => {
      this.counter.set(this.counter() + 1);
    }, 1000);
  }
}
```

Comparación

- **Observables**: Necesitan suscripción y, opcionalmente, el uso del `async` pipe para manejar el flujo de datos. Son ideales para manejar flujos complejos o múltiples fuentes de datos.
- **Signals**: Son más simples y no requieren suscripción explícita. Angular maneja automáticamente la reactividad, lo que los hace ideales para estados locales y cambios simples.

Ambos enfoques pueden coexistir en una aplicación Angular, dependiendo de las necesidades específicas del proyecto.

Algunas de las ventajas del uso de Signals vs Observables son:

- No es necesario subscribirse ni desuscribirse de los Signals, posee un sistema de reactividad automatica que detecta cualquier cambio de input
- Signals es mucho mas simple y declarativo que RxJS
- Se evitan re-renderings innecesarios ya que Angular maneja mucho mejor la deteccion de cambios

Sin embargo, si uno planifica trabajar con WebSockets o Eventos Complejos, Observables puede ser una mejor opcion, ya que posee herramientas para manejar la informacion de forma mucho mas especifica.

### ¿Qué es Angular Signals?

Angular signals es una caracteristica que aparecio con Angular 16 en donde se introducen herramientas de reacividad para mejorar la gestion de estados y deteccion de cambios. Reemplaza a algunos elementos nativos y a algunos usos de RxJs

Se inspira en **Patrones declarativos** como en el caso de SolidJS o Svelte. 

Un **Signal** es un contenedor que mantiene un valor reactivo (es decir, un valor que cambia con el tiempo) y que puede ser observado por otros componentes, entonces cuando este valor cambia, los componentes cambian en consecuencia. 

```typescript
import { signal } from '@angular/core';

const counter = signal(0); // Signal inicializado con un valor
console.log(counter()); // Acceder al valor del signal: 0

counter.set(1); // Actualizar el valor del signal
console.log(counter()); // Acceder al nuevo valor: 1
```

No es necesario el manejo de subscripciones como en el caso de RxJS ya que la reactividad esta integrada en el mismo Angular. 
Al cambiar este Signal, Angular actualiza solo lo necesario sin tener que recorrer todo el arbol de componentes. 

Se pueden crear Signals compuestos, es decir, de mas de un elemento en ellos

```typescript
import { signal, computed } from '@angular/core';

const firstName = signal('John');
const lastName = signal('Doe');
const fullName = computed(() => `${firstName()} ${lastName()}`);

console.log(fullName()); // "John Doe"

firstName.set('Jane');
console.log(fullName()); // "Jane Doe"
```

Y si quiero ejecutar una logica cuando un Signal cambia, puedo usar los `Effects`, algo muy similar al `useEffect` de React

```typescript
import { signal, effect } from '@angular/core';

const counter = signal(0);

effect(() => {
    console.log(`Counter value is: ${counter()}`);
});

counter.set(1); // Consola: "Counter value is: 1"
```

---

## Manejo de estado de una aplicación Angular, qué metodos hay?

En Angular, el manejo de estado de una aplicación puede hacerse de varias maneras, dependiendo de la complejidad y los requerimientos de la aplicación. Aquí hay algunos métodos comunes:

1. **Servicios compartidos**: Utilizar servicios para almacenar y compartir el estado entre componentes. Los servicios pueden contener propiedades y métodos para manipular el estado.

   ```typescript
   @Injectable({
     providedIn: 'root',
   })
   export class StateService {
     private state = { count: 0 };

     getCount() {
       return this.state.count;
     }

     increment() {
       this.state.count++;
     }
   }
   ```

2. **BehaviorSubject de RxJS**: Utilizar `BehaviorSubject` para manejar el estado reactivo. Permite emitir y suscribirse a cambios en el estado.

   ```typescript
    import { Injectable } from '@angular/core';
    import { BehaviorSubject } from 'rxjs';
    @Injectable({
      providedIn: 'root',
    })
    export class StateService {
      private state = new BehaviorSubject<{ count: number }>({ count: 0 });

      getState() {
        return this.state.asObservable();
      }

      increment() {
        const currentState = this.state.getValue();
        this.state.next({ count: currentState.count + 1 });
      }
    }
    ```

3. **NgRx**: Utilizar NgRx, una librería basada en Redux, para manejar el estado de la aplicación de manera más estructurada y predecible. NgRx utiliza acciones, reducers y efectos para gestionar el estado.

    ```typescript
    // Acción
    export const increment = createAction('[Counter] Increment');
  
    // Reducer
    export const counterReducer = createReducer(
      initialState,
      on(increment, (state) => ({ ...state, count: state.count + 1 }))
    );
  
    // Componente
    export class CounterComponent {
      count$ = this.store.select('count');
  
      constructor(private store: Store<{ count: number }>) {}
  
      increment() {
        this.store.dispatch(increment());
      }
    }
    ```

4. **Akita**: Otra librería para el manejo de estado que proporciona una API simple y flexible, ideal para aplicaciones más pequeñas o medianas.

5. **Signals**: Con Angular 16, se introdujo Signals, que permite manejar el estado de manera reactiva y declarativa, similar a los observables pero con una sintaxis más simple y sin necesidad de suscripciones.

   ```typescript
   import { signal } from '@angular/core';

   const count = signal(0);

   function increment() {
     count.set(count() + 1);
   }
   ```

---

## ¿Qué es la compilación JIT y AOT en Angular?

Como el codigo TS y HTML precisa ser compilado para ser mostrado en el navegador, se ofrecen dos modos de compilacion

**Just-in-Time (JIT)**

Se compilan las planillas cuando la aplicacion es ejecutada en el navegador, se usa en desarrollo, ya que no es necesario recompilar todo el proyecto para poder ver los cambios. 

- El bundle final es mas grande ya que incluye al compilador de Angular en si mismo
- La app es mas lenta al iniciar ya que debe compilar en el navegador
- Es mas facil de depurar ya que el codigo fuente es mas claro, pero menos seguro. 

Es el activado con `ng serve`

**Ahead-of-Time (AOT)**

Compila el codigo antes de mostrarlo en el navegador, se usa en produccion ya que el rendimiento es optimizado

- Inicio mas rapido ya que el codigo es compilado antes de llegar al browser
- El bundle final es mas pequeño ya que no incluye al compilador de Angular
- Es mas dificil de depurar ya que el codigo fuente es mas dificil de leer, pero mas seguro
- Detecta errores en las plantillas durante la compilacion, evitando fallos en ejecucion
- La compilacion es mucho mas lenta durante el build

Es el activado con `ng build --aot`

---

## ¿Cómo se maneja la inyección de dependencias y la inversión de control en Angular?

La inyeccion de dependencias es basicamente el hecho de crear un archivo con servicios que sirvan para ser **inyectados** en otros componentes. 

```typescript
@Injectable({
  providedIn: 'root' // Angular lo registra en el inyector raíz automáticamente
})
```

Luego este componente es inyectado en el constructor (o mediante el inject) del componente donde se desea usar.

```typescript
constructor(private userService: UserService) {}
```

Se pueden definir distintos niveles de inyección, por ejemplo:

- **root**: El servicio esta disponible globalmente para toda la aplicacion
- **Nivel de Módulo (providers: [] en @NgModule)**: El servicio esta disponible solo para el módulo en el que se encuentra
- **Componente**: El servicio esta disponible solo para el componente en el que se encuentra

Gracias a la **Inversion de Control** de Angular, no es necesario hacer un `new` de un servicio, sino que Angular se encarga de hacerlo por nosotros. 

```typescript	
export class EjemploComponent {
  miServicio = new MiServicioService(); // 🚨 Mala práctica: acoplamiento fuerte
}

export class EjemploComponent {
  constructor(private miServicio: MiServicioService) { } // ✔ Mejor práctica
}
```

Si se busca inyectar una **interfaz** en lugar de una clase, se usa `InjectionToken`

```typescript

import { InjectionToken } from '@angular/core';

export const CONFIG_TOKEN = new InjectionToken<string>('config');

@NgModule({
  providers: [
    { provide: CONFIG_TOKEN, useValue: 'Modo oscuro' }
  ]
})
export class AppModule { }

// En el componente

constructor(@Inject(CONFIG_TOKEN) private config: string) {
  console.log(this.config); // 'Modo oscuro'
}
```

---

### **¿Qué es el Two-Way Data Binding en Angular?**

El Two-Way Data Binding es una forma de vincular datos entre el componente y la vista de manera que si cambia el valor en el HTML, también cambia en el componente, y viceversa. Es como una autopista de doble mano: lo que escribís en el input se refleja en la variable, y si la variable cambia, el input también.

Se usa con la sintaxis especial `[(ngModel)]`:

```html
<input [(ngModel)]="nombre">
```

- Si escribís algo en el input, la variable `nombre` se actualiza.
- Si cambiás el valor de `nombre` en el componente, el input también lo muestra.

**¿Cuándo usarlo?**  
Cuando necesitás que el usuario pueda modificar datos y que esos cambios se reflejen automáticamente en tu lógica (por ejemplo, formularios).

---

## ¿Qué es un Pipe en Angular y para qué sirve?

Un Pipe es una herramienta para transformar datos directamente en el HTML, sin tener que modificar el valor original en el componente. Es como un filtro que le da formato a lo que se muestra.

Ejemplo de uso:

```html
<p>{{ fecha | date:'shortDate' }}</p>
<p>{{ precio | currency:'USD' }}</p>
```

- `date` transforma una fecha a un formato legible.
- `currency` muestra un número como dinero.

---

### **¿Qué es un Service en Angular y por qué se usa?**

Un Service es una clase donde ponés lógica que querés compartir entre varios componentes, como llamadas a APIs, manejo de datos, o utilidades. Así evitás repetir código y mantenés tus componentes más limpios.

Ejemplo típico:

```typescript
@Injectable({ providedIn: 'root' })
export class ApiService {
  getUsuarios() {
    return this.http.get('/api/usuarios');
  }
}
```

Luego lo inyectás en cualquier componente que lo necesite.

---

### **¿Qué es un Guard en Angular y para qué sirve?**

Un Guard es como un portero para tus rutas. Decide si un usuario puede entrar a una página o no (por ejemplo, si está logueado o tiene permisos).

Ejemplo básico:

```typescript
@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  canActivate(): boolean {
    return this.authService.estaLogueado();
  }
}
```

Y lo usás en tus rutas:

```typescript
{ path: 'admin', component: AdminComponent, canActivate: [AuthGuard] }
```

---

### **¿Qué es un Resolver en Angular?**

Un Resolver es una clase que se encarga de traer datos antes de que se muestre una ruta. Así, cuando el usuario entra a una página, ya tiene toda la información lista y no ve pantallas vacías o "cargando".

Ejemplo:

```typescript
@Injectable({ providedIn: 'root' })
export class UsuarioResolver implements Resolve<Usuario> {
  resolve(route: ActivatedRouteSnapshot): Observable<Usuario> {
    return this.apiService.getUsuario(route.params['id']);
  }
}
```

Y en la ruta:

```typescript
{ path: 'usuario/:id', component: UsuarioComponent, resolve: { usuario: UsuarioResolver } }
```

---

### **¿Qué es un Directive en Angular?**

Una Directiva es una instrucción que le das a un elemento HTML para que cambie su comportamiento o apariencia. Hay directivas estructurales (como `*ngIf`, `*ngFor`) y de atributo (como `[ngClass]`, `[ngStyle]`).

Ejemplo:

```html
<div *ngIf="mostrar">Solo se muestra si 'mostrar' es true</div>
<ul>
  <li *ngFor="let item of lista">{{ item }}</li>
</ul>
```

También podés crear tus propias directivas para reutilizar lógica visual.

---

### **¿Qué es el Angular CLI y por qué debería usarlo?**

El Angular CLI es una herramienta de línea de comandos que te ayuda a crear, desarrollar, testear y construir aplicaciones Angular de manera rápida y ordenada. Te ahorra tiempo generando componentes, servicios, módulos, y más, con buenas prácticas por defecto.

Ejemplo de comandos útiles:

```bash
ng new mi-app         # Crea una nueva app Angular
ng generate component usuario
ng generate service api
ng serve              # Levanta el servidor de desarrollo
ng build              # Compila la app para producción
```

---

### **¿Qué es un Input y un Output en Angular?**

- **@Input:** Permite que un componente hijo reciba datos de su componente padre.
- **@Output:** Permite que un componente hijo le envíe eventos o datos al padre.

Ejemplo:

```typescript
// Hijo
@Input() mensaje: string;
@Output() notificar = new EventEmitter<string>();

enviar() {
  this.notificar.emit('¡Hola padre!');
}
```

```html
<!-- Padre -->
<app-hijo [mensaje]="texto" (notificar)="recibir($event)"></app-hijo>
```

---

### **¿Qué es el Routing en Angular?**

El Routing es el sistema de navegación de Angular. Permite que tu app tenga varias "páginas" (componentes) y que el usuario navegue entre ellas sin recargar la página.

Definís rutas en un archivo especial:

```typescript
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: '**', redirectTo: '' } // Ruta para errores (404)
];
```

Y usás `<router-outlet></router-outlet>` en tu HTML para mostrar el componente correspondiente según la ruta.

---

### **¿Qué es un módulo compartido (Shared Module) y para qué sirve?**

Un Shared Module es un módulo donde ponés componentes, pipes y directivas que vas a usar en varios lugares de tu app. Así, evitás importar lo mismo muchas veces y mantenés tu código más organizado.

Ejemplo:

```typescript
@NgModule({
  declarations: [MiPipe, MiDirectiva],
  exports: [MiPipe, MiDirectiva, CommonModule]
})
export class SharedModule {}
```

Luego lo importás en otros módulos que lo necesiten.

---

### **¿Qué diferencias hay entre `ViewChild` y `ContentChild`? ¿Cuándo usarías cada uno?**

`ViewChild` y `ContentChild` son dos decoradores en Angular que se utilizan para acceder a elementos del DOM o componentes hijos, pero tienen propósitos diferentes.

- **ViewChild:** Se usa para acceder a un elemento del DOM o un componente hijo que está en la vista del componente actual. Es útil cuando necesitas interactuar con un elemento que está directamente en el template del componente.

```typescript
import { Component, ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
@Component({
  selector: 'app-mi-componente',
  template: `<input #miInput type="text">`
})
export class MiComponente {
  @ViewChild('miInput') inputRef!: ElementRef;

  ngAfterViewInit() {
    this.inputRef.nativeElement.focus(); // Accede al input y le da foco
  }
}
```

- **ContentChild:** Se usa para acceder a un elemento del DOM o un componente hijo que está proyectado dentro del componente actual mediante `<ng-content>`. Es útil cuando necesitas interactuar con contenido que se inserta en el componente desde el exterior.

```typescript
import { Component, ContentChild } from '@angular/core';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-mi-componente',
  template: `<ng-content></ng-content>`
})

export class MiComponente {
  @ContentChild('miContenido') contenidoRef!: ElementRef;

  ngAfterContentInit() {
    console.log(this.contenidoRef.nativeElement.textContent); // Accede al contenido proyectado
  }
}
```

---

### **¿Cómo organizas un proyecto grande en Angular? ¿Usas Nx o alguna otra herramienta de monorepo?**

- **Modularización:** Divide la aplicación en módulos lógicos. Cada módulo debe tener una responsabilidad clara y contener componentes, servicios y otros elementos relacionados.
- **Lazy Loading:** Implementa lazy loading para cargar módulos solo cuando sean necesarios, mejorando el rendimiento inicial de la aplicación.
- **Shared Module:** Crea un módulo compartido para componentes, directivas y pipes que se usan en varios lugares de la aplicación.
- **Core Module:** Crea un módulo core para servicios singleton que se usan en toda la aplicación, como servicios de autenticación o configuración.
- **Feature Modules:** Agrupa funcionalidades relacionadas en módulos específicos. Por ejemplo, un módulo de usuarios, un módulo de productos, etc.
- **Uso de Nx o Monorepos:** Si el proyecto es muy grande o tiene múltiples aplicaciones, considera usar herramientas como Nx para gestionar un monorepo. Esto permite compartir código entre aplicaciones y bibliotecas, y facilita la gestión de dependencias y versiones.
- **Estructura de carpetas:** Mantén una estructura de carpetas clara y consistente. Por ejemplo, puedes tener carpetas para `components`, `services`, `models`, `pipes`, etc.
- **Documentación:** Documenta el código y las decisiones arquitectónicas. Esto es especialmente importante en proyectos grandes donde varios desarrolladores pueden trabajar en diferentes partes de la aplicación.
- **Pruebas:** Implementa pruebas unitarias y de integración para asegurar la calidad del código. Usa herramientas como Jasmine y Karma para pruebas unitarias, y Protractor o Cypress para pruebas end-to-end.
- **Linting y Formateo:** Usa herramientas como ESLint y Prettier para mantener un código limpio y consistente. Configura reglas de linting que se ajusten a las convenciones del equipo.
- **Gestión de Estado:** Considera usar una librería de gestión de estado como NgRx o Akita para manejar el estado de la aplicación de manera predecible y escalable.
- **Optimización de Rendimiento:** Utiliza herramientas de análisis de rendimiento como el Angular DevTools para identificar cuellos de botella y optimizar la aplicación.
- **Seguridad:** Implementa buenas prácticas de seguridad, como sanitización de entradas, protección contra ataques XSS y CSRF, y uso de HTTPS.

