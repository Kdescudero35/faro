# Prueba Mercado Libre

Prueba Mercado Libre es una aplicación web moderna construida con React 19 y Vite, diseñada para proporcionar una experiencia de usuario fluida. Aprovecha un stack tecnológico robusto que incluye Tailwind CSS para estilos, TanStack Query para la obtención de datos y Zustand para la gestión del estado.

## 🚀 Tecnologías Clave

- **[React 19](https://react.dev/)**: La biblioteca para interfaces de usuario web y nativas.
- **[Vite](https://vitejs.dev/)**: Herramientas de Frontend de Próxima Generación.
- **[Tailwind CSS 4](https://tailwindcss.com/)**: Un framework CSS de utilidad primero para el desarrollo rápido de UI.
- **[TanStack Query](https://tanstack.com/query/latest)**: Potente gestión de estado asíncrono.
- **[Zustand](https://zustand-demo.pmnd.rs/)**: Una solución de gestión de estado pequeña, rápida y escalable.
- **[React Router 7](https://reactrouter.com/)**: Enrutamiento declarativo para aplicaciones web React.
- **[MSW (Mock Service Worker)](https://mswjs.io/)**: Mocking de API para navegador y nodo.
- **[Magic UI](https://magicui.design/docs/components/animated-grid-pattern)**: Componentes de interfaz de usuario animados y modernos.
- **[shadcn/ui](https://ui.shadcn.com/docs/components/skeleton)**: Colección de componentes reutilizables bellamente diseñados.

## 🛠️ Primeros Pasos

Sigue estos pasos para configurar el proyecto localmente.

### Prerrequisitos

- Node.js (Se recomienda la última versión LTS)
- pnpm (Gestor de paquetes recomendado)

### Instalación

1.  **Clonar el repositorio:**

    ```bash
    git clone <url-del-repositorio>
    cd faro
    ```

2.  **Instalar dependencias:**

    ```bash
    pnpm install
    ```

### Ejecutando la Aplicación

Inicia el servidor de desarrollo:

```bash
pnpm dev
```

La aplicación estará disponible en `http://localhost:5173` (o el puerto que se muestre en tu terminal).

### Construyendo para Producción

Para crear una build de producción:

```bash
pnpm build
```

Para previsualizar la build de producción localmente:

```bash
pnpm preview
```

### Habilitar Mocks en Preview

Por defecto, los mocks (MSW) están deshabilitados en la build de producción. Si deseas probar la aplicación con datos simulados en modo preview, debes construir el proyecto con la variable de entorno `VITE_ENABLE_MSW=true`:

```bash
VITE_ENABLE_MSW=true pnpm build
pnpm preview
```

## 📂 Arquitectura del Proyecto

El proyecto sigue una arquitectura basada en características (features) para asegurar escalabilidad y mantenibilidad.

```
src/
├── app/              # Configuración global de la aplicación
│   ├── router.tsx    # Configuración de enrutamiento de la aplicación
│   └── index.css     # Estilos globales y directivas de Tailwind
├── features/         # Módulos basados en características
│   ├── cart/         # Característica 'Cart' (gestión del carrito)
│   └── items/        # Característica 'Items' (componentes, hooks, etc.)
├── shared/           # Recursos compartidos entre características
│   ├── components/   # Componentes UI reutilizables
│   ├── hooks/        # Hooks personalizados compartidos
│   └── types.ts      # Definiciones TypeScript compartidas
├── store/            # Gestión de estado global (stores de Zustand)
├── assets/           # Activos estáticos (imágenes, fuentes, etc.)
├── lib/              # Bibliotecas de utilidad y configuraciones
├── mocks/            # Mocks de API usando MSW
└── main.tsx          # Punto de entrada de la aplicación
```

### Directorios Clave

-   **`src/features`**: Contiene la lógica de negocio principal, dividida por características del dominio (actualmente `cart` y `items`). Cada carpeta de característica debería contener idealmente sus propios componentes, hooks y tipos.
-   **`src/shared`**: Contiene código que se utiliza en múltiples características, como componentes UI genéricos (botones, inputs) y funciones de utilidad.
-   **`src/store`**: Gestión de estado centralizada usando Zustand.
-   **`src/mocks`**: Contiene manejadores y configuración para Mock Service Worker, permitiendo el desarrollo sin un backend.

## 🚀 Despliegue

Puedes acceder a la aplicación desplegada en Vercel aquí:
[faro-steel.vercel.app](https://faro-steel.vercel.app)

## 🔮 Mejoras Futuras

Si tuviera más tiempo, me gustaría implementar las siguientes mejoras:

1.  **Pruebas Unitarias y de Integración**: Asegurar la robustez del código mediante tests exhaustivos.
2.  **Historial de Compras**: Una sección dedicada para que los usuarios vean sus pedidos anteriores.
3.  **Animaciones y Transiciones**: Mejorar la experiencia de usuario con micro-interacciones más fluidas.
4.  **Más Productos**: Ampliar el catálogo para demostrar mejor la escalabilidad de la lista y los filtros.