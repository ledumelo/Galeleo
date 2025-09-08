# Galeleo - Technology Consulting Landing Page

## Overview

Galeleo is a multilingual (Portuguese, English, Spanish) landing page and blog for a technology consulting company established in 1992. The site showcases 40+ years of experience in IT consulting since 1983, specializing in video coding, AI agents, and multi-platform integrations. The project includes a main landing page with modern visual appeal and a blog section featuring three case studies: Protocolo Veredas (Parkinson treatment platform), Veras (mental wellness AI platform), and HydroApp (smart water/gas management system).

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Template Engine**: Jinja2 templates with Flask
- **CSS Framework**: Bootstrap 5.3.0 for responsive design
- **Animation Library**: AOS (Animate On Scroll) for smooth animations
- **Typography**: Google Fonts (Inter) for modern typography
- **Icons**: Font Awesome 6.4.0 for consistent iconography
- **Custom Styling**: CSS variables for theme consistency with orange/yellow/green color scheme

### Backend Architecture
- **Web Framework**: Flask (Python) with minimal configuration
- **Session Management**: Flask sessions with configurable secret key
- **Content Management**: JSON-based multilingual content system
- **Routing**: Simple URL routing for pages and case studies with language parameter support
- **Logging**: Python logging module for debugging and monitoring

### Data Storage Solutions
- **Content Storage**: Static JSON file (`static/data/content.json`) containing all multilingual content
- **File Structure**: Organized static assets (CSS, JS, images, data) and templates
- **No Database**: Currently uses file-based content management without persistent data storage

### Multilingual Support
- **Language Detection**: URL parameter-based language switching (pt/en/es)
- **Content Structure**: Hierarchical JSON structure for easy translation management
- **Template Integration**: Dynamic content loading based on selected language
- **Fallback Mechanism**: Default to Portuguese if invalid language specified

### Page Structure
- **Landing Page**: Hero section, services overview, experience showcase, and case study previews
- **Blog Section**: Case study listings with category badges and reading time estimates
- **Case Study Pages**: Detailed project breakdowns with technical specifications
- **Contact Form**: Multi-field contact form with validation and flash messaging

## External Dependencies

### CDN Resources
- **Bootstrap 5.3.0**: UI framework and responsive grid system
- **Font Awesome 6.4.0**: Icon library for consistent visual elements
- **Google Fonts (Inter)**: Typography for modern, clean text rendering
- **AOS Library**: Scroll-based animations and transitions

### Image Assets
- **Pixabay Integration**: External image hosting for case study visuals and hero images
- **Logo Assets**: Local SVG logo files for brand consistency

### Hosting Requirements
- **Python Environment**: Flask application requiring Python runtime
- **Static File Serving**: CSS, JavaScript, and image asset delivery
- **Session Storage**: Server-side session management for flash messages

### Development Tools
- **Flask Development Server**: Built-in development environment
- **Template Inheritance**: Jinja2 base template system for consistent layouts
- **Asset Pipeline**: Manual CSS/JS organization without build tools