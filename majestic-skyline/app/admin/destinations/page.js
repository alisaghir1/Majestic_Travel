'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Plus, Edit, Trash2, Save, X, Globe, MapPin } from 'lucide-react';
import ImageUpload from '../../components/ImageUpload';

export default function DestinationsAdmin() {
  const [destinations, setDestinations] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingDestination, setEditingDestination] = useState(null);
  const [activeTab, setActiveTab] = useState('en'); // For language tabs
  const [formData, setFormData] = useState({
    title: { en: '', ar: '' },
    description: { en: '', ar: '' },
    image: '',
    region: '',
    category: '',
    price: { en: '', ar: '' },
    includes: { en: [], ar: [] },
    featured: false,
    showOnHomepage: false,
    active: true
  });

  useEffect(() => {
    fetchDestinations();
  }, []);

  const fetchDestinations = async () => {
    try {
      const response = await fetch('/api/destinations');
      const data = await response.json();
      setDestinations(data);
    } catch (error) {
      console.error('Error fetching destinations:', error);
    }
  };

  // Validation function to ensure all required fields are filled in both languages
  const validateRequiredFields = () => {
    const errors = [];

    // Required bilingual fields
    if (!formData.title.en.trim() || !formData.title.ar.trim()) {
      errors.push('Destination title is required in both English and Arabic');
    }

    if (!formData.description.en.trim() || !formData.description.ar.trim()) {
      errors.push('Destination description is required in both English and Arabic');
    }

    if (!formData.price.en.trim() || !formData.price.ar.trim()) {
      errors.push('Price information is required in both English and Arabic');
    }

    // Check includes arrays
    const includesEn = typeof formData.includes.en === 'string' 
      ? formData.includes.en.split(',').map(item => item.trim()).filter(item => item !== '')
      : formData.includes.en;
    const includesAr = typeof formData.includes.ar === 'string' 
      ? formData.includes.ar.split(',').map(item => item.trim()).filter(item => item !== '')
      : formData.includes.ar;

    if (includesEn.length === 0 || includesAr.length === 0) {
      errors.push('Package includes information is required in both English and Arabic');
    }

    // Required non-bilingual fields
    if (!formData.image.trim()) {
      errors.push('Destination image is required');
    }

    if (!formData.region.trim()) {
      errors.push('Region is required');
    }

    if (!formData.category.trim()) {
      errors.push('Category is required');
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
      const url = '/api/destinations';
      const method = editingDestination ? 'PUT' : 'POST';
      
      // Convert includes from comma-separated strings to arrays
      const processedData = {
        ...formData,
        includes: {
          en: typeof formData.includes.en === 'string' 
            ? formData.includes.en.split(',').map(item => item.trim()).filter(item => item !== '')
            : formData.includes.en,
          ar: typeof formData.includes.ar === 'string' 
            ? formData.includes.ar.split(',').map(item => item.trim()).filter(item => item !== '')
            : formData.includes.ar
        }
      };

      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(processedData),
      });

      if (response.ok) {
        fetchDestinations();
        resetForm();
        setShowForm(false);
      }
    } catch (error) {
      console.error('Error saving destination:', error);
    }
  };

  const resetForm = () => {
    setFormData({
      title: { en: '', ar: '' },
      description: { en: '', ar: '' },
      image: '',
      region: '',
      category: '',
      price: { en: '', ar: '' },
      includes: { en: [], ar: [] },
      featured: false,
      showOnHomepage: false,
      active: true
    });
    setEditingDestination(null);
    setActiveTab('en');
  };

  const handleEdit = (destination) => {
    setEditingDestination(destination);
    setFormData({
      ...destination,
      // Ensure boolean fields are always boolean values
      featured: Boolean(destination.featured),
      showOnHomepage: Boolean(destination.showOnHomepage || destination.show_on_homepage),
      active: Boolean(destination.active !== false), // Default to true if undefined/null
      includes: {
        en: Array.isArray(destination.includes?.en) 
          ? destination.includes.en.join(', ') 
          : (destination.includes?.en || ''),
        ar: Array.isArray(destination.includes?.ar) 
          ? destination.includes.ar.join(', ') 
          : (destination.includes?.ar || '')
      }
    });
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (confirm('Are you sure you want to delete this destination?')) {
      try {
        const response = await fetch('/api/destinations', {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id }),
        });

        if (response.ok) {
          fetchDestinations();
        }
      } catch (error) {
        console.error('Error deleting destination:', error);
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

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Destinations Management</h1>
        <button
          onClick={() => {
            resetForm();
            setShowForm(true);
          }}
          className="bg-[#1c355e] text-white px-4 py-2 rounded-lg hover:bg-[#2a4a7a] flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          Add Destination
        </button>
      </div>

      {/* Destinations Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Destination
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Region
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Category
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
            {destinations.map((destination) => (
              <tr key={destination.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    {destination.image && (
                      <Image 
                        className="h-10 w-10 rounded-md mr-4 object-cover" 
                        src={destination.image} 
                        alt={destination.title?.en || destination.title} 
                        width={40}
                        height={40}
                      />
                    )}
                    <div>
                      <div className="text-sm font-medium text-gray-900">
                        {getDisplayText(destination.title)}
                      </div>
                      <div className="text-sm text-gray-500">
                        {getDisplayText(destination.description, 80)}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    <MapPin className="w-3 h-3 mr-1" />
                    {destination.region}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    {destination.category}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex flex-col space-y-1">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      destination.active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {destination.active ? 'Active' : 'Inactive'}
                    </span>
                    {destination.featured && (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                        Featured
                      </span>
                    )}
                    {destination.showOnHomepage && (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                        Homepage
                      </span>
                    )}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button
                    onClick={() => handleEdit(destination)}
                    className="text-indigo-600 hover:text-indigo-900 mr-4"
                  >
                    <Edit className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDelete(destination.id)}
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

      {/* Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
          <div className="relative top-20 mx-auto p-5 border w-11/12 max-w-4xl shadow-lg rounded-md bg-white">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold text-gray-900">
                {editingDestination ? 'Edit Destination' : 'Add New Destination'}
              </h3>
              <button
                onClick={() => setShowForm(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Language Tabs */}
              <div className="flex space-x-1 border-b">
                <button
                  type="button"
                  onClick={() => setActiveTab('en')}
                  className={`px-4 py-2 text-sm font-medium ${
                    activeTab === 'en'
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <Globe className="w-4 h-4 inline mr-1" />
                  English
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('ar')}
                  className={`px-4 py-2 text-sm font-medium ${
                    activeTab === 'ar'
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <Globe className="w-4 h-4 inline mr-1" />
                  العربية
                </button>
              </div>

              {/* Basic Info Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Destination Title * ({activeTab === 'en' ? 'English' : 'Arabic'})
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full border border-gray-300 rounded-lg p-2"
                    value={formData.title[activeTab]}
                    onChange={(e) => updateFormField('title', e.target.value, activeTab)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Price ({activeTab === 'en' ? 'English' : 'Arabic'})
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg p-2"
                    placeholder={activeTab === 'en' ? 'Starting from $1,200' : 'يبدأ من 1,200 دولار'}
                    value={formData.price[activeTab]}
                    onChange={(e) => updateFormField('price', e.target.value, activeTab)}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description ({activeTab === 'en' ? 'English' : 'Arabic'})
                </label>
                <textarea
                  rows="3"
                  className="w-full border border-gray-300 rounded-lg p-2"
                  value={formData.description[activeTab]}
                  onChange={(e) => updateFormField('description', e.target.value, activeTab)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  What&apos;s Included ({activeTab === 'en' ? 'English' : 'Arabic'})
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg p-2"
                  placeholder={activeTab === 'en' ? 'Historical tours, Local guide, Transportation (comma-separated)' : 'جولات تاريخية، مرشد محلي، المواصلات (مفصولة بفواصل)'}
                  value={formData.includes[activeTab]}
                  onChange={(e) => updateFormField('includes', e.target.value, activeTab)}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Region</label>
                  <select
                    className="w-full border border-gray-300 rounded-lg p-2"
                    value={formData.region}
                    onChange={(e) => updateFormField('region', e.target.value)}
                  >
                    <option value="">Select Region</option>
                    <option value="middle-east">Middle East & North Africa</option>
                    <option value="europe">Europe</option>
                    <option value="asia">Asia</option>
                    <option value="africa">Africa</option>
                    <option value="americas">Americas</option>
                    <option value="oceania">Oceania</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                  <select
                    className="w-full border border-gray-300 rounded-lg p-2"
                    value={formData.category}
                    onChange={(e) => updateFormField('category', e.target.value)}
                  >
                    <option value="">Select Category</option>
                    <option value="cultural">Cultural</option>
                    <option value="adventure">Adventure</option>
                    <option value="luxury">Luxury</option>
                    <option value="tropical">Tropical</option>
                    <option value="urban">Urban</option>
                    <option value="nature">Nature</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Destination Image</label>
                  <ImageUpload
                    currentImage={formData.image}
                    onImageChange={(url) => updateFormField('image', url)}
                    placeholder="Upload destination image or enter URL..."
                    uploadPath="destinations"
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
                  <label htmlFor="active" className="text-sm font-medium text-gray-700">
                    Active
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="featured"
                    className="mr-2"
                    checked={formData.featured}
                    onChange={(e) => updateFormField('featured', e.target.checked)}
                  />
                  <label htmlFor="featured" className="text-sm font-medium text-gray-700">
                    Featured
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="showOnHomepage"
                    className="mr-2"
                    checked={formData.showOnHomepage}
                    onChange={(e) => updateFormField('showOnHomepage', e.target.checked)}
                  />
                  <label htmlFor="showOnHomepage" className="text-sm font-medium text-gray-700">
                    Show on Homepage
                  </label>
                </div>
              </div>

              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#1c355e] text-white rounded-lg hover:bg-[#2a4a7a] flex items-center gap-2"
                >
                  <Save className="w-4 h-4" />
                  {editingDestination ? 'Update' : 'Create'} Destination
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}