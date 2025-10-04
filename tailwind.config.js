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
					'Quicksand',
					'sans-serif'
				]
			},
			colors: {
				text: '#090e13',
				background: '#fbfcfd',
				primary: '#588dbe',
				secondary: '#9bbddc',
				accent: '#262626',
				// background: 'hsl(var(--background))',
				container: '#EDEDE9',
				subContainer: '#FBFBFA',
				heading: 'black',
				subHeading: 'black',
				regular: '#5B514A',
				button: '#52B788',
				borderColor: '#666666',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				// primary: {
				// 	DEFAULT: 'hsl(var(--primary))',
				// 	foreground: 'hsl(var(--primary-foreground))'
				// },
				// secondary: {
				// 	DEFAULT: 'hsl(var(--secondary))',
				// 	foreground: 'hsl(var(--secondary-foreground))'
				// },
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				// accent: {
				// 	DEFAULT: 'hsl(var(--accent))',
				// 	foreground: 'hsl(var(--accent-foreground))'
				// },
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
				bounce: 'bounce 2s infinite'
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
