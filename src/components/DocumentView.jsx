import { Calendar, Clock, MapPin, Users, Utensils, Shield, DollarSign, ClipboardList, Music } from 'lucide-react'
import { Footer } from './Footer.jsx'
import { coordinadores } from '../data/reunionData.js'

export function DocumentView() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-4 md:p-8 md:p-12 space-y-8 md:space-y-12 text-left">
          
          {/* Section 1 */}
          <section>
            <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
              <Calendar className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                1. Planificación General y Fechas
              </h2>
            </div>
            <div className="space-y-3 md:space-y-4 text-gray-700 dark:text-gray-300">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-3 md:p-4 rounded-lg">
                <p><strong>Ventana de preparación:</strong> Se realiza la reunión con 2 meses de anticipación para coordinar alimentos, turnos e insumos sin exigencias de último momento.</p>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                <p><strong>Semana del evento:</strong> Del <strong>lunes 24 de agosto al sábado 29 de agosto de 2026</strong>.</p>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                <p><strong>Lugar:</strong> Salón ubicado en <strong>Calle Perona (a 300-350 metros de Avenida Mendoza)</strong>.</p>
              </div>
              <div className="bg-orange-50 dark:bg-orange-900/20 p-3 md:p-4 rounded-lg">
                <p><strong>Población objetivo:</strong> El número máximo estipulado es de <strong>55 platos diarios</strong>. Esto cubre a los instructores, sus esposas, los estudiantes (aproximadamente 45 precursores) y el equipo de servidores/cocina de turno.</p>
              </div>
            </div>
          </section>

          <hr className="border-gray-200 dark:border-gray-700" />

          {/* Section 2 */}
          <section>
            <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
              <Clock className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                2. Horarios Estrictos y Logística de Tiempos
              </h2>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-4 md:mb-6 italic">
              El horario de este año es <strong>una hora más temprano</strong> que en eventos anteriores. La puntualidad es crítica para no retrasar las clases.
            </p>
            
            <div className="space-y-4 md:space-y-6">
              <div className="bg-gray-50 dark:bg-gray-700/50 p-4 md:p-6 rounded-xl">
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white mb-3 md:mb-4">Cronograma de Breaks y Almuerzos:</h3>
                
                <div className="space-y-3 md:space-y-4">
                  <div className="border-l-4 border-blue-500 pl-3 md:pl-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1 md:mb-2">Lunes:</h4>
                    <ul className="space-y-1 md:space-y-2 text-gray-700 dark:text-gray-300">
                      <li>• Break de la mañana: <strong>10:15 h</strong> (Inicia 15 minutos antes que el resto de la semana). Duración: 15 min.</li>
                      <li>• Almuerzo: <strong>12:00 h</strong>. Duración: 60 min.</li>
                      <li>• Break de la tarde: <strong>14:25 h</strong>. Duración: 15 min.</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-green-500 pl-3 md:pl-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1 md:mb-2">Martes a Viernes:</h4>
                    <ul className="space-y-1 md:space-y-2 text-gray-700 dark:text-gray-300">
                      <li>• Break de la mañana: <strong>10:30 h</strong>. Duración: 15 min.</li>
                      <li>• Almuerzo: <strong>12:00 h</strong>. Duración: 60 min.</li>
                      <li>• Break de la tarde: <strong>14:25 h</strong>. Duración: 15 min.</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-purple-500 pl-3 md:pl-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1 md:mb-2">Sábado:</h4>
                    <ul className="space-y-1 md:space-y-2 text-gray-700 dark:text-gray-300">
                      <li>• Break de la mañana: <strong>10:30 h</strong>. Duración: 15 min.</li>
                      <li>• Almuerzo: <strong>12:00 h</strong>. Duración: 60 min.</li>
                      <li>• Break de la tarde: <strong>14:00 h</strong> (Inicia 25 minutos antes debido al cierre). Duración: 15 min.</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 md:p-6 rounded-xl">
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white mb-3 md:mb-4">Logística de Entrega de Alimentos:</h3>
                <ul className="space-y-2 md:space-y-3 text-gray-700 dark:text-gray-300">
                  <li>• <strong>Recepción matutina:</strong> Los servidores del día deben llegar temprano (idealmente antes de las 10:00 h) con las cosas del break y para esperar a los estudiantes con bebidas calientes.</li>
                  <li>• <strong>Montaje del almuerzo:</strong> A las <strong>11:45 h</strong> (15 minutos antes del almuerzo) ya se debe estar organizando la mesa y sirviendo las porciones. No se debe llevar la comida excesivamente temprano para evitar que se enfríe. El salón cuenta con infraestructura para recalentar, pero <strong>no para cocinar desde cero</strong>.</li>
                </ul>
              </div>
            </div>
          </section>

          <hr className="border-gray-200 dark:border-gray-700" />

          {/* Section 3 */}
          <section>
            <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
              <Users className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                3. Directrices para Tu Congregación (Media Agua)
              </h2>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-4 md:mb-6">
              Debido a que están a 1 hora de viaje en automóvil y 2 horas en colectivo, se determinó lo siguiente para proteger a los hermanos y la seguridad de los alimentos:
            </p>
            
            <div className="space-y-4">
              <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border-l-4 border-red-500">
                <p><strong>Exención de Almuerzo:</strong> Media Agua <strong>no cocina ni traslada platos calientes</strong> para evitar la pérdida de la cadena de frío durante el viaje.</p>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                <p><strong>Asignación de la "Canasta de Mercadería":</strong> Su colaboración consistirá en aportar insumos secos para toda la semana.</p>
                <p className="mt-2 text-sm"><em>Elementos solicitados:</em> Café, leche en polvo, edulcorante, té digestivo común, servilletas de papel, etc.</p>
                <p className="mt-2 text-sm"><em>Logística de entrega:</em> Se coordinará con {coordinadores.join(' o ')} para llevar estos insumos el <strong>domingo previo</strong> por la tarde, día en que se montarán las heladeras y el sonido en la sala auxiliar del salón.</p>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                <p><strong>Participación de Voluntarios:</strong> Hay 3 hermanos de Media Agua asistiendo a la escuela. Si otros hermanos de la congregación desean viajar para colaborar de forma presencial, deben avisar previamente a los coordinadores para asignarles un lugar en la cocina o en un break específico.</p>
                <p className="mt-2 text-sm"><em>Coordinadores:</em> {coordinadores.join(', ')}</p>
              </div>
            </div>
          </section>

          <hr className="border-gray-200 dark:border-gray-700" />

          {/* Section 4 */}
          <section>
            <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
              <Utensils className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                4. Menú Detallado y Asignación por Día
              </h2>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-4 md:mb-6">
              Se solicita que cada congregación <strong>unifique su cocina</strong> (un solo punto de concentración para preparar todo). Así se garantiza que toda la comida sea uniforme en sabor, presentación y condiciones higiénicas.
            </p>
            
            <div className="space-y-3 md:space-y-4">
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-4 md:p-6 rounded-xl">
                <h4 className="font-bold text-gray-900 dark:text-white mb-1 md:mb-2">Lunes (Centro Rawson — Encargado: Darío Diaz)</h4>
                <p className="text-gray-700 dark:text-gray-300"><strong>Plato:</strong> Pollo trozado (se sugiere pechuga o carne limpia; evitar pata-muslo por los desperdicios y la incomodidad al comer) acompañado de ensalada mixta. Se presentará en bandejitas individuales de aluminio con tapa o papel aluminio, transportadas en conservadoras grandes para mantener el calor.</p>
                <p className="text-gray-700 dark:text-gray-300 mt-2"><strong>Postre:</strong> Flan.</p>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 p-4 md:p-6 rounded-xl">
                <h4 className="font-bold text-gray-900 dark:text-white mb-1 md:mb-2">Martes (Villa Aberastain — Encargado: Carlos Lucero)</h4>
                <p className="text-gray-700 dark:text-gray-300"><strong>Plato:</strong> Sándwiches de milanesa en pan liviano (para no saturar con harinas pesadas).</p>
                <p className="text-gray-700 dark:text-gray-300 mt-2"><strong>Postre:</strong> Gelatina (para variar respecto al flan del lunes).</p>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 p-4 md:p-6 rounded-xl">
                <h4 className="font-bold text-gray-900 dark:text-white mb-1 md:mb-2">Miércoles (Norte Rawson — Encargado: Rubén Coronado)</h4>
                <p className="text-gray-700 dark:text-gray-300"><strong>Plato:</strong> Variedad de pizzas (3 a 4 tipos: queso, paleta, salame, cuatro quesos).</p>
                <p className="text-gray-700 dark:text-gray-300 mt-2"><strong>Postre:</strong> Bombón helado o helado en caja (fácil distribución).</p>
              </div>

              <div className="bg-gradient-to-r from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 p-4 md:p-6 rounded-xl">
                <h4 className="font-bold text-gray-900 dark:text-white mb-1 md:mb-2">Jueves (Oeste — Encargado: Gonzalo Dias)</h4>
                <p className="text-gray-700 dark:text-gray-300"><strong>Plato:</strong> Variedad de tartas saladas.</p>
                <p className="text-gray-700 dark:text-gray-300 mt-2"><strong>Postre:</strong> Frutas de estación (por ejemplo, mandarinas).</p>
              </div>

              <div className="bg-gradient-to-r from-pink-50 to-pink-100 dark:from-pink-900/20 dark:to-pink-800/20 p-4 md:p-6 rounded-xl">
                <h4 className="font-bold text-gray-900 dark:text-white mb-1 md:mb-2">Viernes (Los Berros - Encargado: Cristian Castro)</h4>
                <p className="text-gray-700 dark:text-gray-300"><strong>Plato:</strong> Empanadas de dos variedades: carne, y jamón y queso.</p>
                <p className="text-gray-700 dark:text-gray-300 mt-2"><strong>Postre:</strong> Duraznos en conserva con crema (fácil de servir en bandejitas chicas).</p>
              </div>

              <div className="bg-gradient-to-r from-teal-50 to-teal-100 dark:from-teal-900/20 dark:to-teal-800/20 p-4 md:p-6 rounded-xl">
                <h4 className="font-bold text-gray-900 dark:text-white mb-1 md:mb-2">Sábado (Villa Krause — Encargado: Hugo Quiroga)</h4>
                <p className="text-gray-700 dark:text-gray-300"><strong>Plato:</strong> Hamburguesas de carne molida (elegidas para optimizar costos y maximizar porciones).</p>
                <p className="text-gray-700 dark:text-gray-300 mt-2"><strong>Postre:</strong> Ensalada de frutas (jardinera) con crema y vainillas.</p>
              </div>
            </div>
          </section>

          <hr className="border-gray-200 dark:border-gray-700" />

          {/* Section 5 */}
          <section>
            <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
              <Utensils className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                5. Cuota de Bebidas por Día
              </h2>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-4 md:mb-6">
              Cada congregación a cargo del almuerzo debe proveer exactamente <strong>20 botellas grandes de marcas reconocidas</strong> (línea Coca-Cola Company o Pepsico) de entre 2.25 y 2.5 litros, obligatoriamente <strong>descartables</strong> para evitar la pérdida de envases retornables.
            </p>
            
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 md:p-6 rounded-xl">
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white mb-3 md:mb-4">La distribución exacta por día es:</h3>
              <ul className="space-y-2 md:space-y-3 text-gray-700 dark:text-gray-300">
                <li>• <strong>10 Gaseosas comunes:</strong> Sabor regular (Coca-Cola, Pepsi, Sprite, Seven Up, Fanta).</li>
                <li>• <strong>4 Gaseosas sin azúcar:</strong> Línea Zero o Diet (para estudiantes con restricciones).</li>
                <li>• <strong>6 Aguas saborizadas:</strong> (Por ejemplo, Aquarius). Vital para quienes no consumen bebidas carbonatadas.</li>
              </ul>
            </div>
          </section>

          <hr className="border-gray-200 dark:border-gray-700" />

          {/* Section 6 */}
          <section>
            <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
              <DollarSign className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                6. Financiamiento según las Pautas
              </h2>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-4 md:mb-6">
              Basado estrictamente en la guía de la organización (instrucción <strong>S-256</strong>), el espíritu del arreglo debe cumplir con lo siguiente:
            </p>
            
            <div className="space-y-4">
              <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border-l-4 border-red-500">
                <p><strong>Prohibición de cuotas en dinero:</strong> <strong>Bajo ninguna circunstancia</strong> se le pedirá dinero en efectivo a los hermanos de los grupos para comprar la comida.</p>
              </div>
              <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border-l-4 border-red-500">
                <p><strong>Fondos locales protegidos:</strong> Está <strong>estrictamente prohibido</strong> utilizar los fondos de la caja de la congregación para costear los gastos de los alimentos de la escuela.</p>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                <p><strong>Método correcto de recolección:</strong> Se debe armar una lista detallada de los ingredientes necesarios (ej. medio kilo de tomates, un paquete de azúcar, un café) y dividirla entre los hermanos para que donen en materiales directamente desde lo que tienen en sus hogares. Esto hace la carga ligera y evita situaciones chocantes.</p>
              </div>
            </div>
          </section>

          <hr className="border-gray-200 dark:border-gray-700" />

          {/* Section 7 */}
          <section>
            <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
              <Shield className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                7. Protocolo de Seguridad e Higiene Alimentaria
              </h2>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-4 md:mb-6">
              Para mitigar riesgos de contaminación o transmisión de enfermedades estacionales, se aplican normas estrictas de manipulación:
            </p>

            <div className="space-y-3 md:space-y-4">
              <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 md:p-6 rounded-xl">
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white mb-3 md:mb-4">Equipo Personal Obligatorio (EPI):</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3 md:mb-4">Cada voluntario o servidor debe llevar sus propios implementos. Si una congregación rota turnos (ej. 3 hermanos a la mañana, 3 al mediodía y 3 a la tarde), los <strong>9 hermanos</strong> deben contar con su propio equipo:</p>
                <ol className="list-decimal list-inside space-y-1 md:space-y-2 text-gray-700 dark:text-gray-300">
                  <li><strong>Guantes:</strong> Transparentes de polietileno (tipo fiambrería, más económicos) o de látex/nitrilo (negros o azules).</li>
                  <li><strong>Cofia:</strong> Para cubrir el cabello por completo.</li>
                  <li><strong>Barbijo / Tapabocas:</strong> Obligatorio durante la manipulación y el servicio.</li>
                  <li><strong>Delantal de cocina.</strong></li>
                </ol>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 p-3 md:p-4 rounded-lg border-l-4 border-red-500">
                <p><strong>Higiene Personal:</strong> Queda estrictamente prohibido el uso de uñas pintadas, aros, anillos o cualquier tipo de joyería que pueda desprenderse en la comida.</p>
              </div>
              <div className="bg-orange-50 dark:bg-orange-900/20 p-3 md:p-4 rounded-lg border-l-4 border-orange-500">
                <p><strong>Filtro de Salud:</strong> Cualquier hermano que presente síntomas de enfermedad <strong>no debe asistir</strong> bajo ningún concepto a ayudar en la preparación o el servicio.</p>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/20 p-3 md:p-4 rounded-lg">
                <p><strong>Restricciones de Menú:</strong> No se prepararán menús especiales para alergias o celiaquía de forma comunitaria debido a la complejidad de la contaminación cruzada. <em>Cualquier estudiante con necesidades alimentarias específicas (como el caso de la celiaquía) deberá llevar su propia comida para su total tranquilidad.</em></p>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-3 md:p-4 rounded-lg">
                <p><strong>Aderezos y Condimentos:</strong> Se deben evitar los excesos de ajo o condimentos pesados en la preparación general. Los aderezos (picantes, mostaza, mayonesa) deben llevarse en potes separados para que cada alumno se sirva a gusto.</p>
              </div>
            </div>
          </section>

          <hr className="border-gray-200 dark:border-gray-700" />

          {/* Section 8 */}
          <section>
            <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
              <ClipboardList className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                8. Logística de Personal, Limpieza y Cierre
              </h2>
            </div>
            
            <div className="space-y-4 md:space-y-6">
              <div className="bg-gray-50 dark:bg-gray-700/50 p-4 md:p-6 rounded-xl">
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white mb-3 md:mb-4">Dotación de Servidores:</h3>
                <ul className="space-y-1 md:space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• Durante los <strong>breaks</strong> se requiere un mínimo de <strong>2 personas</strong> para atender las mesas.</li>
                  <li>• Durante el <strong>almuerzo</strong> es obligatoria la presencia de <strong>4 personas en total</strong> (el encargado de la congregación más 3 ayudantes). No se permite exceder este número por cuestiones de espacio y cálculo de porciones.</li>
                </ul>
              </div>

              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                <p><strong>Tareas de Limpieza:</strong> Los voluntarios no solo sirven, sino que deben limpiar inmediatamente después de que los alumnos se retiran a clases. No hay tiempos muertos: se deben repasar las mesas, ordenar el sector de vajilla y realizar el mantenimiento y repaso higiénico de los baños.</p>
              </div>
              <div className="bg-pink-50 dark:bg-pink-900/20 p-3 md:p-4 rounded-lg">
                <p><strong>Detalles y Regalos:</strong> Se autoriza a las congregaciones (o hermanos en particular) a llevar pequeños presentes, manualidades o cartelitos de ánimo para los 45 estudiantes. En el caso de Media Agua, pueden enviar estos detalles dentro de las cajas de mercadería el domingo previo.</p>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                <p><strong>Registro Fotográfico:</strong> Se solicita a todos los encargados tomar fotografías de los hermanos trabajando en las cocinas y pasarlas a {coordinadores.join(' o ')} para documentar el esfuerzo y el bonito espíritu de la actividad.</p>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                <p><strong>El Break Final (Sábado de Cierre):</strong> El año pasado una sola congregación absorbió este gasto y esfuerzo, lo cual fue excesivo. Este año, las <strong>4 congregaciones de Rawson (anfitrionas)</strong> se dividirán equitativamente los gastos económicos y los voluntarios para armar un servicio tipo copetín (sándwiches pequeños, bocaditos, tartas dulces) destinado a los estudiantes y a los familiares/invitados que asistan al acto de clausura.</p>
              </div>
            </div>
          </section>

        <Footer />
      </div>
  )
}
