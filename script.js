// Datos específicos de los ríos de Mayabeque en Güines
const datosMayabeque = {
    'rios-principales': {
        titulo: 'Ríos Principales de la Cuenca',
        icono: 'fa-water',
        contenido: `
            <div class="rios-grid">
                <div class="rio-card" onclick="mostrarDetalleRio('mayabeque')">
                    <i class="fas fa-river" style="font-size: 2em; color: var(--azul-medio);"></i>
                    <h3>Río Mayabeque</h3>
                    <p>Principal río de la región, atraviesa el municipio de Güines.</p>
                    <div class="datos-rio">
                        <span class="dato"><i class="fas fa-ruler"></i> 73 km</span>
                        <span class="dato"><i class="fas fa-tint"></i> Cuenca: 1,231 km²</span>
                    </div>
                </div>
                
                <div class="rio-card" onclick="mostrarDetalleRio('guines')">
                    <i class="fas fa-water" style="font-size: 2em; color: var(--verde-acuatico);"></i>
                    <h3>Río Güines</h3>
                    <p>Afluente importante que atraviesa la ciudad de Güines.</p>
                    <div class="datos-rio">
                        <span class="dato"><i class="fas fa-ruler"></i> 45 km</span>
                        <span class="dato"><i class="fas fa-map-pin"></i> Nace en Madruga</span>
                    </div>
                </div>
                
                <div class="rio-card" onclick="mostrarDetalleRio('san-juan')">
                    <i class="fas fa-faucet" style="font-size: 2em; color: var(--azul-claro);"></i>
                    <h3>Río San Juan</h3>
                    <p>Afluente del Mayabeque, importante para el riego agrícola.</p>
                    <div class="datos-rio">
                        <span class="dato"><i class="fas fa-ruler"></i> 28 km</span>
                        <span class="dato"><i class="fas fa-seedling"></i> Zona agrícola</span>
                    </div>
                </div>
            </div>
            
            <div class="datos-adicionales" style="margin-top: 25px;">
                <h3><i class="fas fa-info-circle"></i> Datos de Interés</h3>
                <ul style="list-style: none; padding: 15px;">
                    <li style="margin: 10px 0;">🏞️ <strong>Cuenca total:</strong> 1,847 km²</li>
                    <li style="margin: 10px 0;">💧 <strong>Precipitación media:</strong> 1,400 mm anuales</li>
                    <li style="margin: 10px 0;">🌊 <strong>Desembocadura:</strong> Golfo de Batabanó</li>
                </ul>
            </div>
        `
    },
    
    'mapa-cuenca': {
        titulo: 'Mapa Hidrográfico de Güines',
        icono: 'fa-map',
        contenido: `
            <div class="mapa-container">
                <div class="mapa-placeholder">
                    <div style="text-align: center;">
                        <i class="fas fa-map-marked-alt" style="font-size: 4em; margin-bottom: 15px;"></i>
                        <h3>Cuenca del Mayabeque</h3>
                        <p>Mapa interactivo de los ríos y afluentes</p>
                        <p style="font-size: 0.9em; margin-top: 10px;">
                            📍 Güines, Provincia Mayabeque
                        </p>
                    </div>
                </div>
                
                <div style="margin-top: 20px; display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px;">
                    <div style="background: #f0f8ff; padding: 15px; border-radius: 10px;">
                        <h4>Ubicación</h4>
                        <p>Latitud: 22.8333° N<br>Longitud: 82.0333° O</p>
                    </div>
                    <div style="background: #f0f8ff; padding: 15px; border-radius: 10px;">
                        <h4>Altitud</h4>
                        <p>65 metros sobre el nivel del mar</p>
                    </div>
                </div>
            </div>
        `
    },
    
    'historia': {
        titulo: 'Historia de las Aguas en Güines',
        icono: 'fa-history',
        contenido: `
            <div class="historia-timeline">
                <div class="evento-historico">
                    <h3>🌅 Orígenes Precolombinos</h3>
                    <p>Los ríos de la región eran utilizados por los pueblos originarios para la pesca y agricultura.</p>
                </div>
                
                <div class="evento-historico">
                    <h3>🏗️ Siglo XVIII - Desarrollo Colonial</h3>
                    <p>Construcción de los primeros ingenios azucareros aprovechando las aguas del Mayabeque.</p>
                </div>
                
                <div class="evento-historico">
                    <h3>🚂 Siglo XIX - Ferrocarril y Puentes</h3>
                    <p>Construcción del histórico Puente de Güines sobre el río Mayabeque en 1837.</p>
                </div>
                
                <div class="evento-historico">
                    <h3>💧 Siglo XX - Sistema de Riego</h3>
                    <p>Desarrollo de sistemas de irrigación para la agricultura cañera.</p>
                </div>
            </div>
        `
    },
    
    'ecologia': {
        titulo: 'Ecología y Biodiversidad',
        icono: 'fa-leaf',
        contenido: `
            <div style="padding: 20px;">
                <h3><i class="fas fa-fish"></i> Fauna Acuática</h3>
                <ul style="margin: 15px 0 25px 20px;">
                    <li><strong>Peces:</strong> Biajaca, Tilapia, Carpa</li>
                    <li><strong>Crustáceos:</strong> Camarón de río, Jaiba</li>
                    <li><strong>Aves:</strong> Garza blanca, Martín pescador</li>
                </ul>
                
                <h3><i class="fas fa-tree"></i> Vegetación Ribereña</h3>
                <ul style="margin: 15px 0 25px 20px;">
                    <li>Bosque de galería</li>
                    <li>Mangle en la desembocadura</li>
                    <li>Cañaverales históricos</li>
                </ul>
                
                <div style="background: #e8f8f5; padding: 15px; border-radius: 10px; margin-top: 20px;">
                    <h4>⚠️ Conservación</h4>
                    <p>La cuenca enfrenta desafíos por la contaminación agrícola y el cambio climático.</p>
                </div>
            </div>
        `

    },
'galeria': {
    titulo: 'Galería',
    icono: 'fa-camera',
    contenido: `<p>Próximamente...</p>`
},
'creditos': {
    titulo: 'Información del Proyecto',
    icono: 'fa-users',
    contenido: `
        <div style="padding: 20px;">
            <div style="text-align: center; margin-bottom: 30px;">
                <i class="fas fa-water" style="font-size: 4em; color: var(--azul-medio);"></i>
                <h2 style="color: var(--azul-profundo); margin-top: 15px;">Aguas de Mayabeque</h2>
                <p style="color: #666;">Multimedia educativa sobre los ríos de Güines</p>
            </div>
            
            <div style="display: grid; gap: 20px; max-width: 500px; margin: 0 auto;">
                <div style="background: linear-gradient(135deg, var(--blanco-espuma), white); padding: 20px; border-radius: 15px; border-left: 5px solid var(--azul-medio); box-shadow: 0 3px 10px rgba(0,0,0,0.1);">
                    <h3 style="color: var(--azul-profundo);">
                        <i class="fas fa-user-cog"></i> Creador
                    </h3>
                    <p style="font-size: 1.2em; margin-top: 10px; font-weight: bold;">Ing. Yudel Noda Cepero</p>
                </div>
                
                <div style="background: linear-gradient(135deg, var(--blanco-espuma), white); padding: 20px; border-radius: 15px; border-left: 5px solid var(--verde-acuatico); box-shadow: 0 3px 10px rgba(0,0,0,0.1);">
                    <h3 style="color: var(--azul-profundo);">
                        <i class="fas fa-user-edit"></i> Autor
                    </h3>
                    <p style="font-size: 1.2em; margin-top: 10px; font-weight: bold;">Jorge Yadel Noda Cepero</p>
                </div>
                
                <div style="background: linear-gradient(135deg, var(--blanco-espuma), white); padding: 20px; border-radius: 15px; border-left: 5px solid #e67e22; box-shadow: 0 3px 10px rgba(0,0,0,0.1);">
                    <h3 style="color: var(--azul-profundo);">
                        <i class="fas fa-chalkboard-teacher"></i> Tutora
                    </h3>
                    <p style="font-size: 1.2em; margin-top: 10px; font-weight: bold;">Mirian Rosa</p>
                </div>
            </div>
            
            <div style="text-align: center; margin-top: 30px; padding: 15px; background: var(--blanco-espuma); border-radius: 10px;">
                <p style="color: #666;">
                    <i class="fas fa-calendar-alt"></i> 
                    Proyecto realizado en abril de 2026
                </p>
                <p style="color: #666; margin-top: 5px;">
                    <i class="fas fa-map-marker-alt"></i>
                    Güines, Provincia Mayabeque, Cuba
                </p>
            </div>
        </div>
    `
}
};

// Función para cargar contenido
function cargarContenido(seccion) {
    const mainContent = document.getElementById('contenido-principal');
    const data = datosMayabeque[seccion];
    
    if (!data) return;
    
    // Efecto de carga
    mainContent.innerHTML = `
        <div class="loading">
            <div class="ola-carga">
                <span></span><span></span><span></span>
            </div>
        </div>
    `;
    
    // Simular carga y mostrar contenido
    setTimeout(() => {
        mainContent.innerHTML = `
            <div class="seccion-activa">
                <h2 style="color: var(--azul-profundo); margin-bottom: 25px;">
                    <i class="fas ${data.icono}"></i> ${data.titulo}
                </h2>
                ${data.contenido}
            </div>
        `;
    }, 300);
}

// Event listeners para botones del menú
document.querySelectorAll('.menu-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        document.querySelectorAll('.menu-btn').forEach(b => b.classList.remove('active'));
        e.currentTarget.classList.add('active');
        
        const seccion = e.currentTarget.dataset.seccion;
        cargarContenido(seccion);
    });
});

// Función para mostrar detalles del río (puedes expandirla)
function mostrarDetalleRio(rio) {
    alert(`Mostrando detalles del río: ${rio}\n(Puedes implementar un modal aquí)`);
}

// Cargar sección inicial
cargarContenido('rios-principales');