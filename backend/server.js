require('dotenv').config();
const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require('cors');
const nodemailer = require('nodemailer'); // 👈 Importamos nodemailer

const app = express();
app.use(cors());
app.use(express.json());

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

let collection;

async function connectDB() {
  try {
    await client.connect();
    const db = client.db('comentariosDB');
    collection = db.collection('comentarios');
    console.log("✅ Conectado a MongoDB Atlas correctamente.");
  } catch (error) {
    console.error("❌ Error conectando a MongoDB:", error);
  }
}
connectDB();

// 📚 Ruta para obtener comentarios
app.get('/api/comentarios', async (req, res) => {
  try {
    const comentarios = await collection.find().sort({ fecha: -1 }).toArray();
    res.json(comentarios);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener los comentarios' });
  }
});

// 📝 Ruta para agregar un nuevo comentario
app.post('/api/comentarios', async (req, res) => {
  const nuevoComentario = {
    nombre: req.body.nombre,
    comentario: req.body.comentario,
    fecha: new Date()
  };

  try {
    await collection.insertOne(nuevoComentario);
    res.status(201).json(nuevoComentario);
  } catch (err) {
    res.status(500).json({ error: 'Error al guardar el comentario' });
  }
});

// 📧 Ruta para enviar mensaje de contacto
app.post('/api/contacto', async (req, res) => {
  const { nombre, email, mensaje } = req.body;

  if (!nombre || !email || !mensaje) {
    return res.status(400).json({ message: 'Faltan campos obligatorios' });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER, // O cambia esto si quieres recibirlo en otro correo
      subject: `Nuevo mensaje de ${nombre}`,
      html: `
        <div style="font-family: Arial, sans-serif; font-size: 16px; color: #333;">
          <h2>Nuevo mensaje de contacto</h2>
          <p><strong>Nombre:</strong> ${nombre}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Mensaje:</strong></p>
          <p>${mensaje.replace(/\n/g, '<br/>')}</p>
        </div>
      `
    });

    res.status(200).json({ message: 'Correo enviado exitosamente' });
  } catch (error) {
    console.error('❌ Error enviando correo:', error);
    res.status(500).json({ message: 'Error al enviar el correo' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 Servidor backend corriendo en http://localhost:${PORT}`);
});
