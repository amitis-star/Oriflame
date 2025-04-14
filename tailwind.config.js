/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    spacing: {
      0.2:"0.09px",
      0.1:"1px",
      0:"2px",
      1: "4px",
      1.5:"6px",
      2: "8px",
      2.5:"10px",
      3: "12px",
      4: "16px",
      5: "20px",
      6: "24px",
      7: "28px",
      7.5:"30px",
      8: "32px",
      9: "36px",
      10: "40px",
      11: "44px",
      12: "48px",
      12.5:"50px",
      13: "52px",
      14: "56px",
      15: "60px",
      16: "64px",
      17: "68px",
      18: "72px",
      19: "76px",
      20: "80px",
      21: "84px",
      22: "88px",
      23: "92px",
      24: "96px",
      25: "100px",
      26: "110px",
      27: "120px",
      28: "130px",
      29: "140px",
      30: "150px",
      31: "160px",
      32: "170px",
      33: "180px",
      34: "190px",
      35: "200px",
      36: "210px",
      37: "210px",
      38: "220px",
      39: "230px",
      39.3:"233px",
      40: "240px",
      41: "250px",
      41.7:"257px",
      42: "260px",
      43: "270px",
      44: "280px",
      45: "290px",
      46: "300px",
      47: "310px",
      48: "310px",
      49: "320px",
      50: "330px",
      51: "340px",
      52: "350px",
      53: "360px",
      54: "370px",
      55: "380px",
      56: "390px",
      57: "400px",
      58: "410px",
      59: "410px",
      60: "420px",
      61: "430px",
      62: "440px",
      63: "450px",
      64: "460px",
      64.5:"465px",
      65: "470px",
      66: "480px",
      67: "490px",
      68: "500px",
      900:"900px",
    },
    fontSize: {
      10:"10px",
      12: "12px",
      14: "14px",
      16: "16px",
      18: "18px",
      20: "20px",
      24: "24px",
      30: "30px",
      36: "36px",
      40: "40px",
      48: "48px",
      50: "50px",
      60: "60px",
      70: "70px",
      72: "72px",
      80: "80px",
      90: "90px",
      96: "96px",
      128: "128px",
    },
    fontWeight: {
      100: "100",
      200: "200",
      300: "300",
      400: "400",
      500: "500",
      600: "600",
      700: "700",
      800: "800",
      900: "900",
    },
    extend: {
      colors: {
        red: {
          50: "#FEF2F2",
          100: "#FEE2E2",
          200: "#FECACA",
          300: "#FCA5A5",
          400: "#F87171",
          500: "#EF4444",
          600: "#DC2626",
          700: "#B91C1C",
          800: "#991B1B",
          900: "#7F1D1D",
        },
        orange: {
          50: "#FFFBEB",
          100: "#FEF3C7",
          200: "#FDE68A",
          300: "#FCD34D",
          400: "#FB923C",
          500: "#F97316",
          600: "#EA580C",
          700: "#C2410C",
          800: "#9A3402",
          900: "#7C2D12",
        },
        green: {
          50: "#ECFDF5",
          100: "#D1FAE5",
          200: "#A7F3D0",
          300: "#6EE7B7",
          400: "#34D399",
          500: "#10B981",
          600: "#059669",
          700: "#047857",
          800: "#065F46",
          900: "#064E3B",
        },
        yellow: {
          50: "#FFFBEB",
          100: "#FEF3C7",
          200: "#FDE68A",
          300: "#FCD34D",
          400: "#FBBF24",
          500: "#F59E0B",
          600: "#D97706",
          700: "#B45309",
          800: "#92400E",
          900: "#78350F",
        },
        lime: {
          50: "#F7FEE7",
          100: "#ECFCCB",
          200: "#D9F99D",
          300: "#BEF264",
          400: "#A3E635",
          500: "#84CC16",
          600: "#65A30D",
          700: "#4D7C0F",
          800: "#3B5B0B",
          900: "#365314",
        },
        sky: {
          50: "#F0F9FF",
          100: "#E0F2FE",
          200: "#BAE6FD",
          300: "#7DD3FC",
          400: "#38BDF8",
          500: "#0EA5E9",
          600: "#0284C7",
          700: "#0369A1",
          800: "#075985",
          900: "#0C4A6E",
        },
        blue: {
          50: "#EFF6FF",
          100: "#DBEAFE",
          200: "#BFDBFE",
          300: "#93C5FD",
          400: "#60A5FA",
          500: "#3B82F6",
          600: "#2563EB",
          700: "#1D4ED8",
          800: "#1E40AF",
          900: "#1E3A8A",
        },
        gray: {
          50: "#F9FAFB",
          100: "#F3F4F6",
          200: "#E5E7EB",
          300: "#D1D5DB",
          400: "#9CA3AF",
          500: "#6B7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
        },
        rose: {
          50: "#fff1f2",
          100: "#ffe4e6",
          200: "#fecdd3",
          300: "#fda4af",
          400: "#fb7185",
          500: "#f43f5e",
          600: "#e11d48",
          700: "#be123c",
          800: "#9f1239",
          900: "#881337",
        },
        fuchsia: {
          50: "#fdf4ff",
          100: "#fae8ff",
          200: "#f5d0fe",
          300: "#f0abfc",
          400: "#e879f9",
          500: "#d946ef",
          600: "#c026d3",
          700: "#a21caf",
          800: "#a21caf",
          900: "#701a75",
        },
        pink: {
          50: "#fdf2f8",
          100: "#fce7f3",
          200: "#fbcfe8",
          300: "#f9a8d4",
          400: "#f472b6",
          500: "#ec4899",
          600: "#db2777",
          700: "#be185d",
          800: "#9d174d",
          900: "#831843",
        },
      },
    },
  },
  plugins: [],
};
