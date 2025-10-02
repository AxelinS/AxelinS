@echo off
REM Compilar Angular en modo producción
ng build --configuration production

REM Cambiar a la rama production
git checkout production

REM Eliminar archivos excepto .git, .gitignore y production.bat
for %%f in (*) do (
    if /I not "%%f"==".git" (
        if /I not "%%f"==".gitignore" (
            if /I not "%%f"=="production.bat" (
                del "%%f" >nul 2>&1
            )
        )
    )
)

REM Eliminar carpeta assets si existe
if exist assets (
    rmdir /S /Q assets
)

REM Copiar contenido de dist/axelins a la raíz
xcopy /E /I /Y "dist\axelins\*" ".\"

REM Copiar archivo .htaccess
copy /Y "dist\axelins\.htaccess" ".\.htaccess"
