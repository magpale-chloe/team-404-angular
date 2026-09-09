# Team 404

This is an Angular web application created for the Internet Languages and Tools 2 course by Team 404. Its content includes the four team members' interactive profile cards, with each card showing a photo, role, and expandable personal description.

## Live demo

View the deployed website on GitHub Pages: [Team 404](https://magpale-chloe.github.io/team-404-angular/)

## Tech stack

- Angular 
- TypeScript 
- Angular Material and Angular CDK
- SCSS
- npm 11

## Getting started

### Prerequisites

- Node.js compatible with Angular 22
- npm 11 or a compatible npm version

Angular CLI can be installed globally with:

```bash
npm install -g @angular/cli
```

### Install dependencies

From the Angular project directory, run:

```bash
cd team-404
npm install
```

### Start the development server

```bash
ng serve
```

Open `http://localhost:4200/` in a browser. The development server reloads the application when source files change.

## Available commands

Run these commands from `team-404/`:

| Command | Description |
| --- | --- |
| `npm start` | Start the local development server. |
| `npm run build` | Create an optimized production build in `dist/`. |
| `npm run watch` | Rebuild continuously using the development configuration. |
| `npm test` | Run the unit tests with Vitest. |
| `npm run ng -- generate component <name>` | Generate Angular code with the CLI. |

## Project structure

```text
team-404-angular/
├── README.md
└── team-404/
	├── public/assets/       # Images and other static assets
	├── src/
	│   ├── app/
	│   │   ├── app.ts       # Root component
	│   │   ├── app.html     # Team page layout
	│   │   ├── app.scss     # Root component styles
	│   │   ├── magpale/      # Precious Chloe Magpale profile
	│   │   ├── raquin/       # Renz Mathieu M. Raquin profile
	│   │   ├── rullan/       # Harvey Laurence P. Rullan profile
	│   │   └── staana/       # Matthew E. Sta. Ana profile
	│   ├── main.ts
	│   └── styles.scss      # Global styles
	├── angular.json
	└── package.json
```

Each member profile is implemented as a standalone Angular component. The profile components use Angular signals for their display data and description visibility, and Angular Material components for the card controls.

## How the app works

Angular uses components to split the page into smaller, reusable parts. The `App` component is the root component. It imports and displays four member components:

```html
<app-magpale></app-magpale>
<app-rullan></app-rullan>
<app-raquin></app-raquin>
<app-staana></app-staana>
```

The application starts in `src/main.ts`, which loads `App` and the application configuration. Angular then renders the `app.html` template inside the `<app-root>` element in `src/index.html`.

## Angular concepts used

### Signals and interpolation

Signals store values that the template displays. The signal value is read with parentheses:

```ts
name = signal('Precious Chloe Magpale');
```

```html
<h2>{{ name() }}</h2>
```

### Property binding

Property binding connects a component value to an HTML property. The profile image uses the signal for its source and alternative text:

```html
<img [src]="image()" [alt]="name()" />
```

### Event binding

Event binding runs a method when the user interacts with the page. In this project, clicking a button shows or hides the member description:

```html
<button (click)="toggleDescription()">About Me</button>
```

```ts
isDescriptionVisible = signal(false);

toggleDescription(): void {
  this.isDescriptionVisible.update((isVisible) => !isVisible);
}
```

The `@if` block displays the description only when the signal is `true`.

### Angular Material

Angular Material supplies the cards, buttons, dividers, and icons used by the profile components. A standalone component imports the Material modules it needs, then uses their HTML elements or directives in its template.

Main Material modules used in this project:

- `MatCardModule` for profile cards
- `MatButtonModule` for the details button
- `MatDividerModule` for the card divider
- `MatIconModule` for the button icon

## Adding or updating a profile

1. Update the relevant component TypeScript file in `team-404/src/app/`.
2. Update its HTML and SCSS files when the profile markup or styling changes.
3. Place new images in `team-404/public/assets/` and reference them using the path emitted by the application, such as `assets/images/example.jpg`.
4. Run `npm test` and `ng serve` from `team-404/` before submitting changes.

## Testing

Unit tests are located beside their components as `*.spec.ts` files. Run the complete suite with:

```bash
cd team-404
ng test
```

## License

This project is intended for educational use.
