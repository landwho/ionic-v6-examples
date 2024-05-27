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

