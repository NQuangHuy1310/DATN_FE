/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'class',
    theme: {
        extend: {
            transitionTimingFunction: {
                custom: 'cubic-bezier(0.2, 0, 0.38, 0.9)'
            },
            spacing: {
                xs: '4px',
                md: '8px',
                lg: '12px',
                xl: '16px'
            },
            screens: {},
            colors: {
                warning: '#ffc936',
                white: '#fff',
                black: '#333',
                callouts: {
                    background: {
                        primaryStrong: '#002761',
                        primary: '#0056d2',
                        tertiaryWeak: '#fff4e8',
                        secondaryWeak: '#f9f5ff',
                        primaryWeak: '#3587fc'
                    },
                    tertiaryInvert: '#ffccf5',
                    secondaryInvert: '#ffc936',
                    tertiary: '#003b8f',
                    secondary: '#340385'
                },
                feedback: {
                    background: {
                        warningWeak: '#fff4e8',
                        informativeWeak: '#f0f6ff',
                        successWeak: '#ebfdf8',
                        errorWeak: '#fdf5f5'
                    },
                    warning: '#a32e00',
                    informative: '#0056d2',
                    success: {
                        invertWeak: '#22a880',
                        hover: '#095941',
                        default: '#087051'
                    },
                    error: {
                        invertWeak: '#fce5e8',
                        hover: '#9e0018',
                        default: '#d30a28'
                    }
                },
                neutral: {
                    background: {
                        primary: '#ffffff',
                        primaryWeak: '#f2f5fa'
                    },
                    stroke: {
                        primaryInvert: '#ffffff',
                        primaryWeak: '#e8eef7',
                        primary: '#a7b4c9'
                    },
                    disabled: {
                        weak: '#f2f5fa',
                        strong: '#c1cad9',
                        default: '#e8eef7'
                    },
                    primary: {
                        invert: '#ffffff',
                        weak: '#5b6780',
                        default: '#0f1114'
                    }
                },
                interactive: {
                    background: {
                        primarySelectedWeak: '#f9f5ff',
                        primaryPressedWeak: '#f9f5ff',
                        primaryHoverWeak: '#f0f6ff'
                    },
                    stroke: {
                        primaryFocusInvert: '#f0f6ff',
                        primaryFocus: '#6923de'
                    },
                    primary: {
                        selected: '#340385',
                        pressed: '#340385',
                        hover: '#0048b0',
                        default: '#0056d2'
                    }
                }
            },

            fontFamily: {},
            fontSize: {
                // D Display - Để hiển thị heading, title,...
                D2XL: ['73px', '90px'],
                DXL: ['60px', '72px'],
                DLG: ['48px', '60px'],
                DMD: ['36px', '44px'],
                DSM: ['30px', '38px'],
                DXS: ['24px', '32px'],

                // T Text - Để hiển thị nội dung text, description
                TXL: ['20px', '30px'],
                TLG: ['18px', '28px'],
                TMD: ['16px', '24px'],
                TSM: ['14px', '20px'],
                T2XS: ['10px', '16px'],
                T3XS: ['8px', '12px']
            }
        }
    },
    plugins: []
}
