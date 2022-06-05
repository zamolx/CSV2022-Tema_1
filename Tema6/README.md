Client - pornind de la modelul de mai sus:

Interfața va contine:

 un input de tip text unde va fi introdus feedback-ul. 

 un buton de submit care va fi activ în momentul în care s-a selectat o căsuță disponibilă în care dorim să afișăm mesajul.

Sub input, se va afișa o matrice de 3x3 unde fiecare căsuță (sticky note) are un id ce reprezintă poziția lui din matrice (eg: 00, 01, …, XY, unde X este row si Y este column). În acea căsuță va apărea feedback-ul și background-ul va primi o culoare random.

De fiecară dată când un user adaugă un feedback, matricea va fi actualizată pentru toți utilizatorii conectați.

(OPȚIONAL) După submit, înlocuiți input-ul și butonul cu mesajul “Mulțumim pentru feedback!”

Server:

Va avea rolul de a prelucra informația trimisă de către client și de a stoca textul din input field in matrice, iar după va emite către toți clienții conectați matricea updatată.

# ./server
```
npm install  && npm run devStart
```
# ./client
```
npm install && npm start
```