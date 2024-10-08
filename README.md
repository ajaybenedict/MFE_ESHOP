# react-micro-frontend
Micro Frontend application using React and axios
> Webpack 5 support the micro frontend. webpack 5 available from node 19 version. `module Federation` Plugin is very important for micro frondend application
## Creating New Application
![image](https://github.com/goldenashok/react-micro-frontend/assets/13637127/3d55aa9b-65c1-4dae-a02e-8e0affb0f2b3)

- Have to follow the same step for below projct
- Main
- Product
- Delivery
- Order
  
#### Install Existing Application
Need to follow below step
- Clons the project using below url
  ```https://github.com/goldenashok/react-micro-frontend.git```
- install the concurrency package for run all the application in the single command
```npm install```
- Then move to all below list of folder (main, product, order, delivery) and then give ```npm install```, because all the appllication running separte port

![image](https://github.com/goldenashok/react-micro-frontend/assets/13637127/4fef693c-7a91-4cfc-80f2-43a06cf297d3)
![image](https://github.com/goldenashok/react-micro-frontend/assets/13637127/9717041d-5662-4edb-a884-e799f53614ca)

#### Home Page Running Port (if running separte projecct)
```http://localhost:9000/```

![image](https://github.com/goldenashok/react-micro-frontend/assets/13637127/4d2df9b2-3a96-45d5-b24f-7c1132cdb111)
#### Product Page Running below port (if running separte projecct)
```http://localhost:9001/```
#### Products URL (if running separte projecct)
```http://localhost:9001/products```

![image](https://github.com/goldenashok/react-micro-frontend/assets/13637127/0ac0f719-cfa1-499e-93eb-40ecd06589ae)
#### Product URL (if running separte projecct)
```http://localhost:9001/products/1```

![image](https://github.com/goldenashok/react-micro-frontend/assets/13637127/cb9106a9-b9a1-4c21-b755-b9f8d414e594)
#### Order Page Running below port (if running separte projecct)
```http://localhost:9002/```
#### Order URL (if running separte projecct)
```http://localhost:9002/orders```

![image](https://github.com/goldenashok/react-micro-frontend/assets/13637127/b85f7931-4761-48e8-8ba7-fd6c223d6e52)
#### Order URL (if running separte projecct)
```http://localhost:9002/orders/1/checkout```

![image](https://github.com/goldenashok/react-micro-frontend/assets/13637127/e450300b-24d2-47fc-923e-26e51bd9ece8)
#### Delivery Page Running below port (if running separte projecct)
```http://localhost:9003/```
#### Order URL (if running separte projecct)
```http://localhost:9003/deliivery```

![image](https://github.com/goldenashok/react-micro-frontend/assets/13637127/42f4bdd8-aa43-4753-81fd-2a3227876cbd)

## Reference Website
[Reference Website](https://medium.com/@kunalznk/building-micro-frontends-with-react-7f5a21a99825)
