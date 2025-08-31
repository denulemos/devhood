# Performance en Angular

## **¿Qué problemas de rendimiento pueden existir en Angular y cómo se solucionan?**

### ⚠️ Renderizado excesivo (detección de cambios ineficiente)

**Qué pasa:**
Angular, por defecto, revisa todo el árbol de componentes cada vez que algo cambia. En apps grandes, esto puede hacer que se renderice más de lo necesario, generando lentitud.

**Cómo lo solucionás:**

* Activá `ChangeDetectionStrategy.OnPush` en tus componentes. Esto le dice a Angular que solo actualice el componente si cambian sus `@Input` o se dispara un evento (como un observable).

```ts
@Component({
  selector: 'app-mi-componente',
  template: `{{ data }}`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MiComponente {
  @Input() data!: string;
}
```

* Desuscribite de los observables cuando ya no los necesites, usando `takeUntil` o el operador `async` directamente en el HTML.

#### 2. 🐢 Carga innecesaria de módulos

**Qué pasa:**
Si cargás todos los módulos desde el inicio (eager loading), el usuario va a esperar más para ver algo en pantalla.

**Cómo lo solucionás:**

* Aplicá **lazy loading** en rutas que no se usan de entrada:

```ts
{
  path: 'admin',
  loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
}
```

* Si querés un balance, podés usar una **estrategia de pre-carga personalizada** para cargar algunos módulos después de la carga inicial, mientras el usuario está inactivo.

### 📋 Listas largas que se renderizan lento

**Qué pasa:**
Una tabla con miles de filas puede hacer que todo se vuelva pesado, ya que Angular intenta renderizar todos los ítems del DOM.

**Cómo lo solucionás:**

* Usá **Virtual Scroll** del Angular CDK para renderizar solo lo visible:

```html
<cdk-virtual-scroll-viewport itemSize="50" style="height: 300px;">
  <div *cdkVirtualFor="let item of items">{{ item }}</div>
</cdk-virtual-scroll-viewport>
```

* Si estás trayendo todo desde una API, agregá **paginación en el backend** para evitar cargar miles de elementos de una sola.

### 🖼️ Imágenes pesadas

**Qué pasa:**
Imágenes grandes o mal optimizadas pueden hacer que la página tarde en cargar, sobre todo en dispositivos móviles.

**Cómo lo solucionás:**

* Usá `loading="lazy"` en todas las etiquetas `<img>`:

```html
<img src="imagen.jpg" alt="Ejemplo" loading="lazy" />
```

* Comprimí y redimensioná las imágenes con herramientas como **TinyPNG**, **ImageMagick** o servicios como **Cloudinary**.

### 📝 Formularios lentos

**Qué pasa:**
Si tenés formularios con muchas validaciones, lógica compleja o campos dinámicos, la app se puede trabar al escribir.

**Cómo lo solucionás:**

* Evitá validaciones complejas innecesarias. Usá funciones simples y validaciones asincrónicas solo si realmente las necesitás.

```ts
myForm = this.fb.group({
  email: ['', [Validators.required, Validators.email]],
});
```

* Dividí formularios largos en **pasos o secciones** (wizard), para no cargar todo al mismo tiempo.

### 🔁 Llamadas repetidas a la API

**Qué pasa:**
Si hacés muchas llamadas iguales a la misma API desde distintos lugares, saturás el backend y hacés más lenta tu app.

**Cómo lo solucionás:**

* Implementá cache en los servicios, por ejemplo con `Map` y RxJS:

```ts
private cache = new Map<string, any>();

getData(url: string): Observable<any> {
  if (this.cache.has(url)) return of(this.cache.get(url));
  return this.http.get(url).pipe(tap(data => this.cache.set(url, data)));
}
```

* Agrupá múltiples llamadas con `forkJoin` o `combineLatest` para hacer una sola petición conjunta.

### 📦 Scripts pesados y dependencias innecesarias

**Qué pasa:**
Agregar muchas librerías sin control aumenta el tamaño del bundle, haciendo más lenta la app.

**Cómo lo solucionás:**

* Limpiá el `package.json`: eliminá lo que no uses.
* Importá solo los módulos necesarios:

```ts
import { MatButtonModule } from '@angular/material/button'; // No todo Angular Material
```

* Asegurate de que el **tree shaking** esté funcionando en tu build.

---

## ¿Cómo se implementa Lazy Loading en Angular?

Lazy Loading carga un modulo solo cuando el usuario esta por acceder a la misma. Antes de la introduccion de standalone components, era necesario crear modulos para cada componente, pero ahora no es necesario. Se utiliza `loadComponent` en lugar de `loadChildren`

```ts
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'admin',
    loadComponent: () => import('./admin/admin.component').then(m => m.AdminComponent)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];
```

Tambien puede complementarse muy bien con `Route Guards` para proteger rutas y asegurarse de que el usuario tenga acceso a la misma si posee autorizacion. 

```ts
{
  path: 'admin',
  loadComponent: () => import('./admin/admin.component').then(m => m.AdminComponent),
  canActivate: [authGuard]
}
```

## ¿Cómo funciona la detección de cambios en Angular?

Angular tiene un sistema que cada vez que:

- tocás algo del DOM (como un botón),

- hacés un evento ((click), (input), etc.),

- llega un nuevo dato de un observable o un servicio,

automáticamente revisa todos los componentes y se pregunta: **“¿Cambió algo que estoy mostrando en la pantalla?”**

Si la respuesta es sí, Angular actualiza lo que ve el usuario.

**¿Angular revisa TODO todo el tiempo?**

Sí, y no. Por defecto, Angular vuelve a revisar todos los componentes desde la raíz hacia abajo, cada vez que cree que algo pudo haber cambiado. Esto es gracias a algo que se llama **zone.js**, una librería que observa cosas como:

- setTimeout
- eventos de usuario
- llamadas HTTP
- promesas

Entonces Angular dice: “Algo pasó, mejor reviso todo, por si las dudas”, a esto se le dice **Dirty Checking**
Si tu app es de tamanio pequenio, ni lo notás. Pero en apps grandes con muchos componentes, puede volverse lento. 

Hay varias estrategias para detectar los cambios:

* **Default**: Angular recorre todo el arbol de componentes y verifica si hay cambios en las propiedades de los componentes. Si hay cambios, actualiza la vista. Se ejecuta ante cualquier evento asincronico y puede afectar el rendimiento si hay muchos componentes.
* **OnPush**: Solo se actualiza el componente si hay cambios en las propiedades de entrada (`@Input`) o si se emite un evento (`@Output`). Es mas eficiente que la estrategia por defecto.

```typescript
@Component({
  selector: 'app-ejemplo',
  templateUrl: './ejemplo.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush // Activa la detección optimizada
})
```

La deteccion de cambios sin embargo puede ser tambien forzada mediante el uso de `ChangeDetectorRef`

- `ChangeDetectorRef.detectChanges()` → Recorre el árbol de componentes y actualiza la vista.
- `ChangeDetectorRef.markForCheck()` → Marca el componente como "sucio" para la próxima detección.

```typescript
constructor(private cdr: ChangeDetectorRef) {}

ngAfterViewInit() {
  this.cdr.detectChanges(); // Forzar actualización
}
```