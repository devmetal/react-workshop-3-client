# React Workshop 3

## Futtatás:

Sima install után a start parancsal indul az alkalmazás.
A különböző verziók használatához, az src/index.js fájlt kell módosítani a szokott módon.

## Proxy:

Egyetlen fontos beállítás van ami nincs env fájlban:

A backenjét a program, egy proxy-n keresztül éri el, elkerülendő a cors errort. Hogyha a backend nem a 8080-as porton fut, akkor át kell írni a package.json-ban a proxy blokk megfelelő részeit.

Például hogyh a backend nem a 8080 hanem a 3001 es porton fut akkor a következőképen módosul a package.json:

```
"proxy": {
    "/graphql": {
      "target": "http://localhost:3001"
    }
  }
```
