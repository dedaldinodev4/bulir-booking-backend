
export interface IResultPaginated {
  data: any;
  paginator: {
    totalResults: number | null;
    pages: number | null;
    currentPage: number | null;
    prevPage: number | null;
    nextPage: number | null;
    perPage: number | null;
    totalCurrentResults: number | null;
    lastPage: number | null;
  }
}