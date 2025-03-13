# Genz Bank

Genz Bank is a modern and secure banking platform designed for seamless online transactions, card payments, and financial management.

## Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites
Ensure you have the following installed on your system:
- Node.js (latest LTS version recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/LahiruZaM/GenZbank.git
   ```
2. Navigate to the project directory:
   ```sh
   cd genz-bank
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
   or
   ```sh
   yarn install
   ```

### Running the Project

Start the development server:
   ```sh
   npm run dev
   ```
   or
   ```sh
   yarn dev
   ```

The application will be available at `http://localhost:3000` by default.

## Modifying the Project

### Updating Feedback Data
The feedback data can be modified in `src/constants/feedback.js`. Add, remove, or edit feedback entries as needed.

### Customizing UI
All UI components and styling are located in `src/components` and `src/styles`. Modify these files to adjust the design and layout.

### API & Backend Integration
Modify API calls in `src/services/api.js` to connect the frontend with your backend services.

## Build for Production
To build the project for production, run:
   ```sh
   npm run build
   ```
   or
   ```sh
   yarn build
   ```
The optimized output will be available in the `dist` or `.next` directory, depending on the framework used.


