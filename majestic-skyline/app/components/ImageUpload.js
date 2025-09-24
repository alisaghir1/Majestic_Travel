'use client';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { Upload, X, Loader2 } from 'lucide-react';

const ImageUpload = ({ 
  currentImage, 
  onImageChange, 
  placeholder = "Select an image...",
  className = "",
  uploadPath = "services" // Default to services for backward compatibility
}) => {
  const [uploading, setUploading] = useState(false);
  const [preview, setPreview] = useState(currentImage || '');
  const fileInputRef = useRef(null);

  // Update preview when currentImage changes
  useEffect(() => {
    setPreview(currentImage || '');
  }, [currentImage]);

  const handleFileSelect = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    // Validate file type
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/avif'];
    if (!allowedTypes.includes(file.type)) {
      alert('Invalid file type. Only JPEG, PNG, WebP, and AVIF images are allowed.');
      return;
    }

    // Validate file size (max 5MB)
    const maxSize = 5 * 1024 * 1024; // 5MB
    if (file.size > maxSize) {
      alert('File size too large. Maximum size is 5MB.');
      return;
    }

    setUploading(true);

    try {
      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch(`/api/upload/${uploadPath}`, {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (response.ok) {
        setPreview(result.url);
        onImageChange(result.url);
      } else {
        alert(result.error || 'Upload failed');
      }
    } catch (error) {
      console.error('Upload error:', error);
      alert('Upload failed. Please try again.');
    } finally {
      setUploading(false);
      // Reset file input
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  const handleRemoveImage = () => {
    setPreview('');
    onImageChange('');
  };

  return (
    <div className={`space-y-3 ${className}`}>
      {/* Current Image Preview */}
      {preview && (
        <div className="relative inline-block">
          <Image 
            src={preview} 
            alt="Preview" 
            className="w-32 h-32 object-cover rounded-lg border-2 border-gray-200"
            width={128}
            height={128}
          />
          <button
            type="button"
            onClick={handleRemoveImage}
            className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
          >
            <X size={16} />
          </button>
        </div>
      )}

      {/* Upload Section */}
      <div className="relative">
        <input
          ref={fileInputRef}
          type="file"
          accept="image/jpeg,image/jpg,image/png,image/webp,image/avif"
          onChange={handleFileSelect}
          className="hidden"
        />
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          disabled={uploading}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {uploading ? (
            <>
              <Loader2 size={16} className="animate-spin" />
              Uploading...
            </>
          ) : (
            <>
              <Upload size={16} />
              Upload Image
            </>
          )}
        </button>
      </div>

      {/* Placeholder text */}
      {!preview && (
        <p className="text-sm text-gray-500">{placeholder}</p>
      )}
    </div>
  );
};

export default ImageUpload;