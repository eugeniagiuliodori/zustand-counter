'use client'
import { useState } from 'react';
import { useStore } from '@store/useStore';
import { FiArrowLeft, FiLoader } from 'react-icons/fi';
import { useRouter } from "next/navigation"
import dynamic from "next/dynamic"

const Modal = dynamic(() => import("@components/Modal"), {
  loading: () => (
    <div className="flex items-center justify-center p-4">
      <FiLoader className="w-6 h-6 animate-spin text-gray-500" />
    </div>
  ),
})

export const Analyzer = () => {
  const count = useStore((state) => state.count);

  const [open, setOpen] = useState(false);

  const router = useRouter();

  const handleClick = () => {
    setOpen(true);
  }

  

  return (
   <div className="flex flex-col items-center justify-center gap-3">
     <div className="relative flex items-center justify-center px-6 bg-gray-50 top-10">
    <p className="text-sm text-gray-500 font-semibold ">
      Valor actual del contador global: {count}
    </p>
    </div>
    <div className="min-h-screen flex items-center justify-center px-6 bg-gray-50">
      <div className="max-w-4xl text-center space-y-6">

        <h1 className="text-3xl font-semibold text-gray-800">
          Counter App – Zustand + Next.js
        </h1>

        <p className="text-base text-gray-600 leading-relaxed">
          Proyecto de práctica enfocado en estado global con  <strong> Zustand </strong> dentro de una app Next.js.
        </p>
         <p className="text-base text-gray-600 leading-relaxed">
          El contador se comparte entre componentes, evitando prop drilling y permitiendo una fuente única de verdad.
        </p>

        <p className="text-base text-gray-500 leading-relaxed">
          Se utilizó <strong>lazy loading</strong> con <code>next/dynamic</code> en componentes no críticos (modal de confirmación),
        </p>
        <p className="text-base text-gray-500 leading-relaxed">
          aplicando code splitting como práctica de optimización.
        </p>

        <p className="text-base text-gray-500 leading-relaxed">
          En proyectos reales, esta técnica se usa cuando hay componentes pesados o de uso opcional.
        </p>

        <p className="text-sm text-gray-400 pt-2">
          Next.js · Zustand · TailwindCSS
        </p>

      </div>
    </div>

    <button className="fixed top-4 left-4 p-2 rounded hover:bg-gray-200" onClick={handleClick}>
      <FiArrowLeft className="w-5 h-5 text-gray-800" />
    </button>   

    {open && (
      <Modal
        onCancel={() => setOpen(false)}
        onConfirm={() => {setOpen(false);router.push("/")}}
      />
    )}
  </div>
)}