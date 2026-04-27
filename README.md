# 🍗 Soda La Yayis - Sistema de Pedidos en Línea

Sistema completo de gestión de pedidos para restaurante de comida rápida con estética inspirada en el Caribe Limonense de Costa Rica.

## ✨ Características

### Para Clientes
- 🛒 **Carrito de Compras**: Sistema completo con gestión de cantidades
- 🎨 **Personalización**: Opciones para salsas, ingredientes y preferencias
- 🚚 **Delivery o Recoger**: Dos métodos de entrega disponibles
- 💳 **Pagos**: SINPE para delivery, efectivo para recoger
- 📱 **Integración WhatsApp**: Pedidos enviados automáticamente
- 📍 **Rastreo en Tiempo Real**: Seguimiento del estado del pedido
- 🎯 **Números Únicos**: Cada pedido tiene un identificador único

### Para Administradores
- 📊 **Panel de Control**: Vista completa de todos los pedidos
- 📈 **Estadísticas**: Métricas del día en tiempo real
- 🔄 **Gestión de Estados**: Actualización del estado de pedidos
- 📱 **Notificaciones**: Alertas automáticas a clientes vía WhatsApp
- 🔍 **Filtros**: Organización por estado de pedido

## 🎨 Diseño

La aplicación utiliza una paleta de colores vibrante inspirada en el Caribe:
- **Turquesa Caribeño** (#00CED1): Color principal
- **Océano Caribeño** (#0E7C7B): Variante oscura
- **Coral Caribeño** (#FF6B6B): Acentos
- **Atardecer Caribeño** (#FFA500): Botones de acción
- **Palma Caribeña** (#2ECC71): Estados de éxito
- **Arena Caribeña** (#F4D03F): Detalles

Fuentes:
- **Baloo 2**: Títulos y elementos destacados (estilo juguetón y amigable)
- **Poppins**: Cuerpo de texto (moderna y legible)

## 🚀 Despliegue

### GitHub Pages

1. **Subir a GitHub**:
```bash
git init
git add .
git commit -m "Initial commit: Soda La Yayis"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/soda-la-yayis.git
git push -u origin main
```

2. **Habilitar GitHub Pages**:
   - Ve a Settings → Pages
   - Source: Deploy from a branch
   - Branch: main / (root)
   - Save

Tu sitio estará disponible en: `https://TU_USUARIO.github.io/soda-la-yayis/`

### Vercel (Recomendado)

1. **Opción 1 - Desde GitHub**:
   - Ve a [vercel.com](https://vercel.com)
   - "Import Project" → "Import Git Repository"
   - Selecciona tu repositorio
   - Deploy automático

2. **Opción 2 - CLI**:
```bash
npm i -g vercel
vercel
```

3. **Configuración**:
   - Framework Preset: Other
   - Build Command: (vacío)
   - Output Directory: (vacío)
   - Install Command: (vacío)

Tu sitio estará disponible en: `https://soda-la-yayis.vercel.app/`

### Netlify

1. **Arrastrar y Soltar**:
   - Ve a [netlify.com](https://netlify.com)
   - Arrastra la carpeta del proyecto
   - Deploy automático

2. **Desde GitHub**:
   - "New site from Git"
   - Selecciona tu repositorio
   - Build settings: vacío
   - Deploy

## 📱 Configuración

### Número de WhatsApp

El número de WhatsApp está configurado en `script.js` línea 636:
```javascript
const whatsappUrl = `https://wa.me/50661138819?text=${encodeURIComponent(message)}`;
```

Para cambiarlo:
1. Reemplaza `50661138819` con tu número (formato: código de país + número sin espacios)
2. Guarda y vuelve a subir

### Contraseña de Administrador

Por defecto: `admin123`

Para cambiar en `script.js` línea 577:
```javascript
if (password === 'admin123') {
```

**⚠️ IMPORTANTE**: Esta es una contraseña de demostración. Para producción, implementa autenticación segura.

## 📖 Manual de Uso

### Para Clientes

1. **Navegar el Menú**:
   - Usa los filtros de categorías para explorar
   - Haz clic en un producto para ver detalles y personalizar

2. **Agregar al Carrito**:
   - Botón rápido: "Agregar" sin personalización
   - Modal completo: Personaliza salsas, ingredientes, cantidad

3. **Realizar Pedido**:
   - Clic en el carrito flotante
   - Revisar items y cantidades
   - "Continuar al Pago"
   - Llenar información personal
   - Seleccionar Delivery o Recoger
   - Confirmar pedido
   - Se abre WhatsApp con el pedido

4. **Rastrear Pedido**:
   - Botón "Rastrear Pedido" en el header
   - Ingresar número de pedido
   - Ver estado actual

### Para Administradores

1. **Acceder al Panel**:
   - Botón "Admin" en el header
   - Contraseña: `admin123`

2. **Gestionar Pedidos**:
   - Ver todos los pedidos en tiempo real
   - Filtrar por estado
   - Actualizar estado con un clic
   - Se notifica automáticamente al cliente

3. **Estados de Pedido**:
   - 📨 **Recibido**: Pedido nuevo
   - 👨‍🍳 **En Preparación**: Cocinando
   - ✅ **Listo**: Para entrega/recolección
   - 🎉 **Completado**: Entregado

## 💾 Almacenamiento

La aplicación usa `localStorage` para:
- Carrito de compras (persistente entre sesiones)
- Historial de pedidos
- Estado de autenticación admin

**Nota**: Los datos se almacenan localmente en el navegador. Para sincronizar entre dispositivos, considera implementar un backend.

## 🔧 Personalización

### Agregar Productos

En `script.js`, en el array `menuData`:
```javascript
{
    id: 'nuevo1',
    name: 'Nombre del Producto',
    category: 'categoria', // pollo-frito, pollo-caribeno, otros, bebidas
    price: 1500,
    description: 'Descripción del producto',
    image: null,
    customizations: ['sauces', 'preferences'] // opcional
}
```

### Modificar Opciones de Personalización

En `script.js`, en el objeto `customizationOptions`:
```javascript
sauces: {
    title: 'Salsas',
    options: [
        { id: 'nueva-salsa', label: 'Nueva Salsa' }
    ]
}
```

### Cambiar Colores

En `styles.css`, modificar las variables CSS:
```css
:root {
    --caribbean-turquoise: #00CED1;
    --caribbean-ocean: #0E7C7B;
    /* ... más colores */
}
```

## 📱 WhatsApp Business API (Opcional)

Para automatización avanzada:
1. Configura WhatsApp Business API
2. Reemplaza los `window.open` con llamadas a la API
3. Implementa webhooks para actualizaciones

## 🔒 Seguridad

Para producción:
- [ ] Implementar autenticación real (JWT, OAuth)
- [ ] Backend para almacenar pedidos
- [ ] Validación de datos en servidor
- [ ] HTTPS obligatorio
- [ ] Rate limiting
- [ ] Sanitización de inputs

## 🐛 Solución de Problemas

**Los pedidos no se guardan entre dispositivos**:
- Es normal, usa `localStorage`. Implementa backend para sincronización.

**WhatsApp no se abre**:
- Verifica el número de teléfono (formato correcto)
- Asegúrate de tener WhatsApp instalado

**El panel admin no aparece**:
- Limpia caché del navegador
- Verifica contraseña (por defecto: admin123)

## 📄 Licencia

Este proyecto es de código abierto para Soda La Yayis.

## 🤝 Soporte

Para preguntas o problemas:
- WhatsApp: +506 6113-8819
- Email: info@sodalayayis.com (si aplica)

## 🎯 Roadmap

Futuras mejoras sugeridas:
- [ ] Backend con base de datos
- [ ] Pagos en línea (Stripe, PayPal)
- [ ] App móvil nativa
- [ ] Sistema de puntos/lealtad
- [ ] Cupones y descuentos
- [ ] Reportes y analíticas avanzadas
- [ ] Multi-idioma
- [ ] Modo oscuro

---

Hecho con ❤️ para Soda La Yayis 🍗
