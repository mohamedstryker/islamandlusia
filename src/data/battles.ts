export interface Battle {
  id: number;
  name: string;
  period: string;
  date?: string;
  description: string;
  image: string;
  location?: string;
  result?: string;
}

export const battlesByPeriod = {
  "فتح الأندلس": [
    {
      id: 1,
      name: "معركة وادي لكة",
      period: "فتح الأندلس",
      date: "92هـ / 711م",
      description: "الضربة القاضية لحكم القوط",
      image: "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      location: "وادي لكة",
      result: "انتصار المسلمين وفتح الأندلس"
    },
    {
      id: 2,
      name: "معركة ماردة",
      period: "فتح الأندلس",
      date: "94هـ / 713م",
      description: "بوابة السيطرة على الأندلس",
      image: "https://images.unsplash.com/photo-1583592643761-bf2ecd0e0c82?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      location: "ماردة",
      result: "انتصار المسلمين"
    }
    // Continue with all battles...
  ]
  // Continue with all periods...
};