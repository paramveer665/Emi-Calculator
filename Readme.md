# Loan Calculator App

## 📑 Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
  - [Core Functionality](#core-functionality)
  - [UI/UX Features](#uiux-features)
  - [Technical Features](#technical-features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Setup & Installation](#setup--installation)
- [Configuration](#configuration)
- [Component Documentation](#component-documentation)
- [API Integration](#api-integration)
- [State Management](#state-management)
- [Routing](#routing)
- [Theming](#theming)
- [Error Handling](#error-handling)
- [Deployment](#deployment)
- [Testing](#testing)
- [Future Improvements](#future-improvements)

---

## 🧾 Project Overview

A modern loan calculator application that allows users to:

- Calculate loan EMIs (Equated Monthly Installments)
- View detailed amortization schedules
- Convert EMIs to different currencies using live exchange rates
- Toggle between light and dark themes
- Navigate between different application pages

---

## 🚀 Features

### Core Functionality

- Loan EMI calculation using standard financial formulas
- Dynamic amortization schedule with monthly breakdown
- Real-time currency conversion
- Paginated exchange rate table for 160+ currencies

### UI/UX Features

- Responsive design for all screen sizes
- Dark/light mode toggle
- Persistent header with navigation
- Collapsible mobile menu
- Error boundaries and 404 page

### Technical Features

- Global state management with Context API
- Custom hooks for reusable logic
- API call rate limiting
- Environment variable configuration

---

## 🛠 Technologies Used

### Core Technologies

- React 18
- Material UI 5
- React Router 6
- Parcel Bundler

### Supporting Libraries

- Axios (API calls)
- `country-flag-icons` (currency flags)
- `date-fns` (date utilities)

### APIs

- ExchangeRate-API (currency conversion)

---

## ⚙️ Configuration

### Environment Variables

- `EXCHANGE_RATE_API_KEY`: Your ExchangeRate-API key
- `REACT_APP_API_BASE_URL`: Base API URL (optional)

### Parcel Configuration

Uses Parcel with:

- React refresh transformer
- Environment variable support

---

## 🧩 Component Documentation

### AppContext

Manages global state including:

- Theme (light/dark mode)
- Loan calculation inputs
- Exchange rates
- Loading/error states

### Header

Persistent navigation bar with:

- App title
- Navigation links
- Theme toggle
- Responsive mobile menu

### LoanForm

Input form for loan parameters:

- Principal amount
- Interest rate slider
- Loan term slider
- Currency selector

### Results

Displays calculation results:

- Monthly payment
- Total payment
- Total interest

### AmortizationTable

Paginated table showing:

- Monthly payment breakdown
- Principal vs interest
- Remaining balance

### CurrencyConverter

Real-time currency conversion:

- Base currency display
- Target currency selector
- Converted amount
- Refresh button with rate limiting

---

## 🔌 API Integration

### ExchangeRate-API

- **Endpoint**: `https://v6.exchangerate-api.com/v6/{API_KEY}/latest/{CURRENCY}`
- Rate limited to 1 request per 30 seconds
- Handles errors for failed requests

### API Service

- **Location**: `src/utils/exchangeAPI.js`
- Contains:
  - Axios instance configuration
  - Request/response interceptors
  - Error handling

## 🚢 Deployment

### Build Process

```bash
npm run build
```

## 🚢 Deployment Options

### Vercel

- Connect GitHub repository
- Set environment variables
- Automatic deployments

### Netlify

- Drag-and-drop `dist` folder
- Or connect Git repository

### GitHub Pages

- Install `gh-pages` package
- Add deploy script to `package.json`

---

## 🧪 Testing

### Manual Testing

#### Loan Calculation

- Verify EMI results
- Check amortization schedule

#### Currency Conversion

- Test rate refresh
- Verify conversion accuracy

#### Theme Toggle

- Check persistence
- Verify all components adapt

#### Responsive Design

- Test on mobile/tablet/desktop
- Verify menu collapse

---

## 🔮 Future Improvements

### Planned Features

- User authentication
- Calculation history
- PDF export of schedules
- More detailed currency information

### Technical Improvements

- Unit testing with Jest
- E2E testing with Cypress
- Performance optimization
- PWA capabilities
