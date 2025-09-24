# Admin Access Documentation

## Admin Login Credentials

**Username:** info@mstravel.ae
**Password:** MsTravel2025SecurePass789

## Security Features

- **Environment Variables:** Credentials are stored securely in `.env` file
- **Session Management:** 24-hour session timeout with automatic logout
- **Activity Tracking:** Session refreshes on user activity (mouse, keyboard, scroll)
- **Secure Storage:** `.env` file is ignored by git for security

## Admin Panel Access

1. Navigate to `/admin` on your website
2. Enter the username and password above
3. Access all admin functionalities:
   - Services Management
   - Destinations Management  
   - Blogs Management
   - Testimonials Management
   - Inquiries Management (Contact Form Submissions)

## Important Notes

- Keep the `.env` file secure and never commit it to version control
- The password is very strong with special characters, numbers, and mixed case
- Sessions automatically expire after 24 hours of inactivity
- All admin actions are secured behind this authentication system

## Password Strength

The generated password includes:
- 35 characters total
- Mixed uppercase and lowercase letters
- Numbers
- Special characters (#$%@!)