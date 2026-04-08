import { create } from 'zustand'

type Store = {
  count: number
  incrementIfEven: () => void
  incrementIfOdd: () => void
  reset: () => void
}

const initialState = {
  count: 0
}

export const useStore = create<Store>((set, get) => ({
  ...initialState,
  incrementIfOdd: () => {
    if (get().count % 2 !== 0) {
      set((state:any) => ({ count: state.count + 1 }))
    }
  },
   incrementIfEven: () => {
    if (get().count % 2 === 0) {
      set((state:any) => ({ count: state.count + 1 }))
    }
  },
    reset: () => set(useStore.getInitialState())
  
}))