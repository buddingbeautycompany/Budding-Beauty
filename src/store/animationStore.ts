// Animation state store
import { create } from 'zustand';

interface AnimationStore {
  hasSeenAnimation: boolean;
  setSeenAnimation: (seen: boolean) => void;
  shouldPlayAnimation: () => boolean;
}

export const useAnimationStore = create<AnimationStore>((set, get) => ({
  hasSeenAnimation: false,
  setSeenAnimation: (seen: boolean) => set({ hasSeenAnimation: seen }),
  shouldPlayAnimation: () => {
    if (typeof window === 'undefined') return false;
    const stored = localStorage.getItem('bb-animation-seen');
    return !stored;
  },
}));
