<h1 align="center">🛒 Sales Management Dashboard</h1>
<p align="center">Frontend dashboard application for managing sales, customers, products, and inventory with a modern Bootstrap-based interface.</p>

<p align="center">
  <a href="https://reactjs.org"><img src="https://img.shields.io/badge/React-18-blue?logo=react" /></a>
  <a href="https://typescriptlang.org"><img src="https://img.shields.io/badge/TypeScript-4.x-blue?logo=typescript" /></a>
  <a href="https://getbootstrap.com"><img src="https://img.shields.io/badge/Bootstrap-5-purple?logo=bootstrap" /></a>
  <a href="https://reactrouter.com"><img src="https://img.shields.io/badge/React_Router-6-red?logo=react-router" /></a>
  <a href="https://react-icons.github.io/react-icons"><img src="https://img.shields.io/badge/React_Icons-4.x-green?logo=react" /></a>
</p>

<p align="center">
  <a href="#-installation">⚙️ Installation</a> •
  <a href="#-features">✨ Features</a> •
  <a href="#-tech-stack">📦 Tech Stack</a> •
  <a href="#-project-structure">📁 Project Structure</a>
</p>

---

## 📸 Demo

![Sales Dashboard](./imgs/frontend-sysadmin1.png)

> **Note**: This is a frontend-only application with mock data. For a complete system, integrate with a backend API.

---

## 📦 Tech Stack

| Technology        | Description                          |
|------------------|--------------------------------------|
| ![React](https://img.shields.io/badge/React-18-blue?logo=react) | Frontend library for building user interfaces |
| ![TypeScript](https://img.shields.io/badge/TypeScript-4.x-blue?logo=typescript) | Static typing for JavaScript |
| ![Bootstrap](https://img.shields.io/badge/Bootstrap-5-purple?logo=bootstrap) | CSS framework for responsive design |
| ![React Router](https://img.shields.io/badge/React_Router-6-red?logo=react-router) | Client-side routing |
| ![React Icons](https://img.shields.io/badge/React_Icons-4.x-green?logo=react) | Icon library for React |

---

## ✨ Features

- 🔐 **Authentication System** - Login interface with user validation
- 👥 **User Management** - CRUD operations for user accounts
- 🛍️ **Product Management** - Complete product catalog with inventory tracking
- 👤 **Customer Management** - Customer database with contact information
- 🏢 **Provider Management** - Supplier and vendor management
- 💰 **Sales Management** - Sales tracking and transaction history
- 📊 **Dashboard Interface** - Clean, responsive admin panel
- 📱 **Responsive Design** - Mobile-friendly Bootstrap interface
- 🎨 **Modern UI** - Professional dashboard design

---

## 🎯 Project Highlights

- [x] **Component Architecture** - Modular, reusable React components
- [x] **TypeScript Integration** - Type-safe development with interfaces
- [x] **Responsive Design** - Bootstrap-based mobile-first approach
- [x] **Route Management** - Clean URL structure with React Router
- [x] **Form Components** - Reusable form elements and validation
- [x] **Table Components** - Dynamic data tables with sorting capabilities
- [x] **Navigation System** - Intuitive sidebar navigation

---

## ⚙️ Installation

```bash
# Clone the repository
git clone https://github.com/your-username/sales-management-dashboard

# Navigate to the project directory
cd sales-management-dashboard

# Install dependencies
npm install

# Start the development server
npm start
```

The application will open at `http://localhost:3000`

---

## 📁 Project Structure

```
src/
├── components/
│   ├── auth/                 # Authentication components
│   │   └── Login.tsx
│   ├── customers/            # Customer management
│   │   ├── CreateCustomer.tsx
│   │   ├── CustomerList.tsx
│   │   └── UpdateCustomer.tsx
│   ├── products/             # Product management
│   │   ├── CreateProduct.tsx
│   │   ├── ProductList.tsx
│   │   └── UpdateProduct.tsx
│   ├── providers/            # Provider management
│   │   ├── CreateProvider.tsx
│   │   ├── ProviderList.tsx
│   │   └── UpdateProvider.tsx
│   ├── sales/                # Sales management
│   │   ├── CreateSale.tsx
│   │   ├── SaleDetail.tsx
│   │   └── SaleList.tsx
│   ├── shared/               # Reusable components
│   │   ├── forms/            # Form components
│   │   ├── lists/            # Table components
│   │   └── navigation/       # Navigation components
│   └── users/                # User management
│       ├── CreateUser.tsx
│       ├── UserList.tsx
│       └── UpdateUser.tsx
├── styles/                   # CSS styles
│   ├── login.css
│   └── example.css
├── types/                    # TypeScript type definitions
├── utils/                    # Utility functions
├── hooks/                    # Custom React hooks
├── App.tsx                   # Main application component
├── router-config.ts         # Route configuration
└── index.tsx                # Application entry point
```

---

## 🚀 Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (one-way operation)

---

## 🔧 Development Notes

### Current State
This is a **frontend-only application** with mock data. The components are designed to be easily integrated with a backend API.

### Key Components
- **Form Components**: Reusable form elements with validation
- **Table Components**: Dynamic data tables with CRUD operations
- **Navigation**: Responsive sidebar navigation
- **Authentication**: Login interface (ready for backend integration)

### Future Enhancements
- [ ] Backend API integration
- [ ] Real-time data updates
- [ ] Advanced filtering and search
- [ ] Data visualization charts
- [ ] Export functionality
- [ ] User role management

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Jeremy Cuba**
- GitHub: [@your-username](https://github.com/your-username)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/your-profile)

---

<p align="center">
  Made with ❤️ using React, TypeScript, and Bootstrap
</p>