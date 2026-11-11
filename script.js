// Inicializa o visualizador de Tour Virtual
const viewer = pannellum.viewer('panorama', {
    "default": {
        "firstScene": "entrada",
        "autoLoad": true,
        "sceneFadeDuration": 1000
    },
    "scenes": {
        "entrada": {
            "title": "Entrada do Local",
            "type": "equirectangular",
            // Substitua o link abaixo pelo nome da sua foto 360 (ex: "foto1.jpg")
            "panorama": "https://pannellum.org",
            "hotSpots": [
                {
                    "pitch": -2.1,
                    "yaw": 132.9,
                    "type": "scene",
                    "text": "Ir para a Sala Principal",
                    "sceneId": "sala"
                }
            ]
        },
        "sala": {
            "title": "Sala Principal",
            "type": "equirectangular",
            // Substitua o link abaixo pelo nome da sua segunda foto 360 (ex: "foto2.jpg")
            "panorama": "https://pannellum.org",
            "hotSpots": [
                {
                    "pitch": -0.6,
                    "yaw": 37.1,
                    "type": "scene",
                    "text": "Voltar para a Entrada",
                    "sceneId": "entrada"
                }
            ]
        }
    }
});

// Função para os botões do menu superior
function mudarCena(nomeDaCena) {
    viewer.loadScene(nomeDaCena);
}
