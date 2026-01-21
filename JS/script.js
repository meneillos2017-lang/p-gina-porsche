const tycan = {
    "berlina": {
        "lateral": "Assets/cars/models/taycan-berlina.avif",
        "precio": "Desde EUR 106.252,00 PVP Recomendado1",
        "consumo": "Consumo eléctrico combinado - WLTP* (intervalo modelo): 19,4 – 16,7 kWh/100 km, Consumo eléctricobajo - WLTP* (intervalo modelo): 16,6 – 14,4 kWh/100 km, Consumo eléctricomedio - WLTP* (intervalo modelo): 16,6 – 13,8 kWh/100 km, Consumo eléctrico alto - WLTP* (intervalo modelo): 17,6 – 14,2 kWh/100 km, Consumo eléctrico muy alto - WLTP* (intervalo modelo): 22,8 – 18,2 kWh/100 km, Autonomía eléctrica en ciudad - WLTP* (intervalo modelo): 593 – 824 km, Autonomía eléctrica combinado - WLTP* (intervalo modelo): 521 – 680 km, Emisiones CO2 combinado (Gasolina y BEV)/ combinado ponderado (PHEV) - WLTP* (intervalo modelo): 0 – 0 g/km",
        "aceleración": "4,8 s",
        "potencia": "300 kw / 408 cv",
        "velocidad": "230 km/h",
        "frontal": "Assets/cars/front/frente-taycan-berlina.avif",
    },
    "sport": {
        "lateral": "Assets/cars/models/taycan-sport.avif",
        "precio": "Desde EUR 107.539,00 PVP Recomendado1",
        "consumo": "Consumo eléctrico combinado - WLTP* (intervalo modelo): 20,2 – 17,5 kWh/100 km, Consumo eléctrico bajo - WLTP* (intervalo modelo): 16,9 – 14,6 kWh/100 km, Consumo eléctrico medio - WLTP* (intervalo modelo): 17,0 – 14,1 kWh/100 km, Consumo eléctrico alto - WLTP* (intervalo modelo): 18,3 – 14,8 kWh/100 km, Consumo eléctrico muy alto - WLTP* (intervalo modelo): 24,2 – 19,5 kWh/100 km, Autonomía eléctrica en ciudad - WLTP* (intervalo modelo): 579 – 811 km, Autonomía eléctrica combinado - WLTP* (intervalo modelo): 496 – 652 km, Emisiones CO2 combinado (Gasolina y BEV)/ combinado ponderado (PHEV) - WLTP* (intervalo modelo): 0 – 0 g/km",
        "pvp": " ",
        "aceleración": "4,8 s",
        "potencia": "300 kw / 408 cv",
        "velocidad": "230 km/h",
        "frontal": "Assets/cars/front/frente-taycan-sport.avif",
    },
    "cross": {
        "lateral": "Assets/cars/models/taycan-cross.avif",
        "precio": "Desde EUR 119.013,00 PVP Recomendado1",
        "consumo": "Consumo eléctrico combinado - WLTP* (intervalo modelo): 21,4 – 18,7 kWh/100 km, Consumo eléctrico bajo - WLTP* (intervalo modelo): 18,8 – 16,7 kWh/100 km, Consumo eléctrico medio - WLTP* (intervalo modelo): 18,4 – 16,1 kWh/100 km, Consumo eléctrico alto - WLTP* (intervalo modelo): 19,6 – 17,1 kWh/100 km, Consumo eléctrico muy alto - WLTP* (intervalo modelo): 25,8 – 22,5 kWh/100 km, Autonomía eléctrica en ciudad - WLTP* (intervalo modelo): 611 – 696 km, Autonomía eléctrica combinado - WLTP* (intervalo modelo): 532 – 614 km, Emisiones CO2 combinado (Gasolina y BEV)/ combinado ponderado (PHEV) - WLTP* (intervalo modelo): 0 – 0 g/km",
        "pvp": " ",
        "aceleración": "4,7 s",
        "potencia": "320 kw / 435 cv",
        "velocidad": "220 km/h",
        "frontal": "Assets/cars/front/frente-taycan-cross.avif",
    }
}

function enlaceModelo (nombre){
    switch(nombre){
        case "berlina":
            document.getElementById("tycan__img").src = tycan.berlina.lateral;
            document.getElementById("precio").textContent = tycan.berlina.precio;
            document.getElementById("consumo").textContent = tycan.berlina.consumo;
            document.getElementById("segundos").textContent = tycan.berlina.aceleración;
            document.getElementById("kw").textContent = tycan.berlina.potencia;
            document.getElementById("km").textContent = tycan.berlina.velocidad;
            document.getElementById("estadisticas__img").src = tycan.berlina.frontal;
        break;

        case "sport":
            document.getElementById("tycan__img").src = tycan.sport.lateral;
            document.getElementById("precio").textContent = tycan.sport.precio;
            document.getElementById("consumo").textContent = tycan.sport.consumo;
            document.getElementById("pvp").textContent = tycan.sport.pvp;
            document.getElementById("segundos").textContent = tycan.sport.aceleración;
            document.getElementById("kw").textContent = tycan.sport.potencia;
            document.getElementById("km").textContent = tycan.sport.velocidad;
            document.getElementById("estadisticas__img").src = tycan.sport.frontal;
        break;

        case "cross":
            document.getElementById("tycan__img").src = tycan.cross.lateral;
            document.getElementById("precio").textContent = tycan.cross.precio;
            document.getElementById("consumo").textContent = tycan.cross.consumo;
            document.getElementById("pvp").textContent = tycan.cross.pvp;
            document.getElementById("segundos").textContent = tycan.cross.aceleración;
            document.getElementById("kw").textContent = tycan.cross.potencia;
            document.getElementById("km").textContent = tycan.cross.velocidad;
            document.getElementById("estadisticas__img").src = tycan.cross.frontal;
        break;

        default:
            Error
        break;
    }
}