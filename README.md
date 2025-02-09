# React-Components (Not a library or a framework)
---

### 1. **Install Dependencies**
First, ensure you have the necessary dependencies installed:

```bash
# Install shadcn (if not already installed)
npx shadcn-ui@latest init

# Install Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Install React Icons
npm install react-icons
```

---

### 2. **Tailwind CSS Configuration**
Update your `tailwind.config.js` to include shadcn and any customizations:

```javascript
// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all React components
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3b82f6", // Customize primary color
      },
    },
  },
  plugins: [],
};
```

Add Tailwind to your `src/index.css`:

```css
/* src/index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

### 3. **Organize Components**
Create a structured folder for your components. For example:

```
src/
├── components/
│   ├── ui/              # shadcn components
│   ├── icons/           # Custom icon components
│   ├── Button.jsx       # Example custom component
├── App.jsx
├── main.jsx
```

---
