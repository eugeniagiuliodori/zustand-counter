'use client'
import { useStore } from '@store/useStore';
import Link from 'next/link';
import { FiArrowLeft } from 'react-icons/fi'

export const Analyzer = () => {
  const count = useStore((state) => state.count)

  const isEven = count % 2 === 0

  return (
   <div className="flex flex-col items-center justify-center gap-3">
  
  <div className="text-sm text-gray-500 text-center">
    {isEven
      ? 'Podés incrementar con PAR'
      : 'Podés incrementar con IMPAR'}
  </div>

  <Link href="/" className="flex items-center justify-center p-2 rounded hover:bg-gray-100">
    <FiArrowLeft className="w-5 h-5 text-gray-500" />
  </Link>

</div>
  )
}