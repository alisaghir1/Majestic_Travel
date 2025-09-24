'use client';
import { useState, useEffect } from 'react';
import { Mail, Phone, Calendar, MapPin, Eye, Trash2, User, MessageSquare, Check, Clock, X } from 'lucide-react';

export default function InquiriesAdmin() {
  const [inquiries, setInquiries] = useState([]);
  const [selectedInquiry, setSelectedInquiry] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    fetchInquiries();
  }, []);

  const fetchInquiries = async () => {
    try {
      const response = await fetch('/api/inquiries');
      const data = await response.json();
      setInquiries(data);
    } catch (error) {
      console.error('Error fetching inquiries:', error);
    }
  };

  const handleStatusChange = async (id, newStatus) => {
    try {
      const inquiry = inquiries.find(i => i.id === id);
      const response = await fetch('/api/inquiries', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...inquiry, id, status: newStatus }),
      });

      if (response.ok) {
        fetchInquiries();
      }
    } catch (error) {
      console.error('Error updating inquiry status:', error);
    }
  };

  const handleDelete = async (id) => {
    if (confirm('Are you sure you want to delete this inquiry?')) {
      try {
        const response = await fetch('/api/inquiries', { 
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id })
        });
        if (response.ok) {
          fetchInquiries();
          if (selectedInquiry?.id === id) {
            setShowDetails(false);
            setSelectedInquiry(null);
          }
        }
      } catch (error) {
        console.error('Error deleting inquiry:', error);
      }
    }
  };

  const handleViewDetails = (inquiry) => {
    setSelectedInquiry(inquiry);
    setShowDetails(true);
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'responded':
        return <Check className="w-4 h-4 text-green-600" />;
      case 'pending':
        return <Clock className="w-4 h-4 text-yellow-600" />;
      case 'new':
        return <Mail className="w-4 h-4 text-blue-600" />;
      default:
        return <X className="w-4 h-4 text-gray-600" />;
    }
  };

  const filteredInquiries = inquiries.filter(inquiry => {
    if (filter === 'all') return true;
    return inquiry.status === filter;
  });

  const getInquiryTypeColor = (type) => {
    switch (type) {
      case 'flight':
        return 'bg-blue-100 text-blue-800';
      case 'hotel':
        return 'bg-green-100 text-green-800';
      case 'tour':
        return 'bg-purple-100 text-purple-800';
      case 'visa':
        return 'bg-orange-100 text-orange-800';
      case 'transport':
        return 'bg-indigo-100 text-indigo-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Customer Inquiries</h1>
        <div className="flex items-center gap-4">
          <select
            className="border border-gray-300 rounded-lg p-2"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="all">All Inquiries</option>
            <option value="new">New</option>
            <option value="pending">Pending</option>
            <option value="responded">Responded</option>
          </select>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        {['new', 'pending', 'responded', 'all'].map((status) => {
          const count = status === 'all' 
            ? inquiries.length 
            : inquiries.filter(i => i.status === status).length;
          
          return (
            <div key={status} className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center">
                <div className="p-2 bg-gray-100 rounded-lg">
                  {getStatusIcon(status)}
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600 capitalize">{status} Inquiries</p>
                  <p className="text-2xl font-bold text-gray-900">{count}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Inquiries Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Customer
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Type & Message
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Travel Details
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredInquiries.map((inquiry) => (
              <tr key={inquiry.id} className={inquiry.status === 'new' ? 'bg-blue-50' : ''}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <User className="w-8 h-8 text-gray-400 mr-3" />
                    <div>
                      <div className="text-sm font-medium text-gray-900">{inquiry.name}</div>
                      <div className="text-sm text-gray-500 flex items-center">
                        <Mail className="w-3 h-3 mr-1" />
                        {inquiry.email}
                      </div>
                      {inquiry.phone && (
                        <div className="text-sm text-gray-500 flex items-center">
                          <Phone className="w-3 h-3 mr-1" />
                          {inquiry.phone}
                        </div>
                      )}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div>
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getInquiryTypeColor(inquiry.type)}`}>
                      {inquiry.type || 'General'}
                    </span>
                    <div className="text-sm text-gray-900 mt-1 max-w-xs truncate">
                      {inquiry.message}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {inquiry.destination && (
                    <div className="flex items-center mb-1">
                      <MapPin className="w-3 h-3 mr-1" />
                      {inquiry.destination}
                    </div>
                  )}
                  {inquiry.travelDate && (
                    <div className="flex items-center mb-1">
                      <Calendar className="w-3 h-3 mr-1" />
                      {new Date(inquiry.travelDate).toLocaleDateString()}
                    </div>
                  )}
                  {inquiry.travelers && (
                    <div className="text-xs text-gray-400">
                      {inquiry.travelers} travelers
                    </div>
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-1">
                    {getStatusIcon(inquiry.status)}
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      inquiry.status === 'responded' ? 'bg-green-100 text-green-800' : 
                      inquiry.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                      inquiry.status === 'new' ? 'bg-blue-100 text-blue-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {inquiry.status || 'new'}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {new Date(inquiry.createdAt || inquiry.date).toLocaleDateString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleViewDetails(inquiry)}
                      className="text-blue-600 hover:text-blue-900"
                      title="View Details"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                    {inquiry.status !== 'responded' && (
                      <button
                        onClick={() => handleStatusChange(inquiry.id, 'responded')}
                        className="text-green-600 hover:text-green-900"
                        title="Mark as Responded"
                      >
                        <Check className="w-4 h-4" />
                      </button>
                    )}
                    {inquiry.status === 'new' && (
                      <button
                        onClick={() => handleStatusChange(inquiry.id, 'pending')}
                        className="text-yellow-600 hover:text-yellow-900"
                        title="Mark as Pending"
                      >
                        <Clock className="w-4 h-4" />
                      </button>
                    )}
                    <button
                      onClick={() => handleDelete(inquiry.id)}
                      className="text-red-600 hover:text-red-900"
                      title="Delete"
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

      {/* Details Modal */}
      {showDetails && selectedInquiry && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Inquiry Details</h2>
              <button
                onClick={() => {
                  setShowDetails(false);
                  setSelectedInquiry(null);
                }}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="space-y-4">
              {/* Customer Information */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Customer Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <div>
                    <span className="text-sm text-gray-600">Name:</span>
                    <span className="text-sm font-medium text-gray-900 ml-2">{selectedInquiry.name}</span>
                  </div>
                  <div>
                    <span className="text-sm text-gray-600">Email:</span>
                    <span className="text-sm font-medium text-gray-900 ml-2">{selectedInquiry.email}</span>
                  </div>
                  {selectedInquiry.phone && (
                    <div>
                      <span className="text-sm text-gray-600">Phone:</span>
                      <span className="text-sm font-medium text-gray-900 ml-2">{selectedInquiry.phone}</span>
                    </div>
                  )}
                  <div>
                    <span className="text-sm text-gray-600">Type:</span>
                    <span className={`ml-2 px-2 py-1 text-xs font-semibold rounded-full ${getInquiryTypeColor(selectedInquiry.type)}`}>
                      {selectedInquiry.type || 'General'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Travel Information */}
              {(selectedInquiry.destination || selectedInquiry.travelDate || selectedInquiry.travelers) && (
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Travel Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {selectedInquiry.destination && (
                      <div>
                        <span className="text-sm text-gray-600">Destination:</span>
                        <span className="text-sm font-medium text-gray-900 ml-2">{selectedInquiry.destination}</span>
                      </div>
                    )}
                    {selectedInquiry.travelDate && (
                      <div>
                        <span className="text-sm text-gray-600">Travel Date:</span>
                        <span className="text-sm font-medium text-gray-900 ml-2">
                          {new Date(selectedInquiry.travelDate).toLocaleDateString()}
                        </span>
                      </div>
                    )}
                    {selectedInquiry.travelers && (
                      <div>
                        <span className="text-sm text-gray-600">Travelers:</span>
                        <span className="text-sm font-medium text-gray-900 ml-2">{selectedInquiry.travelers}</span>
                      </div>
                    )}
                    {selectedInquiry.budget && (
                      <div>
                        <span className="text-sm text-gray-600">Budget:</span>
                        <span className="text-sm font-medium text-gray-900 ml-2">{selectedInquiry.budget}</span>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Message */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Message</h3>
                <p className="text-sm text-gray-900 whitespace-pre-wrap">{selectedInquiry.message}</p>
              </div>

              {/* Status Actions */}
              <div className="flex gap-2 pt-4">
                {selectedInquiry.status !== 'responded' && (
                  <button
                    onClick={() => {
                      handleStatusChange(selectedInquiry.id, 'responded');
                      setShowDetails(false);
                      setSelectedInquiry(null);
                    }}
                    className="flex-1 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 flex items-center justify-center gap-2"
                  >
                    <Check className="w-4 h-4" />
                    Mark as Responded
                  </button>
                )}
                {selectedInquiry.status === 'new' && (
                  <button
                    onClick={() => {
                      handleStatusChange(selectedInquiry.id, 'pending');
                      setShowDetails(false);
                      setSelectedInquiry(null);
                    }}
                    className="flex-1 bg-yellow-600 text-white py-2 rounded-lg hover:bg-yellow-700 flex items-center justify-center gap-2"
                  >
                    <Clock className="w-4 h-4" />
                    Mark as Pending
                  </button>
                )}
                <button
                  onClick={() => {
                    setShowDetails(false);
                    setSelectedInquiry(null);
                  }}
                  className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}