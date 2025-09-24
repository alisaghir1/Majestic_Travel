'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Plus, Edit, Trash2, Save, X } from 'lucide-react';
import ImageUpload from '../../components/ImageUpload';

export default function ServicesAdmin() {
  const [services, setServices] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingService, setEditingService] = useState(null);
  const [activeTab, setActiveTab] = useState('en'); // For language tabs
  const [formData, setFormData] = useState({
    title: { en: '', ar: '' },
    slug: '',
    name: { en: '', ar: '' },
    description: { en: '', ar: '' },
    sections: [],
    category: '',
    price: { en: '', ar: '' },
    image: '',
    tags: { en: '', ar: '' },
    features: { en: '', ar: '' },
    active: true,
    showOnHomepage: false
  });

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const response = await fetch('/api/services');
      const data = await response.json();
      setServices(data);
    } catch (error) {
      console.error('Error fetching services:', error);
    }
  };

  // Validation function to ensure all required fields are filled in both languages
  const validateRequiredFields = () => {
    const errors = [];

    // Required bilingual fields
    if (!formData.title.en.trim() || !formData.title.ar.trim()) {
      errors.push('Service title is required in both English and Arabic');
    }

    if (!formData.name.en.trim() || !formData.name.ar.trim()) {
      errors.push('Service name is required in both English and Arabic');
    }

    if (!formData.description.en.trim() || !formData.description.ar.trim()) {
      errors.push('Service description is required in both English and Arabic');
    }

    if (!formData.price.en.trim() || !formData.price.ar.trim()) {
      errors.push('Service price is required in both English and Arabic');
    }

    // Required non-bilingual fields
    if (!formData.slug.trim()) {
      errors.push('Service slug is required');
    }

    if (!formData.category.trim()) {
      errors.push('Service category is required');
    }

    if (!formData.image.trim()) {
      errors.push('Service image is required');
    }

    // Validate sections if they exist
    if (formData.sections && formData.sections.length > 0) {
      formData.sections.forEach((section, index) => {
        if (!section.title.en.trim() || !section.title.ar.trim()) {
          errors.push(`Section ${index + 1} title is required in both English and Arabic`);
        }
        if (!section.content.en.trim() || !section.content.ar.trim()) {
          errors.push(`Section ${index + 1} content is required in both English and Arabic`);
        }
      });
    }

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate required fields
    const validationErrors = validateRequiredFields();
    if (validationErrors.length > 0) {
      alert('Please fill in all required fields:\n\n' + validationErrors.join('\n'));
      return;
    }
    
    try {
      const url = editingService ? '/api/services' : '/api/services';
      const method = editingService ? 'PUT' : 'POST';
      
      // Convert tags and features from comma-separated strings to arrays
      const processedData = {
        ...formData,
        tags: {
          en: typeof formData.tags.en === 'string' ? formData.tags.en.split(',').map(tag => tag.trim()).filter(tag => tag !== '') : formData.tags.en,
          ar: typeof formData.tags.ar === 'string' ? formData.tags.ar.split(',').map(tag => tag.trim()).filter(tag => tag !== '') : formData.tags.ar
        },
        features: {
          en: typeof formData.features.en === 'string' ? formData.features.en.split(',').map(feature => feature.trim()).filter(feature => feature !== '') : formData.features.en,
          ar: typeof formData.features.ar === 'string' ? formData.features.ar.split(',').map(feature => feature.trim()).filter(feature => feature !== '') : formData.features.ar
        }
      };
      
      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editingService ? { ...processedData, id: editingService.id } : processedData),
      });

      if (response.ok) {
        fetchServices();
        setShowForm(false);
        setEditingService(null);
        resetForm();
      }
    } catch (error) {
      console.error('Error saving service:', error);
    }
  };

  const resetForm = () => {
    setFormData({
      title: { en: '', ar: '' },
      slug: '',
      name: { en: '', ar: '' },
      description: { en: '', ar: '' },
      sections: [],
      category: '',
      price: { en: '', ar: '' },
      image: '',
      tags: { en: '', ar: '' },
      features: { en: '', ar: '' },
      active: true,
      showOnHomepage: false
    });
    setActiveTab('en');
  };

  const handleEdit = (service) => {
    setEditingService(service);
    setFormData({
      title: service.title || { en: '', ar: '' },
      slug: service.slug || '',
      name: service.name || { en: '', ar: '' },
      description: service.description || { en: '', ar: '' },
      sections: service.sections || [],
      category: service.category || '',
      price: service.price || { en: '', ar: '' },
      image: service.image || '',
      tags: {
        en: Array.isArray(service.tags?.en) ? service.tags.en.join(', ') : (service.tags?.en || ''),
        ar: Array.isArray(service.tags?.ar) ? service.tags.ar.join(', ') : (service.tags?.ar || '')
      },
      features: {
        en: Array.isArray(service.features?.en) ? service.features.en.join(', ') : (service.features?.en || ''),
        ar: Array.isArray(service.features?.ar) ? service.features.ar.join(', ') : (service.features?.ar || '')
      },
      // Ensure boolean fields are always boolean values
      active: Boolean(service.active !== false), // Default to true if undefined/null
      showOnHomepage: Boolean(service.showOnHomepage || service.show_on_homepage)
    });
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (confirm('Are you sure you want to delete this service?')) {
      try {
        const response = await fetch('/api/services', {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id }),
        });

        if (response.ok) {
          fetchServices();
        }
      } catch (error) {
        console.error('Error deleting service:', error);
      }
    }
  };

  const updateFormField = (field, value, lang = null) => {
    if (lang) {
      setFormData(prev => ({
        ...prev,
        [field]: {
          ...prev[field],
          [lang]: value
        }
      }));
    } else {
      setFormData(prev => ({ ...prev, [field]: value }));
    }
  };

  const generateSlug = (title) => {
    return title.toLowerCase()
      .replace(/[^a-z0-9 -]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim('-');
  };

  // Helper function to safely get string content from localized fields
  const getDisplayText = (content, maxLength = 50) => {
    if (!content) return '';
    
    if (typeof content === 'string') {
      return content.length > maxLength ? content.substring(0, maxLength) + '...' : content;
    }
    
    if (typeof content === 'object' && content !== null) {
      const text = content.en || content.ar || '';
      return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
    }
    
    return '';
  };

  // Section management functions
  const addSection = () => {
    const newSection = {
      id: Date.now(),
      title: { en: '', ar: '' },
      content: { en: '', ar: '' },
      image: ''
    };
    setFormData(prev => ({
      ...prev,
      sections: [...prev.sections, newSection]
    }));
  };

  const removeSection = (sectionId) => {
    setFormData(prev => ({
      ...prev,
      sections: prev.sections.filter(section => section.id !== sectionId)
    }));
  };

  const updateSection = (sectionId, field, value, lang = null) => {
    setFormData(prev => ({
      ...prev,
      sections: prev.sections.map(section => {
        if (section.id === sectionId) {
          if (lang) {
            return {
              ...section,
              [field]: {
                ...section[field],
                [lang]: value
              }
            };
          } else {
            return {
              ...section,
              [field]: value
            };
          }
        }
        return section;
      })
    }));
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Services Management</h1>
        <button
          onClick={() => {
            resetForm();
            setShowForm(true);
          }}
          className="bg-[#1c355e] text-white px-4 py-2 rounded-lg hover:bg-[#2a4a7a] flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          Add Service
        </button>
      </div>

      {/* Services Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Service
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Category
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Price
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {services.map((service) => (
              <tr key={service.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    {service.image && (
                      <Image 
                        className="h-10 w-10 rounded-md mr-4 object-cover" 
                        src={service.image} 
                        alt={getDisplayText(service.title, 50)} 
                        width={40}
                        height={40}
                      />
                    )}
                    <div>
                      <div className="text-sm font-medium text-gray-900">
                        {getDisplayText(service.title || service.name, 40)}
                      </div>
                      <div className="text-sm text-gray-500">
                        {getDisplayText(service.description)}
                      </div>
                      {service.slug && (
                        <div className="text-xs text-gray-400">/{service.slug}</div>
                      )}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {service.category}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {getDisplayText(service.price, 30)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    service.active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {service.active ? 'Active' : 'Inactive'}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button
                    onClick={() => handleEdit(service)}
                    className="text-indigo-600 hover:text-indigo-900 mr-3"
                  >
                    <Edit className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDelete(service.id)}
                    className="text-red-600 hover:text-red-900"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add/Edit Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-6xl max-h-[95vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">
                {editingService ? 'Edit Service' : 'Add New Service'}
              </h2>
              <button
                onClick={() => {
                  setShowForm(false);
                  setEditingService(null);
                  resetForm();
                }}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Language Tabs */}
              <div className="flex space-x-1 mb-4">
                <button
                  type="button"
                  onClick={() => setActiveTab('en')}
                  className={`px-4 py-2 rounded-md text-sm font-medium ${
                    activeTab === 'en' 
                      ? 'bg-[#1c355e] text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  English
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('ar')}
                  className={`px-4 py-2 rounded-md text-sm font-medium ${
                    activeTab === 'ar' 
                      ? 'bg-[#1c355e] text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  العربية
                </button>
              </div>

              {/* Basic Info Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Service Title * ({activeTab === 'en' ? 'English' : 'Arabic'})
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full border border-gray-300 rounded-lg p-2"
                    value={formData.title[activeTab]}
                    onChange={(e) => {
                      const title = e.target.value;
                      updateFormField('title', title, activeTab);
                      // Auto-generate slug from English title
                      if (activeTab === 'en' && !editingService) {
                        const slug = generateSlug(title);
                        setFormData(prev => ({ ...prev, slug }));
                      }
                    }}
                  />
                </div>
                
                {activeTab === 'en' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">URL Slug *</label>
                    <input
                      type="text"
                      required
                      className="w-full border border-gray-300 rounded-lg p-2"
                      value={formData.slug}
                      onChange={(e) => updateFormField('slug', e.target.value)}
                    />
                  </div>
                )}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Service Name (for internal use) ({activeTab === 'en' ? 'English' : 'Arabic'})
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg p-2"
                  value={formData.name[activeTab]}
                  onChange={(e) => updateFormField('name', e.target.value, activeTab)}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Short Description (SEO) ({activeTab === 'en' ? 'English' : 'Arabic'})
                </label>
                <textarea
                  className="w-full border border-gray-300 rounded-lg p-2"
                  rows={2}
                  placeholder="Brief description for search engines (160 characters max)"
                  value={formData.description[activeTab]}
                  onChange={(e) => updateFormField('description', e.target.value, activeTab)}
                />
              </div>
              
              {/* Dynamic Sections */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Content Sections
                  </label>
                  <button
                    type="button"
                    onClick={addSection}
                    className="bg-green-600 text-white px-3 py-1 rounded-md text-sm hover:bg-green-700 flex items-center gap-1"
                  >
                    <Plus className="w-4 h-4" />
                    Add Section
                  </button>
                </div>
                
                {formData.sections.map((section, index) => (
                  <div key={section.id} className="border border-gray-200 rounded-lg p-4 mb-4 bg-gray-50">
                    <div className="flex justify-between items-center mb-3">
                      <h4 className="font-medium text-gray-800">Section {index + 1}</h4>
                      <button
                        type="button"
                        onClick={() => removeSection(section.id)}
                        className="text-red-600 hover:text-red-800"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    
                    <div className="space-y-3">
                      <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">
                          Section Title ({activeTab === 'en' ? 'English' : 'Arabic'})
                        </label>
                        <input
                          type="text"
                          className="w-full border border-gray-300 rounded-lg p-2"
                          placeholder={activeTab === 'en' ? 'Section title...' : 'عنوان القسم...'}
                          value={section.title?.[activeTab] || ''}
                          onChange={(e) => updateSection(section.id, 'title', e.target.value, activeTab)}
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">
                          Section Content ({activeTab === 'en' ? 'English' : 'Arabic'})
                        </label>
                        <textarea
                          className="w-full border border-gray-300 rounded-lg p-2"
                          rows={4}
                          placeholder={activeTab === 'en' ? 'Section content...' : 'محتوى القسم...'}
                          value={section.content?.[activeTab] || ''}
                          onChange={(e) => updateSection(section.id, 'content', e.target.value, activeTab)}
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">
                          Section Image (optional)
                        </label>
                        <ImageUpload
                          currentImage={section.image || ''}
                          onImageChange={(url) => updateSection(section.id, 'image', url)}
                          placeholder="Upload section image or enter URL..."
                          className="mt-1"
                          showExisting={false}
                        />
                      </div>
                    </div>
                  </div>
                ))}
                
                {formData.sections.length === 0 && (
                  <div className="text-center py-8 text-gray-500 border-2 border-dashed border-gray-300 rounded-lg">
                    No sections added yet. Click &quot;Add Section&quot; to create your first content section.
                  </div>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Price ({activeTab === 'en' ? 'English' : 'Arabic'})
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg p-2"
                  placeholder={activeTab === 'en' ? 'e.g., From AED 500' : 'مثال: ابتداءً من 500 درهم'}
                  value={formData.price[activeTab]}
                  onChange={(e) => updateFormField('price', e.target.value, activeTab)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  SEO Tags (comma separated) ({activeTab === 'en' ? 'English' : 'Arabic'})
                </label>
                <input
                  type="text"
                  placeholder={activeTab === 'en' ? 'travel, Dubai, business travel, flights' : 'سفر، دبي، سفر تجاري، طيران'}
                  className="w-full border border-gray-300 rounded-lg p-2"
                  value={formData.tags[activeTab]}
                  onChange={(e) => updateFormField('tags', e.target.value, activeTab)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Features (comma separated) ({activeTab === 'en' ? 'English' : 'Arabic'})
                </label>
                <input
                  type="text"
                  placeholder={activeTab === 'en' ? '24/7 support, Expert guides, Free cancellation' : 'دعم 24/7، مرشدين خبراء، إلغاء مجاني'}
                  className="w-full border border-gray-300 rounded-lg p-2"
                  value={formData.features[activeTab]}
                  onChange={(e) => updateFormField('features', e.target.value, activeTab)}
                />
              </div>

              {/* Common fields (only show in English tab) */}
              {activeTab === 'en' && (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                      <select
                        className="w-full border border-gray-300 rounded-lg p-2"
                        value={formData.category}
                        onChange={(e) => updateFormField('category', e.target.value)}
                      >
                        <option value="">Select Category</option>
                        <option value="business">Business Travel</option>
                        <option value="leisure">Leisure Travel</option>
                        <option value="transportation">Transportation</option>
                        <option value="accommodation">Accommodation</option>
                        <option value="specialized">Specialized Services</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Service Image</label>
                      <ImageUpload
                        currentImage={formData.image}
                        onImageChange={(url) => updateFormField('image', url)}
                        placeholder="Upload service image or enter URL..."
                        showExisting={false}
                      />
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-6">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="active"
                        className="mr-2"
                        checked={formData.active}
                        onChange={(e) => updateFormField('active', e.target.checked)}
                      />
                      <label htmlFor="active" className="text-sm font-medium text-gray-700">Active Service</label>
                    </div>
                    
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="showOnHomepage"
                        className="mr-2"
                        checked={formData.showOnHomepage}
                        onChange={(e) => updateFormField('showOnHomepage', e.target.checked)}
                      />
                      <label htmlFor="showOnHomepage" className="text-sm font-medium text-gray-700">Show on Homepage</label>
                    </div>
                  </div>
                </>
              )}
              
              <div className="flex gap-2 pt-4 border-t">
                <button
                  type="submit"
                  className="flex-1 bg-[#1c355e] text-white py-2 rounded-lg hover:bg-[#2a4a7a] flex items-center justify-center gap-2"
                >
                  <Save className="w-4 h-4" />
                  {editingService ? 'Update' : 'Save'}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowForm(false);
                    setEditingService(null);
                    resetForm();
                  }}
                  className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}