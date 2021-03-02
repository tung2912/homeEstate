export interface Estate {
  id: number;
  owner_id: number;
  city_id: number;
  address: string;
  city_name: string;
  price: number;
  floor_space: number;
  bedroom_nums: number;
  bathroom_nums: number;
  garage_nums: number;
  description: string;
  status: number;
  created_at: string;
  updated_at: string;
}
