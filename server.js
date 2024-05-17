const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

const data = {
  title: 'Motores de plantillas',
  message:
    'El motor de plantillas es un componente que permite crear plantillas de contenido dinámico. Las plantillas son archivos HTML',
  products: [
    {
      id: 1,
      name: 'Producto 1',
      price: 10,
      description: 'Descripción del Producto 1',
    },
    {
      id: 2,
      name: 'Producto 2',
      price: 20,
      description: 'Descripción del Producto 2',
    },
    {
      id: 3,
      name: 'Producto 3',
      price: 30,
      description: 'Descripción del Producto 3',
    },
  ],
}

app.get('/', (req, res) => {
  res.render('index', data)
})

app.get('/producto/:id', (req, res) => {
  const { id } = req.params
  const product = data.products.find((product) => product.id === Number(id))
  if (product) {
    res.render('producto', { title: product.name, product })
  } else {
    res.status(404).render('404-producto', { title: 'Producto no encontra2' })
  }
})

app.get('/contacto', (req, res) => {
  res.render('contacto', { title: 'Pagina de contacto' })
})

app.use((req, res) => {
  res.status(404).render('404', { title: 'Pagina no encontrada' })
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
