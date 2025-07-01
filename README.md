# Angular Moderno

## Requisitos

- Conocimientos básicos de JavaScript y TypeScript
- Familiaridad con Angular
- Node.js y npm instalados en tu máquina

## Comenzando

Para iniciar el servidor de desarrollo de tu aplicación, utiliza:

```sh
npx nx serve angular-moderno-udemy
```

Para crear un paquete de producción:

```sh
npx nx build angular-moderno-udemy
```

## Añadir nuevos proyectos

Puedes añadir nuevos proyectos a tu espacio de trabajo utilizando los plugins de Nx. Para generar una nueva aplicación, usa:

```sh
npx nx g @nx/angular:app demo
```

Para generar una nueva librería:

```sh
npx nx g @nx/angular:lib mylib
```

## Configuración de CI

Conecta tu proyecto a Nx Cloud para un CI rápido y escalable:

```sh
npx nx connect
```

Configura un flujo de trabajo de CI para tu espacio de trabajo:

```sh
npx nx g ci-workflow
```

## Instalar Nx Console

Nx Console es una extensión para editores que mejora tu experiencia de desarrollo. Está disponible para VSCode e IntelliJ.

[Instalar Nx Console &raquo;](https://nx.dev/getting-started/editor-setup?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Recursos útiles

- [Documentación de Angular](https://angular.io/docs)
- [Documentación de Nx](https://nx.dev)
- [Comunidad de Nx en Discord](https://go.nx.dev/community)

¡Esperamos que disfrutes del curso y aprendas mucho sobre Angular moderno!
