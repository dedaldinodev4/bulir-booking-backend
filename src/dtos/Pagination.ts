
import { z } from "zod";

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


export const PaginationQuerySchema = z.object({
  page: z
    .string()
    .optional()
    .default("1")
    .transform(Number)
    .refine((v) => v > 0, "page must be greater than 0"),

  limit: z
    .string()
    .optional()
    .default("10")
    .transform(Number)
    .refine((v) => v > 0 && v <= 100, "limit must be between 1 and 100"),

  orderBy: z.string().optional().default("createdAt"),
  order: z.enum(["asc", "desc"]).optional().default("desc"),
});

export type PaginationQuery = z.infer<typeof PaginationQuerySchema>;
