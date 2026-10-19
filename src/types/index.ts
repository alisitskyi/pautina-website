export interface Quest {
  id: string;
  slug: string;
  title: string;
  description: string;
  shortDescription: string;
  image: string;
  gallery: string[];
  difficulty: 1 | 2 | 3 | 4 | 5;
  players: {
    min: number;
    max: number;
  };
  duration: number; // minutes
  ageLimit: string;
  price: {
    min: number;
    currency: string;
  };
  location: {
    id: string;
    address: string;
    mapLink: string;
    area?: string;
  };
  categories: string[];
  isNew?: boolean;
}

export interface Slot {
  id: string;
  time: string;
  price: number;
  isAvailable: boolean;
}

export interface DaySchedule {
  date: string;
  slots: Slot[];
}
