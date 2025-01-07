## Chapitre 1

dossier components dans le src avec dedans les differents dossiers pour tout les components

pour instyaller une app react avec vite
```bash
npm create vite@latest introdemo -- --template react
```
pensez à écrire export default XXXX à la fin du fichier d'un component

## Chapitre 2
Nous souhaitons améliorer la lisibilité de notre code et ne plus avoir à taper props.nomDeLaProps au sein de nos composants React.
à la place des props fait un destructuring assignment directement dans le paramètre de la fonction Header : 
```bash
const Header = ({ title, version }) => {
  return (
    <header>
      <h1 className="animate__animated animate__bounce">{title}</h1>
      <h4>Version: {version}</h4>
    </header>
  );
};
```
## Chapitre 4 : Gestion des formulaires, useEffect(), Axios...

useEffect est utilisé quand on fait des appels a l'api
Attention ne pas oublier de catch les erreurs
ex.   const initialLoad = () => {
    PersonsAPI
      .getAll()
      .then(persons => setPersons(persons))
      .catch(error => console.warn(error))
  }
  useEffect(initialLoad, [])
  si on mets un tableau le useeffect se lance des le lancement de l'application

  ```bash
useEffect(() => {
  console.log(`Effet exécuté, dépendance: ${count}`);
}, [count]);
```
Si le tableau contient des dépendances (par ex. [count]), l'effet est exécuté :

    Lors du premier rendu.
    Chaque fois qu'une des dépendances dans le tableau change (ici, quand count change).

Cela permet de réagir uniquement aux changements spécifiques, optimisant les performances.

## Chapitre 8 : Installation des dépendances Apollo Server et GraphQL

Pour installer les dépendances nécessaires à Apollo Server et GraphQL, utilisez la commande suivante :

```bash
npm install @apollo/server graphql
```

Et dans votre package.json, ajoutez/modifiez le script start pour qu'il ressemble à ceci : 
```bash
"start": "nodemon library-backend.js",
```
npm i
npm start

Apollo client 
```bash
npm install @apollo/client graphql
```

# Partie front
tu dois set up apollo client dans le fichier App.jsx, et il faut que extrait les queries GraphQL dans un fichier a part que tu peux nommer gql-queries.js
le fichier gql-queries se trouve dans le dossier src
