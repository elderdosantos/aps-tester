# APS Tester

Criei esse projeto para testar envio de push para aplicativos iOS.

```sh
cd aps-tester
npm install
node index.js
```

No index.js configure:
* cert e key = seu arquivo .pem de push
* production = true|false
* deviceToken
* note.topic = bundle id da sua aplicação

```js
console.log(result); // respostas enviadas pela  Apple
```