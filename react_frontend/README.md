# REACT frontend laravel Breeze API végpontokhoz 

## Bejelentkezés és Regisztráció

1. **laravel telepítése**: composer create-project laravel/laravel laravel-breeze-api
2. **breeze telepítése**:  composer require laravel/breeze --dev
3. **breeze api telepítése**:  php artisan breeze:install api
4. a routes/auth.php fájlban vannak a használható végpontok. Ehhez kapcsolódunk frontenden. 
5. env fájlban állítsuk be az adatbázis elérhetőségeket. 
6. migráljuk az adatbázist
7. env. php ban be kell állítani a forntend elérés értékeit: 
APP_URL=http://localhost:8000
FRONTEND_URL=http://localhost:3000
SANCTUM_STATEFUL_DOMAINS=localhost:3000
SESSION_DOMAIN=localhost



## Frontend kialakítása

Hozzuk létre a react projektet és telepítsük hozzá a React routert, bootstrapet és az axiost

 1. Menü és Route-ok kialakítása, Page komponensek létrehozása
 2. Login és Register formok létrehozása
 3. Regisztráció és a Bejelentkezés logikája
 4. AuthContext létrehozása
 5. Layoutok kialakítása

