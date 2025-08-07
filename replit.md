# BeyRozGaar Community Platform

## Overview

BeyRozGaar (बे-रोज़गार) is a community-driven web application designed to support and empower unemployed individuals. The platform provides a safe space for authentic connections, chai/coffee meetups, and personal growth through shared experiences. Built as a full-stack application with React frontend and Express backend, it focuses on simplicity, authenticity, and unlimited potential for its users.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript, using Vite for build tooling
- **UI Library**: Shadcn/UI components built on top of Radix UI primitives
- **Styling**: Tailwind CSS with custom design system featuring warm colors and gradients
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Animations**: Framer Motion for smooth page transitions and interactions
- **Forms**: React Hook Form with Zod validation schemas

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful endpoints with JSON responses
- **Validation**: Zod schemas shared between frontend and backend
- **Storage**: PostgreSQL database with Drizzle ORM for persistent data storage
- **Error Handling**: Centralized error middleware with proper HTTP status codes

### Data Storage Solutions
- **Current**: PostgreSQL database with Drizzle ORM (implemented August 7, 2025)
- **Previous**: MemStorage class for development (replaced with database storage)
- **Database Schema**: 
  - Users table for authentication
  - Meetup signups for community event registrations
  - Contact messages for user inquiries
- **Migration System**: Drizzle Kit for database schema management

### Authentication and Authorization
- **Current**: Basic user storage structure without active authentication
- **Planned**: Session-based authentication with PostgreSQL session store
- **Security**: Express session middleware configured for production use

### Design System
- **Color Palette**: Warm oranges, teals, and golden yellows reflecting community warmth
- **Typography**: Inter font family with custom CSS variables
- **Components**: Comprehensive UI component library with consistent styling
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints

## External Dependencies

### Core Framework Dependencies
- **@neondatabase/serverless**: Neon PostgreSQL serverless driver for production database
- **drizzle-orm** and **drizzle-zod**: Type-safe database operations and validation
- **@tanstack/react-query**: Server state management and caching
- **framer-motion**: Animation library for enhanced user experience

### UI and Styling Dependencies
- **@radix-ui/**: Complete set of accessible UI primitives (dialog, dropdown, etc.)
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority** and **clsx**: Conditional styling utilities
- **lucide-react**: Icon library for consistent iconography

### Development and Build Dependencies
- **vite**: Fast build tool and development server
- **tsx**: TypeScript execution for development
- **esbuild**: JavaScript bundler for production builds
- **@replit/vite-plugin-***: Replit-specific development tools

### Form and Validation Dependencies
- **react-hook-form** and **@hookform/resolvers**: Form handling with validation
- **zod**: Runtime type checking and validation schemas
- **date-fns**: Date manipulation utilities

### Session and Storage Dependencies
- **connect-pg-simple**: PostgreSQL session store for Express sessions
- **express-session**: Session middleware for user authentication

The architecture supports easy scaling from development to production with minimal configuration changes, particularly in the storage layer where the interface-based design allows seamless switching from in-memory to PostgreSQL storage.