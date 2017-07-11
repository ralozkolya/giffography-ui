export interface PaginatedResponse<T> {
  current_page: number;
  per_page: number;
  total: number;
  next_page_url: string;
  prev_page_url: string;
  data: T[];
}
