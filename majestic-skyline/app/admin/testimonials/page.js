'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Plus, Edit, Trash2, Save, X, Star } from 'lucide-react';
import ImageUpload from '../../components/ImageUpload';

export default function TestimonialsAdmin() {
  const [testimonials, setTestimonials] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingTestimonial, setEditingTestimonial] = useState(null);
  const [loading, setLoading] = useState(true);
  
  const [formData, setFormData] = useState({
    name: { en: '', ar: '' },
    message: { en: '', ar: '' },
    profession: { en: '', ar: '' },
    location: { en: '', ar: '' },
    rating: 5,
    status: 'approved',
    featured: false,
    image: '',
    email: ''
  });

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/testimonials');
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      setTestimonials(data);
    } catch (error) {
      console.error('Error fetching testimonials:', error);
      alert('Error loading testimonials: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  // Validation function to ensure all required fields are filled in both languages
  const validateRequiredFields = () => {
    const errors = [];

    // Required bilingual fields
    if (!formData.name.en.trim() || !formData.name.ar.trim()) {
      errors.push('Customer name is required in both English and Arabic');
    }

    if (!formData.message.en.trim() || !formData.message.ar.trim()) {
      errors.push('Testimonial message is required in both English and Arabic');
    }

    if (!formData.profession.en.trim() || !formData.profession.ar.trim()) {
      errors.push('Profession/title is required in both English and Arabic');
    }

    // Note: Location is optional - no validation required since there are no location input fields

    // Required non-bilingual fields
    if (!formData.rating || formData.rating < 1 || formData.rating > 5) {
      errors.push('Rating must be between 1 and 5 stars');
    }

    // Optional email validation if provided
    if (formData.email && formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.push('Please provide a valid email address');
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
      const url = '/api/testimonials';
      const method = editingTestimonial ? 'PUT' : 'POST';
      const payload = editingTestimonial ? { ...formData, id: editingTestimonial.id } : formData;
      
      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
      }

      await response.json();
      
      fetchTestimonials();
      setShowForm(false);
      setEditingTestimonial(null);
      resetForm();
    } catch (error) {
      console.error('Error saving testimonial:', error);
      alert('Error saving testimonial: ' + error.message);
    }
  };

  const resetForm = () => {
    setFormData({
      name: { en: '', ar: '' },
      message: { en: '', ar: '' },
      profession: { en: '', ar: '' },
      location: { en: '', ar: '' },
      rating: 5,
      status: 'approved',
      featured: false,
      image: '',
      email: ''
    });
  };

  const handleEdit = (testimonial) => {
    setEditingTestimonial(testimonial);
    setFormData({
      ...testimonial,
      name: testimonial.name || { en: '', ar: '' },
      message: testimonial.message || { en: '', ar: '' },
      profession: testimonial.profession || { en: '', ar: '' },
      location: testimonial.location || { en: '', ar: '' },
      // Ensure boolean fields are always boolean values
      featured: Boolean(testimonial.featured)
    });
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (confirm('Are you sure you want to delete this testimonial?')) {
      try {
        const response = await fetch(`/api/testimonials?id=${id}`, { method: 'DELETE' });
        
        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
        }
        
        fetchTestimonials();
      } catch (error) {
        console.error('Error deleting testimonial:', error);
        alert('Error deleting testimonial: ' + error.message);
      }
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-lg text-gray-600">Loading testimonials...</div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Testimonials Management</h1>
        <button
          onClick={() => setShowForm(true)}
          className="bg-[#1c355e] text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-[#2a4a7a]"
        >
          <Plus className="w-4 h-4" />
          Add Testimonial
        </button>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Customer
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Message
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Rating
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
            {testimonials.map((testimonial) => (
              <tr key={testimonial.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    {testimonial.image && (
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name?.en || testimonial.name}
                        className="w-10 h-10 rounded-full mr-3 object-cover"
                        width={40}
                        height={40}
                      />
                    )}
                    <div>
                      <div className="text-sm font-medium text-gray-900">
                        {testimonial.name?.en || testimonial.name}
                      </div>
                      <div className="text-sm text-gray-500">
                        {testimonial.profession?.en || testimonial.profession}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-gray-900 max-w-xs truncate">
                    {testimonial.message?.en || testimonial.message}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    {Array.from({ length: 5 }, (_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                      />
                    ))}
                    <span className="ml-2 text-sm text-gray-600">({testimonial.rating})</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex flex-col gap-1">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      testimonial.status === 'approved' ? 'bg-green-100 text-green-800' : 
                      testimonial.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {testimonial.status}
                    </span>
                    {testimonial.featured && (
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                        Featured
                      </span>
                    )}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleEdit(testimonial)}
                      className="text-indigo-600 hover:text-indigo-900"
                    >
                      <Edit className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(testimonial.id)}
                      className="text-red-600 hover:text-red-900"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showForm && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">
                {editingTestimonial ? 'Edit Testimonial' : 'Add New Testimonial'}
              </h2>
              <button
                onClick={() => {
                  setShowForm(false);
                  setEditingTestimonial(null);
                  resetForm();
                }}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name (English)</label>
                  <input
                    type="text"
                    required
                    className="w-full border border-gray-300 rounded-lg p-2"
                    value={formData.name.en}
                    onChange={(e) => setFormData({ 
                      ...formData, 
                      name: { ...formData.name, en: e.target.value }
                    })}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name (Arabic)</label>
                  <input
                    type="text"
                    required
                    className="w-full border border-gray-300 rounded-lg p-2"
                    value={formData.name.ar}
                    onChange={(e) => setFormData({ 
                      ...formData, 
                      name: { ...formData.name, ar: e.target.value }
                    })}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message (English)</label>
                  <textarea
                    required
                    className="w-full border border-gray-300 rounded-lg p-2"
                    rows={4}
                    value={formData.message.en}
                    onChange={(e) => setFormData({ 
                      ...formData, 
                      message: { ...formData.message, en: e.target.value }
                    })}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message (Arabic)</label>
                  <textarea
                    required
                    className="w-full border border-gray-300 rounded-lg p-2"
                    rows={4}
                    value={formData.message.ar}
                    onChange={(e) => setFormData({ 
                      ...formData, 
                      message: { ...formData.message, ar: e.target.value }
                    })}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Profession (English)</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg p-2"
                    value={formData.profession.en}
                    onChange={(e) => setFormData({ 
                      ...formData, 
                      profession: { ...formData.profession, en: e.target.value }
                    })}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Profession (Arabic)</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg p-2"
                    value={formData.profession.ar}
                    onChange={(e) => setFormData({ 
                      ...formData, 
                      profession: { ...formData.profession, ar: e.target.value }
                    })}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Rating</label>
                  <select
                    className="w-full border border-gray-300 rounded-lg p-2"
                    value={formData.rating}
                    onChange={(e) => setFormData({ ...formData, rating: parseInt(e.target.value) })}
                  >
                    <option value={5}>5 Stars</option>
                    <option value={4}>4 Stars</option>
                    <option value={3}>3 Stars</option>
                    <option value={2}>2 Stars</option>
                    <option value={1}>1 Star</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                  <select
                    className="w-full border border-gray-300 rounded-lg p-2"
                    value={formData.status}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                  >
                    <option value="approved">Approved</option>
                    <option value="pending">Pending</option>
                    <option value="rejected">Rejected</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Customer Image</label>
                  <ImageUpload
                    currentImage={formData.image}
                    onImageChange={(url) => setFormData({ ...formData, image: url })}
                    placeholder="Upload or enter customer image URL..."
                    uploadPath="testimonials"
                    showExisting={false}
                  />
                </div>
              </div>
              
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="featured"
                  className="mr-2"
                  checked={formData.featured}
                  onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                />
                <label htmlFor="featured" className="text-sm font-medium text-gray-700">
                  Featured Testimonial (Show on Homepage)
                </label>
              </div>
              
              <div className="flex gap-2">
                <button
                  type="submit"
                  className="flex-1 bg-[#1c355e] text-white py-2 rounded-lg hover:bg-[#2a4a7a] flex items-center justify-center gap-2"
                >
                  <Save className="w-4 h-4" />
                  {editingTestimonial ? 'Update' : 'Save'}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowForm(false);
                    setEditingTestimonial(null);
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
