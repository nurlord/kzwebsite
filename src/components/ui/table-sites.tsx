import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const data = [
  {
    name: 'Soyle.kz',
  },
  {
    name: 'Soyle.kz',
  },
  {
    name: 'Soyle.kz',
  },
  {
    name: 'Soyle.kz',
  },
];

export function TableSites() {
  return (
    <Table className='my-5'>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className='w-[100px]'>Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className='text-right'>Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((site, idx) => (
          <TableRow key={idx}>
            <TableCell className='font-medium'>{site.name}</TableCell>
            <TableCell>{site.paymentStatus}</TableCell>
            <TableCell>{site.paymentMethod}</TableCell>
            <TableCell className='text-right'>{site.totalAmount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
