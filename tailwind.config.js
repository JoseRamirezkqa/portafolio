/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        mover:{
          '0%':{left: '0'},
          '100%':{left: '80%'}
        },
        girar:{
          '0%':{transform: 'rotate(0deg)'},
          '100%':{transform: 'rotate(10deg)'}          
        },
        pause:{
          '0%':{transform: 'rotate(0deg)'},
          '100%':{transform:'rotate(0deg)'},
        },
        typing:{
          'from':{width:'0'}
        },
        blink:{
          '50%':{border: 'transparent'}
        }
      },
      animation:{
        mover: 'mover 3s linear infinite alternate both',
        girar: 'girar 100ms linear infinite alternate ',
        typing : 'typing 2s steps(11)  alternate infinite, blink .5s infinite step-end alternate;'
      }
    },
  },
  plugins: [],
}

