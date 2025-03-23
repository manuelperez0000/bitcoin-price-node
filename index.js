const express = require("express");
const axios = require("axios");
const cors = require("cors")

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors())

// Ruta para obtener el precio del Bitcoin
app.get("/api/bitcoin-price", async (req, res) => {
    try {
        const response = await axios.get("https://api.coingecko.com/api/v3/simple/price", {
            params: { ids: "bitcoin", vs_currencies: "usd" }
        });
        res.json({ price: response.data.bitcoin.usd });
    } catch (error) {
        res.status(500).json({ error: "Error al obtener el precio de Bitcoin" });
    }
});

// Iniciar servidor
app.listen(PORT, () => console.log(`API corriendo en http://localhost:${PORT}`));
