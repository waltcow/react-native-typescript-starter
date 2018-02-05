# React Native with Typescript

---

自从react-native的packager独立之后，开放了很多可配置的属性。
工程中使用TypeScript比原来也更为简单

如果使用TS开发React Native的关键是使用transformer。

```bash
react-native start --transformer ./path/to/transformer.js
```

*transformer* 可以直接用开源 *react-native-typescript-transformer*

[react-native-typescript-transformer](https://github.com/ds300/react-native-typescript-transformer) 可以

## 初始化项目
```
react-native init DemoApp
cd DemoApp
yarn add --dev react-native-typescript-transformer typescript @types/react @types/react-native
```


## 配置rn-cli.config.js

```
rn-cli.config.js

module.exports = {  
  getTransformModulePath() {
    return require.resolve('react-native-typescript-transformer')
  },
  getSourceExts() {
    return ['ts', 'tsx'];
  }
}

```

## 配置Typescript 

```tsconfig.json```

```json

{
    "compilerOptions": {
        "module": "es2015",
        "target": "es2015",
        "moduleResolution": "node",
        "jsx": "react-native",
        "noImplicitAny": true,
        "experimentalDecorators": true,
        "preserveConstEnums": true,
        "sourceMap": true,
        "watch": true,
        "allowSyntheticDefaultImports": true
    },
    "filesGlob": [
        "src/**/*.ts",
        "src/**/*.tsx"
    ],
    "exclude": [
        "index.android.js",
        "index.ios.js",
        "build",
        "node_modules"
    ]
}

```
