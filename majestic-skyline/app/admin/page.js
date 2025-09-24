'use client';
import { useState, useEffect } from 'react';
import { Package, MapPin, FileText, Users, MessageSquare, TrendingUp } from 'lucide-react';

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    services: 0,
    destinations: 0,
    blogs: 0,
    testimonials: 0,
    inquiries: 0,
  });

  useEffect(() => {
    // Fetch stats from all APIs
    const fetchStats = async () => {
      try {
        const [servicesRes, destinationsRes, blogsRes, testimonialsRes, inquiriesRes] = await Promise.all([
          fetch('/api/services'),
          fetch('/api/destinations'),
          fetch('/api/blogs'),
          fetch('/api/testimonials'),
          fetch('/api/inquiries'),
        ]);

        const [services, destinations, blogs, testimonials, inquiries] = await Promise.all([
          servicesRes.json(),
          destinationsRes.json(),
          blogsRes.json(),
          testimonialsRes.json(),
          inquiriesRes.json(),
        ]);

        setStats({
          services: services.length,
          destinations: destinations.length,
          blogs: blogs.length,
          testimonials: testimonials.length,
          inquiries: inquiries.length,
        });
      } catch (error) {
        console.error('Error fetching stats:', error);
      }
    };

    fetchStats();
  }, []);

  const statCards = [
    { name: 'Services', value: stats.services, icon: Package, color: 'bg-blue-500' },
    { name: 'Destinations', value: stats.destinations, icon: MapPin, color: 'bg-green-500' },
    { name: 'Blogs', value: stats.blogs, icon: FileText, color: 'bg-purple-500' },
    { name: 'Testimonials', value: stats.testimonials, icon: Users, color: 'bg-yellow-500' },
    { name: 'Inquiries', value: stats.inquiries, icon: MessageSquare, color: 'bg-red-500' },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
        <p className="text-gray-600">Welcome to your travel site management panel</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
        {statCards.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.name} className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <div className={`p-2 rounded-lg ${stat.color}`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-600">{stat.name}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
          <div className="space-y-2">
            <a href="/admin/services" className="block text-blue-600 hover:text-blue-800">Add New Service</a>
            <a href="/admin/destinations" className="block text-blue-600 hover:text-blue-800">Add New Destination</a>
            <a href="/admin/blogs" className="block text-blue-600 hover:text-blue-800">Write Blog Post</a>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
          <p className="text-gray-600">No recent activity to display</p>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-4">System Status</h3>
          <div className="space-y-2">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              <span className="text-sm text-gray-600">API Status: Online</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              <span className="text-sm text-gray-600">Database: Connected</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}