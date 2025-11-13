/** @type {import('tailwindcss').Config} */

module.exports = {
	darkMode: ["class"],
	content: [
		"./src/**/*.{js,jsx,ts,tsx}", // Include all source files
	],
	theme: {
		extend: {
			fontFamily: {
				sans: [
					'Inter',
					'system-ui',
					'-apple-system',
					'sans-serif'
				],
				display: [
					'Inter',
					'system-ui',
					'sans-serif'
				]
			},
			colors: {
				text: '#E8EEF2',
				background: '#0A0E1A',
				primary: '#4F9CED',
				secondary: '#64B5F6',
				accent: '#1E2A3A',
				container: '#162033',
				subContainer: '#1A2537',
				regular: '#B8C5D6',
				button: '#4F9CED',
				borderColor: '#2D3A4F',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				}
			},
			keyframes: {
				wave: {
					'0%': {
						transform: 'rotate(0deg)'
					},
					'25%': {
						transform: 'rotate(15deg)'
					},
					'50%': {
						transform: 'rotate(-10deg)'
					},
					'75%': {
						transform: 'rotate(15deg)'
					},
					'100%': {
						transform: 'rotate(0deg)'
					}
				},
				bounce: {
					'0%, 100%': {
						transform: 'translateY(0) rotate(180deg)'
					},
					'50%': {
						transform: 'translateY(-5px) rotate(180deg)'
					}
				}
			},
			animation: {
				wave: 'wave 2.5s infinite',
				bounce: 'bounce 2s infinite',
				'float': 'float 6s ease-in-out infinite',
				'glow-pulse': 'glowPulse 3s ease-in-out infinite'
			},
			backgroundImage: {
				'dots-pattern': 'radial-gradient(circle, rgba(79, 156, 237, 0.1) 1px, transparent 1px)',
				'grid-pattern': 'linear-gradient(rgba(79, 156, 237, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(79, 156, 237, 0.05) 1px, transparent 1px)'
			},
			backgroundSize: {
				'dots': '20px 20px',
				'grid': '30px 30px'
			},
			screens: {
				xs: '480px',
				'3xl': '1920px'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
	corePlugins: {
		scrollBehavior: true,
	},
};
