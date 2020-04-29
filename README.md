# Flux architecture

## Project Intent

The intention of the project was to study how the flux architecture works. For the study, an ecommerce for the sale of shoes inspired by the netshoes store was developed. Developing the cart screen and product screen.

## The documentation will be divided into some topics

- [How to works](#how-to-works)
- [What was used](#what-was-used)
- [How to install](#how-to-install)
- [Used data](#used-data)
- [Routes](#routes)

### how to works

![](C:\Users\Ander\Documents\Projects\Bootcamp\older\flux.architecture\rocketshoes\images\home.png)

![](C:\Users\Ander\Documents\Projects\Bootcamp\older\flux.architecture\rocketshoes\images\car.png)

When added the items go directly to the cart passing the value and the quantity of items

### What was used

### For the development of this project the following facilities were used

- Axios
- Immer
- polished
- react-icons
- react-redux
- react-router-dom
- reactotron-react-js
- reactotron-redux
- redux
- styled-components
- server-json

### How to install

Clone the project to your computer

```bash
git clone https://github.com/AndersonAndrad/flux.architecture
```

After cloning the project run the command

```bash
yarn install 
or 
npm install 
```

After installing everything by running the command on a separate console

```
server-json -p 3333 server.json
```

This will make it run the server with the data in json so that the tests can be done

### Used data

The information used was created only for this project, a json file was used with the information just for testing, the idea is that this information comes  from a backend made to the system, but with the information that is being passed, we already have an idea of how the system works.

### Example

Stock

```json
"stock": [
    {
      "id": 1,
      "amount": 3
    },
```

Products

```json
"products": [
    {
      "id": 1,
      "title": "Tênis de Caminhada Leve Confortável",
      "price": 179.9,
      "image": "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg"
    },
```

### Routes

*http:localhost:3000* - The main route

*http:localhost:3000*/cart - The cart route

