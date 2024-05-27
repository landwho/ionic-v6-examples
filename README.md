# ===== RUN PROJECT ===== #

npm install 
ionic serve

# ===== Import to Android Studio ====== #

ionic build 
ionic capacitor add  android
ionic capacitor copy android

# ==== LIVE RELOAD ====#

ionic capacitor run android -l --host=YOUR_IP_ADDRESS

# ==== BROADCAST ==== #

chrome://inspect/#devices


IOS DEVELOPMENT XCODE

xcode-select --install



install capacitor
 npm i -g cordova
npm install @capacitor/core @capacitor/cli
ionic integrations enable cordova
ionic cordova platform add ios
ionic cordova platform add android



DESPLEGAR PLAY STORE 

ionic cordova build android --prod --release
(genera una APK sin firmar que se puede installar "app-release-unsigned.apk")

Para firmar la aplicacion se deben pagar 26 USD de la licencia Google Developer

firmar un APK - Android Studio Doc
https://developer.android.com/studio/publish/app-signing?hl=es-419
(buscar en documentacion "Firma un APK")

banner para aplicacion 1024x500px
icono de 512x512px



