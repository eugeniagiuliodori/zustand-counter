'use client'
import { useStore } from '@store/useStore';
import { FiPlus } from 'react-icons/fi';
import { FiRefreshCw } from 'react-icons/fi';
import { FiHelpCircle } from 'react-icons/fi';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export const Counter = () => {
  const count = useStore((state) => state.count)
  const incrementIfOdd = useStore((state) => state.incrementIfOdd)
  const incrementIfEven = useStore((state) => state.incrementIfEven)
  const reset = useStore((state) => state.reset)



  const baseButton =
    "px-4 py-2 rounded border transition-all duration-200"

  const enabledButton =
    "bg-blue-500 text-white hover:bg-blue-600 cursor-pointer"

  const disabledButton =
    "bg-gray-200 text-gray-400 cursor-not-allowed border-gray-300"

  return (
    <div className="flex items-start gap-3 justify-center">
    <div className="flex flex-col gap-6 p-2 max-w-md mx-auto border rounded-lg shadow-sm">
      
      <div className="border p-4 rounded-md flex flex-col items-center gap-2">
        <div className="text-sm text-center text-gray-600 mb-2">
          INCREMENTAR EL VALOR ES IMPAR
        </div>
        <p className="text-xl text-center font-semibold mb-3">{count}</p>
        <button
          disabled={count % 2 === 0}
          onClick={incrementIfOdd}
          className={`${baseButton} ${
            count % 2 === 0 ? disabledButton : enabledButton
          }`}
        >
          <FiPlus/>
        </button>
      </div>

      <div className="border p-4 rounded-md flex flex-col items-center gap-2">
        <div className="text-sm text-center text-gray-600 mb-2">
          INCREMENTAR CUANDO EL VALOR ES PAR
        </div>
        <p className="text-xl text-center font-semibold mb-3">{count}</p>
        <button
          disabled={count % 2 !== 0}
          onClick={incrementIfEven}
          className={`${baseButton} ${
            count % 2 !== 0 ? disabledButton : enabledButton
          }`}
        >
          <FiPlus/>
        </button>
      </div>

      <div className="border p-4 rounded-md flex flex-col items-center gap-2">
        <div className="text-sm text-gray-600">RESET</div>
        <button
          onClick={reset}
          className={`${baseButton} bg-red-500 text-white hover:bg-red-600 cursor-pointer`}
        >
          <FiRefreshCw/>
        </button>
      </div>
                   
    </div>
    <Link href="/analyzer" className="p-2 rounded hover:bg-gray-100">
        <FiHelpCircle className="w-5 h-5 text-gray-500" />
    </Link>
          </div>
  )
}