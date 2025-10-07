npm create vite@latest foodretail -- --template react-ts

npm install
npm run dev 


--pt : @emotion/react

Motorul de stilizare (CSS-in-JS) folosit implicit de MUI.

Permite scrierea de stiluri direct în JS/TS, folosind sintaxa sx sau styled., 
@emotion/styled

O altă parte din Emotion → API pentru a crea componente styled (asemănător cu styled-components).


 npm install @mui/material @emotion/react @emotion/styled react-router-dom  


  instalare iconite dashboard : 
 npm install @mui/icons-material

  charts : 
 npm install chart.js react-chartjs-2

 Unit tests depedencies

 npm install --save-dev jest @types/jest ts-jest \
  @testing-library/react @testing-library/jest-dom @testing-library/user-event \
  jest-environment-jsdom


jest → runner-ul de teste.

ts-jest + @types/jest → suport pentru TypeScript.

@testing-library/react → testarea componentelor React.

@testing-library/jest-dom → matchere custom (toBeInTheDocument, toHaveValue, etc.).

@testing-library/user-event → simulează interacțiuni (click, type, select).

jest-environment-jsdom → simulează DOM-ul în Node.js.

npm install --save-dev ts-node

 "verbatimModuleSyntax": false,

 de cautat 
 "scripts": {
  "test": "jest"
}
Dacă vrei să nu ruleze în watch, modifică la:

json
Copy code
"scripts": {
  "test": "jest --watchAll=false"
}
Sau rulează direct:

paste cu sos  portie de servire, prezentabili , cu legume si background de gatire

 