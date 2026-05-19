import { useState, useMemo, useRef } from 'react'
import { Calendar, Users, MapPin, Clock, Utensils, Shield, DollarSign, ClipboardList, X, Music, Search, BookOpen, Grid3X3, Wine } from 'lucide-react'
import { reunionData, categories, allTags } from './data/reunionData.js'
import { SearchAndFilters } from './components/SearchBar.jsx'
import { DocumentView } from './components/DocumentView.jsx'
import './index.css'

function App() {
  const [view, setView] = useState('document') // 'search' or 'document'
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('Todas')
  const [selectedTag, setSelectedTag] = useState('Todos')
  const [selectedItem, setSelectedItem] = useState(null)
  const itemRefs = useRef({})

  // Filter data based on search query and filters
  const filteredData = useMemo(() => {
    return reunionData.filter(item => {
      const matchesSearch =
        searchQuery === '' ||
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))

      const matchesCategory = selectedCategory === 'Todas' || item.category === selectedCategory
      const matchesTag = selectedTag === 'Todos' || item.tags.includes(selectedTag)

      return matchesSearch && matchesCategory && matchesTag
    })
  }, [searchQuery, selectedCategory, selectedTag])

  // Filter tags based on selected category
  const filteredTags = useMemo(() => {
    if (selectedCategory === 'Todas') {
      return allTags
    }
    if (selectedCategory === 'Canciones') {
      return ['Apertura', 'Cierre']
    }
    const categoryItems = reunionData.filter(item => item.category === selectedCategory)
    return [...new Set(categoryItems.flatMap(item => item.tags))]
  }, [selectedCategory])

  // Handle card click - scroll to item and open detail
  const handleCardClick = (item) => {
    setSelectedItem(item)
    // Scroll to the item in the grid
    setTimeout(() => {
      const element = itemRefs.current[item.id]
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' })
        element.classList.add('ring-2', 'ring-blue-500', 'ring-offset-2')
        setTimeout(() => {
          element.classList.remove('ring-2', 'ring-blue-500', 'ring-offset-2')
        }, 2000)
      }
    }, 100)
  }

  // Close detail modal
  const closeDetail = () => {
    setSelectedItem(null)
  }

  // Get category icon
  const getCategoryIcon = (category) => {
    const icons = {
      'Planificación General': Calendar,
      'Horarios': Clock,
      'Logística': MapPin,
      'Media Agua': Users,
      'Menú': Utensils,
      'Bebidas': Wine,
      'Financiamiento': DollarSign,
      'Seguridad': Shield,
      'Personal': Users,
      'Limpieza': ClipboardList,
      'Detalles': ClipboardList,
      'Documentación': ClipboardList,
      'Cierre': Calendar,
      'Asignaciones': Users,
      'Lecciones': ClipboardList,
      'Canciones': Music
    }
    return icons[category] || ClipboardList
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Escuela de Servicio del Precursor
            </h1>
            <p className="text-base text-gray-600 dark:text-gray-300">
              24-29 de Agosto 2026 - Circuito Mendoza 1B
            </p>
          </div>

          {/* Tabs */}
          <div className="flex bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
            <button
              onClick={() => setView('document')}
              className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-md font-medium transition-colors ${
                view === 'document'
                  ? 'bg-white dark:bg-gray-600 text-blue-600 dark:text-white shadow-sm'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-600'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              Documento
            </button>
            <button
              onClick={() => setView('search')}
              className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-md font-medium transition-colors ${
                view === 'search'
                  ? 'bg-white dark:bg-gray-600 text-blue-600 dark:text-white shadow-sm'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-600'
              }`}
            >
              <Grid3X3 className="w-4 h-4" />
              Búsqueda
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      {view === 'document' ? (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <DocumentView />
        </div>
      ) : (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

          {/* Search and Filters */}
          <SearchAndFilters
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            selectedTag={selectedTag}
            setSelectedTag={setSelectedTag}
            categories={categories}
            allTags={filteredTags}
            totalItems={reunionData.length}
          />

          {/* Results Count */}
          <div className="mb-4 text-gray-600 dark:text-gray-300">
            {filteredData.length === reunionData.length ? (
              <p>Mostrando todos los {reunionData.length} registros</p>
            ) : (
              <p>Se encontraron {filteredData.length} de {reunionData.length} registros</p>
            )}
          </div>

          {/* Results Grid */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filteredData.map(item => {
              const Icon = getCategoryIcon(item.category)
              return (
                <div
                  key={item.id}
                  ref={el => itemRefs.current[item.id] = el}
                  onClick={() => handleCardClick(item)}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition-all cursor-pointer border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                      <Icon className="w-5 h-5 text-blue-600 dark:text-blue-300" />
                    </div>
                    <div className="flex-1">
                      <span className="text-xs font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wide">
                        {item.category}
                      </span>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-1">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                    {item.content}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.slice(0, 5).map(tag => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                    {item.tags.length > 5 && (
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded text-xs">
                        +{item.tags.length - 5}
                      </span>
                    )}
                  </div>
                </div>
              )
            })}
          </div>

          {/* No Results */}
          {filteredData.length === 0 && (
            <div className="text-center py-12">
              <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
                No se encontraron resultados
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Intenta ajustar tus filtros o términos de búsqueda
              </p>
            </div>
          )}
        </div>
      )}

      {/* Detail Modal */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50" onClick={closeDetail}>
          <div 
            className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                    {(() => {
                      const Icon = getCategoryIcon(selectedItem.category)
                      return <Icon className="w-6 h-6 text-blue-600 dark:text-blue-300" />
                    })()}
                  </div>
                  <div>
                    <span className="text-xs font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wide">
                      {selectedItem.category}
                    </span>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {selectedItem.title}
                    </h2>
                  </div>
                </div>
                <button
                  onClick={closeDetail}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
                >
                  <X className="w-6 h-6 text-gray-500 dark:text-gray-400" />
                </button>
              </div>

              <div className="prose dark:prose-invert max-w-none">
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
                  {selectedItem.content}
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                  Etiquetas relacionadas:
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedItem.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex gap-3">
                <button
                  onClick={closeDetail}
                  className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
