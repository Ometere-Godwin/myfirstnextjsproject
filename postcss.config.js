module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },

  rules: {
    "react/no-unescaped-entities": "off",
  },

  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};
