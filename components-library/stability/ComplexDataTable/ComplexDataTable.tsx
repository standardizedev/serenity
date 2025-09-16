import React, { useState, useMemo } from 'react';
import ArrowUpIcon from '../../../components/icons/ArrowUpIcon';
import ArrowDownIcon from '../../../components/icons/ArrowDownIcon';

type SortDirection = 'asc' | 'desc';

interface Column {
  key: string;
  label: string;
  sortable?: boolean;
}

interface ComplexDataTableProps {
  columns: Column[];
  data: Record<string, any>[];
  itemsPerPage?: number;
}

const ComplexDataTable: React.FC<ComplexDataTableProps> = ({ columns, data, itemsPerPage = 10 }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<SortDirection>('asc');

  const sortedData = useMemo(() => {
    if (!sortColumn) return data;

    return [...data].sort((a, b) => {
      const aValue = a[sortColumn];
      const bValue = b[sortColumn];

      if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1;
      if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1;
      return 0;
    });
  }, [data, sortColumn, sortDirection]);

  const totalPages = Math.ceil(sortedData.length / itemsPerPage);
  const paginatedData = sortedData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleSort = (columnKey: string) => {
    if (sortColumn === columnKey) {
      setSortDirection(prev => (prev === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortColumn(columnKey);
      setSortDirection('asc');
    }
  };

  return (
    <div className="w-full overflow-x-auto">
      <table className="min-w-full text-sm text-left">
        <thead className="border-b border-border bg-surface">
          <tr>
            {columns.map(col => (
              <th key={col.key} scope="col" className="px-4 py-3 font-semibold text-text-primary">
                {col.sortable ? (
                  <button onClick={() => handleSort(col.key)} className="flex items-center gap-1.5 group">
                    {col.label}
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity">
                      {sortColumn === col.key ? 
                        (sortDirection === 'asc' ? <ArrowUpIcon /> : <ArrowDownIcon />) :
                        <ArrowDownIcon className="text-text-secondary" />
                      }
                    </span>
                  </button>
                ) : (
                  col.label
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((row, rowIndex) => (
            <tr key={rowIndex} className="border-b border-border hover:bg-border/50 transition-colors">
              {columns.map(col => (
                <td key={`${col.key}-${rowIndex}`} className="px-4 py-3 text-text-secondary">
                  {row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      
      {/* Pagination Controls */}
      <div className="flex items-center justify-between pt-4 text-xs">
        <span className="text-text-secondary">
          Page {currentPage} of {totalPages}
        </span>
        <div className="inline-flex items-center gap-2">
          <button 
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="px-3 py-1 bg-surface border border-border rounded-md disabled:opacity-50"
          >
            Previous
          </button>
          <button 
            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="px-3 py-1 bg-surface border border-border rounded-md disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComplexDataTable;