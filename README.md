# Prueba Web - Login Page

Página de login moderna con diseño split-screen implementada con Next.js, TypeScript y Tailwind CSS, siguiendo principios de Domain-Driven Design (DDD).

## 🚀 Características

- **Diseño Split-Screen**: Hero image a la izquierda y formulario de login a la derecha
- **Arquitectura DDD**: Separación clara entre dominio, presentación y aplicación
- **Componentes Modulares**: Componentes UI reutilizables y bien estructurados
- **Validación de Dominio**: Value objects para Email y Password con validación
- **Diseño Responsive**: Adaptable a diferentes tamaños de pantalla

## 📁 Estructura del Proyecto

```
src/
├── domain/                    # Capa de dominio (DDD)
│   └── auth/
│       └── value-objects/    # Value objects (Email, Password)
│
├── presentation/              # Capa de presentación
│   └── components/
│       ├── auth/              # Componentes de autenticación
│       │   ├── LoginForm.tsx
│       │   └── LoginHero.tsx
│       └── ui/                 # Componentes UI reutilizables
│           ├── Input.tsx
│           ├── Button.tsx
│           └── Link.tsx
│
└── app/
    └── login/
        └── page.tsx           # Página de login
```

## 🛠️ Tecnologías

- **Next.js 16** - Framework React
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Estilos utility-first
- **DDD** - Domain-Driven Design

## 📦 Instalación

```bash
npm install
```

## 🏃 Ejecutar en desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000/login](http://localhost:3000/login) en tu navegador.

## 🎨 Características del Diseño

- **Colores**:
  - Azul marino (#1e3a8a) para inputs y textos principales
  - Naranja (#ff6b35) para botones y enlaces de acción
  - Fondo gris claro (#f1f5f9)

- **Componentes**:
  - Inputs con fondo azul marino y texto blanco
  - Botones con bordes redondeados (rounded-3xl)
  - Diseño centrado y espaciado

## 📝 Notas

- Las imágenes deben colocarse en `public/images/login/`
- El formulario valida email y contraseña usando value objects del dominio
- La página es solo frontend (maquetación)

## 📄 Licencia

Este proyecto es privado.

