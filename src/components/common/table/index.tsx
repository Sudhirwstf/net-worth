"use client";
import { useState } from "react";
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface PaginatedTableProps {
  itemsPerPage?: number;
  data: any; //fix this
  tableHead: string[];
}
export default function PaginatedTable({ itemsPerPage: ITEMS_PER_PAGE = 3, data, tableHead }: PaginatedTableProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);

  const paginatedData = data.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="w-full">
      <Table className="min-w-[1024px] table-fixed">
        <TableHeader>
          <TableRow>
            {tableHead.map((title, index) => (
              <TableHead key={index} className={`${index === 0 ? "w-20" : "w-1/3"} break-words whitespace-normal`}>
                {title}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedData.map((item: any, index: number) => (
            <TableRow key={index}>
              {Object.values(item).map((cellData: any, index) => (
                <TableCell
                  key={index}
                  className={`${index === 0 ? "" : "w-1/3"} break-words whitespace-normal text-foreground`}
                >
                  {cellData}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
        {/* <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">$2,500.00</TableCell>
          </TableRow>
        </TableFooter> */}
      </Table>
      <Pagination className="mt-4">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" onClick={() => handlePageChange(currentPage - 1)} />
          </PaginationItem>
          {Array.from({ length: totalPages }, (_, index) => (
            <PaginationItem key={index}>
              <PaginationLink href="#" isActive={currentPage === index + 1} onClick={() => handlePageChange(index + 1)}>
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationNext href="#" onClick={() => handlePageChange(currentPage + 1)} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
