/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      backgroundImage: {
        'course-overlay': "background-image: linear-gradient(45deg, #dd9221, #dd9221aa, #ff875b);"
      },
      animation:{
        'scroll':'scroll 25s linear infinite',
        'shake':'shake 0.7s cubic-bezier(0.36, 0.07, 0.19, 0.97) both',
        'blur':'blur .5s linear both',
        'hero':'hero 500ms linear both',
        'scrollphone':'scrollphone 25s linear infinite',
      },
      keyframes: {
        scroll: {
          '100%': { transform: 'translateX(-34%)' },
        },
        hero: {
          '100%': { transform: 'translateX(-100%)' },
        },
        shake: {
          '10%,90%': { transform: 'translate3d(-.5px, 0, 0) rotate(-.5deg)' },
          '20%,80%': { transform: 'translate3d(1px, 0, 0) rotate(1deg)' },
          '30%,50%,70%': { transform: 'translate3d(-1.5px, 0, 0) rotate(-1.5deg)' },
          '40%,60%': { transform: 'translate3d(1.5px, 0, 0) rotate(1.5deg)' },
          '100%':{filter:'blur(0px)'}
        },
        blur: {
          '100%':{filter:'blur(0px) brightness(1)'}
        },
        scrollphone: {
          '100%': { transform: 'translateX(-44%)' },
        },        
      },
    },
  },
  plugins: [],
}

