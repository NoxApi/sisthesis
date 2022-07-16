import { toast } from 'react-toastify'

export const infoToast = (message: string) =>
  toast.info(message, {
    position: 'bottom-right',
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    progress: undefined,
  })

export const errorToast = (message: string) =>
  toast.error(message, {
    position: 'bottom-right',
    autoClose: 20000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    progress: undefined,
    style: {
      backgroundColor: '#C3BDC0',
      fontFamily: '"Source Sans Pro", sans-serif',
    },
    icon: (
      <svg
        width={20}
        height={20}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.575 3.217L1.516 15a1.666 1.666 0 001.425 2.5h14.117a1.667 1.667 0 001.425-2.5L11.425 3.217a1.667 1.667 0 00-2.85 0v0zM10 7.5v3.333M10 14.166h.008"
          stroke="#F93232"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  })
