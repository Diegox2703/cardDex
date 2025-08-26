⚠ La API publica de pokemon usada actualmente tiene demasiado trafico, por lo tanto puede haber retraso con la respuesta de las peticiones.

✅ App frontend de cartas de pokemon la cual en la cual se podra:

- Visualizar y buscar cartas de pokemon por nombre, numero y set.
- Ver caracteristicas como rareza, tipo, artista y mas, ademas de el valor de la carta en tcgplayer y cardmarket.
- Visualizar y buscar sets por nombre asi como tambien visualizar las cartas que lo conforman.

🚀En este proyecto quize poner en practica conceptos de performance como:

- Code spliting con lazy y suspense.
- Debounce en barras de busqueda para ejecutar la busqueda cuando el usuario termina de escribir en vez de cada letra que presiona.
- React memo para memorizar componentes que se re-renderizan innecesariamente.
- Uso de abort controller para cancelar peticiones pendientes que ya no se necesitan.

🔥 Actualizaciones:

- Backend intermediario el cual cachea peticiones con redis para mejorar el tiempo de respuesta de la API de pokemontcg.
- Lazy loading de imagenes agregado.

📍 Link al codigo en GitHub: https://github.com/Diegox2703/cardDex.git

📍 Link al backend en Github: https://github.com/Diegox2703/cardDex-API.git

📍 Link a la API usada: https://pokemontcg.io/
