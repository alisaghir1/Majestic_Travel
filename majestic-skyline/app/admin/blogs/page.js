'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Plus, Edit, Trash2, Save, X } from 'lucide-react';
import ImageUpload from '../../components/ImageUpload';

export default function BlogsAdmin() {
  const [blogs, setBlogs] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingBlog, setEditingBlog] = useState(null);
  const [activeTab, setActiveTab] = useState('en'); // For language tabs
  const [formData, setFormData] = useState({
    title: { en: '', ar: '' },
    slug: '',
    excerpt: { en: '', ar: '' },
    sections: [],
    category: '',
    author: { en: '', ar: '' },
    readTime: { en: '', ar: '' },
    image: '',
    tags: { en: '', ar: '' },
    active: true,
    showOnHomepage: false
  });

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await fetch('/api/blogs');
      const data = await response.json();
      setBlogs(data);
    } catch (error) {
      console.error('Error fetching blogs:', error);
    }
  };

  // Validation function to ensure all required fields are filled in both languages
  const validateRequiredFields = () => {
    const errors = [];

    // Required bilingual fields
    if (!formData.title.en.trim() || !formData.title.ar.trim()) {
      errors.push('Blog title is required in both English and Arabic');
    }

    if (!formData.excerpt.en.trim() || !formData.excerpt.ar.trim()) {
      errors.push('Blog excerpt is required in both English and Arabic');
    }

    if (!formData.author.en.trim() || !formData.author.ar.trim()) {
      errors.push('Author name is required in both English and Arabic');
    }

    if (!formData.readTime.en.trim() || !formData.readTime.ar.trim()) {
      errors.push('Read time is required in both English and Arabic');
    }

    // Required non-bilingual fields
    if (!formData.slug.trim()) {
      errors.push('Blog slug is required');
    }

    if (!formData.category.trim()) {
      errors.push('Category is required');
    }

    if (!formData.image.trim()) {
      errors.push('Blog image is required');
    }

    // Validate sections
    if (formData.sections.length === 0) {
      errors.push('At least one content section is required');
    } else {
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
      const url = editingBlog ? '/api/blogs' : '/api/blogs';
      const method = editingBlog ? 'PUT' : 'POST';
      
      // Convert tags from comma-separated strings to arrays
      const processedData = {
        ...formData,
        tags: {
          en: typeof formData.tags.en === 'string' ? formData.tags.en.split(',').map(tag => tag.trim()).filter(tag => tag !== '') : formData.tags.en,
          ar: typeof formData.tags.ar === 'string' ? formData.tags.ar.split(',').map(tag => tag.trim()).filter(tag => tag !== '') : formData.tags.ar
        }
      };
      
      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editingBlog ? { ...processedData, id: editingBlog.id } : processedData),
      });

      if (response.ok) {
        fetchBlogs();
        setShowForm(false);
        setEditingBlog(null);
        resetForm();
      }
    } catch (error) {
      console.error('Error saving blog:', error);
    }
  };

  const resetForm = () => {
    setFormData({
      title: { en: '', ar: '' },
      slug: '',
      excerpt: { en: '', ar: '' },
      sections: [],
      category: '',
      author: { en: '', ar: '' },
      readTime: { en: '', ar: '' },
      image: '',
      tags: { en: '', ar: '' },
      active: true,
      showOnHomepage: false
    });
    setActiveTab('en');
  };

  const handleEdit = (blog) => {
    setEditingBlog(blog);
    setFormData({
      title: blog.title || { en: '', ar: '' },
      slug: blog.slug || '',
      excerpt: blog.excerpt || { en: '', ar: '' },
      sections: blog.sections || [],
      category: blog.category || '',
      author: blog.author || { en: '', ar: '' },
      readTime: blog.readTime || { en: '', ar: '' },
      image: blog.image || '',
      tags: {
        en: Array.isArray(blog.tags?.en) ? blog.tags.en.join(', ') : (blog.tags?.en || ''),
        ar: Array.isArray(blog.tags?.ar) ? blog.tags.ar.join(', ') : (blog.tags?.ar || '')
      },
      active: blog.active !== undefined ? blog.active : true,
      showOnHomepage: blog.showOnHomepage || false
    });
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (confirm('Are you sure you want to delete this blog post?')) {
      try {
        const response = await fetch('/api/blogs', {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id }),
        });

        if (response.ok) {
          fetchBlogs();
        }
      } catch (error) {
        console.error('Error deleting blog:', error);
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
        <h1 className="text-2xl font-bold text-gray-900">Blog Management</h1>
        <button
          onClick={() => {
            resetForm();
            setShowForm(true);
          }}
          className="bg-[#1c355e] text-white px-4 py-2 rounded-lg hover:bg-[#2a4a7a] flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          Add Blog Post
        </button>
      </div>

      {/* Blogs Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Blog Post
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Category
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Author
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
            {blogs.map((blog) => (
              <tr key={blog.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    {blog.image && (
                      <Image 
                        className="h-10 w-10 rounded-md mr-4 object-cover" 
                        src={blog.image} 
                        alt={blog.title?.en || blog.title} 
                        width={40}
                        height={40}
                      />
                    )}
                    <div>
                      <div className="text-sm font-medium text-gray-900">
                        {blog.title?.en || blog.title}
                      </div>
                      <div className="text-sm text-gray-500">
                        {blog.slug}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                    {blog.category}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {blog.author?.en || blog.author || 'Majestic Travel'}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    blog.active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {blog.active ? 'Active' : 'Inactive'}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button
                    onClick={() => handleEdit(blog)}
                    className="text-indigo-600 hover:text-indigo-900 mr-4"
                  >
                    <Edit className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDelete(blog.id)}
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

      {/* Blog Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
          <div className="relative top-20 mx-auto p-5 border w-11/12 max-w-4xl shadow-lg rounded-md bg-white">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium text-gray-900">
                {editingBlog ? 'Edit Blog Post' : 'Add New Blog Post'}
              </h3>
              <button
                onClick={() => {
                  setShowForm(false);
                  setEditingBlog(null);
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
                    Blog Title * ({activeTab === 'en' ? 'English' : 'Arabic'})
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full border border-gray-300 rounded-lg p-2"
                    placeholder={activeTab === 'en' ? 'Enter blog title...' : 'أدخل عنوان المدونة...'}
                    value={formData.title[activeTab]}
                    onChange={(e) => {
                      updateFormField('title', e.target.value, activeTab);
                      if (activeTab === 'en' && !editingBlog) {
                        updateFormField('slug', generateSlug(e.target.value));
                      }
                    }}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    URL Slug (English only)
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg p-2"
                    placeholder="url-friendly-title"
                    value={formData.slug}
                    onChange={(e) => updateFormField('slug', e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Excerpt ({activeTab === 'en' ? 'English' : 'Arabic'})
                </label>
                <textarea
                  className="w-full border border-gray-300 rounded-lg p-2"
                  rows={3}
                  placeholder="Brief excerpt for search engines and previews (160 characters max)"
                  value={formData.excerpt[activeTab]}
                  onChange={(e) => updateFormField('excerpt', e.target.value, activeTab)}
                />
              </div>

              {/* Sections Management */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Content Sections ({activeTab === 'en' ? 'English' : 'Arabic'})
                  </label>
                  <button
                    type="button"
                    onClick={addSection}
                    className="bg-[#8b7866] text-white px-3 py-1 rounded text-sm hover:bg-[#7a6b59] flex items-center gap-1"
                  >
                    <Plus className="w-3 h-3" />
                    Add Section
                  </button>
                </div>
                
                {formData.sections.length === 0 && (
                  <div className="text-center py-8 text-gray-500 border-2 border-dashed border-gray-300 rounded-lg">
                    <p>No sections yet. Click &quot;Add Section&quot; to create your first content section.</p>
                  </div>
                )}

                {formData.sections.map((section, index) => (
                  <div key={section.id} className="border border-gray-200 rounded-lg p-4 mb-4 bg-gray-50">
                    <div className="flex justify-between items-center mb-3">
                      <h4 className="text-sm font-medium text-gray-700">Section {index + 1}</h4>
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
                        <label className="block text-xs font-medium text-gray-600 mb-1">
                          Section Title ({activeTab === 'en' ? 'English' : 'Arabic'})
                        </label>
                        <input
                          type="text"
                          className="w-full border border-gray-300 rounded p-2 text-sm"
                          placeholder={activeTab === 'en' ? 'Section title...' : 'عنوان القسم...'}
                          value={section.title?.[activeTab] || ''}
                          onChange={(e) => updateSection(section.id, 'title', e.target.value, activeTab)}
                        />
                      </div>
                      
                      <div>
                        <label className="block text-xs font-medium text-gray-600 mb-1">
                          Section Content ({activeTab === 'en' ? 'English' : 'Arabic'})
                        </label>
                        <textarea
                          className="w-full border border-gray-300 rounded p-2 text-sm"
                          rows={4}
                          placeholder={activeTab === 'en' ? 'Section content...' : 'محتوى القسم...'}
                          value={section.content?.[activeTab] || ''}
                          onChange={(e) => updateSection(section.id, 'content', e.target.value, activeTab)}
                        />
                      </div>
                      
                      <div>
                        <label className="block text-xs font-medium text-gray-600 mb-1">
                          Section Image (Optional)
                        </label>
                        <ImageUpload
                          currentImage={section.image || ''}
                          onImageChange={(url) => updateSection(section.id, 'image', url)}
                          placeholder="Upload section image or enter URL..."
                          className="mt-1"
                          uploadPath="blogs"
                          showExisting={false}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Category
                  </label>
                  <select
                    className="w-full border border-gray-300 rounded-lg p-2"
                    value={formData.category}
                    onChange={(e) => updateFormField('category', e.target.value)}
                  >
                    <option value="">Select category</option>
                    <option value="travel-tips">Travel Tips</option>
                    <option value="travel-planning">Travel Planning</option>
                    <option value="destinations">Destinations</option>
                    <option value="travel-guides">Travel Guides</option>
                    <option value="news">News & Updates</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Featured Image
                  </label>
                  <ImageUpload
                    currentImage={formData.image}
                    onImageChange={(url) => updateFormField('image', url)}
                    placeholder="Upload blog featured image or enter URL..."
                    uploadPath="blogs"
                    showExisting={false}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Author ({activeTab === 'en' ? 'English' : 'Arabic'})
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg p-2"
                    placeholder={activeTab === 'en' ? 'Author name' : 'اسم الكاتب'}
                    value={formData.author[activeTab]}
                    onChange={(e) => updateFormField('author', e.target.value, activeTab)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Read Time ({activeTab === 'en' ? 'English' : 'Arabic'})
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg p-2"
                    placeholder={activeTab === 'en' ? '5 min read' : '5 دقائق للقراءة'}
                    value={formData.readTime[activeTab]}
                    onChange={(e) => updateFormField('readTime', e.target.value, activeTab)}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  SEO Tags (comma separated) ({activeTab === 'en' ? 'English' : 'Arabic'})
                </label>
                <input
                  type="text"
                  placeholder={activeTab === 'en' ? 'travel, tips, Dubai, vacation' : 'سفر، نصائح، دبي، إجازة'}
                  className="w-full border border-gray-300 rounded-lg p-2"
                  value={formData.tags[activeTab]}
                  onChange={(e) => updateFormField('tags', e.target.value, activeTab)}
                />
              </div>

              <div className="space-y-3">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={formData.active}
                    onChange={(e) => updateFormField('active', e.target.checked)}
                    className="mr-2"
                  />
                  <span className="text-sm font-medium text-gray-700">Active (publish this blog post)</span>
                </label>
                
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={formData.showOnHomepage}
                    onChange={(e) => updateFormField('showOnHomepage', e.target.checked)}
                    className="mr-2"
                  />
                  <span className="text-sm font-medium text-gray-700">Featured (highlight this blog)</span>
                </label>
              </div>

              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => {
                    setShowForm(false);
                    setEditingBlog(null);
                    resetForm();
                  }}
                  className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#1c355e] text-white rounded-md text-sm font-medium hover:bg-[#2a4a7a] flex items-center gap-2"
                >
                  <Save className="w-4 h-4" />
                  {editingBlog ? 'Update Blog' : 'Create Blog'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}