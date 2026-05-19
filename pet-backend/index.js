const express = require('express');
const sql = require('mssql');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const app = express();
app.use(express.json());
app.use(cors());

// Swagger config
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: { title: 'VeterinariaDB API', version: '1.0.0', description: 'API para gestión de mascotas' },
    servers: [{ url: 'http://localhost:3000' }]
  },
  apis: ['./index.js']
};
const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const dbConfig = {
    user: 'sa',
    password: 'Mascotas2026!',
    server: 'localhost',
    port: 1435,
    database: 'VeterinariaDB',
    options: {
        encrypt: false,
        trustServerCertificate: true
    }
};

/**
 * @swagger
 * /mascotas:
 *   get:
 *     summary: Listar todas las mascotas
 *     responses:
 *       200:
 *         description: Lista de mascotas
 */
app.get('/mascotas', async (req, res) => {
    try {
        let pool = await sql.connect(dbConfig);
        let result = await pool.request().query("SELECT * FROM Mascotas");
        res.json(result.recordset);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

/**
 * @swagger
 * /mascotas:
 *   post:
 *     summary: Agregar una mascota
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre: { type: string }
 *               especie: { type: string }
 *               edad: { type: integer }
 *               nombre_dueno: { type: string }
 *     responses:
 *       200:
 *         description: Mascota agregada
 */
app.post('/mascotas', async (req, res) => {
    const { nombre, especie, edad, nombre_dueno } = req.body;
    try {
        let pool = await sql.connect(dbConfig);
        await pool.request()
            .input('nombre', sql.VarChar, nombre)
            .input('especie', sql.VarChar, especie)
            .input('edad', sql.Int, edad)
            .input('dueno', sql.VarChar, nombre_dueno)
            .query("INSERT INTO Mascotas (nombre, especie, edad, nombre_dueno) VALUES (@nombre, @especie, @edad, @dueno)");
        res.json({ message: "Mascota agregada!" });
    } catch (err) {
        res.status(500).send(err.message);
    }
});

/**
 * @swagger
 * /mascotas/{id}:
 *   delete:
 *     summary: Eliminar una mascota
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200:
 *         description: Mascota eliminada
 */
app.delete('/mascotas/:id', async (req, res) => {
    try {
        let pool = await sql.connect(dbConfig);
        await pool.request()
            .input('id', sql.Int, req.params.id)
            .query("DELETE FROM Mascotas WHERE id = @id");
        res.json({ message: "Mascota eliminada" });
    } catch (err) {
        res.status(500).send(err.message);
    }
});
/**
 * @swagger
 * /mascotas/update/{id}:
 *   post:
 *     summary: Actualizar una mascota
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: integer }
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre: { type: string }
 *               especie: { type: string }
 *               edad: { type: integer }
 *               nombre_dueno: { type: string }
 *     responses:
 *       200:
 *         description: Mascota actualizada
 */
app.post('/mascotas/update/:id', async (req, res) => {
    const { nombre, especie, edad, nombre_dueno } = req.body;
    try {
        let pool = await sql.connect(dbConfig);
        await pool.request()
            .input('id', sql.Int, req.params.id)
            .input('nombre', sql.VarChar, nombre)
            .input('especie', sql.VarChar, especie)
            .input('edad', sql.Int, edad)
            .input('dueno', sql.VarChar, nombre_dueno)
            .query("UPDATE Mascotas SET nombre=@nombre, especie=@especie, edad=@edad, nombre_dueno=@dueno WHERE id=@id");
        res.json({ message: "Mascota actualizada" });
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// ─────────────────────────────────────────────
// DATOS EN MEMORIA — Clientes, Productos, Ventas
// ─────────────────────────────────────────────
let clientes = [
  { id: 1, nombre: 'Ana García',   email: 'ana@email.com' },
  { id: 2, nombre: 'Luis Pérez',   email: 'luis@email.com' },
  { id: 3, nombre: 'María Torres', email: 'maria@email.com' },
  { id: 4, nombre: 'Carlos Ruiz',  email: 'carlos@email.com' }
];

let productos = [
  { id: 1, nombre: 'Alimento Premium Perro 5kg', precio: 45.00, stock: 20 },
  { id: 2, nombre: 'Alimento Premium Gato 3kg',  precio: 35.00, stock: 15 },
  { id: 3, nombre: 'Collar Antipulgas',           precio: 18.50, stock: 30 },
  { id: 4, nombre: 'Juguete Interactivo',         precio: 22.00, stock: 25 },
  { id: 5, nombre: 'Shampoo Mascotas 500ml',      precio: 12.00, stock: 40 },
  { id: 6, nombre: 'Cama Ortopédica Mediana',     precio: 85.00, stock: 10 },
  { id: 7, nombre: 'Correa Retráctil 5m',         precio: 28.00, stock: 18 },
  { id: 8, nombre: 'Vitaminas Mascotas x30',      precio: 15.00, stock: 50 }
];

let ventas = [
  {
    id: 1,
    clienteId: 1,
    nombreCliente: 'Ana García',
    fecha: '2026-05-10',
    detalles: [
      { productoId: 1, nombreProducto: 'Alimento Premium Perro 5kg', cantidad: 2, precio: 45.00, subtotal: 90.00 },
      { productoId: 3, nombreProducto: 'Collar Antipulgas',           cantidad: 1, precio: 18.50, subtotal: 18.50 }
    ],
    total: 108.50
  },
  {
    id: 2,
    clienteId: 2,
    nombreCliente: 'Luis Pérez',
    fecha: '2026-05-15',
    detalles: [
      { productoId: 2, nombreProducto: 'Alimento Premium Gato 3kg', cantidad: 3, precio: 35.00, subtotal: 105.00 }
    ],
    total: 105.00
  }
];

let nextVentaId = 3;

// ─────────────────────────────────────────────
// ENDPOINTS — Clientes
// ─────────────────────────────────────────────

/**
 * @swagger
 * /clientes:
 *   get:
 *     summary: Listar todos los clientes
 *     responses:
 *       200:
 *         description: Lista de clientes
 */
app.get('/clientes', (req, res) => {
  res.json(clientes);
});

// ─────────────────────────────────────────────
// ENDPOINTS — Productos
// ─────────────────────────────────────────────

/**
 * @swagger
 * /productos:
 *   get:
 *     summary: Listar todos los productos
 *     responses:
 *       200:
 *         description: Lista de productos con stock
 */
app.get('/productos', (req, res) => {
  res.json(productos);
});

// ─────────────────────────────────────────────
// ENDPOINTS — Ventas
// ─────────────────────────────────────────────

/**
 * @swagger
 * /ventas:
 *   get:
 *     summary: Listar todas las ventas
 *     responses:
 *       200:
 *         description: Lista de ventas registradas
 */
app.get('/ventas', (req, res) => {
  const resultado = [...ventas].sort((a, b) => b.id - a.id);
  res.json(resultado);
});

/**
 * @swagger
 * /ventas/{id}:
 *   get:
 *     summary: Obtener una venta por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200:
 *         description: Detalle de la venta
 *       404:
 *         description: Venta no encontrada
 */
app.get('/ventas/:id', (req, res) => {
  const venta = ventas.find(v => v.id === parseInt(req.params.id));
  if (!venta) return res.status(404).json({ error: 'Venta no encontrada' });
  res.json(venta);
});

/**
 * @swagger
 * /ventas:
 *   post:
 *     summary: Registrar una nueva venta
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               clienteId: { type: integer }
 *               detalles:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     productoId: { type: integer }
 *                     cantidad: { type: integer }
 *     responses:
 *       201:
 *         description: Venta registrada exitosamente
 *       400:
 *         description: Error de validación
 */
app.post('/ventas', (req, res) => {
  const { clienteId, detalles } = req.body;

  // Validaciones básicas
  if (!clienteId) {
    return res.status(400).json({ error: 'El clienteId es obligatorio.' });
  }
  if (!detalles || !Array.isArray(detalles) || detalles.length === 0) {
    return res.status(400).json({ error: 'Debe incluir al menos un producto en la venta.' });
  }

  const cliente = clientes.find(c => c.id === parseInt(clienteId));
  if (!cliente) {
    return res.status(400).json({ error: 'Cliente no encontrado.' });
  }

  // Validar stock y construir detalles
  const detallesCalculados = [];
  for (const item of detalles) {
    const producto = productos.find(p => p.id === parseInt(item.productoId));
    if (!producto) {
      return res.status(400).json({ error: `Producto con id ${item.productoId} no encontrado.` });
    }
    const cantidad = parseInt(item.cantidad);
    if (!cantidad || cantidad <= 0) {
      return res.status(400).json({ error: `La cantidad del producto "${producto.nombre}" debe ser mayor a cero.` });
    }
    if (producto.stock < cantidad) {
      return res.status(400).json({ error: `Stock insuficiente para "${producto.nombre}". Disponible: ${producto.stock}.` });
    }
    detallesCalculados.push({
      productoId: producto.id,
      nombreProducto: producto.nombre,
      cantidad,
      precio: producto.precio,
      subtotal: parseFloat((producto.precio * cantidad).toFixed(2))
    });
  }

  // Descontar stock
  detallesCalculados.forEach(d => {
    const prod = productos.find(p => p.id === d.productoId);
    if (prod) prod.stock -= d.cantidad;
  });

  const total = parseFloat(detallesCalculados.reduce((sum, d) => sum + d.subtotal, 0).toFixed(2));
  const nuevaVenta = {
    id: nextVentaId++,
    clienteId: cliente.id,
    nombreCliente: cliente.nombre,
    fecha: new Date().toISOString().split('T')[0],
    detalles: detallesCalculados,
    total
  };

  ventas.push(nuevaVenta);
  res.status(201).json(nuevaVenta);
});

app.listen(3000, () => {
    console.log('Backend listo en http://localhost:3000');
});