import { Search, ChevronDown, Calendar, Clock, MapPin, Users, Utensils, Shield, DollarSign, ClipboardList, Music, Wine } from 'lucide-react'
import { cn } from '../lib/utils.js'
import { useState } from 'react'

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

// CategoryDropdown component - Dropdown with icons for categories
export function CategoryDropdown({ selectedCategory, setSelectedCategory, categories, totalItems, setSelectedTag }) {
  const [isOpen, setIsOpen] = useState(false)
  const Icon = selectedCategory === 'Todas' ? Search : getCategoryIcon(selectedCategory)

  return (
    <div className="relative w-full md:w-1/2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 md:px-4 md:py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors w-full"
      >
        <Icon className="w-4 h-4 md:w-5 md:h-5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
        <span className="flex-1 text-left text-gray-700 dark:text-gray-300 font-medium text-sm md:text-base truncate">
          {selectedCategory === 'Todas' ? 'Todas las categorías' : selectedCategory}
        </span>
        <ChevronDown className={cn('w-3 h-3 md:w-4 md:h-4 text-gray-500 transition-transform flex-shrink-0', isOpen && 'rotate-180')} />
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black bg-opacity-20"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute z-50 mt-2 w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-xl max-h-96 overflow-y-auto">
            <button
              onClick={() => {
                setSelectedCategory('Todas')
                setSelectedTag('Todos')
                setIsOpen(false)
              }}
              className={cn(
                'w-full flex items-center gap-2 md:gap-3 px-3 py-2 md:px-4 md:py-3 text-left hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors',
                selectedCategory === 'Todas' && 'bg-blue-50 dark:bg-blue-900/20'
              )}
            >
              <Search className="w-4 h-4 md:w-5 md:h-5 text-blue-600 dark:text-blue-400" />
              <div className="flex-1">
                <span className="text-gray-900 dark:text-white font-medium text-sm md:text-base">Todas las categorías</span>
                <span className="text-gray-500 dark:text-gray-400 text-xs md:text-sm ml-2">({totalItems})</span>
              </div>
            </button>
            {categories.map(category => {
              const CategoryIcon = getCategoryIcon(category)
              return (
                <button
                  key={category}
                  onClick={() => {
                    setSelectedCategory(category)
                    setSelectedTag('Todos')
                    setIsOpen(false)
                  }}
                  className={cn(
                    'w-full flex items-center gap-2 md:gap-3 px-3 py-2 md:px-4 md:py-3 text-left hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors',
                    selectedCategory === category && 'bg-blue-50 dark:bg-blue-900/20'
                  )}
                >
                  <CategoryIcon className="w-4 h-4 md:w-5 md:h-5 text-blue-600 dark:text-blue-400" />
                  <span className="text-gray-900 dark:text-white font-medium text-sm md:text-base">{category}</span>
                </button>
              )
            })}
          </div>
        </>
      )}
    </div>
  )
}

// SearchBar component - Reusable search input component
export function SearchBar({ searchQuery, setSearchQuery, placeholder = 'Buscar...' }) {
  return (
    <div className="flex-1 relative">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
      <input
        type="text"
        placeholder={placeholder}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
      />
    </div>
  )
}

// FilterButton component - Reusable filter button
export function FilterButton({ isActive, onClick, children, count }) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'px-4 py-2 rounded-full text-sm font-medium transition-colors',
        isActive
          ? 'bg-blue-600 text-white'
          : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
      )}
    >
      {children} {count !== undefined && `(${count})`}
    </button>
  )
}

// TagFilter component - Reusable tag filter button
export function TagFilterButton({ isActive, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'px-3 py-1 rounded-full text-xs font-medium transition-colors',
        isActive
          ? 'bg-green-600 text-white'
          : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
      )}
    >
      {children}
    </button>
  )
}

// FilterSection component - Reusable filter section with header
export function FilterSection({ icon: Icon, title, children }) {
  return (
    <div className="mb-4">
      <div className="flex items-center gap-2 mb-2">
        {Icon && <Icon className="w-5 h-5 text-gray-600 dark:text-gray-300" />}
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{title}</span>
      </div>
      <div className="flex flex-wrap gap-2">
        {children}
      </div>
    </div>
  )
}

// SearchAndFilters component - Complete search and filters panel
export function SearchAndFilters({ 
  searchQuery, 
  setSearchQuery, 
  selectedCategory, 
  setSelectedCategory, 
  selectedTag, 
  setSelectedTag, 
  categories, 
  allTags, 
  totalItems 
}) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8">
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <SearchBar 
          searchQuery={searchQuery} 
          setSearchQuery={setSearchQuery}
          placeholder="Buscar por título, contenido o etiquetas..."
        />
        <CategoryDropdown
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          categories={categories}
          totalItems={totalItems}
          setSelectedTag={setSelectedTag}
        />
      </div>

      <FilterSection 
        icon={() => <span className="text-gray-600 dark:text-gray-300">🏷️</span>}
        title="Filtrar por etiqueta:"
      >
        <TagFilterButton 
          isActive={selectedTag === 'Todos'} 
          onClick={() => setSelectedTag('Todos')}
        >
          Todos
        </TagFilterButton>
        {allTags.slice(0, 20).map(tag => (
          <TagFilterButton
            key={tag}
            isActive={selectedTag === tag}
            onClick={() => setSelectedTag(tag)}
          >
            {tag}
          </TagFilterButton>
        ))}
      </FilterSection>
    </div>
  )
}
