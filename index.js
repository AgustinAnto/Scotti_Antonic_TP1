const express = require('express');
const cors = require('cors');
const path = require('path'); // Import path module
const { error } = require('console');

const app = express();
const port = 3001;

// Allow all cross-origin requests
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// -------------------------------------------- ENDPOINTS --------------------------------------------

/****************************************
 * Business
****************************************/

app.get('/antonic', async (req, res) => {
  try{ //sino hace esto va a catch//
    
    res.status(200).send({'msg': 'hola'})

    }catch(e){ //si hay un error cae aca//
      res.status(500).send({'error': 'Internal server error'})
    }
})

app.get('/river', async (req, res) => {
  try{ //sino hace esto va a catch//

    res.status(200).sendFile(path.join(__dirname, 'tutu.html'));

    }catch(e){ //si hay un error cae aca//
      
      res.status(500).send({'error': 'Internal server error'})
    }
})

app.get('/goles', async (req, res) => {
  try{ //sino hace esto va a catch//

    res.status(200).sendFile(path.join(__dirname, 'goles.html'));

    }catch(e){ //si hay un error cae aca//
      
      res.status(500).send({'error': 'Internal server error'})
    }
})

app.get('/boom', async (req, res) => {
  res.status(500).json({ message: "My bad" })
})

app.post('/players', async (req, res) => {
  try {
    const {
      name
    } = req.body;

    if(name === undefined){ //si name es igual a cualquier otra cosa mal escrita aparece lo siguiente//
      res.status(400).send({"error": "Necesito que escribas name"});
    }else{
      console.log("Nuevo jugador:", name);
      res.status(201).send({ message: '¡Jugador creado exitosamente!' });
    }
  } catch (e) {
    
    console.error("Error al crear jugador:", e);
    res.status(500).send({ error: 'Error interno del servidor' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});