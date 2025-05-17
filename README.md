# React Router

## Estructura general

Implementé React Router para manejar la navegación. El enfoque fue separar la aplicación en dos áreas: una para autenticación y otra para mostrar el contenido de héroes.

Para empezar, configuré BrowserRouter en el archivo principal:

```jsx
// En main.jsx
<BrowserRouter>
  <HeroesApp />
</BrowserRouter>
```

Al envolver la aplicación con el componente ```<BrowserRouter>``` se habilita la gestión de la navegación

## Rutas principales

Implementé dos niveles de rutas. En el primer nivel tengo:

```jsx
// En AppRouter.jsx
<Routes>
  <Route path="login" element={<LoginPage />} />
  <Route path="/*" element={<HeroesRoutes />} />
</Routes>
```

Aquí separé la ruta de login del resto de la aplicación. El ```/*``` funciona como un comodín que envía cualquier otra ruta al componente HeroesRoutes.

## Rutas secundarias

Dentro de HeroesRoutes, implementé el segundo nivel:

```jsx
// En HeroesRoutes.jsx
<Routes>
  <Route path="marvel" element={<MarvelPage />} />
  <Route path="dc" element={<DcPage />} />
  <Route path="search" element={<SearchPage />} />
  <Route path="hero/:id" element={<HeroPage />} />
  <Route path="/" element={<Navigate to="/marvel" />} />
</Routes>
```

Aquí usé el componente Navigate para redirigir automáticamente la ruta raíz hacia Marvel, estableciéndola como página por defecto.

## Navegación

Para manejar eventos como login y logout, implementé ```useNavigate```

```jsx
// En LoginPage.jsx
const navigate = useNavigate();

const onLogin = () => {
  navigate('/', {
    replace: true
  });
}
```

El parámetro ```replace: true``` es importante porque reemplaza la entrada actual en el historial, evitando que el usuario pueda volver a la página de login con el botón de atrás.

## Componentes de navegación

Para la barra de navegación, implementé dos tipos de enlaces:

```jsx
// En Navbar.jsx - Link para el "logo" que en este caso es texto
<Link className="navbar-brand" to="/">
  React Router
</Link>

// En Navbar.jsx - NavLink para secciones con estado
<NavLink 
  className={({isActive}) => `nav-item nav-link ${isActive ? 'active' : ''}`} 
  to="/marvel"
>
  Marvel
</NavLink>
```

La diferencia es que NavLink recibe una función para la clase CSS que usa la propiedad ```isActive``` para determinar si estamos en esa ruta y resaltar la sección actual.

## Enlaces

Se construyen de manera dinámica basados en su ID:

```jsx
// En HeroCard.jsx
<Link to={`/hero/${id}`}>
  Mas...
</Link>
```

Se crean URLs personalizadas para cada héroe y permite acceder a sus páginas de detalle.

## QueryParams

Implementé parámetros de consulta URL para las búsquedas:

```jsx
// En SearchPage.jsx
const location = useLocation();
const { q = '' } = queryString.parse(location.search);
```

Para mantener las búsquedas en el historial y además habilita el compartir resultados vía URL.

## Manejo de estados UI

Lógica de mostrar elementos con condiciones:

```jsx
// En SearchPage.jsx
const showSearch = (q.length === 0);
const showError = (q.length > 0) && heroes.length === 0;

<div className="alert alert-primary" style={{ display: showSearch ? '' : 'none' }}>
  Search a hero
</div>
```

## Ruta con parámetros

Las rutas dinámicas tienen redirección si no se encuentra el recurso:

```jsx
// En HeroesRoutes.jsx
<Route path="hero/:id" element={<HeroPage />} />

// En HeroPage.jsx
if (!hero) {
  return <Navigate to="/marvel" />
}
```

## Navegación atrás

Agregué un botón para volver a la página anterior:

```jsx
// En HeroPage.jsx
const onNavigateBack = () => {
  navigate(-1);
}
```

## Componentes reutilizables

Lógica repetitiva en componentes:

```jsx
const CharactersByHero = ({alter_ego, characters}) => {
  return (alter_ego === characters) ? <></> : <p>{characters}</p>
}
```

## Custom Hook

Reutilicé un hook de los ejemplos anteriores con los que estaba prácticando para manejar formularios:

```jsx
// useForm.js
export const useForm = (initialForm = {}) => {
  // código que maneja state y cambios
  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
  }
}
```

## Funcionalidades principales logradas

1. Separar la página de login del resto de la aplicación
2. Crear rutas anidadas para organizar mejor el contenido
3. Implementar navegación entre páginas
4. Redirigir automáticamente a una página por default
5. Crear menús que resaltan la sección activa
6. Mantener búsquedas en la URL
7. UI condicional
8. Componentes reutilizables