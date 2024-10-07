Note: For getting current directory pathname

```
pwd
```

### 1. How to test NPM package on locale machine

<b>On LIBRARY_APPLICATION_PATH project</b>

```
npm run build
```

```
sudo npm link
```

```
sudo npm link MAIN_APPLICATION_PATH/node_modules/react
```

<b>Go to local MAIN_APPLICATION_PATH project</b>

```
npm install LIBRARY_APPLICATION_PATH
```

```
npm link package_name
```

### 2. How to Publish NPM package

```
sudo npm link
```

```
sudo npm link otp-box-react
```

```
npm login
```

```
npm publish
```
